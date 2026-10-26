import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { EMAIL, FACEBOOK_URL, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL } from "@/config/site";
import { useWhatsappUrl } from "@/config/whatsapp";
import { PATHS } from "@/config/paths";
import { LotusPetals } from "@/components/ui/Decor";
import { ClockIcon, FacebookIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import logo from "@/assets/img/JoTu_color_1.png";

// Título pequeño de cada columna (estilo etiqueta: mayúsculas espaciadas)
const heading = "mb-5 text-eyebrow font-semibold uppercase text-jotu-teal-600";
const link = "rounded-sm text-jotu-ink transition-colors duration-200 hover:text-jotu-teal-600";
const social =
  "inline-flex size-10 items-center justify-center rounded-full border border-jotu-navy-950/15 text-jotu-navy-950 " +
  "transition-colors duration-200 hover:border-jotu-teal-600 hover:text-jotu-teal-600";

/**
 * Pie de página: logo y redes (Instagram, Facebook, WhatsApp), contacto (teléfono,
 * correo, dirección), horario, legales y el copyright con el año automático. Los datos salen de
 * src/config/site.ts y los textos de los archivos de idioma.
 */
export const Footer = () => {
  const { t } = useTranslation();
  const whatsappUrl = useWhatsappUrl();
  const mailLink: string = t("footer.mailRedirect");

  return (
    <footer className="relative overflow-hidden border-t border-jotu-line bg-jotu-paper text-sm text-jotu-ink">
      {/* Pétalos del loto, muy sutiles, en la esquina */}
      <LotusPetals className="pointer-events-none absolute -right-16 -bottom-10 w-96 text-jotu-teal-600/10" />

      {/* Celular: logo y contacto a lo ancho; horario y legales en dos columnas */}
      <div className="relative container-site grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-[1.2fr_1.4fr_1fr_1fr] lg:gap-12 lg:py-20">
        <div className="col-span-2 flex items-center justify-between gap-6 lg:col-span-1 lg:block">
          <Link to={PATHS.home} aria-label={t("a11y.home")} className="inline-block rounded-md">
            <img src={logo} alt="" width={1220} height={1326} loading="lazy" className="h-20 w-auto lg:h-24" />
          </Link>
          <ul className="flex gap-3 lg:mt-8">
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label={t("a11y.instagram")} className={social}>
                <InstagramIcon className="size-4" />
              </a>
            </li>
            <li>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label={t("a11y.facebook")} className={social}>
                <FacebookIcon className="size-4" />
              </a>
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={t("a11y.whatsapp")} className={social}>
                <WhatsAppIcon className="size-4" />
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h2 className={heading}>{t("header.contact")}</h2>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 size-4 shrink-0 text-jotu-teal-600" />
              <a href={PHONE_TEL} className={link}>{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-start gap-3">
              <MailIcon className="mt-0.5 size-4 shrink-0 text-jotu-teal-600" />
              <a href={mailLink} target="_blank" rel="noopener noreferrer" aria-label={`${EMAIL} – ${t("a11y.email")}`} className={`${link} break-all`}>
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-jotu-teal-600" />
              <span>{t("contact.ubih32")}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={heading}>{t("contact.ubih23")}</h2>
          <p className="flex items-start gap-3">
            <ClockIcon className="mt-0.5 size-4 shrink-0 text-jotu-teal-600" />
            <span>{t("contact.ubih33")}</span>
          </p>
        </div>

        <div>
          <h2 className={heading}>{t("footer.legals")}</h2>
          <ul className="flex flex-col gap-3">
            <li><Link to={PATHS.terms} className={link}>{t("footer.terms")}</Link></li>
            <li><Link to={PATHS.privacy} className={link}>{t("footer.privacy")}</Link></li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-jotu-line">
        <p className="container-site py-6 text-xs text-jotu-ink-muted">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};
