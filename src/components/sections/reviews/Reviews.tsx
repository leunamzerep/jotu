import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cx } from "@/components/ui/cx";
import { ALL_REVIEWS_URL, REVIEWS, type Review } from "@/data/reviews";

const Chevron = ({ dir }: { dir: "left" | "right" }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    className="size-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
  </svg>
);

// Logo oficial de Google (archivo que colocó Manuel en public/). Para cambiarlo,
// reemplaza ese archivo o cambia solo esta constante. No se dibuja en código.
const GOOGLE_LOGO_SRC = `${import.meta.env.BASE_URL}Google__G__logo.svg.webp`;

/** Una reseña más larga que esto se recorta en esta palabra, con "Leer más" */
const MAX_WORDS = 52;

const words = (p: string) => p.split(/\s+/).filter(Boolean);

/** Recorta los párrafos en la palabra MAX_WORDS (contando entre párrafos) y añade "…". */
const truncate = (paragraphs: string[]) => {
  let left = MAX_WORDS;
  const out: string[] = [];
  for (const p of paragraphs) {
    const w = words(p);
    if (w.length < left) {
      out.push(p);
      left -= w.length;
    } else {
      out.push(`${w.slice(0, left).join(" ")}…`);
      break;
    }
  }
  return out;
};

const Star = () => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="size-5 fill-jotu-star">
    <path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96L12 2.5z" />
  </svg>
);

const ReviewCard = ({ review, index, total }: { review: Review; index: number; total: number }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const bodyId = useId();
  const bodyRef = useRef<HTMLQuoteElement>(null);
  // Alto del texto al expandir: se congela para que la tarjeta no crezca y el texto largo haga scroll dentro
  const [lockedHeight, setLockedHeight] = useState<number>();
  const long = review.text.reduce((n, p) => n + words(p).length, 0) > MAX_WORDS;
  const shown = long && !open ? truncate(review.text) : review.text;

  return (
    <figure
      role="group"
      aria-roledescription="slide"
      aria-label={t("reviews.cardLabel", { n: index + 1, total })}
      className={cx(
        // Todas las tarjetas miden lo mismo (el track las estira); el texto largo hace scroll dentro
        // "relative": el enlace del autor se estira sobre toda la tarjeta (clic en cualquier parte)
        "relative",
        "flex shrink-0 snap-start flex-col gap-4 rounded-card border border-jotu-line bg-jotu-white p-6 shadow-soft sm:p-8",
        "basis-full md:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-2.5rem)/3)]",
      )}
    >
      <div className="flex items-center gap-3">
        <img src={GOOGLE_LOGO_SRC} alt="Google" className="h-6 w-auto" />
        <span role="img" aria-label={t("reviews.stars", { rating: review.rating })} className="flex">
          {Array.from({ length: review.rating }, (_, i) => (
            <Star key={i} />
          ))}
        </span>
      </div>
      <figcaption className="font-title text-lg font-semibold text-jotu-navy-950">
        <a
          href={review.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("reviews.viewOnGoogle", { author: review.author })}
          className="rounded-sm after:absolute after:inset-0 after:rounded-card after:content-[''] hover:underline hover:decoration-jotu-teal-600/60 hover:underline-offset-4"
        >
          {review.author}
        </a>
      </figcaption>
      <blockquote
        ref={bodyRef}
        id={bodyId}
        lang={review.lang}
        tabIndex={open && lockedHeight ? 0 : undefined}
        style={open && lockedHeight ? { height: lockedHeight } : undefined}
        className={cx(
          "flex flex-col gap-3 text-pretty text-jotu-ink-muted [overflow-wrap:anywhere]",
          // La barra de scroll vive en el padding de la tarjeta (margen negativo + hueco fijo):
          // el ancho del texto es el mismo con o sin scroll, y no se mueve al expandir.
          "-me-3 pe-1 [scrollbar-gutter:stable] [scrollbar-width:thin]",
          open && lockedHeight ? "relative z-10 flex-none overflow-y-auto overscroll-contain" : "flex-1 overflow-y-auto",
        )}
      >
        {shown.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </blockquote>
      {long && (
        <button
          type="button"
          aria-expanded={open}
          aria-controls={bodyId}
          onClick={() => {
            setLockedHeight(open ? undefined : bodyRef.current?.getBoundingClientRect().height);
            setOpen((o) => !o);
          }}
          className="relative z-10 self-start rounded-sm text-sm font-semibold text-jotu-teal-600 underline decoration-jotu-teal-600/30 underline-offset-4 hover:decoration-jotu-teal-600"
        >
          {t(open ? "reviews.readLess" : "reviews.readMore")}
        </button>
      )}
    </figure>
  );
};

type Props = { reviews?: Review[] };

/** Reseñas copiadas a mano (src/data/reviews.ts). Carrusel nativo con scroll-snap. */
export const Reviews = ({ reviews = REVIEWS }: Props) => {
  const { t } = useTranslation();
  const trackRef = useRef<HTMLDivElement>(null);
  const [nav, setNav] = useState({ canScroll: false, atStart: true, atEnd: true });

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setNav({ canScroll: max > 1, atStart: el.scrollLeft <= 1, atEnd: el.scrollLeft >= max - 1 });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    Array.from(el.children).forEach((c) => ro.observe(c));
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update, reviews]);

  const go = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (el.clientWidth + gap), behavior: reduce ? "auto" : "smooth" });
  };

  if (reviews.length === 0) return null;

  return (
    <Section tone="paper">
      <Container>
        <div data-reveal="up">
          <SectionHeading title={t("reviews.title")} lead={t("reviews.note")} align="center" />
        </div>

        <section
          aria-roledescription="carousel"
          aria-label={t("reviews.title")}
          className="relative mt-12"
        >
          <div
            ref={trackRef}
            tabIndex={0}
            className={cx(
              "flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]",
              "motion-safe:scroll-smooth",
            )}
          >
            {reviews.map((r, i) => (
              <ReviewCard key={r.id} review={r} index={i} total={reviews.length} />
            ))}
          </div>

          {nav.canScroll && (
            <div className="mt-6 flex justify-center gap-3">
              {(["left", "right"] as const).map((dir) => (
                <button
                  key={dir}
                  type="button"
                  onClick={() => go(dir === "left" ? -1 : 1)}
                  disabled={dir === "left" ? nav.atStart : nav.atEnd}
                  aria-label={t(dir === "left" ? "reviews.prev" : "reviews.next")}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-jotu-navy-950/25 text-jotu-navy-950 transition-colors hover:border-jotu-teal-600 hover:text-jotu-teal-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-jotu-navy-950/25 disabled:hover:text-jotu-navy-950"
                >
                  <Chevron dir={dir} />
                </button>
              ))}
            </div>
          )}
        </section>

        <div className="mt-10 flex justify-center">
          <Button href={ALL_REVIEWS_URL} variant="link">
            {t("reviews.all")}
          </Button>
        </div>
      </Container>
    </Section>
  );
};
