import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/seo';

export const metadata: Metadata = genMeta({
  title: 'Leistungen',
  description:
    'Unsere IT-Services für KMU in NRW: Managed IT-Services, IT-Support, Vor-Ort-Service und Remote-Service. Professionelle IT-Betreuung aus Köln.',
  keywords: [
    'IT-Services NRW',
    'IT-Dienstleistungen Köln',
    'Managed IT',
    'Remote Support',
    'Vor-Ort-Service',
  ],
  canonical: 'https://techhilfepro.de/leistungen',
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Unsere Leistungen</h1>
        <p className="text-xl text-gray-600 mb-8">
          Professionelle IT-Services für kleine und mittelständische Unternehmen
        </p>

        {/* TODO: Implement ServiceCards module */}
        {/* TODO: Implement ContextCTA module */}
      </section>
    </main>
  );
}

