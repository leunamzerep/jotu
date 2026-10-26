# JoTu Solutions — sitio web

Web de JoTu Solutions LLC: https://jotusolutions.net

Hecha con React 18 + Vite 7 + TypeScript, react-router-dom 6, i18next (español e inglés) y react-helmet-async. Al construir, cada página se **prerenderiza**: se genera un HTML con su contenido para que Google y las redes lo lean sin esperar a JavaScript.

## Requisitos

- Node.js 22 o más reciente (el despliegue usa Node 22).
- npm (viene con Node).

## Instalar

```bash
npm ci
```

Instala exactamente las versiones de `package-lock.json`. Usa `npm ci` y no `npm install`, para no cambiar versiones sin querer. La primera vez, puppeteer descarga un Chrome propio en `~/.cache/puppeteer`.

## Trabajar en local

```bash
npm run dev
```

Abre la web en http://localhost:5173 y se recarga sola al guardar cambios.

## Construir

```bash
npm run build
```

1. `tsc -b` revisa los tipos de TypeScript. Si hay errores, se detiene.
2. `vite build` genera la web final en `dist/`.
3. El prerender abre Chrome sin ventana (puppeteer), visita cada ruta de `src/app/prerender-routes.ts` y guarda su HTML (`dist/about-us/index.html`, etc.).

Para ver el resultado como quedará publicado:

```bash
npm run preview
```

Otros comandos: `npm run lint` revisa el código con ESLint.

## Publicar (despliegue)

Se publica solo con **GitHub Actions → GitHub Pages** (`.github/workflows/deploy.yml`). Cada cambio que llega a la rama `main` se construye y se publica automáticamente. Por eso se trabaja en otra rama (por ejemplo `refactor`) y solo se fusiona a `main` cuando todo está revisado.

El dominio se configura en GitHub (Settings → Pages → Custom domain).

## Rutas publicadas

`/`, `/about-us`, `/contact`, `/terms-and-conditions`, `/privacy-policy`. No se cambian ni se eliminan: la web está indexada en Google.

## Mapa de carpetas

```
public/                 Archivos que se copian tal cual: 404.html, robots.txt, sitemap.xml, manifest, logo
src/
  main.tsx              Punto de entrada: carga i18n y monta la app
  app/                  App, rutas, rutas a prerenderizar y aviso de "página lista" para el prerender
  components/
    layout/             Encabezado, pie, pantalla de carga y transición entre páginas
    sections/           Bloques que se repiten en varias páginas (portada con título, tarjeta de contacto)
    forms/              Formulario de contacto
    langSwitch/         Botón ES / EN
  pages/                Una carpeta por página (home, about-us, contact, terms, privacy-policy)
  config/               Datos del sitio: dominio, contacto, redes, enlaces y servicios externos
  i18n/                 Textos en español (es.json) e inglés (en.json)
  styles/global.css     Colores y estilos generales
  assets/img/           Imágenes
```

En los imports, `@/` significa `src/` (por ejemplo `@/config/site`).

## Dónde cambiar los datos

| Qué | Dónde |
|---|---|
| Teléfono, WhatsApp, correo, dirección, redes, mapa | `src/config/site.ts` |
| Dirección del formulario y del feed de Instagram | `src/config/site.ts` |
| Enlaces internos del menú y el pie | `src/config/paths.ts` |
| Textos de la web (incluidos los legales) | `src/i18n/es.json` y `src/i18n/en.json` |
| Dominio | `src/config/site.ts` **y además** estos archivos, que no leen la configuración: `public/sitemap.xml`, `public/robots.txt`, el `<head>` de `index.html` y, por ahora, los canonical de cada página en `src/pages/` |

## Comprobación antes y después de cambios (solo en local)

La carpeta `.baseline/` (fuera de git) guarda una copia del HTML de las 5 rutas. Para construir y comparar:

```bash
sh .baseline/check.sh
```

Compara el listado de `dist/`, el `<head>` y el texto de cada página (ignora los códigos que Vite añade a los nombres de archivo). Si dice "igual a la línea base", el cambio no alteró lo que se publica.
