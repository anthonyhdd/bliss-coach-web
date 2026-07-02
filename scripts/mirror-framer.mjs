#!/usr/bin/env node
/**
 * Mirror the published Framer page (bliss-coach.com) into this repo so the
 * exact same page — markup, images, fonts, hydration JS (canvas starfield,
 * animations) — is served self-hosted, with no dependency on Framer staying
 * paid/published.
 *
 * Key detail: framerusercontent.com PATHS ARE PRESERVED under public/framer/
 * (framer's JS builds chunk URLs by string concatenation, so the directory
 * layout must survive), and every reference is rewritten to a RELATIVE path
 * (depth-aware for nested text assets) so the mirror works both at / and
 * under the GH Pages /bliss-coach-web/ preview base.
 *
 * Usage: node scripts/mirror-framer.mjs
 * Output: public/index.html + public/framer/**
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SITE = 'https://bliss-coach.com/';
const OUT_DIR = 'public';
const ASSET_DIR = 'public/framer';
const CDN_RE = /https:\/\/framerusercontent\.com(\/[A-Za-z0-9_.\/-]+)(\?[^"'\s),\\]*)?/g;

const seen = new Set();
const queue = [];

/** local path for a CDN pathname + optional scale-down-to rendition */
function localPath(pathname, sd) {
  return sd ? pathname.replace(/(\.[a-z0-9]+)$/i, `.sd${sd}$1`) : pathname;
}

function enqueue(pathname, sd) {
  const key = localPath(pathname, sd);
  if (!seen.has(key)) {
    seen.add(key);
    queue.push({ pathname, sd, local: key });
  }
  return key;
}

/** Rewrite CDN refs in text. `depth` = how many dirs deep the text file lives
 *  below the site root (0 for index.html). */
function rewriteText(text, depth) {
  const prefix = depth === 0 ? './' : '../'.repeat(depth);
  return text.replace(CDN_RE, (_m, pathname, query) => {
    const isRaster = /\.(png|jpe?g|webp)$/i.test(pathname);
    const m = query && query.match(/scale-down-to=(\d+)/);
    const sd = isRaster ? (m ? m[1] : '2048') : null;
    return `${prefix}framer${enqueue(pathname, sd)}`;
  });
}

const isText = (p) => /\.(mjs|js|css|svg|json)$/.test(p);

async function fetchBin(url) {
  const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error(`${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  let html = await (await fetch(SITE, { headers: { 'user-agent': 'Mozilla/5.0' } })).text();

  // strip the Framer editor pencil + Framer analytics
  html = html
    .replace(/<script[^>]*framer\.com\/edit[^>]*>\s*<\/script>/g, '')
    .replace(/<script>try\{if\(localStorage[^<]*editorbar[^<]*<\/script>/g, '')
    .replace(/<script[^>]*events\.framer\.com[^>]*>[\s\S]*?<\/script>/g, '');

  html = rewriteText(html, 0);


  const PAINTER = `
<script>
(function () {
  try { localStorage.removeItem('__framer_force_showing_editorbar_since'); } catch (e) {}
  function boot() {
    var canvases = Array.prototype.slice.call(document.querySelectorAll('canvas'));
    if (!canvases.length) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvases.forEach(function (c) {
      if (c.width !== 300 || c.height !== 150) return; // framer painted it after all
      var r = c.getBoundingClientRect();
      if (!r.width) return;
      c.width = r.width * dpr; c.height = r.height * dpr;
      var ctx = c.getContext('2d');
      if (!ctx) return;
      if (r.height > 700) nebula(c, ctx); else stars(c, ctx, dpr);
    });
  }
  // Both layers are STATIC on the original Framer page (measured: zero motion,
  // zero twinkle). Values sampled from the live canvases.
  function nebula(c, ctx) {
    var w = c.width, h = c.height;
    var g = ctx.createRadialGradient(w * 0.5, h * 0.44, 0, w * 0.5, h * 0.44, Math.max(w, h) * 0.42);
    g.addColorStop(0, 'rgba(108,155,185,0.65)');
    g.addColorStop(0.45, 'rgba(100,140,200,0.33)');
    g.addColorStop(0.75, 'rgba(121,112,255,0.10)');
    g.addColorStop(1, 'rgba(10,10,10,0)');
    ctx.save();
    ctx.translate(w * 0.5, h * 0.44);
    ctx.scale(1, 0.72);
    ctx.translate(-w * 0.5, -h * 0.44);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
  }
  function stars(c, ctx, dpr) {
    var w = c.width, h = c.height;
    var n = Math.round((w * h) / 22600); // 125 stars at 2400x1176, like the original
    ctx.fillStyle = '#fff';
    for (var i = 0; i < n; i++) {
      ctx.globalAlpha = 0.12 + Math.random() * 0.4;
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, (0.4 + Math.random() * 0.85) * dpr, 0, 6.28318);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  var tries = 0;
  var iv = setInterval(function () {
    tries++;
    var pending = Array.prototype.some.call(document.querySelectorAll('canvas'), function (c) { return c.width === 300 && c.height === 150; });
    if (pending) boot();
    if (tries > 60) clearInterval(iv);
  }, 250);
})();
<\/script>`;

  html = html.replace('</body>', PAINTER + '</body>');

  if (!html.includes('rel="sitemap"')) {
    html = html.replace('</head>', '  <link rel="sitemap" type="application/xml" href="./sitemap-index.xml">\n</head>');
  }

  while (queue.length) {
    const { pathname, sd, local } = queue.shift();
    const dest = path.join(ASSET_DIR, '.' + local);
    try {
      let buf;
      if (sd) {
        try {
          buf = await fetchBin(`https://framerusercontent.com${pathname}?scale-down-to=${sd}`);
        } catch {
          buf = await fetchBin(`https://framerusercontent.com${pathname}`);
        }
      } else {
        buf = await fetchBin(`https://framerusercontent.com${pathname}`);
      }
      if (isText(pathname)) {
        // file lives at framer/<pathname>: depth below root =
        // 1 ("framer") + number of parent dirs inside pathname
        const depth = pathname.split('/').length - 1; // "/sites/id/x.mjs" -> 3
        let text = buf.toString('utf8');
        text = rewriteText(text, depth);
        buf = Buffer.from(text, 'utf8');
      }
      await mkdir(path.dirname(dest), { recursive: true });
      await writeFile(dest, buf);
      console.log(`ok  ${local}  (${(buf.length / 1024).toFixed(0)}kB)`);
    } catch (e) {
      console.warn(`SKIP ${local}: ${e.message}`);
    }
  }

  await writeFile(`${OUT_DIR}/index.html`, html);
  console.log(`\nWrote ${OUT_DIR}/index.html + ${seen.size} assets in ${ASSET_DIR}/`);
}

main();
