// Datos del sitio en un solo lugar: dominio, contacto, redes y servicios externos.
// Si cambia alguno de estos datos, cámbialo aquí. Ojo: public/sitemap.xml,
// public/robots.txt e index.html son archivos estáticos y repiten el dominio.
// Los canonical de cada página (Helmet) también lo repiten hasta la Sesión B.

/** Dominio oficial (sin barra final). */
export const SITE_URL = "https://jotusolutions.net";

/**
 * Teléfono tal como se muestra hoy en la web (ContactCard).
 * PENDIENTE: el formato visible se decide más adelante; en Términos aparece
 * como "+1 (917) 915-6583" (texto legal, no se toca).
 */
export const PHONE_DISPLAY = "+1(917)915-6583";

/** Enlace para llamar. Todavía no se usa en la web (hoy no hay enlace tel:). */
export const PHONE_TEL = "tel:+19179156583";

/**
 * Enlace de WhatsApp con el mensaje inicial ya codificado, tal como está hoy.
 * PENDIENTE: el mensaje dice "Lunes a Viernes de 9:00 a.m. a 5:00 p.m. (hora
 * Miami)", pero Contacto dice "Lunes a Sábado". El horario real está por confirmar.
 */
export const WHATSAPP_URL =
  "https://wa.me/19179156583?text=%F0%9F%91%8B%20%C2%A1Hola!%0AGracias%20por%20comunicarte%20con%20JoTu%20Solutions%20LLC.%0A%0A%F0%9F%95%92%20Nuestro%20horario%20de%20atenci%C3%B3n%20es:%0ALunes%20a%20Viernes%20de%209:00%20a.m.%20a%205:00%20p.m.%20(hora%20Miami).%0A%0A%E2%9C%85%20En%20breve,%20uno%20de%20nuestros%20representantes%20te%20responder%C3%A1.%0AMientras%20tanto,%20por%20favor%20dinos%20tu%20nombre%20y%20c%C3%B3mo%20podemos%20ayudarte.%0A%0A%F0%9F%93%8C%20%C2%A1Gracias%20por%20elegir%20a%20JoTu%20Solutions%20LLC";

/** Correo de contacto. El enlace que abre Gmail vive en i18n (footer.mailRedirect). */
export const EMAIL = "info@jotusolutions.net";

/**
 * Dirección de la oficina, solo como referencia: el texto visible sale de
 * i18n (contact.ubih32 y los textos legales), que no se tocan.
 */
export const ADDRESS = "2875 S Orange Ave, Orlando, FL 32806";

/** Google Maps: enlace "cómo llegar" y mapa incrustado de Contacto. */
export const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir//2875+S+Orange+Ave+Orlando,+FL+32806+EE.+UU./@28.509644,-81.3734382,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88e77b71f8a223ed:0x3718d2730d0435af!2m2!1d-81.3734382!2d28.509644?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";
export const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112192.0039618475!2d-81.373438!3d28.509644!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77b71f8a223ed%3A0x3718d2730d0435af!2s2875%20S%20Orange%20Ave%2C%20Orlando%2C%20FL%2032806!5e0!3m2!1ses-419!2sus!4v1765601806615!5m2!1ses-419!2sus";

/**
 * Horario de atención. PENDIENTE: hoy el texto visible sale de i18n
 * (contact.ubih33: "Lunes a Sábado 9 AM - 5 PM") y no coincide con el
 * mensaje de WhatsApp ("Lunes a Viernes"). Confirmar con el dueño.
 */

/** Redes sociales. */
export const INSTAGRAM_URL = "https://www.instagram.com/jotusolutions";
export const FACEBOOK_URL = "https://www.facebook.com/people/JOTU-Solutions-LLC/61576996550658";

/**
 * Cloudflare Worker que recibe el formulario de contacto (endpoint público,
 * no es secreto). No cambiar: ver CLAUDE.md.
 */
export const CONTACT_WORKER_URL = "https://contact-jotu.zumiasolutions.workers.dev/api/contacto";

/** Google Apps Script que devuelve las publicaciones de Instagram de Inicio (endpoint público). */
export const INSTAGRAM_FEED_URL =
  "https://script.google.com/macros/s/AKfycbxUVbLkNodz54cSxQmlwy18-dad-k82RQG2niRG4oH9RIA5Wov_SempUyIxb23OA0M8Rg/exec";
