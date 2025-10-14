import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/seo';

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
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">
          Willkommen bei Tech Hilfe Pro NRW
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Ihr zuverlässiger IT-Partner für kleine und mittelständische Unternehmen in NRW
        </p>
        
        {/* TODO: Implement HeroPrimary module */}
        {/* TODO: Implement USPGrid module */}
        {/* TODO: Implement ServiceTeaserGrid module */}
        {/* TODO: Implement PricingTeaser module */}
        {/* TODO: Implement Testimonials module */}
        {/* TODO: Implement MiniFAQ module */}
        {/* TODO: Implement FinalCTA module */}
      </section>
    </main>
  );
}

