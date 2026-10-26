import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { ArrowRightIcon } from "./icons";
import { cx } from "./cx";

type Variant = "primary" | "secondary" | "link";

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Enlace interno: usa siempre PATHS (src/config/paths.ts), con barra final */
  to?: string;
  /** Enlace externo: se abre en otra pestaña con rel="noopener noreferrer" */
  href?: string;
  /** Texto accesible si el visible no basta (por ejemplo, "se abre en una pestaña nueva") */
  ariaLabel?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const styles: Record<Variant, string> = {
  primary:
    "rounded-full bg-jotu-navy-950 px-6 py-3 text-jotu-white shadow-soft " +
    "hover:bg-jotu-blue-800 active:translate-y-px",
  secondary:
    "rounded-full border border-jotu-navy-950/25 bg-transparent px-6 py-3 text-jotu-navy-950 " +
    "hover:border-jotu-teal-600 hover:text-jotu-teal-600",
  link:
    "rounded-sm text-jotu-teal-600 underline decoration-jotu-teal-600/30 underline-offset-4 " +
    "hover:decoration-jotu-teal-600",
};

/**
 * Botón o enlace con aspecto de botón. Tres variantes:
 * - primary: fondo navy (llamada a la acción principal)
 * - secondary: borde fino
 * - link: texto teal con flecha
 * Según las props es un <Link> interno (to), un <a> externo (href) o un <button>.
 */
export const Button = ({ children, variant = "primary", className, to, href, ariaLabel, type = "button", onClick, disabled }: Props) => {
  const classes = cx(
    "inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-wide",
    "transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
    styles[variant],
    className,
  );
  const content = (
    <>
      {children}
      {variant === "link" && <ArrowRightIcon className="size-4" />}
    </>
  );

  if (to) {
    return <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>{content}</Link>;
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={classes} aria-label={ariaLabel} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};
