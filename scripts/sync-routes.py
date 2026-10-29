from pathlib import Path
import re
root = Path(__file__).resolve().parents[1]
routes = ['wawasan', 'wawasan/zero-waste', 'kajian', 'kajian/pandansimo-zero-waste', 'media', 'media/kawasan-bebas-kendaraan', 'tentang']
for route in routes:
    prefix = '../' * len(route.split('/'))
    def adapt(m):
        value = m[2]
        if value.startswith(('http:', 'https:', '//', '#', 'mailto:', 'data:')):
            return m[0]
        return m[1] + '="' + prefix + value.removeprefix('./') + '"'
    target = root / route / 'index.html'
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(re.sub(r'(href|src)="([^"\s]*)"', adapt, (root / 'index.html').read_text()))
