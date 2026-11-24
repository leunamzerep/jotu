// Reseñas copiadas A MANO del perfil de Google de JoTu. No hay API ni peticiones en runtime.
//
// REGLAS: el texto va textual (ni una palabra cambiada, sin corregir ortografía ni
// signos). Solo se normalizan espacios (dobles → uno, y sin espacio antes de comas).
// Cada elemento de `text` es un párrafo. Sin foto ni fechas relativas.
//
// rating verificado por Manuel contra Google; no cambiar sin comprobar.

export type ReviewLang = "en" | "es";

export type Review = {
  id: number;
  /** Nombre tal como aparece en Google */
  author: string;
  /** Idioma original del texto (no se traduce) */
  lang: ReviewLang;
  /** Estrellas en Google (1–5) */
  rating: 5;
  /** Párrafos del texto original */
  text: string[];
};

const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    author: "Karim Elghannam",
    lang: "en",
    rating: 5,
    text: [
      "I usually don’t write reviews, but I genuinely felt compelled to share how great my experience with Jotu Solutions LLC has been.",
      "I came to them needing help with forming a U.S. LLC and figuring out the tax side of things, and honestly, I had no idea where to start. From the first message, they made everything feel simple and manageable. They explained each step clearly, answered every question (and I had a lot), and never made me feel rushed or like I was just another client.",
      "What really stood out to me was how responsive and approachable they were. Whether it was a quick WhatsApp message or a detailed email, they always got back to me quickly with solid answers. It made the whole process smooth and stress-free.",
      "They also gave me some great advice around Canadian visa options, which wasn’t something I originally went to them for — but they took the time to help anyway. That kind of care and attention is rare.",
      "If you’re looking for a reliable, down-to-earth team to help with LLC setup, taxes, or even immigration-related guidance, I can’t recommend them enough. You’ll be in good hands.",
    ],
  },
  {
    id: 2,
    author: "Paula Correa Solano",
    lang: "en",
    rating: 5,
    text: [
      "Working with the team at Jotu Solutions LLC, especially Cindy Villamarín, has been an outstanding experience. Cindy has been an invaluable resource for our company, always taking the time to address our questions and concerns with professionalism, expertise, and genuine care.",
      "Her proactive approach and attention to detail consistently put her one step ahead, giving us confidence that our tax matters are being handled thoroughly and efficiently. We truly appreciate the level of support and dedication the entire team provides.",
      "We highly recommend Jotu Solutions LLC to any business looking for knowledgeable, reliable, and professional tax services, and we look forward to continuing our partnership with them.",
    ],
  },
  {
    id: 3,
    author: "anne muldoon",
    lang: "en",
    rating: 5,
    text: [
      "Excellent Accounting Partner for Small Businesses",
      "As a small business owner, finding a reliable and knowledgeable accounting service was one of my biggest challenges—until I started working with Cindy & her team has been incredibly professional, responsive, and proactive in helping me manage everything from bookkeeping and payroll to tax planning and financial reporting.",
      "They take the time to explain things clearly and make sure I understand my financial position, which has helped me make smarter business decisions. What I appreciate most is how approachable and detail-oriented they are — no question ever feels too small, and they always deliver on time.",
      "Thanks to Cindy I finally have peace of mind knowing my finances are in good hands. I’d highly recommend them to any small business looking for dependable, expert accounting support.",
    ],
  },
  {
    id: 4,
    author: "Monica J Castillo R",
    lang: "es",
    rating: 5,
    text: [
      "Cindy y su compañía Jotu Solutions LLC fueron de gran ayuda para poder poner a andar mi sueño y proyecto de Bienestar, su ayuda fue eficaz y todo resultó muy bien, gracias por tu ayuda 🙏🤍 súper recomendada",
    ],
  },
  {
    id: 5,
    author: "Adriana Cano",
    lang: "es",
    rating: 5,
    text: [
      "Mi experiencia con ustedes ha sido excelente, he recibido varios servicios para mi marca personal y en todos he tenido muy buena experiencia, aquellas personas que necesites hacer gestiones contables o de taxes o temas de sociedades que lo hagan tranquilamente y a demás de forma segura. Muchas gracias de nuevo.",
    ],
  },
  {
    id: 6,
    author: "kevin llanes",
    lang: "es",
    rating: 5,
    text: [
      "La manera en la que Jotusolutions me orientó con mi declaración de impuestos, informándome acerca de mis beneficios fiscales fue increíble, seguimiento durante todo el proceso, súper recomendado!!",
    ],
  },
  {
    id: 7,
    author: "Juan Mideros",
    lang: "es",
    rating: 5,
    text: [
      "Excelente atención, soy cliente extranjero y estoy muy conforme con su servicio contable en los Estados Unidos, Recomendado 100%",
    ],
  },
  {
    id: 8,
    author: "Alvaro Narvaez",
    lang: "es",
    rating: 5,
    text: [
      "Excelente servicio el de Cindy y su equipo, alta proactividad, respuestas oportunas y siempre atentos a uno como cliente. Los recomiendo sin dudarlo!!",
    ],
  },
  {
    id: 9,
    author: "Daihana Rivero",
    lang: "es",
    rating: 5,
    text: [
      "Gracias por el gran apoyo y la asesoría constante. Han sido muy profesionales, atentos y amables, lo que nos ha dado mucha confianza en todo el proceso.",
    ],
  },
  {
    id: 10,
    author: "Elpis NYC",
    lang: "en",
    rating: 5,
    text: [
      "Jotu solutions really is the best when it comes to business solutions. They use all the right methods to get your business where it needs to be! I will definitely keep working with their services. Extremely recommended!!",
    ],
  },
];

// Orden de aparición: alterna idiomas cuando se puede.
const ORDER = [5, 1, 6, 10, 7, 2, 8, 3, 9, 4];

export const REVIEWS: Review[] = ORDER.flatMap((id) => REVIEWS_DATA.filter((r) => r.id === id));

/** Perfil de Google donde están todas las reseñas */
export const ALL_REVIEWS_URL = "https://maps.app.goo.gl/CFMeh8QKgCVdzRwr8";
