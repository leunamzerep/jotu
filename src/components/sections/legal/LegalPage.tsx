import { useTranslation } from "react-i18next";

import { PageSeo } from "@/components/seo/PageSeo";
import { Card } from "@/components/ui/Card";
import { LotusPetals } from "@/components/ui/Decor";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container, Section } from "@/components/ui/Section";

type Props = {
  /** Prefijo de las claves de i18n: "terms" o "privacy" (<prefijo>.h1, .section1, .p1…) */
  prefix: "terms" | "privacy";
  /** Cuántas secciones tiene el texto */
  sections: number;
  seoTitle: string;
  seoDescription: string;
};

/**
 * Página de texto legal para lectura larga: título, índice con enlaces a cada
 * sección (en escritorio queda fijo a un lado) y texto en una columna de ancho
 * cómodo. Solo es presentación: el contenido sale tal cual de i18n (terms.* y
 * privacy.*) y no se modifica. Todo el texto está en el HTML prerenderizado.
 */
export const LegalPage = ({ prefix, sections, seoTitle, seoDescription }: Props) => {
  const { t } = useTranslation();
  const numbers = Array.from({ length: sections }, (_, i) => i + 1);

  return (
    <>
      <PageSeo title={seoTitle} description={seoDescription} />

      <main data-ui="new">
        <Section tone="paper" className="overflow-hidden !py-12 lg:!py-20">
          <LotusPetals className="pointer-events-none absolute -top-6 -right-16 w-96 text-jotu-teal-600/10" />
          <Container className="relative">
            <h1 className="font-title text-h1 font-semibold text-balance text-jotu-navy-950">{t(`${prefix}.h1`)}</h1>
          </Container>
        </Section>

        <Section tone="white" className="!pt-12 lg:!pt-16">
          <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
            <nav aria-label={t("legal.toc")} className="lg:sticky lg:top-32 lg:self-start">
              <Card className="!p-6">
                <Eyebrow>{t("legal.toc")}</Eyebrow>
                <ol className="mt-5 flex flex-col gap-3 text-sm">
                  {numbers.map((n) => (
                    <li key={n}>
                      <a
                        href={`#${prefix}-${n}`}
                        className="rounded-sm text-jotu-ink-muted underline-offset-4 transition-colors hover:text-jotu-navy-950 hover:underline"
                      >
                        {t(`${prefix}.section${n}`)}
                      </a>
                    </li>
                  ))}
                </ol>
              </Card>
            </nav>

            <article className="max-w-[68ch]">
              {numbers.map((n) => (
                <section key={n} id={`${prefix}-${n}`} className="scroll-mt-28 border-t border-jotu-line py-8 first:border-t-0 first:pt-0 lg:scroll-mt-36">
                  <h2 className="font-title text-h3 font-semibold text-balance text-jotu-navy-950">{t(`${prefix}.section${n}`)}</h2>
                  <p className="mt-4 text-[1.0625rem] leading-8 text-pretty text-jotu-ink">{t(`${prefix}.p${n}`)}</p>
                </section>
              ))}
            </article>
          </Container>
        </Section>
      </main>
    </>
  );
};
