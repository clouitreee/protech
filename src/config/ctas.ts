/**
 * Normalized CTA Catalog for Tech Hilfe Pro NRW
 * 
 * This file contains all Call-to-Action (CTA) definitions used across the website.
 * Each CTA has a unique key, label, href, and type.
 * 
 * Types:
 * - link: Standard internal or external link
 * - tel: Click-to-call phone number
 * - mailto: Email link
 * - wa: WhatsApp link
 * - anchor: Internal page anchor/hash link
 * - button: Form submit button (no href)
 */

export type CTAType = "link" | "tel" | "mailto" | "wa" | "anchor" | "button";

export interface CTA {
  key: string;
  label: string;
  href?: string;
  type: CTAType;
}

export const CTAS: Record<string, CTA> = {
  // Primary Contact CTAs
  "contact.primary": {
    key: "contact.primary",
    label: "Kontakt aufnehmen",
    href: "/kontakt",
    type: "link",
  },
  "contact.call": {
    key: "contact.call",
    label: "Jetzt anrufen",
    href: "tel:+4915565029989",
    type: "tel",
  },
  "contact.whatsapp": {
    key: "contact.whatsapp",
    label: "WhatsApp schreiben",
    href: "https://wa.me/4915565029989",
    type: "wa",
  },
  "contact.email": {
    key: "contact.email",
    label: "E-Mail senden",
    href: "mailto:info@techhilfepro.de",
    type: "mailto",
  },

  // Conversion CTAs
  "offer.request": {
    key: "offer.request",
    label: "Angebot anfordern",
    href: "/kontakt#angebot",
    type: "anchor",
  },
  "discovery": {
    key: "discovery",
    label: "Kostenloses Erstgespräch",
    href: "/kontakt#termin",
    type: "anchor",
  },
  "consultation": {
    key: "consultation",
    label: "Jetzt beraten lassen",
    href: "/kontakt",
    type: "link",
  },

  // Emergency CTAs
  "emergency": {
    key: "emergency",
    label: "Notfall melden",
    href: "tel:+4915565029989",
    type: "tel",
  },
  "emergency.whatsapp": {
    key: "emergency.whatsapp",
    label: "WhatsApp Notfall",
    href: "https://wa.me/4915565029989",
    type: "wa",
  },

  // Navigation CTAs
  "services.view": {
    key: "services.view",
    label: "Leistungen ansehen",
    href: "/leistungen",
    type: "link",
  },
  "services.learn_more": {
    key: "services.learn_more",
    label: "Mehr erfahren",
    href: "/leistungen",
    type: "link",
  },
  "faq.more": {
    key: "faq.more",
    label: "Weitere Fragen?",
    href: "/kontakt",
    type: "link",
  },
  "faq.view": {
    key: "faq.view",
    label: "Alle FAQs ansehen",
    href: "/faq",
    type: "link",
  },

  // Form CTAs
  "form.submit": {
    key: "form.submit",
    label: "Anfrage senden",
    type: "button",
  },
  "form.send_message": {
    key: "form.send_message",
    label: "Nachricht senden",
    type: "button",
  },

  // Secondary CTAs
  "details.request": {
    key: "details.request",
    label: "Details anfragen",
    href: "/kontakt#termin",
    type: "anchor",
  },
  "newsletter.subscribe": {
    key: "newsletter.subscribe",
    label: "Jetzt abonnieren",
    href: "#newsletter",
    type: "anchor",
  },

  // Remote Service CTAs
  "remote.start": {
    key: "remote.start",
    label: "Fernwartung starten",
    href: "/kontakt#remote",
    type: "anchor",
  },

  // Onsite Service CTAs
  "onsite.request": {
    key: "onsite.request",
    label: "Vor-Ort-Termin anfragen",
    href: "/kontakt#onsite",
    type: "anchor",
  },
};

/**
 * Helper function to get a CTA by key
 */
export function getCTA(key: string): CTA | undefined {
  return CTAS[key];
}

/**
 * Helper function to get multiple CTAs by keys
 */
export function getCTAs(keys: string[]): CTA[] {
  return keys.map((key) => CTAS[key]).filter(Boolean);
}

