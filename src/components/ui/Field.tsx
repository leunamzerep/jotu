import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

import { cx } from "./cx";

type Common = {
  id: string;
  /** Texto de la etiqueta (del archivo de idioma) */
  label: string;
  /** Mensaje de error (del archivo de idioma); si existe, el campo se marca como inválido */
  error?: string;
  className?: string;
};

const control =
  "w-full rounded-lg border border-jotu-line bg-jotu-white px-4 py-3 text-base text-jotu-ink " +
  "placeholder:text-jotu-ink-muted/70 transition-colors hover:border-jotu-ink-muted/40 " +
  "focus-visible:border-jotu-teal-600 aria-invalid:border-jotu-navy-900";

/** Atributos de accesibilidad del campo según haya error o no. */
const ariaFor = (id: string, error?: string) => ({
  "aria-invalid": error ? true : undefined,
  "aria-describedby": error ? `${id}-error` : undefined,
});

/** Etiqueta unida al campo (htmlFor/id) y mensaje de error enlazado con aria-describedby. */
const FieldShell = ({ id, label, error, className, children }: Common & { children: ReactNode }) => (
  <div className={cx("flex flex-col gap-2", className)}>
    <label htmlFor={id} className="text-sm font-semibold text-jotu-navy-950">
      {label}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="text-sm font-medium text-jotu-navy-900">
        {error}
      </p>
    )}
  </div>
);

type TextFieldProps = Common & Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "className">;

/** Campo de una línea accesible. */
export const TextField = ({ id, label, error, className, ...input }: TextFieldProps) => (
  <FieldShell id={id} label={label} error={error} className={className}>
    <input id={id} {...ariaFor(id, error)} {...input} className={control} />
  </FieldShell>
);

type TextAreaFieldProps = Common & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id" | "className">;

/** Campo de varias líneas accesible. */
export const TextAreaField = ({ id, label, error, className, ...textarea }: TextAreaFieldProps) => (
  <FieldShell id={id} label={label} error={error} className={className}>
    <textarea id={id} {...ariaFor(id, error)} {...textarea} className={cx(control, "min-h-36 resize-y")} />
  </FieldShell>
);
