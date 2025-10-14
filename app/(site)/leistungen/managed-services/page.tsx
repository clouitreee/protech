import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/seo';

export const metadata: Metadata = genMeta({
  title: 'Managed IT-Services',
  description:
    'Proaktive IT-Betreuung im Abo-Modell für KMU in NRW. Monitoring, Updates, Support und mehr. Vergleichen Sie unsere Managed Service Pakete.',
  keywords: [
    'Managed Services NRW',
    'IT-Betreuung Abo',
    'Proaktive IT-Wartung',
    'IT-Flatrate KMU',
    'MSP Köln',
  ],
  canonical: 'https://techhilfepro.de/leistungen/managed-services',
});

export default function ManagedServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Managed IT-Services</h1>
        <p className="text-xl text-gray-600 mb-8">
          Proaktive IT-Betreuung im Abo-Modell – Damit Sie sich auf Ihr Geschäft konzentrieren können
        </p>

        {/* TODO: Implement BenefitsList module */}
        {/* TODO: Implement PricingTable3 module */}
        {/* TODO: Implement SLAHighlights module */}
        {/* TODO: Implement SecurityNote module */}
        {/* TODO: Implement FAQ module */}
        {/* TODO: Implement CTA module */}
      </section>
    </main>
  );
}

