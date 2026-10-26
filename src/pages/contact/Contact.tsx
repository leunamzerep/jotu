import type { CSSProperties } from "react";
import { useTranslation, Trans } from "react-i18next";

import { PageSeo } from "@/components/seo/PageSeo";
import { ContactForm } from "@/components/forms/contactForm/ContactForm";
import { Card } from "@/components/ui/Card";
import { LotusPetals } from "@/components/ui/Decor";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";
import { Picture } from "@/components/ui/Picture";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EMAIL, MAPS_DIRECTIONS_URL, MAPS_EMBED_URL, PHONE_DISPLAY, PHONE_TEL } from "@/config/site";

const link =
  "rounded-sm font-semibold text-jotu-navy-950 underline decoration-jotu-teal-600/40 underline-offset-4 " +
  "transition-colors hover:text-jotu-teal-600 hover:decoration-jotu-teal-600";

export const Contact = () => {
  const { t } = useTranslation();
  const mailLink: string = t("footer.mailRedirect");

  return (
    <>
      <PageSeo title={t("seo.contactTitle")} description={t("seo.contactDescription")} />

      <main data-ui="new">
        {/* Héroe */}
        <Section tone="paper" className="overflow-hidden !pt-12 lg:!pt-20">
          <LotusPetals className="pointer-events-none absolute -top-6 -left-16 w-96 text-jotu-teal-600/10" />
          <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <h1 className="font-title text-h1 font-semibold text-balance text-jotu-navy-950">{t("contact.main")}</h1>
            <div className="overflow-hidden rounded-card shadow-lift">
              <Picture
                name="contactMainImg"
                alt=""
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
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
