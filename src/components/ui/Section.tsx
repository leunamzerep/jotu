import type { ReactNode } from "react";

import { cx } from "./cx";

type Tone = "white" | "paper" | "mist" | "navy";

type Props = {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  /** Para unir la sección con su título: aria-labelledby="id-del-título" */
  labelledBy?: string;
  className?: string;
};

const tones: Record<Tone, string> = {
  white: "bg-jotu-white text-jotu-ink",
  paper: "bg-jotu-paper text-jotu-ink",
  mist: "bg-jotu-mist text-jotu-ink",
  // En fondo navy el anillo de foco pasa a turquesa (contraste 7:1)
  navy: "bg-jotu-navy-950 text-jotu-snow [--focus-ring:var(--color-jotu-turquoise-400)]",
};

/** Bloque de página con fondo y espacio vertical fluido (section-y). */
export const Section = ({ children, tone = "white", id, labelledBy, className }: Props) => (
  <section id={id} aria-labelledby={labelledBy} className={cx("relative section-y", tones[tone], className)}>
    {children}
  </section>
);

/** Ancho máximo del sitio (1200 px) con márgenes laterales fluidos. */
export const Container = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cx("container-site", className)}>{children}</div>
);
