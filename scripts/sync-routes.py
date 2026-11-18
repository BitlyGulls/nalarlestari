from pathlib import Path
import re
root = Path(__file__).resolve().parents[1]
routes = ['wawasan', 'wawasan/zero-waste', 'wawasan/green-building', 'kerja-kami', 'kerja-kami/pandansimo-zero-waste', 'kerja-kami/kawasan-bebas-kendaraan', 'kerja-kami/software-spasial', 'kerja-kami/green-campus-ugm', 'kajian', 'kajian/pandansimo-zero-waste', 'media', 'media/kawasan-bebas-kendaraan', 'tentang']
for route in routes:
    prefix = '../' * len(route.split('/'))
    def adapt(m):
        value = m[2]
        if value.startswith(('http:', 'https:', '//', '#', 'mailto:', 'data:')):
            return m[0]
        return m[1] + '="' + prefix + value.removeprefix('./') + '"'
    target = root / route / 'index.html'
    target.parent.mkdir(parents=True, exist_ok=True)
    html = re.sub(r'(href|src)="([^"\s]*)"', adapt, (root / 'index.html').read_text())
    if route == 'kerja-kami/green-campus-ugm':
        html = html.replace('Nalar Lestari — Berpikir Kritis, Bertindak Lestari</title>', 'Studi Literatur Green Campus UGM | Nalar Lestari</title>')
        html = html.replace('Nalar Lestari: edukasi keberlanjutan dan kajian berbasis bukti Pantai Baru Pandansimo.', 'Ulasan studi literatur pengelolaan sampah UGM: video, 12 prinsip rekayasa hijau, alur material, dan evaluasi historis.')
    target.write_text(html)

