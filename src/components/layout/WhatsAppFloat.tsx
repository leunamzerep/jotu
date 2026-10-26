import { useTranslation } from "react-i18next";

import { useWhatsappUrl } from "@/config/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";

/**
 * Botón flotante de WhatsApp, abajo a la derecha. Solo con CSS: sin JavaScript
 * de scroll ni medidas del pie.
 *
 * Va justo antes del <footer>, dentro de un contenedor "sticky" de altura 0
 * pegado al borde inferior de la ventana:
 * - mientras el pie no se ve, el botón queda fijo abajo;
 * - al llegar al pie, el contenedor vuelve a su sitio (encima del pie) y el
 *   botón se detiene ahí, sin taparlo.
 * Como no guarda ninguna posición, cada página empieza igual, venga de donde venga.
 * Respeta la zona segura de los iPhone (env(safe-area-inset-bottom)).
 */
export const WhatsAppFloat = () => {
  const { t } = useTranslation();
  const whatsappUrl = useWhatsappUrl();

  return (
    <div className="pointer-events-none sticky bottom-0 z-30 h-0">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("a11y.whatsapp")}
        className={
          "pointer-events-auto absolute right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] md:right-6 md:bottom-6 " +
          "inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-jotu-white shadow-lift " +
          "ring-4 ring-jotu-white/80 transition-transform duration-200 motion-safe:hover:-translate-y-0.5"
        }
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
};
