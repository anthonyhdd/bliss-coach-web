# Variant 1 of "Éclosion" in PURE Google colours + 15 alternatives that keep its DNA.
# Pure = only red / yellow / green / blue and their direct neighbour blends. The blue->red
# junction (which would blend through violet) is a hard cut placed in the gap between two petals.
# Near the centre the petals overlap, so a straight cut would show as a seam: the petal right
# after each cut is re-painted ON TOP, so the colour change follows that petal's curved edge.
import math, os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'bloom1')
os.makedirs(OUT, exist_ok=True)

R, Y, GR, B = '#FF4641', '#FFD400', '#00A95C', '#3186FF'
ORDER = [R, Y, GR, B]


def mix(h1, h2, t):
    a = [int(h1[i:i + 2], 16) for i in (1, 3, 5)]
    b = [int(h2[i:i + 2], 16) for i in (1, 3, 5)]
    return '#' + ''.join(f'{round(x + (y - x) * t):02X}' for x, y in zip(a, b))


def smooth(t):
    return t * t * (3 - 2 * t)


STOPS = [(0.0, R), (0.10, R), (0.30, Y), (0.38, Y), (0.58, GR), (0.66, GR), (0.86, B), (1.0, B)]


def pure(t):
    t = t % 1
    for (t0, c0), (t1, c1) in zip(STOPS, STOPS[1:]):
        if t0 <= t <= t1:
            return c0 if t1 == t0 else mix(c0, c1, smooth((t - t0) / (t1 - t0)))
    return B


def segmented(t):
    """each colour owns a quarter and only shades within ITSELF (a lighter tint across the
    quarter) — shading toward the next colour turned the blue quarter violet"""
    q = int((t % 1) * 4)
    local = (t % 1) * 4 - q
    return mix(ORDER[q], '#FFFFFF', 0.28 * smooth(local))


def conic(start, colour, lighten=0.0, n=720, r=48):
    w = ''
    for j in range(n):
        a0 = math.radians(start + 360 * j / n)
        a1 = math.radians(start + 360 * (j + 1.5) / n)
        col = colour((j + 0.5) / n)
        if lighten:
            col = mix(col, '#FFFFFF', lighten)
        w += (f'<path d="M50 50 L{50 + r * math.cos(a0):.3f} {50 + r * math.sin(a0):.3f} '
              f'A{r} {r} 0 0 1 {50 + r * math.cos(a1):.3f} {50 + r * math.sin(a1):.3f} Z" fill="{col}"/>')
    return w


def ellipse_petal(rx, ry, cy):
    return lambda angle: f'<ellipse cx="50" cy="{cy}" rx="{rx}" ry="{ry}" transform="rotate({angle} 50 50)"/>'


def almond_petal(angle):
    return f'<path d="M50 49 C40.5 40 40.5 24 50 14.5 C59.5 24 59.5 40 50 49 Z" transform="rotate({angle} 50 50)"/>'


def flower(p, petal, n, rot=0, colour=pure, cuts=(0.0,), top='', lighten=0.0):
    start = -90 + rot + 180 / n                    # cut t=0 sits in the gap after petal 0
    angle = lambda k: rot + 360 * k / n
    blur = f'<filter id="{p}sm" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="0.45"/></filter>'
    union = ''.join(petal(angle(k)) for k in range(n))
    out = (f'<defs>{blur}<clipPath id="{p}cl">{union}</clipPath></defs>'
           f'<g clip-path="url(#{p}cl)"><g filter="url(#{p}sm)">{conic(start, colour, lighten)}</g></g>')
    for ci, tc in enumerate(cuts):
        k = int(round(tc * n)) + 1                  # the petal right after this cut
        span = 1 / n
        lead = colour((tc + 1e-4) % 1)
        # inside that petal, angles just BEFORE the cut take the colour just after it
        def recol(t, tc=tc, lead=lead, base=colour, span=span):
            d = (tc - t) % 1
            return lead if 0 < d <= span else base(t)
        out += (f'<defs><clipPath id="{p}top{ci}">{petal(angle(k))}</clipPath></defs>'
                f'<g clip-path="url(#{p}top{ci})"><g filter="url(#{p}sm)">{conic(start, recol, lighten)}</g></g>')
    return out + top


HEART = '<circle cx="50" cy="50" r="6.5" fill="white"/>'
QUARTERS = (0.0, 0.25, 0.5, 0.75)
V = []

V.append(('La 1 · couleurs Google pures', lambda p: flower(p, ellipse_petal(9, 17, 33), 8, top=HEART)))
V.append(('Cœur plus large', lambda p: flower(p, ellipse_petal(9, 17, 33), 8, top='<circle cx="50" cy="50" r="10" fill="white"/>')))
V.append(('Sans cœur', lambda p: flower(p, ellipse_petal(9, 17, 33), 8)))
V.append(('Pétales plus pleins', lambda p: flower(p, ellipse_petal(11.5, 17.5, 33), 8, top=HEART)))
V.append(('Pétales fins', lambda p: flower(p, ellipse_petal(6.5, 18, 32), 8, top=HEART)))
V.append(('6 pétales', lambda p: flower(p, ellipse_petal(11, 18, 32), 6, top=HEART)))
V.append(('10 pétales', lambda p: flower(p, ellipse_petal(7.5, 17, 33), 10, top=HEART)))
V.append(('Tournée de 22,5°', lambda p: flower(p, ellipse_petal(9, 17, 33), 8, rot=22.5, top=HEART)))


