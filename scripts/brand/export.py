# Export the validated icon (bloom1 variant 1, pure Google colours) as final SVG sources:
#   icon-white.svg       full square, white ground (App Store / apple-touch / JSON-LD logo)
#   mark-transparent.svg flower only, tighter crop (logo on dark UI, favicon)
import os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import bloom1  # noqa: E402  (regenerates the sheet as a side effect, harmless)

label, fn = bloom1.V[0]
assert label.startswith('La 1'), label
OUT = os.path.join(HERE, 'final')
os.makedirs(OUT, exist_ok=True)


def wrap(body, bg, scale):
    rect = '<rect width="100" height="100" fill="white"/>' if bg else ''
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="1024" height="1024">{rect}'
            f'<g transform="translate(50 50) scale({scale}) translate(-50 -50)">{body}</g></svg>')


open(os.path.join(OUT, 'icon-white.svg'), 'w').write(wrap(fn('w'), True, 1.08))
# flower spans r≈34 around the centre: scale 1.42 fills ~97% of the square, with a hairline margin
# (the white heart becomes a transparent hole, which is what we want on dark backgrounds)
body = fn('t').replace('<circle cx="50" cy="50" r="6.5" fill="white"/>', '')
hole = ('<mask id="hole"><rect width="100" height="100" fill="white"/>'
        '<circle cx="50" cy="50" r="6.5" fill="black"/></mask>')
open(os.path.join(OUT, 'mark-transparent.svg'), 'w').write(
    f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="1024" height="1024"><defs>{hole}</defs>'
    f'<g mask="url(#hole)"><g transform="translate(50 50) scale(1.42) translate(-50 -50)">{body}</g></g></svg>')
print('ok')
