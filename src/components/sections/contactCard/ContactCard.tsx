import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/Button";
import { LotusPetals } from "@/components/ui/Decor";
import { Picture } from "@/components/ui/Picture";
import { Container, Section } from "@/components/ui/Section";
import { PATHS } from "@/config/paths";
import { EMAIL, PHONE_DISPLAY } from "@/config/site";
import { useWhatsappUrl } from "@/config/whatsapp";

const link =
  "rounded-sm text-lg font-semibold text-jotu-snow underline decoration-jotu-turquoise-400/50 underline-offset-4 " +
  "transition-colors hover:text-jotu-turquoise-400 hover:decoration-jotu-turquoise-400";

/** Llamada a contactar al final de Inicio y Nosotros: teléfono (WhatsApp), correo y botón a Contacto. */
export const ContactCard = () => {
  const { t } = useTranslation();
  const whatsappUrl = useWhatsappUrl();
  const mailLink: string = t("footer.mailRedirect");

  return (
    <Section tone="navy" labelledBy="contact-cta-title" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Picture name="contactImg" alt="" sizes="100vw" className="size-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-jotu-navy-950 via-jotu-navy-950/90 to-jotu-navy-950/60" />
      </div>
      <LotusPetals className="pointer-events-none absolute -right-10 -bottom-8 w-80 text-jotu-turquoise-400/20" />

      <Container className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-4" data-reveal="up">
          <h2 id="contact-cta-title" className="font-title text-h2 text-jotu-white">
            {t("card.schedule")}
          </h2>
          <a href={whatsappUrl} className={link}>
            {PHONE_DISPLAY}
          </a>
          <a href={mailLink} className={link}>
            {EMAIL}
          </a>
        </div>
        <div data-reveal="up" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
          <Button to={PATHS.contact} variant="light">
            {t("card.contactUs")}
          </Button>
        </div>
      </Container>
    </Section>
  );
};
