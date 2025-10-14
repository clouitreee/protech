import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/seo';

export const metadata: Metadata = genMeta({
  title: 'FAQ - Häufig gestellte Fragen',
  description:
    'Antworten auf häufige Fragen zu IT-Support, Managed Services, Preisen und SLAs. Schnelle Klärung vor dem Erstgespräch.',
  keywords: [
    'IT-Support FAQ',
    'Häufige Fragen IT',
    'Managed Services Kosten',
    'SLA IT-Support',
    'IT-Betreuung Fragen',
  ],
  canonical: 'https://techhilfepro.de/faq',
});

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Häufig gestellte Fragen</h1>
        <p className="text-xl text-gray-600 mb-8">
          Antworten auf die wichtigsten Fragen zu unseren IT-Services
        </p>

        {/* TODO: Implement FAQ module with full FAQ list */}
        {/* TODO: Implement CTA module */}
      </section>
    </main>
  );
}

