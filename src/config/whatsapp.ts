import { useTranslation } from "react-i18next";

import { WHATSAPP_URL } from "./site";

/**
 * Enlace de WhatsApp al número de WHATSAPP_URL (src/config/site.ts) con un
 * mensaje ya escrito.
 */
export const whatsappWithMessage = (message: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

/**
 * Enlace general de WhatsApp con el mensaje en el idioma visible
 * (whatsapp.message en es.json / en.json).
 */
export const useWhatsappUrl = () => {
  const { t } = useTranslation();
  return whatsappWithMessage(t("whatsapp.message"));
};
