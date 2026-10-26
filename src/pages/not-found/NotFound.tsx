import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import { PATHS } from "@/config/paths";
import { Button } from "@/components/ui/Button";
import { LotusPetals } from "@/components/ui/Decor";
import { Container, Section } from "@/components/ui/Section";

/**
 * Página para cualquier URL que no existe (ruta "*" de src/app/App.tsx).
 * GitHub Pages responde a esas URL con public/404.html (estado 404 real), que
 * redirige aquí. Lleva noindex y no tiene canonical: no debe indexarse.
 */
export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet defer={false}>
        <title>{t("seo.notFoundTitle")}</title>
        <meta name="description" content={t("seo.notFoundDescription")} />
        <meta name="robots" content="noindex" />
      </Helmet>

      <main data-ui="new">
        <Section tone="paper" className="overflow-hidden">
          <LotusPetals className="pointer-events-none absolute -right-16 -bottom-8 w-[28rem] text-jotu-teal-600/10" />
          <Container className="relative flex flex-col items-center gap-6 text-center">
            <p aria-hidden="true" className="font-title text-[clamp(5rem,3rem+10vw,9rem)] leading-none font-semibold text-jotu-teal-600">
              404
            </p>
            <h1 className="font-title text-h1 font-semibold text-balance text-jotu-navy-950">{t("notFound.title")}</h1>
            <p className="max-w-xl text-lead text-pretty text-jotu-ink-muted">{t("notFound.description")}</p>
            <Button to={PATHS.home}>{t("notFound.cta")}</Button>
          </Container>
        </Section>
      </main>
    </>
  );
};
