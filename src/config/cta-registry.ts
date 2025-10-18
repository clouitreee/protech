export const ctaRegistry = {
  kontakt: { label: "Kontakt", href: "/kontakt" },
  termin: { label: "Termin buchen", href: "/termin" },
  whatsapp: { label: "WhatsApp", href: "https://wa.me/<PHONE>" },
} as const;

export type CtaKey = keyof typeof ctaRegistry;
export const getCta = (key: CtaKey) => ctaRegistry[key];

