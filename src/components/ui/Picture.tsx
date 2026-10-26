import manifest from "@/assets/img/opt/manifest.json";

import { cx } from "./cx";

// Archivos generados por scripts/optimize-images.mjs (AVIF y WebP en varios anchos).
const urls = import.meta.glob<string>("/src/assets/img/opt/*.{avif,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

type Meta = { width: number; height: number; widths: number[] };
const images = manifest as Record<string, Meta>;

type Props = {
  /** Nombre del archivo original sin extensión: "mainImg", "about1", "fundadores"… */
  name: string;
  /** Texto alternativo (del archivo de idioma). Vacío si la foto es decorativa. */
  alt: string;
  /** Ancho que ocupa la foto en pantalla, para que el navegador elija el archivo: "(min-width: 1024px) 50vw, 100vw" */
  sizes: string;
  /** true solo en la foto principal de cada página: se carga de inmediato en vez de perezosa */
  priority?: boolean;
  className?: string;
};

const url = (name: string, width: number, ext: "avif" | "webp") =>
  urls[`/src/assets/img/opt/${name}-${width}.${ext}`];

const srcSet = (name: string, widths: number[], ext: "avif" | "webp") =>
  widths.map((w) => `${url(name, w, ext)} ${w}w`).join(", ");

/**
 * Foto optimizada: <picture> con AVIF y WebP, srcset responsivo, width y height
 * (el navegador reserva el espacio y no hay saltos de diseño) y carga perezosa.
 * El tamaño visual lo da className (por ejemplo "w-full h-full object-cover").
 */
export const Picture = ({ name, alt, sizes, priority = false, className }: Props) => {
  const meta = images[name];
  if (!meta) throw new Error(`Picture: "${name}" no está en opt/manifest.json (corre scripts/optimize-images.mjs)`);
  const { width, height, widths } = meta;
  // Ancho del <img> de respaldo: el más cercano a 1200 px
  const fallbackWidth = widths.reduce((a, b) => (Math.abs(b - 1200) < Math.abs(a - 1200) ? b : a));

  return (
    <picture className="block">
      <source type="image/avif" srcSet={srcSet(name, widths, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(name, widths, "webp")} sizes={sizes} />
      <img
        src={url(name, fallbackWidth, "webp")}
        width={width}
        height={height}
        alt={alt}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : undefined}
        className={cx(className)}
      />
    </picture>
  );
};
