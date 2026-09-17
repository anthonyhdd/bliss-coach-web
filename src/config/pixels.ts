// Meta and TikTok web pixels — the ad-network side of the funnel.
//
// WHY THEY EXIST
// The funnel's whole reason to be is that a web purchase is VISIBLE: on the App Store path an
// install lands in AppsFlyer's `restricted` bucket with no campaign attached, SKAN reports a
// coarse value days later, and Meta cannot run Sofia app-install campaigns at all (#2446692).
// A pixel on `/start/` turns a purchase into an optimisation event the networks can actually bid
// on — without it the funnel is a nicer paywall, not a growth channel.
//
// NOT SECRET, AND NOT SITE-WIDE
// Pixel IDs ship in client JS by design, exactly like `GA_MEASUREMENT_ID`. They load ONLY on the
// funnel pages (`Base` prop `pixels`), never on the landings or the articles: those are organic
// readers who are not the campaign's audience, and every extra tracker on them is a cookie banner
// we would then owe.
//
// ⚠️ CONSENT. Both pixels set first-party cookies. This site has no consent banner, so EU traffic
// is not covered today. Decide before spending: either add a banner in front of the funnel, or
// accept the risk deliberately. See FUNNEL.md §8.
//
// SETUP
//   Meta   — Events Manager → Data sources → Web → your dataset id (15-16 digits) → repo secret
//            `PUBLIC_META_PIXEL_ID`. Use the pixel of a CLEAN Business Manager, never the banned
//            Sofia BM (reference_meta_setup).
//   TikTok — Events Manager → Web Events → Set up → pixel id (e.g. `CQxxxxxxxxxxxxxxxxxx`) →
//            repo secret `PUBLIC_TIKTOK_PIXEL_ID`.
// Empty = nothing loads and no request is made. That is the default.

export const META_PIXEL_ID: string = (import.meta.env.PUBLIC_META_PIXEL_ID ?? '').trim();
export const TIKTOK_PIXEL_ID: string = (import.meta.env.PUBLIC_TIKTOK_PIXEL_ID ?? '').trim();

/** Meta dataset ids are numeric; anything else is a paste accident and must not ship a broken tag. */
export const metaEnabled = (): boolean => /^\d{10,20}$/.test(META_PIXEL_ID);
/** TikTok pixel ids are alphanumeric, ~20 chars. */
export const tiktokEnabled = (): boolean => /^[A-Za-z0-9]{10,40}$/.test(TIKTOK_PIXEL_ID);
