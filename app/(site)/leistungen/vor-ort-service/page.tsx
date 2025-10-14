import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/seo';

export const metadata: Metadata = genMeta({
  title: 'IT-Service vor Ort',
  description:
    'IT-Techniker vor Ort in Köln und NRW. Hardware-Installation, Netzwerk-Setup, Server-Wartung. Schnelle Anfahrt, persönlicher Service.',
  keywords: [
    'IT-Service vor Ort Köln',
    'Computer Techniker NRW',
    'Hardware Installation',
    'Netzwerk Setup',
    'IT-Techniker vor Ort',
  ],
  canonical: 'https://techhilfepro.de/leistungen/vor-ort-service',
});

export default function OnsiteServicePage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">IT-Service vor Ort</h1>
        <p className="text-xl text-gray-600 mb-8">
          Persönlicher IT-Service direkt bei Ihnen in Köln und NRW
        </p>

        {/* TODO: Implement UseCasesGrid module */}
        {/* TODO: Implement RegionMap module */}
        {/* TODO: Implement SLA/Anfahrt module */}
        {/* TODO: Implement FAQ module */}
        {/* TODO: Implement CTA module */}
      </section>
    </main>
  );
}

