import type { CSSProperties } from "react";
import { useTranslation } from "react-i18next";

import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Solo claves de i18n (forms.<clave>.name / .desc) y valores de diseño de cada
// tarjeta: giro (--r) y caída (--y) del abanico y color de la franja superior.
const FORMS = [
  { key: "f1040", r: "-6deg", y: "1.25rem", bar: "bg-jotu-navy-950" },
  { key: "f1040nr", r: "-3.6deg", y: "0.5rem", bar: "bg-jotu-blue-800" },
  { key: "f4868", r: "-1.2deg", y: "0rem", bar: "bg-jotu-blue-700" },
  { key: "f8879", r: "1.2deg", y: "0rem", bar: "bg-jotu-teal-600" },
  { key: "f1065", r: "3.6deg", y: "0.5rem", bar: "bg-jotu-turquoise-400" },
  { key: "f1120s", r: "6deg", y: "1.25rem", bar: "bg-jotu-navy-900" },
] as const;

/**
 * Formularios con los que ayudamos (Inicio, después de los servicios).
 *
 * Es una lista <ul> normal: todo el texto está en el HTML (también en el
 * prerender) y funciona sin JavaScript. El diseño lo da CSS (clases .forms-*
 * en global.css): en escritorio con mouse, tarjetas solapadas en abanico que se
 * despliegan con hover o foco de teclado; en celular y tablet, una fila con
 * scroll horizontal y scroll-snap.
 *
 * Cada tarjeta lleva tabIndex={0} para poder enfocarla con el teclado (y que
 * se despliegue). No es un enlace ni un botón: es una excepción pedida en el
 * diseño, solo para ver el despliegue sin mouse.
 */
export const FormsSection = () => {
  const { t } = useTranslation();

  return (
    <Section tone="mist" className="overflow-hidden">
      <Container>
        <div data-reveal="up">
          <SectionHeading title={t("forms.title")} as="h2" align="center" className="mx-auto" />
        </div>
        <ul className="forms-list mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 [scroll-padding-inline:1rem]">
          {FORMS.map(({ key, r, y, bar }) => (
            <li
              key={key}
              tabIndex={0}
              className="forms-card relative w-[min(82vw,18rem)] shrink-0 snap-start overflow-hidden rounded-card border border-jotu-line bg-jotu-white pb-6 shadow-soft"
              style={{ "--r": r, "--y": y } as CSSProperties}
            >
              <span aria-hidden="true" className={`block h-1.5 ${bar}`} />
              <div className="forms-card-body flex flex-col gap-3 px-6 pt-6">
                <h3 className="font-title text-xl text-jotu-navy-950">{t(`forms.${key}.name`)}</h3>
                <p className="text-sm leading-relaxed text-jotu-ink-muted">{t(`forms.${key}.desc`)}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center font-title text-h3 text-jotu-teal-600" data-reveal="up">
          {t("forms.more")}
        </p>
      </Container>
    </Section>
  );
};
