import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/seo';

export const metadata: Metadata = genMeta({
  title: 'Referenzen / Kundenstimmen',
  description:
    'Erfahrungen unserer zufriedenen Kunden. Lesen Sie, wie wir KMU in NRW mit professioneller IT-Betreuung unterstützen.',
  keywords: [
    'Kundenstimmen IT',
    'Referenzen MSP',
    'IT-Support Erfahrungen',
    'Zufriedene Kunden',
    'Case Studies',
  ],
  canonical: 'https://techhilfepro.de/referenzen',
});

export default function ReferencesPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Referenzen & Kundenstimmen</h1>
        <p className="text-xl text-gray-600 mb-8">
          Was unsere Kunden über uns sagen
        </p>

        {/* TODO: Implement LogoStrip module */}
        {/* TODO: Implement CaseSnippets module */}
        {/* TODO: Implement TestimonialsGrid module */}
        {/* TODO: Implement CTA module */}
      </section>
    </main>
  );
}

