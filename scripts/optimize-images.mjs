// Convierte las fotos de src/assets/img/ a AVIF y WebP en varios anchos
// (para srcset). Se corre a mano cuando cambia o se añade una foto:
//   node scripts/optimize-images.mjs
// Salida: src/assets/img/opt/<nombre>-<ancho>.avif|webp y opt/manifest.json
// (ancho y alto originales + anchos generados; lo lee components/ui/Picture.tsx).
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "src/assets/img";
const OUT = path.join(SRC, "opt");
const WIDTHS = [480, 800, 1200, 1600, 2400];
// El logo del header se queda como está.
const SKIP = new Set(["JoTu_color_1.png"]);

await mkdir(OUT, { recursive: true });
const manifest = {};

for (const file of (await readdir(SRC)).sort()) {
  if (SKIP.has(file) || !/\.(jpe?g|png|webp|avif)$/i.test(file)) continue;
  const name = path.parse(file).name;
  const input = sharp(path.join(SRC, file));
  const { width, height } = await input.metadata();

  // Nunca se agranda una foto: solo anchos menores o iguales al original.
  const widths = WIDTHS.filter((w) => w < width);
  widths.push(Math.min(width, WIDTHS[WIDTHS.length - 1]));
  const unique = [...new Set(widths)];

  for (const w of unique) {
    const resized = () => sharp(path.join(SRC, file)).resize({ width: w });
    await resized().avif({ quality: 55, effort: 6 }).toFile(path.join(OUT, `${name}-${w}.avif`));
    await resized().webp({ quality: 78 }).toFile(path.join(OUT, `${name}-${w}.webp`));
  }
  manifest[name] = { width, height, widths: unique };
  console.log(name, `${width}x${height}`, unique.join(","));
}

await writeFile(path.join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
