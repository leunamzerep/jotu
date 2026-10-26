import type { CSSProperties } from "react";
import { useTranslation } from "react-i18next";

import { PageSeo } from "@/components/seo/PageSeo";
import { ContactCard } from "@/components/sections/contactCard/ContactCard";
import { LotusPetals } from "@/components/ui/Decor";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Picture } from "@/components/ui/Picture";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cx } from "@/components/ui/cx";

// Bloques: claves about.h2<n> (título) y about.h3<n> (texto) y su foto about<n>.
// Los textos vienen en pares: h22/h32 … h27/h37 (el h32 va con h22, el h33 con h23…).
const BLOCKS = [
  { photo: "about1", title: "about.h22", text: "about.h32" },
  { photo: "about2", title: "about.h23", text: "about.h33" },
  { photo: "about3", title: "about.h24", text: "about.h34" },
  { photo: "about4", title: "about.h25", text: "about.h35" },
  { photo: "about5", title: "about.h26", text: "about.h36" },
  { photo: "about6", title: "about.h27", text: "about.h37" },
] as const;

// Nombres de marcas (no se traducen) y su perfil de Instagram
const CLIENTS = [
  { photo: "client1", name: "Huarike Peruvian Cuisine", href: "https://www.instagram.com/huarikeperuviancuisine?igsh=dWZtOWttZjBhZjBr" },
  { photo: "client2", name: "Made Interiores", href: "https://www.instagram.com/madeinteriorsus?igsh=MW9sbHc5Y3FpaWt3dA==" },
  { photo: "client3", name: "Corner Social", href: "https://www.instagram.com/cornersocial?igsh=MWNmOWl1Z2o0ZmJvZA==" },
  { photo: "client4", name: "Curleys Bagels", href: "https://www.instagram.com/curleys_bagels?igsh=MWhiOXJod2lrNTkzNA==" },
  { photo: "client5", name: "The Lowery Bar & Kitchen", href: "https://www.instagram.com/thelowerybar?igsh=cHl1N2g0N2RveDRo" },
  { photo: "client6", name: "Elpis NYC", href: "https://www.instagram.com/elpisnyc?igsh=MWRhbGVmczJhY3p6cA==" },
] as const;

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageSeo title={t("seo.aboutUsTitle")} description={t("seo.aboutUsDescription")} />

      <main data-ui="new">
        {/* Héroe */}
        <Section tone="paper" className="overflow-hidden !pt-12 lg:!pt-20">
          <LotusPetals className="pointer-events-none absolute -top-6 -left-16 w-96 text-jotu-teal-600/10" />
          <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start gap-6">
              <Eyebrow>{t("about.h21")}</Eyebrow>
              <h1 className="font-title text-h1 font-semibold text-balance text-jotu-navy-950">{t("about.h1")}</h1>
              <p className="text-lead text-pretty text-jotu-ink-muted">{t("about.h31")}</p>
            </div>
            <div className="overflow-hidden rounded-card shadow-lift">
              <Picture
                name="aboutImg"
                alt=""
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Container>
        </Section>

        {/* Seis bloques: foto y texto, alternados */}
        <Section tone="white">
          <Container className="flex flex-col gap-16 lg:gap-24">
            {BLOCKS.map(({ photo, title, text }, i) => (
              <article
                key={photo}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
                data-reveal="up"
              >
                <div className={cx("overflow-hidden rounded-card shadow-soft", i % 2 === 1 && "lg:order-2")}>
                  <Picture
                    name={photo}
                    alt=""
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <h2 className="font-title text-h2 font-semibold text-balance text-jotu-navy-950">{t(title)}</h2>
                  <p className="text-lead text-pretty text-jotu-ink-muted">{t(text)}</p>
                </div>
              </article>
            ))}
          </Container>
        </Section>

        {/* Fundadores */}
        <Section tone="mist" className="overflow-hidden">
          <LotusPetals className="pointer-events-none absolute -right-20 -bottom-6 w-[28rem] text-jotu-teal-600/10" />
          <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-card shadow-lift lg:mx-0 lg:justify-self-end" data-reveal="up">
              <Picture
                name="fundadores"
                alt={t("alt.founders")}
                sizes="(min-width: 1024px) 384px, 90vw"
                className="aspect-[4/5] w-full object-cover object-[50%_35%]"
              />
            </div>
            <div className="flex flex-col gap-8" data-reveal="up" style={delay(120)}>
              <SectionHeading title={t("founders.title")} />
              <ul className="flex flex-col divide-y divide-jotu-line border-y border-jotu-line">
                <li className="py-5 font-title text-h3 text-jotu-navy-950">{t("founders.name1")}</li>
                <li className="py-5 font-title text-h3 text-jotu-navy-950">{t("founders.name2")}</li>
              </ul>
            </div>
          </Container>
        </Section>

        {/* Clientes */}
        <Section tone="white">
          <Container>
            <div data-reveal="up">
              <SectionHeading title={t("about.clients")} align="center" />
            </div>
            <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:max-w-none lg:grid-cols-6 lg:gap-6">
              {CLIENTS.map(({ photo, name, href }, i) => (
                <li key={photo} data-reveal="up" style={delay((i % 3) * 100)}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t("about.from")} ${name}`}
                    title={`${t("about.from")} ${name}`}
                    className={cx(
                      "flex aspect-square items-center justify-center rounded-card border border-jotu-line bg-jotu-white p-5 shadow-soft",
                      "transition-[translate,box-shadow] duration-300 motion-safe:[@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:shadow-lift",
                    )}
                  >
                    <Picture
                      name={photo}
                      alt={t("alt.client", { name })}
                      sizes="(min-width: 1024px) 160px, 40vw"
                      className="size-full object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <ContactCard />
      </main>
    </>
  );
};
