/**
 * Navigation Configuration for Tech Hilfe Pro NRW
 * Data-driven navigation structure for main nav, CTAs, footer, and i18n routing
 */

export interface NavItem {
  key: string;
  label: string;
  href: string;
  children?: NavItem[];
}

export interface CTAButton {
  key: string;
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'emergency';
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface I18nRoute {
  de: string;
  es: string;
}

/**
 * Main Navigation
 * Displayed in the header with dropdown support for services
 */
export const mainNav: NavItem[] = [
  {
    key: 'home',
    label: 'Start',
    href: '/',
  },
  {
    key: 'services',
    label: 'Leistungen',
    href: '/leistungen',
    children: [
      {
        key: 'managed-services',
        label: 'Managed IT-Services',
        href: '/leistungen/managed-services',
      },
      {
        key: 'it-support',
        label: 'IT-Support',
        href: '/leistungen/it-support',
      },
      {
        key: 'onsite',
        label: 'Vor-Ort-Service',
        href: '/leistungen/vor-ort-service',
      },
      {
        key: 'remote',
        label: 'Remote-Service',
        href: '/leistungen/remote-service',
      },
    ],
  },
  {
    key: 'about',
    label: 'Über uns',
    href: '/ueber-uns',
  },
  {
    key: 'references',
    label: 'Referenzen',
    href: '/referenzen',
  },
  {
    key: 'blog',
    label: 'Blog',
    href: '/blog',
  },
  {
    key: 'contact',
    label: 'Kontakt',
    href: '/kontakt',
  },
];

/**
 * CTA Navigation
 * Primary call-to-action buttons displayed prominently in header/hero
 */
export const ctaNav: CTAButton[] = [
  {
    key: 'free-consultation',
    label: 'Kostenloses Erstgespräch',
    href: '/kontakt?cta=erstgespraech',
    variant: 'primary',
  },
  {
    key: 'emergency',
    label: 'Notfall melden',
    href: 'tel:+4915565029989',
    variant: 'emergency',
  },
];

/**
 * Footer Navigation
 * Organized in columns for better structure
 */
export const footerNav: FooterColumn[] = [
  {
    title: 'Unternehmen',
    links: [
      { key: 'about', label: 'Über uns', href: '/ueber-uns' },
      { key: 'references', label: 'Referenzen', href: '/referenzen' },
      { key: 'blog', label: 'Blog', href: '/blog' },
      { key: 'faq', label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Leistungen',
    links: [
      { key: 'managed-services', label: 'Managed IT-Services', href: '/leistungen/managed-services' },
      { key: 'it-support', label: 'IT-Support', href: '/leistungen/it-support' },
      { key: 'onsite', label: 'Vor-Ort-Service', href: '/leistungen/vor-ort-service' },
      { key: 'remote', label: 'Remote-Service', href: '/leistungen/remote-service' },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { key: 'impressum', label: 'Impressum', href: '/recht/impressum' },
      { key: 'datenschutz', label: 'Datenschutz', href: '/recht/datenschutz' },
      { key: 'agb', label: 'AGB', href: '/recht/agb' },
      { key: 'widerruf', label: 'Widerrufsbelehrung', href: '/recht/widerruf' },
    ],
  },
  {
    title: 'Kontakt',
    links: [
      { key: 'contact', label: 'Kontaktformular', href: '/kontakt' },
      { key: 'phone', label: '+49 1556 5029989', href: 'tel:+4915565029989' },
      { key: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/4915565029989' },
      { key: 'email', label: 'info@techhilfepro.de', href: 'mailto:info@techhilfepro.de' },
    ],
  },
];

/**
 * i18n Route Mapping
 * Maps German routes to Spanish equivalents for future localization
 */
export const i18nRoutes: Record<string, I18nRoute> = {
  home: {
    de: '/',
    es: '/es',
  },
  services: {
    de: '/leistungen',
    es: '/es/servicios',
  },
  'services-managed': {
    de: '/leistungen/managed-services',
    es: '/es/servicios/gestionados',
  },
  'services-support': {
    de: '/leistungen/it-support',
    es: '/es/servicios/soporte',
  },
  'services-onsite': {
    de: '/leistungen/vor-ort-service',
    es: '/es/servicios/presencial',
  },
  'services-remote': {
    de: '/leistungen/remote-service',
    es: '/es/servicios/remoto',
  },
  about: {
    de: '/ueber-uns',
    es: '/es/sobre-nosotros',
  },
  references: {
    de: '/referenzen',
    es: '/es/referencias',
  },
  blog: {
    de: '/blog',
    es: '/es/blog',
  },
  faq: {
    de: '/faq',
    es: '/es/preguntas-frecuentes',
  },
  contact: {
    de: '/kontakt',
    es: '/es/contacto',
  },
  legal: {
    de: '/recht',
    es: '/es/legal',
  },
  impressum: {
    de: '/recht/impressum',
    es: '/es/legal/aviso-legal',
  },
  datenschutz: {
    de: '/recht/datenschutz',
    es: '/es/legal/privacidad',
  },
  agb: {
    de: '/recht/agb',
    es: '/es/legal/terminos',
  },
  widerruf: {
    de: '/recht/widerruf',
    es: '/es/legal/revocacion',
  },
};

/**
 * Company Contact Information
 * Used across contact forms, schema.org structured data, and footer
 */
export const companyInfo = {
  name: 'Tech Hilfe Pro NRW',
  legalName: 'Tech Hilfe Pro NRW',
  address: {
    street: 'Schirmerstr. 7',
    postalCode: '50823',
    city: 'Köln',
    region: 'NRW',
    country: 'Deutschland',
  },
  contact: {
    phone: '+49 1556 5029989',
    whatsapp: '+49 1556 5029989',
    email: 'info@techhilfepro.de',
  },
  social: {
    // TODO: Add social media links when available
  },
};

