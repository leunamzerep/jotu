import { useTranslation } from "react-i18next";

import { PageSeo } from "@/components/seo/PageSeo";
import { ContactCard } from "@/components/sections/contactCard/ContactCard";
import { FormsSection } from "@/components/sections/forms/FormsSection";
import { InstagramFeed } from "@/components/sections/instagramFeed/InstagramFeed";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LotusPetals } from "@/components/ui/Decor";
import { Picture } from "@/components/ui/Picture";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PATHS } from "@/config/paths";
import { useWhatsappUrl } from "@/config/whatsapp";

// Servicios: claves home.title<n> / home.text<n> y la foto de cada uno
const SERVICES = [1, 2, 3, 4, 5, 6] as const;

export const Home = () => {
  const { t } = useTranslation();
  const whatsappUrl = useWhatsappUrl();

  return (
    <>
      <PageSeo title={t("seo.homeTitle")} description={t("seo.homeDescription")} />

      <main data-ui="new">
        {/* Héroe */}
        <Section tone="paper" className="overflow-hidden !pt-12 lg:!pt-20">
          <LotusPetals className="pointer-events-none absolute -top-6 -left-16 w-96 text-jotu-teal-600/10" />
          <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start gap-8">
              <h1 className="font-title text-display font-semibold text-balance text-jotu-navy-950">{t("home.main")}</h1>
              <div className="flex flex-wrap gap-4">
                <Button to={PATHS.contact}>{t("card.contactUs")}</Button>
                <Button href={whatsappUrl} variant="secondary">
                  {t("card.schedule")}
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-card shadow-lift">
              <Picture
                name="mainImg"
                alt=""
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Container>
        </Section>

        {/* Servicios */}
        <Section tone="white">
          <Container>
            <div data-reveal="up">
              <SectionHeading title={t("about.h22")} align="center" />
            </div>
            <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {SERVICES.map((n, i) => (
                <li
                  key={n}
                  className="flex"
                  data-reveal="up"
                  style={{ "--reveal-delay": `${(i % 3) * 100}ms` } as React.CSSProperties}
                >
                  <Card as="article" interactive className="flex w-full flex-col overflow-hidden !p-0">
                    <Picture
                      name={`home${n}`}
                      alt=""
                      sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                      className="aspect-[3/2] w-full object-cover"
                    />
                    <div className="flex flex-col gap-3 p-6 md:p-8">
                      <h3 className="font-title text-h3 font-semibold text-jotu-navy-950">{t(`home.title${n}`)}</h3>
                      <p className="text-jotu-ink-muted">{t(`home.text${n}`)}</p>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <FormsSection />
        <InstagramFeed />
        <ContactCard />
      </main>
    </>
  );
};
