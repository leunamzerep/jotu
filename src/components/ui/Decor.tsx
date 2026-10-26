// Decoraciones SVG muy sutiles inspiradas en el logo (pétalos del loto), líneas
// finas y curvas suaves. Son decorativas: aria-hidden y sin texto. Toman el color
// del texto (currentColor): se colorean con clases como text-jotu-teal-600/15.

import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const base = { "aria-hidden": true, focusable: false } as const;

/** Tres pétalos del loto, solo contorno. */
export const LotusPetals = (props: Props) => (
  <svg {...base} viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth={1} {...props}>
    <path d="M100 112C82 92 78 54 100 8c22 46 18 84 0 104Z" />
    <path d="M100 112C76 108 46 88 38 40c40 12 60 40 62 72Z" />
    <path d="M100 112c24-4 54-24 62-72-40 12-60 40-62 72Z" />
    <path d="M100 112C72 118 30 112 4 84c36-10 70 0 96 28Z" />
    <path d="M100 112c28 6 70 0 96-28-36-10-70 0-96 28Z" />
  </svg>
);

/** Un solo pétalo relleno, para esquinas o fondos. */
export const Petal = (props: Props) => (
  <svg {...base} viewBox="0 0 60 120" fill="currentColor" {...props}>
    <path d="M30 120C10 96 4 52 30 0c26 52 20 96 0 120Z" />
  </svg>
);

/** Curva suave de lado a lado (separador de secciones o fondo de un héroe). */
export const SoftCurve = (props: Props) => (
  <svg {...base} viewBox="0 0 1200 120" fill="none" stroke="currentColor" strokeWidth={1} preserveAspectRatio="none" {...props}>
    <path d="M0 96C240 24 480 8 720 40s360 56 480 16" />
  </svg>
);

/** Línea fina horizontal. */
export const ThinLine = ({ className }: { className?: string }) => (
  <span aria-hidden="true" className={`block h-px bg-current ${className ?? ""}`} />
);
