import type { ReactNode } from "react";

import { cx } from "./cx";

type Props = {
  children: ReactNode;
  /** "dark" para fondos navy */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Etiqueta pequeña en mayúsculas con espaciado amplio y una línea fina detrás,
 * como en las publicaciones de JoTu. Va encima de un título de sección.
 */
export const Eyebrow = ({ children, tone = "light", className }: Props) => (
  <p
    className={cx(
      "flex items-center gap-4 text-eyebrow font-semibold uppercase",
      tone === "light" ? "text-jotu-teal-600" : "text-jotu-turquoise-400",
      className,
    )}
  >
    <span>{children}</span>
    <span
      aria-hidden="true"
      className={cx("h-px w-12 shrink-0", tone === "light" ? "bg-jotu-teal-600/50" : "bg-jotu-turquoise-400/60")}
    />
  </p>
);
