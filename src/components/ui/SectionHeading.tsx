import type { ReactNode } from "react";

import { Eyebrow } from "./Eyebrow";
import { cx } from "./cx";

type Props = {
  /** Título completo, tal cual sale del archivo de idioma */
  title: string;
  /**
   * Palabra o frase del título que va en color de acento. Debe aparecer igual
   * dentro de title (también sale del archivo de idioma); si no aparece, el
   * título se muestra entero sin acento. Así nunca se parte un texto traducido.
   */
  accent?: string;
  eyebrow?: ReactNode;
  lead?: ReactNode;
  as?: "h1" | "h2" | "h3";
  /** Tamaño visual, independiente de la etiqueta */
  size?: "display" | "h1" | "h2" | "h3";
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

const sizes = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
} as const;

/** Pone en color de acento la primera aparición de accent dentro de title. */
const withAccent = (title: string, accent: string | undefined, tone: "light" | "dark") => {
  const i = accent ? title.indexOf(accent) : -1;
  if (!accent || i === -1) return title;
  return (
    <>
      {title.slice(0, i)}
      <span className={tone === "light" ? "text-jotu-teal-600" : "text-jotu-turquoise-400"}>{accent}</span>
      {title.slice(i + accent.length)}
    </>
  );
};

/** Encabezado de sección: etiqueta opcional, título serif y entradilla opcional. */
export const SectionHeading = ({
  title, accent, eyebrow, lead, as: Tag = "h2", size = "h2", tone = "light", align = "left", className,
}: Props) => (
  <div className={cx("flex max-w-3xl flex-col gap-5", align === "center" && "mx-auto items-center text-center", className)}>
    {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
    <Tag
      className={cx(
        "font-title font-semibold text-balance",
        sizes[size],
        tone === "light" ? "text-jotu-navy-950" : "text-jotu-white",
      )}
    >
      {withAccent(title, accent, tone)}
    </Tag>
    {lead && (
      <p className={cx("text-lead text-pretty", tone === "light" ? "text-jotu-ink-muted" : "text-jotu-snow/85")}>{lead}</p>
    )}
  </div>
);
