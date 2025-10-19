import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/seo';
import HeroPrimary from '@/src/components/modules/HeroPrimary';

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
      <HeroPrimary />
      {/* TODO: Implement USPGrid module */}
      {/* TODO: Implement ServiceTeaserGrid module */}
      {/* TODO: Implement PricingTeaser module */}
      {/* TODO: Implement Testimonials module */}
      {/* TODO: Implement MiniFAQ module */}
      {/* TODO: Implement FinalCTA module */}
    </main>
  );
}