def per_petal(p):
    d, b = '', ''
    for k in range(8):
        c = ORDER[k % 4]
        d += (f'<linearGradient id="{p}pg{k}" gradientUnits="userSpaceOnUse" x1="50" y1="48" x2="50" y2="16">'
              f'<stop offset="0" stop-color="{mix(c, "#FFFFFF", 0.35)}"/><stop offset="1" stop-color="{c}"/></linearGradient>')
        b += f'<ellipse cx="50" cy="33" rx="9" ry="17" fill="url(#{p}pg{k})" transform="rotate({45 * k} 50 50)"/>'
    return f'<defs>{d}</defs>{b}{HEART}'
V.append(('Une couleur par pétale', per_petal))

V.append(('Couleurs par quart, nettes', lambda p: flower(p, ellipse_petal(9, 17, 33), 8, colour=segmented, cuts=QUARTERS, top=HEART)))


def soft_core(p):
    glow = (f'<defs><radialGradient id="{p}gl" gradientUnits="userSpaceOnUse" cx="50" cy="50" r="16">'
            f'<stop offset="0" stop-color="#FFFFFF"/><stop offset=".45" stop-color="#FFFFFF" stop-opacity=".85"/>'
            f'<stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></radialGradient></defs>'
            f'<circle cx="50" cy="50" r="16" fill="url(#{p}gl)"/>')
    return flower(p, ellipse_petal(9.5, 17, 33), 8, top=glow)
V.append(('Cœur lumineux', soft_core))

V.append(('Pétales détachés du centre', lambda p: flower(p, ellipse_petal(8, 14.5, 29), 8)))
V.append(('Pétales en amande', lambda p: flower(p, almond_petal, 8, top=HEART)))
V.append(('Pistil bleu', lambda p: flower(p, ellipse_petal(9, 17, 33), 8, top=f'<circle cx="50" cy="50" r="9.5" fill="white"/><circle cx="50" cy="50" r="5" fill="{B}"/>')))


def layered(p):
    outer = flower(p, ellipse_petal(9.5, 17.5, 33), 8)
    inner = flower(p + 'in', ellipse_petal(5, 9.5, 40), 8, rot=22.5, lighten=0.45)
    return outer + inner + HEART
V.append(('Double corolle', layered))


def veins(p):
    lines = ''.join(f'<line x1="50" y1="41" x2="50" y2="22" stroke="white" stroke-width="1.6" stroke-linecap="round" opacity=".55" transform="rotate({45 * k} 50 50)"/>' for k in range(8))
    return flower(p, ellipse_petal(9, 17, 33), 8, top=lines + HEART)
V.append(('Nervures blanches', veins))


def svg(p, body, size):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="{size}" height="{size}">'
            f'<rect width="100" height="100" fill="white"/><g transform="translate(50 50) scale(1.08) translate(-50 -50)">{body}</g></svg>')


cells = []
for i, (label, fn) in enumerate(V):
    n = i + 1
    open(os.path.join(OUT, f'bloom1-{n:02d}.svg'), 'w').write(svg(f'f{n}', fn(f'f{n}'), 1024))
    big, small, tiny = svg(f'b{n}', fn(f'b{n}'), 200), svg(f's{n}', fn(f's{n}'), 58), svg(f't{n}', fn(f't{n}'), 24)
    tag = 'La 1' if n == 1 else f'Alt {n - 1}'
    cells.append(f'<figure class="{"hero" if n == 1 else ""}"><div class="ic big">{big}</div><div class="row"><div class="ic sm">{small}</div>'
                 f'<div class="ic tiny">{tiny}</div><figcaption><b>{n} · {tag}</b>{label}</figcaption></div></figure>')

html = f'''<!doctype html><html><head><meta charset="utf-8"><style>
body {{ margin: 0; width: 1200px; background: #eceef2; font-family: -apple-system, 'Helvetica Neue', sans-serif; color: #17171c; }}
h1 {{ margin: 0; padding: 32px 40px 4px; font-size: 30px; letter-spacing: -0.02em; }}
p.sub {{ margin: 0; padding: 0 40px 10px; color: #6b6b76; font-size: 15px; }}
.grid {{ display: grid; grid-template-columns: repeat(4, 1fr); padding: 0 24px 24px; }}
figure {{ margin: 0; padding: 16px 14px; display: flex; flex-direction: column; align-items: center; border-radius: 22px; }}
figure.hero {{ background: #fff8d6; }}
.ic {{ overflow: hidden; background: #fff; border-radius: 22.37%; box-shadow: 0 8px 22px rgba(20,20,40,.12); }}
.ic svg {{ display: block; }}
.big {{ width: 200px; height: 200px; }}
.row {{ display: flex; align-items: center; gap: 10px; margin-top: 14px; width: 240px; }}
.sm {{ width: 58px; height: 58px; flex: 0 0 auto; box-shadow: 0 4px 12px rgba(20,20,40,.12); }}
.tiny {{ width: 24px; height: 24px; flex: 0 0 auto; border-radius: 6px; box-shadow: 0 2px 6px rgba(20,20,40,.14); }}
figcaption {{ font-size: 13px; color: #55555f; line-height: 1.3; }}
figcaption b {{ display: block; font-size: 15px; color: #17171c; }}
</style></head><body>
<h1>Éclosion n°1 — 4 couleurs Google pures</h1>
<p class="sub">Rouge · jaune · vert · bleu uniquement. Le passage bleu → rouge suit le bord d’un pétale, comme la coupure du « G ». En jaune : la 1 demandée, puis 15 alternatives.</p>
<div class="grid">{''.join(cells)}</div>
</body></html>'''
open(os.path.join(HERE, 'bloom1-sheet.html'), 'w').write(html)
print('ok', len(V))
