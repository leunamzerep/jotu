import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import { PATHS } from "@/config/paths";
import styles from "./NotFound.module.css";

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

      <main className={styles.main}>
        <p className={styles.code} aria-hidden="true">404</p>
        <h1 className={styles.title}>{t("notFound.title")}</h1>
        <p className={styles.text}>{t("notFound.description")}</p>
        <Link to={PATHS.home} className={styles.button}>{t("notFound.cta")}</Link>
      </main>
    </>
  );
};
