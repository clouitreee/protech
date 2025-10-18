import { Metadata } from 'next';
import HeroPrimary from '@/components/modules/HeroPrimary';
import { generateMetadata as genMeta } from '@/config/seo';
import FinalCTA from '@/components/modules/FinalCTA';

export const metadata: Metadata = genMeta({
  title: 'Startseite',
  description:
    'Tech Hilfe Pro NRW - Professionelle IT-Betreuung für KMU in Nordrhein-Westfalen. Managed Services, IT-Support, Remote- und Vor-Ort-Service aus Köln.',
  keywords: [
    'IT-Dienstleister NRW',
    'Managed Services Köln',
    'IT-Support KMU',
    'IT-Betreuung Nordrhein-Westfalen',
    'MSP Köln',
  ],
  canonical: 'https://techhilfepro.de/',
});

export default function HomePage() {
  return (
    <main className="min-h-screen">

        
<HeroPrimary
          title="Willkommen bei Tech Hilfe Pro NRW"
          subtitle="Ihr zuverlässiger IT-Partner für kleine und mittelständische Unternehmen in NRW"
          ctaId="home-hero-primary"
        />
        {/* TODO: Implement USPGrid module */}
        {/* TODO: Implement ServiceTeaserGrid module */}
        {/* TODO: Implement PricingTeaser module */}
        {/* TODO: Implement Testimonials module */}
        {/* TODO: Implement MiniFAQ module */}
        <FinalCTA
          title="Bereit für eine bessere IT?"
          subtitle="Kontaktieren Sie uns für ein unverbindliches Erstgespräch."
          ctaId="home-final-cta"
        />

    </main>
  );
}

