import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import { SITE_URL } from "@/config/site";

type PageSeoProps = {
  title: string;
  description: string;
};

// URL absoluta siempre con barra final (/about-us/), porque el build genera
// about-us/index.html y GitHub Pages redirige /about-us → /about-us/. Así
// canonical, og:url y sitemap usan la misma forma, se visite como se visite.
const toAbsoluteUrl = (pathname: string) => {
  const clean = pathname.replace(/\/+$/, "");
  return clean === "" ? `${SITE_URL}/` : `${SITE_URL}${clean}/`;
};

/**
 * Metadatos de cada página: un solo title, description y canonical, más las
 * etiquetas para compartir en redes (og:* y twitter:*). Sin hreflang: los dos
 * idiomas comparten la misma URL. El HTML prerenderizado va en inglés.
 */
export const PageSeo = ({ title, description }: PageSeoProps) => {
  const { pathname } = useLocation();
  const canonicalUrl = toAbsoluteUrl(pathname);

  return (
    <Helmet defer={false}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="JoTu Solutions" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
