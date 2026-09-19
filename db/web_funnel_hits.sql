-- Consent-exempt first-party audience counter for bliss-coach.com/start/ (src/lib/funnelTrack.ts `hit`).
-- Project: wbxuxcvxyzmbyshupycs. CNIL exemption: audience measurement only, first-party, no IP,
-- no cookie, in-memory per-page id, never joined to an account. Insert-only for anon: nobody can read
-- it from the browser.
create table if not exists public.web_funnel_hits (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  tab_id text not null check (length(tab_id) <= 40),
  funnel text check (length(funnel) <= 40),
  event text not null check (length(event) <= 40),
  step text check (length(step) <= 60),
  consent text check (consent in ('unknown','accepted','refused','partial')),
  utm_source text check (length(utm_source) <= 120),
  utm_campaign text check (length(utm_campaign) <= 120),
  utm_content text check (length(utm_content) <= 120),
  lang text check (length(lang) <= 12),
  os text check (length(os) <= 20)
);
create index if not exists web_funnel_hits_created_idx on public.web_funnel_hits (created_at);
create index if not exists web_funnel_hits_campaign_idx on public.web_funnel_hits (utm_campaign, created_at);
alter table public.web_funnel_hits enable row level security;
create policy "anon insert only" on public.web_funnel_hits for insert to anon, authenticated with check (true);
grant insert on public.web_funnel_hits to anon, authenticated;
