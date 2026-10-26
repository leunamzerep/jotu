import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import { LanguageSwitch } from "@/components/langSwitch/LangSwitch";
import { Button } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { cx } from "@/components/ui/cx";
import { PATHS } from "@/config/paths";
import logo from "@/assets/img/JoTu_color_1.png";
import { NAV_LINKS, isCurrentPath } from "../navLinks";

const MOBILE_MENU_ID = "menu-movil";

// Enlaces del menú de escritorio: la página actual lleva una línea fina teal debajo
const desktopLink = (active: boolean) =>
  cx(
    "relative py-2 text-sm font-semibold tracking-wide transition-colors duration-200",
    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-jotu-teal-600 after:transition-transform after:duration-300",
    active
      ? "text-jotu-navy-950 after:scale-x-100"
      : "text-jotu-ink-muted after:scale-x-0 hover:text-jotu-navy-950 hover:after:scale-x-100",
  );

/**
 * Encabezado fijo arriba. Escritorio (≥1024 px): logo, menú, switch de idioma y
 * botón "Schedule Your Consultation". Celular: logo, switch y botón ☰ que abre
 * un panel a pantalla completa.
 *
 * Sin JavaScript (HTML prerenderizado) se ve igual; el panel del celular está
 * en el HTML pero oculto (invisible: tampoco recibe el foco).
 */
export const Header = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Al cambiar de página, el menú móvil se cierra (y al tocar un enlace de la
  // página en la que ya se está: ver onClick en el panel)
  useEffect(() => setOpen(false), [pathname]);

  // Menú móvil abierto: bloquea el scroll de la página, lleva el foco al primer
  // enlace, cierra con Escape (y devuelve el foco al botón) y mantiene el Tab
  // dentro del menú (botón ☰ + enlaces del panel)
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";

    const focusables = () =>
      [toggleRef.current, ...(panelRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? [])].filter(
        (el): el is HTMLElement => Boolean(el),
      );
    focusables()[1]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      const index = items.indexOf(document.activeElement as HTMLElement);
      const next = e.shiftKey
        ? index <= 0 ? items.length - 1 : index - 1
        : index === items.length - 1 ? 0 : index + 1;
      e.preventDefault();
      items[next].focus();
    };
    document.addEventListener("keydown", onKeyDown);

    // Si la pantalla pasa a tamaño escritorio con el menú abierto, se cierra
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => desktop.matches && setOpen(false);
    desktop.addEventListener("change", onResize);

    return () => {
      root.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-jotu-line bg-jotu-white/95 font-body text-jotu-ink backdrop-blur-sm">
        <a
          href="#contenido"
          className="sr-only rounded-full bg-jotu-navy-950 px-5 py-3 text-sm font-semibold text-jotu-white focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-50"
        >
          {t("a11y.skip")}
        </a>

        <div className="container-site flex h-18 items-center justify-between gap-6 lg:h-24">
          <Link to={PATHS.home} aria-label={t("a11y.home")} className="shrink-0 rounded-md">
            <img src={logo} alt="" width={1220} height={1326} className="h-14 w-auto lg:h-20" />
          </Link>

          <nav aria-label={t("a11y.menu")} className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {NAV_LINKS.map(({ to, labelKey }) => {
                const active = isCurrentPath(pathname, to);
                return (
                  <li key={to}>
                    <Link to={to} aria-current={active ? "page" : undefined} className={desktopLink(active)}>
                      {t(labelKey)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3 lg:gap-5">
            <LanguageSwitch />
            <div className="hidden lg:block">
              <Button to={PATHS.contact}>{t("card.schedule")}</Button>
            </div>
            <button
              ref={toggleRef}
              type="button"
              aria-expanded={open}
              aria-controls={MOBILE_MENU_ID}
              aria-label={open ? t("a11y.closeMenu") : t("a11y.openMenu")}
              onClick={() => setOpen((value) => !value)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-jotu-line text-jotu-navy-950 lg:hidden"
            >
              {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil: panel a pantalla completa bajo el encabezado. Va fuera del
          <header> porque su backdrop-blur haría que "fixed" se mida contra él.
          Cerrado queda "invisible" (visibility: hidden): no se ve, no recibe el
          foco y los lectores de pantalla lo ignoran. */}
      <div
        id={MOBILE_MENU_ID}
        ref={panelRef}
        className={cx(
          "fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto bg-jotu-paper lg:hidden",
          "duration-300 ease-out",
          // Al abrir, visible al instante (si no, el foco no puede entrar); al
          // cerrar, visibility espera a que termine el fundido para ocultarse
          open
            ? "visible translate-y-0 opacity-100 transition-[opacity,translate]"
            : "invisible -translate-y-2 opacity-0 transition-[opacity,translate,visibility]",
        )}
      >
        <nav aria-label={t("a11y.menu")} className="container-site flex flex-col gap-10 py-10">
          <ul className="flex flex-col border-t border-jotu-line">
            {NAV_LINKS.map(({ to, labelKey }) => {
              const active = isCurrentPath(pathname, to);
              return (
                <li key={to} className="border-b border-jotu-line">
                  <Link
                    to={to}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cx(
                      "flex items-center justify-between py-5 font-title text-h3 font-medium",
                      active ? "text-jotu-teal-600" : "text-jotu-navy-950",
                    )}
                  >
                    {t(labelKey)}
                    {active && <span aria-hidden="true" className="h-px w-10 bg-jotu-teal-600" />}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button to={PATHS.contact} className="w-full py-4" onClick={() => setOpen(false)}>
            {t("card.schedule")}
          </Button>
        </nav>
      </div>
    </>
  );
};
