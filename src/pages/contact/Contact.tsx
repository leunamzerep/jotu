import { useEffect, type CSSProperties } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import { PageSeo } from "@/components/seo/PageSeo";
import { ContactForm } from "@/components/forms/contactForm/ContactForm";
import { Card } from "@/components/ui/Card";
import { LotusPetals } from "@/components/ui/Decor";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";
import { Picture } from "@/components/ui/Picture";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BOOKING_ID, PATHS } from "@/config/paths";
import { BOOKING_URL, EMAIL, MAPS_DIRECTIONS_URL, MAPS_EMBED_URL, PHONE_DISPLAY, PHONE_TEL } from "@/config/site";

const link =
  "rounded-sm font-semibold text-jotu-navy-950 underline decoration-jotu-teal-600/40 underline-offset-4 " +
  "transition-colors hover:text-jotu-teal-600 hover:decoration-jotu-teal-600";

export const Contact = () => {
  const { t } = useTranslation();
  const mailLink: string = t("footer.mailRedirect");
  const { hash, key } = useLocation();

  // Con /contact/#agenda baja a la agenda: suave, o al instante si el sistema
  // pide "reducir movimiento". Se repite si se vuelve a pulsar el botón.
  useEffect(() => {
    if (hash !== `#${BOOKING_ID}`) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(BOOKING_ID)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }, [hash, key]);

  return (
    <>
      <PageSeo title={t("seo.contactTitle")} description={t("seo.contactDescription")} />

      <main data-ui="new">
        {/* Héroe: título y agenda de citas (destino de los botones "Agenda tu Asesoría") */}
        <Section id={BOOKING_ID} tone="paper" labelledBy="contact-title" className="scroll-mt-18 overflow-hidden !pt-12 lg:!pt-20">
          <LotusPetals className="pointer-events-none absolute -top-6 -left-16 w-96 text-jotu-teal-600/10" />
          <Container className="relative flex flex-col gap-10 lg:gap-12">
            <h1 id="contact-title" className="max-w-3xl font-title text-h1 font-semibold text-balance text-jotu-navy-950">
              {t("contact.main")}
            </h1>
            {/* Celular: título, agenda, aviso y foto, uno debajo de otro y del mismo ancho.
                Escritorio: la foto va a la derecha de la agenda, con su mismo alto (fila 2 de la cuadrícula).
                Alto del iframe medido a mano para que el calendario de Google no tenga scroll interno */}
            <div className="grid grid-cols-1 gap-x-12 gap-y-4 lg:grid-cols-[1.7fr_1fr]">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h2 className="font-title text-h3 font-semibold text-jotu-navy-950">{t("card.schedule")}</h2>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`text-sm ${link}`}>
                  {t("booking.openNewTab")}
                </a>
              </div>
              <div className="overflow-hidden rounded-card border border-jotu-line bg-jotu-white shadow-soft lg:col-start-1 lg:row-start-2">
                <iframe
                  title={t("booking.iframeTitle")}
                  src={BOOKING_URL}
                  loading="lazy"
                  className="block h-[1120px] w-full border-0 md:h-[720px] lg:h-[640px]"
                />
              </div>
              <p className="text-sm text-jotu-ink-muted lg:col-start-1 lg:row-start-3">
                <Trans i18nKey="booking.privacyNote" components={{ 1: <Link to={PATHS.privacy} className={link} /> }} />
              </p>
              <div className="mt-4 overflow-hidden rounded-card shadow-lift lg:col-start-2 lg:row-start-2 lg:mt-0 lg:*:h-full">
                <Picture
                  name="contactMainImg"
                  alt=""
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="aspect-[4/3] w-full object-cover md:aspect-[16/9] lg:aspect-auto lg:h-full"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Formulario y datos */}
        <Section tone="white">
          <Container className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div data-reveal="up">
              <ContactForm />
            </div>
            <div data-reveal="up" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
              <Card className="flex flex-col gap-8 bg-jotu-paper">
                <div className="flex gap-4">
                  <ClockIcon className="mt-1 size-5 shrink-0 text-jotu-teal-600" />
                  <div>
                    <h2 className="font-title text-h3 font-semibold text-jotu-navy-950">{t("contact.ubih23")}</h2>
                    <p className="mt-2 text-jotu-ink-muted">{t("contact.ubih33")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPinIcon className="mt-1 size-5 shrink-0 text-jotu-teal-600" />
                  <div>
                    <h2 className="font-title text-h3 font-semibold text-jotu-navy-950">{t("contact.ubih21")}</h2>
                    <p className="mt-2 text-jotu-ink-muted">{t("contact.ubih31")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPinIcon className="mt-1 size-5 shrink-0 text-jotu-teal-600" />
                  <div>
                    <h2 className="font-title text-h3 font-semibold text-jotu-navy-950">{t("contact.ubih22")}</h2>
                    <p className="mt-2 text-jotu-ink-muted">{t("contact.ubih32")}</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-4 border-t border-jotu-line pt-6">
                  <li className="flex items-center gap-4">
                    <PhoneIcon className="size-5 shrink-0 text-jotu-teal-600" />
                    <a href={PHONE_TEL} className={link}>{PHONE_DISPLAY}</a>
                  </li>
                  <li className="flex items-center gap-4">
                    <MailIcon className="size-5 shrink-0 text-jotu-teal-600" />
                    <a href={mailLink} className={link}>{EMAIL}</a>
                  </li>
                </ul>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Cómo llegar y mapa */}
        <Section tone="mist">
          <Container className="flex flex-col gap-10">
            <div data-reveal="up">
              <SectionHeading title={t("contact.ubih24")} align="center" />
              <p className="mx-auto mt-5 max-w-xl text-center text-lead text-jotu-ink-muted">
                <Trans
                  i18nKey="contact.ubih34"
                  components={{
                    1: (
                      <a
                        className="rounded-sm font-semibold text-jotu-teal-600 underline underline-offset-4"
                        href={MAPS_DIRECTIONS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                  }}
                />
              </p>
            </div>
            <div className="overflow-hidden rounded-card border border-jotu-line shadow-soft" data-reveal="up">
              <iframe
                title={t("alt.map")}
                src={MAPS_EMBED_URL}
                width="100%"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block w-full border-0"
              />
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};
