import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/seo';

export const metadata: Metadata = genMeta({
  title: 'IT-Support (Break/Fix)',
  description:
    'Schnelle IT-Hilfe bei Problemen. Remote-Support innerhalb von Minuten, Vor-Ort-Service in 2-4 Stunden. Transparente Preise, keine versteckten Kosten.',
  keywords: [
    'IT-Support Köln',
    'Computer Hilfe NRW',
    'IT-Notfall',
    'Break-Fix Support',
    'Schnelle IT-Hilfe',
  ],
  canonical: 'https://techhilfepro.de/leistungen/it-support',
});

export default function ITSupportPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        {/* TODO: Implement EmergencyBanner module */}
        
        <h1 className="text-4xl font-bold mb-4">IT-Support (Break/Fix)</h1>
        <p className="text-xl text-gray-600 mb-8">
          Schnelle Hilfe bei IT-Problemen – Remote oder vor Ort
        </p>

        {/* TODO: Implement TroubleshootList module */}
        {/* TODO: Implement RemoteVsOnsite module */}
        {/* TODO: Implement CostTransparency module */}
        {/* TODO: Implement FAQ module */}
        {/* TODO: Implement CTA module */}
      </section>
    </main>
  );
}

