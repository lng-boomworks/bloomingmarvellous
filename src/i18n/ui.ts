// Locale + routing helpers for the trilingual (EN/ES/DE) site.
// English lives at the root; Spanish under /es/, German under /de/.

export const locales = ['en', 'es', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const languageNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
};

// Canonical route keys → localised path segment (leading slash, no locale prefix).
export const routeSlugs = {
  home: { en: '/', es: '/', de: '/' },
  flowers: { en: '/flowers', es: '/flores', de: '/blumen' },
  about: { en: '/about', es: '/sobre-nosotros', de: '/ueber-uns' },
  delivery: { en: '/delivery', es: '/entrega', de: '/lieferung' },
  contact: { en: '/contact', es: '/contacto', de: '/kontakt' },
} as const;

export type RouteKey = keyof typeof routeSlugs;

export const navOrder: RouteKey[] = ['home', 'flowers', 'about', 'delivery', 'contact'];

export const navLabels: Record<Locale, Record<RouteKey, string>> = {
  en: { home: 'Home', flowers: 'Our Flowers', about: 'About', delivery: 'Delivery', contact: 'Contact' },
  es: { home: 'Inicio', flowers: 'Nuestras Flores', about: 'Sobre Nosotros', delivery: 'Entrega', contact: 'Contacto' },
  de: { home: 'Startseite', flowers: 'Unsere Blumen', about: 'Über uns', delivery: 'Lieferung', contact: 'Kontakt' },
};

/** Build a site-root-relative href for a route key in a given locale. */
export function localizedPath(key: RouteKey, locale: Locale): string {
  const slug = routeSlugs[key][locale];
  if (locale === defaultLocale) return slug;
  return slug === '/' ? `/${locale}/` : `/${locale}${slug}`;
}

/** Detect the active locale from a URL pathname. */
export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.replace(/^\//, '').split('/')[0];
  return (locales as readonly string[]).includes(seg) ? (seg as Locale) : defaultLocale;
}

export const htmlLang: Record<Locale, string> = { en: 'en', es: 'es', de: 'de' };
export const ogLocale: Record<Locale, string> = { en: 'en_GB', es: 'es_ES', de: 'de_DE' };
