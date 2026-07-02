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

function enqueue(pathname) {
  if (!seen.has(pathname)) {
    seen.add(pathname);
    queue.push(pathname);
  }
}

/** Rewrite CDN refs in text. `depth` = how many dirs deep the text file lives
 *  below the site root (0 for index.html). */
function rewriteText(text, depth) {
  const prefix = depth === 0 ? './' : '../'.repeat(depth);
  return text.replace(CDN_RE, (_m, pathname) => {
    enqueue(pathname);
    return `${prefix}framer${pathname}`;
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
    .replace(/<script[^>]*events\.framer\.com[^>]*>[\s\S]*?<\/script>/g, '');

  html = rewriteText(html, 0);


  const PAINTER = `
<script>
(function () {
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
      if (r.height > 700) nebula(c, ctx, dpr); else stars(c, ctx, dpr);
    });
  }
  function nebula(c, ctx, dpr) {
    var t0 = Math.random() * 1000;
    function frame(now) {
      var w = c.width, h = c.height;
      var pulse = 0.86 + 0.14 * Math.sin((now / 1000 + t0) / 4);
      ctx.clearRect(0, 0, w, h);
      var g = ctx.createRadialGradient(w * 0.5, h * 0.44, 0, w * 0.5, h * 0.44, Math.max(w, h) * 0.42);
      g.addColorStop(0, 'rgba(99,144,188,' + (0.68 * pulse) + ')');
      g.addColorStop(0.45, 'rgba(110,125,215,' + (0.34 * pulse) + ')');
      g.addColorStop(0.75, 'rgba(121,112,255,' + (0.10 * pulse) + ')');
      g.addColorStop(1, 'rgba(10,10,10,0)');
      ctx.save();
      ctx.translate(w * 0.5, h * 0.44);
      ctx.scale(1, 0.72);
      ctx.translate(-w * 0.5, -h * 0.44);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  function stars(c, ctx, dpr) {
    var w = c.width, h = c.height;
    var n = Math.round((w * h) / (14000 * dpr));
    var st = [];
    for (var i = 0; i < n; i++) {
      st.push({ x: Math.random() * w, y: Math.random() * h, r: (Math.random() * 0.9 + 0.4) * dpr, a: Math.random() * 0.5 + 0.2, s: Math.random() * 1.6 + 0.4, p: Math.random() * 6.28 });
    }
    function frame(now) {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < st.length; i++) {
        var d = st[i];
        var tw = d.a + Math.sin(now / 1000 * d.s + d.p) * 0.22;
        if (tw < 0.04) tw = 0.04;
        ctx.globalAlpha = Math.min(tw, 0.85);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, 6.28318);
        ctx.fillStyle = '#fff';
        ctx.fill();
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
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
    const pathname = queue.shift();
    const dest = path.join(ASSET_DIR, '.' + pathname);
    try {
      let buf;
      if (/\/images\/.+\.(png|jpe?g|webp)$/i.test(pathname)) {
        try {
          buf = await fetchBin(`https://framerusercontent.com${pathname}?scale-down-to=2048`);
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
      console.log(`ok  ${pathname}  (${(buf.length / 1024).toFixed(0)}kB)`);
    } catch (e) {
      console.warn(`SKIP ${pathname}: ${e.message}`);
    }
  }

  await writeFile(`${OUT_DIR}/index.html`, html);
  console.log(`\nWrote ${OUT_DIR}/index.html + ${seen.size} assets in ${ASSET_DIR}/`);
}

main();
