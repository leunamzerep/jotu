import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TextAreaField, TextField } from "@/components/ui/Field";
import { CONTACT_WORKER_URL } from "@/config/site";

type SubmitState = "idle" | "loading" | "success" | "error";

export const ContactForm = () => {

  const { t } = useTranslation();

  const buildGmailLink = (to: string, subject: string, body: string) => {
    const params = new URLSearchParams({
      fs: "1", to, su: subject, body, tf: "cm"
    });
    return `https://mail.google.com/mail/u/0/?${params.toString()}`
  }

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const newErrors = {
      name: name === "",
      email: email === "" || !isValidEmail(email),
      message: message === "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    setSubmitState("loading");

    const link = buildGmailLink(
      email,
      t("contact.label3"),
      `${t("contact.mail1")} ${name}\n\n${t("contact.mail2")}\n\n"${message}"\n\n${t("contact.mail3")}`
    );

    try {
      const res = await fetch(CONTACT_WORKER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          link,
        }),
      });

      const json = await res.json();

      if (json.ok) {
        setSubmitState("success");
        form.reset();
      } else {
        throw new Error(json.error || "Error al enviar");
      }

      // El aviso de éxito se quita solo a los pocos segundos
      setTimeout(() => {
        setSubmitState("idle");
      }, 4567);
    } catch {
      // Si falla, el aviso de error se queda hasta el siguiente intento
      setSubmitState("error");
    }
  };

  const required = t("contact.warn");

  return (
    <Card>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <h2 className="font-title text-h3 font-semibold text-balance text-jotu-navy-950">{t("contact.invitation")}</h2>
        <TextField
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          label={t("contact.label1")}
          placeholder={t("contact.place1")}
          error={errors.name ? required : undefined}
        />
        <TextField
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          label={t("contact.label2")}
          placeholder={t("contact.place2")}
          error={errors.email ? required : undefined}
        />
        <TextAreaField
          id="message"
          name="message"
          autoComplete="off"
          label={t("contact.label3")}
          placeholder={t("contact.place3")}
          error={errors.message ? required : undefined}
        />
        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit" disabled={submitState === "loading"}>
            {t("contact.send")}
          </Button>

          {/* Estado del envío: los lectores de pantalla lo anuncian sin mover el foco */}
          <span role="status" aria-live="polite" className="text-sm font-semibold">
            {submitState === "loading" && <span className="text-jotu-ink-muted">{t("contact.processing")}</span>}
            {submitState === "success" && <span className="text-jotu-teal-600">{t("contact.sended")}</span>}
            {submitState === "error" && <span className="text-jotu-navy-900">{t("contact.error")}</span>}
          </span>
        </div>
      </form>
    </Card>
  )
}
