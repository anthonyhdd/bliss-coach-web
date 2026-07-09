#!/usr/bin/env node
/**
 * Fetch product-funnel metrics from the Amplitude Dashboard REST API and write
 * them, encrypted, to public/analytics/data.json for the /analytics page.
 *
 * Runs unattended from GitHub Actions (see .github/workflows/analytics-data.yml).
 *
 * Required environment variables:
 *   AMPLITUDE_API_KEY      Amplitude project API key
 *   AMPLITUDE_SECRET_KEY   Amplitude project secret key
 *   ANALYTICS_PASSWORD     Password the dashboard page will ask for
 *
 * The output file only ever contains an AES-256-GCM ciphertext, so it is safe
 * to commit to a public repository. The page derives the same key from the
 * password with WebCrypto (PBKDF2-SHA256, same salt/iterations).
 */

import { webcrypto as crypto } from 'node:crypto';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const API_KEY = process.env.AMPLITUDE_API_KEY ?? '';
const SECRET_KEY = process.env.AMPLITUDE_SECRET_KEY ?? '';
const PASSWORD = process.env.ANALYTICS_PASSWORD ?? '';

// Org lives in the EU data center (app.eu.amplitude.com); keep the US host as
// a fallback so a future data-center move doesn't silently break the job.
const ENDPOINTS = [
  'https://analytics.eu.amplitude.com/api/2/events/segmentation',
  'https://amplitude.com/api/2/events/segmentation',
];

// Amplitude exposes custom properties either with or without the gp: prefix
// depending on account age; try both (same trick as scripts/daily_funnel_report.py
// in the APPSOFIA repo).
const GROUP_KEYS = ['gp:app_variant', 'app_variant'];

const VARIANTS = ['sofia', 'amelie', 'charm', 'alex', 'mila', 'astra'];

// Funnel + product-usage events tracked by the apps (single shared Amplitude
// project, segmented by the app_variant event property).
const EVENTS = [
  'app_open',
  'onboarding_started',
  'onboarding_completed',
  'chat_session_started',
  'paywall_viewed',
  'trial_started',
  'purchase_completed',
];

const DAYS = 90;

const fmt = (d) => d.toISOString().slice(0, 10).replaceAll('-', '');

function dateRange() {
  const end = new Date();
  const start = new Date(end.getTime() - (DAYS - 1) * 86400000);
  return { start, end };
}

function isoDays(start, end) {
  const out = [];
  for (let t = start.getTime(); t <= end.getTime(); t += 86400000) {
    out.push(new Date(t).toISOString().slice(0, 10));
  }
  return out;
}

let workingEndpoint = null;
let workingGroupKey = null;

async function segmentation(eventType, start, end) {
  const endpoints = workingEndpoint ? [workingEndpoint] : ENDPOINTS;
  const groupKeys = workingGroupKey ? [workingGroupKey] : GROUP_KEYS;
  let lastErr = null;

  for (const url of endpoints) {
    for (const g of groupKeys) {
      const qs = new URLSearchParams({
        e: JSON.stringify({ event_type: eventType }),
        m: 'uniques',
        start: fmt(start),
        end: fmt(end),
        g,
        i: '1',
      });
      const res = await fetch(`${url}?${qs}`, {
        headers: {
          Authorization: 'Basic ' + Buffer.from(`${API_KEY}:${SECRET_KEY}`).toString('base64'),
        },
      });
      if (!res.ok) {
        lastErr = new Error(`${eventType}: HTTP ${res.status} on ${new URL(url).host} (g=${g})`);
        continue;
      }
      const body = await res.json();
      const data = body?.data ?? {};
      const labels = data.seriesLabels ?? data.segmentLabels ?? [];
      const series = data.series ?? [];
      if (!labels.length) {
        lastErr = new Error(`${eventType}: empty response (g=${g})`);
        continue;
      }
      workingEndpoint = url;
      workingGroupKey = g;

      const perVariant = {};
      labels.forEach((label, i) => {
        const raw = Array.isArray(label) ? label[label.length - 1] : label;
        const key = String(raw).toLowerCase();
        const daily = (series[i] ?? []).map((v) =>
          typeof v === 'object' && v !== null ? Number(v.value ?? 0) : Number(v ?? 0)
        );
        // Merge unknown labels ("(none)", legacy values…) into "other".
        const slot = VARIANTS.includes(key) ? key : 'other';
        if (perVariant[slot]) {
          perVariant[slot] = perVariant[slot].map((v, j) => v + (daily[j] ?? 0));
        } else {
          perVariant[slot] = daily;
        }
      });
      return { perVariant, xValues: data.xValues ?? [] };
    }
  }
  throw lastErr ?? new Error(`${eventType}: no endpoint answered`);
}

async function encrypt(plaintext, password) {
  const enc = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const iterations = 210000;
  const baseKey = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, [
    'deriveKey',
  ]);
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt']
  );
  const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(plaintext));
  const b64 = (buf) => Buffer.from(buf).toString('base64');
  return {
    v: 1,
    kdf: 'PBKDF2-SHA256',
    iterations,
    salt: b64(salt),
    iv: b64(iv),
    ct: b64(ct),
  };
}

async function main() {
  const missing = [
    ['AMPLITUDE_API_KEY', API_KEY],
    ['AMPLITUDE_SECRET_KEY', SECRET_KEY],
    ['ANALYTICS_PASSWORD', PASSWORD],
  ]
    .filter(([, v]) => !v)
    .map(([k]) => k);
  if (missing.length) {
    console.error('Missing env vars: ' + missing.join(', '));
    process.exit(1);
  }

  const { start, end } = dateRange();
  const dates = isoDays(start, end);

  const metrics = {};
  for (const ev of EVENTS) {
    const { perVariant } = await segmentation(ev, start, end);
    // Normalise every variant to the full date axis length.
    for (const v of Object.keys(perVariant)) {
      const d = perVariant[v];
      if (d.length > dates.length) perVariant[v] = d.slice(d.length - dates.length);
      while (perVariant[v].length < dates.length) perVariant[v].unshift(0);
    }
    metrics[ev] = perVariant;
    console.log(`ok ${ev} (${Object.keys(perVariant).join(', ') || 'no data'})`);
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    rangeDays: DAYS,
    dates,
    variants: VARIANTS,
    events: EVENTS,
    metrics,
    source: { endpoint: workingEndpoint, groupKey: workingGroupKey },
  };

  const envelope = await encrypt(JSON.stringify(payload), PASSWORD);
  const here = dirname(fileURLToPath(import.meta.url));
  const out = join(here, '..', 'public', 'analytics', 'data.json');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, JSON.stringify(envelope));
  console.log(`wrote ${out} (${dates.length} days, endpoint=${new URL(workingEndpoint).host}, g=${workingGroupKey})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
