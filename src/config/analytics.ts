// Google Analytics 4 configuration.
//
// Paste your GA4 Measurement ID below. Find it in Google Analytics →
// Admin → Data Streams → (your web stream) → "Measurement ID". It looks
// like "G-XXXXXXXXXX" and is NOT secret (it ships in client-side JS).
//
// Leave it as an empty string to disable analytics entirely — nothing
// will be loaded and no requests are made to Google.
//
// You can also override it at build time with the PUBLIC_GA_ID env var
// (e.g. in the GitHub Actions deploy workflow) without editing this file.
export const GA_MEASUREMENT_ID: string =
  import.meta.env.PUBLIC_GA_ID ?? 'G-P6FHL7KTC4';
