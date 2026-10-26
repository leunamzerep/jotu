import { WHATSAPP_URL } from "./site";

/**
 * Enlace de WhatsApp al mismo número de WHATSAPP_URL (src/config/site.ts), pero
 * con otro mensaje ya escrito. Todavía no se usa: hoy toda la web usa
 * WHATSAPP_URL con su mensaje fijo en español (PENDIENTE: mensaje por idioma).
 */
export const whatsappWithMessage = (message: string) =>
  `${WHATSAPP_URL.split("?")[0]}?text=${encodeURIComponent(message)}`;
