import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/seo';

export const metadata: Metadata = genMeta({
  title: 'Über uns',
  description:
    'Lernen Sie Tech Hilfe Pro NRW kennen. Ihr IT-Partner aus Köln für professionelle IT-Betreuung mit persönlichem Service und regionaler Nähe.',
  keywords: [
    'Tech Hilfe Pro NRW',
    'IT-Dienstleister Köln',
    'MSP Team',
    'IT-Partner NRW',
    'Über uns',
  ],
  canonical: 'https://techhilfepro.de/ueber-uns',
});

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Über uns</h1>
        <p className="text-xl text-gray-600 mb-8">
          Ihr zuverlässiger IT-Partner mit Herz und Verstand
        </p>

        {/* TODO: Implement MissionValues module */}
        {/* TODO: Implement FounderCard module */}
        {/* TODO: Implement TeamGrid module */}
        {/* TODO: Implement PartnerLogos module */}
        {/* TODO: Implement CTA module */}
      </section>
    </main>
  );
}

