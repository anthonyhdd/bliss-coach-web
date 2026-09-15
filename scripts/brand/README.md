# Bliss Coach icon ("Éclosion" n°1, pure Google colours)

Validated by the founder on 2026-09-15.

```bash
cd scripts/brand && python3 export.py   # writes final/icon-white.svg + final/mark-transparent.svg
```

PNG exports were rendered with headless Chrome (add `--default-background-color=00000000` for the transparent mark), then resized with `sips`:

- `public/brand/bliss-coach-icon-1024.png` / `-512.png` - white ground (App Store, JSON-LD logo)
- `public/apple-touch-icon.png` - 180px, white ground
- `public/brand/bliss-coach-mark.png`, `public/home/logo.png` - 256px transparent flower (dark UI)
- `public/favicon-192.png`, `public/favicon-32.png` - transparent flower
