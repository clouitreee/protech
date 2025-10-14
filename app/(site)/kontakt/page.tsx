import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/seo';

export const metadata: Metadata = genMeta({
  title: 'Kontakt',
  description:
    'Kontaktieren Sie Tech Hilfe Pro NRW. Telefon, WhatsApp, E-Mail oder Kontaktformular. Wir sind für Sie da: +49 1556 5029989',
  keywords: [
    'IT-Support Kontakt',
    'Tech Hilfe Pro erreichen',
    'IT-Beratung anfragen',
    'Erstgespräch',
    'Kontakt Köln',
  ],
  canonical: 'https://techhilfepro.de/kontakt',
});

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
        <p className="text-xl text-gray-600 mb-8">
          Wir freuen uns auf Ihre Nachricht
        </p>

        {/* TODO: Implement ContactIntro module */}
        {/* TODO: Implement ContactCards module */}
        {/* TODO: Implement ContactForm module */}
        {/* TODO: Implement MapEmbed module */}
        {/* TODO: Implement ComplianceNote module */}
      </section>
    </main>
  );
}

