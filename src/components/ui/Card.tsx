import type { ReactNode } from "react";

import { cx } from "./cx";

type Props = {
  children: ReactNode;
  as?: "div" | "article" | "li";
  /** Sube un poco y crece la sombra al pasar el mouse (solo con mouse y sin "reducir movimiento") */
  interactive?: boolean;
  className?: string;
};

/** Tarjeta blanca con borde fino, esquinas suaves y sombra navy muy ligera. */
export const Card = ({ children, as: Tag = "div", interactive = false, className }: Props) => (
  <Tag
    className={cx(
      "rounded-card border border-jotu-line bg-jotu-white p-6 shadow-soft md:p-8",
      interactive &&
        "transition-[translate,box-shadow] duration-300 motion-safe:[@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:shadow-lift",
      className,
    )}
  >
    {children}
  </Tag>
);
