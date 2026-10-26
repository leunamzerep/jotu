import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import { OG_IMAGE, SITE_URL } from "@/config/site";

const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE.path}`;

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
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta property="og:image:width" content={String(OG_IMAGE.width)} />
      <meta property="og:image:height" content={String(OG_IMAGE.height)} />
      <meta property="og:image:alt" content={OG_IMAGE.alt} />
      <meta property="og:site_name" content="JoTu Solutions" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />
      <meta name="twitter:image:alt" content={OG_IMAGE.alt} />
    </Helmet>
  );
};
