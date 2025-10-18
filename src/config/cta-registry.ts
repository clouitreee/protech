export interface CTA {
  id: string;
  text: string;
  href: string;
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  trackingId?: string;
}

export const ctaRegistry: Record<string, CTA> = {
  // Example CTAs
  "home-hero-primary": {
    id: "home-hero-primary",
    text: "Jetzt Kontakt aufnehmen",
    href: "/kontakt",
    variant: "default",
    trackingId: "home_hero_contact_btn",
  },
  "home-final-cta": {
    id: "home-final-cta",
    text: "Unverbindliches Erstgespräch vereinbaren",
    href: "/kontakt",
    variant: "outline",
    trackingId: "home_final_contact_btn",
  },
  "services-context-cta": {
    id: "services-context-cta",
    text: "Alle Leistungen entdecken",
    href: "/leistungen",
    variant: "default",
    trackingId: "services_context_all_btn",
  },
  // Add more CTAs as needed based on wireframe-map.yaml
};


