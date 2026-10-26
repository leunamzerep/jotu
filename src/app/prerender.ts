/**
 * true mientras puppeteer genera el HTML estático del build (prerender).
 * La marca la pone vite.config.ts (rendererOptions.inject) en
 * window.__PRERENDER_INJECTED antes de cargar la página.
 */
export const isPrerender = (): boolean =>
  typeof window !== "undefined" &&
  (window as { __PRERENDER_INJECTED?: { prerender?: boolean } }).__PRERENDER_INJECTED?.prerender === true;
