import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/seo';

export const metadata: Metadata = genMeta({
  title: 'Remote-Service',
  description:
    'Sichere Fernwartung für schnelle IT-Hilfe. Software-Probleme, Konfigurationen, Updates – alles remote lösbar. Deutschlandweiter Service.',
  keywords: [
    'Remote IT-Support',
    'Fernwartung',
    'Online IT-Hilfe',
    'Remote Desktop Support',
    'Sichere Fernwartung',
  ],
  canonical: 'https://techhilfepro.de/leistungen/remote-service',
});

export default function RemoteServicePage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Remote-Service</h1>
        <p className="text-xl text-gray-600 mb-8">
          Schnelle IT-Hilfe per Fernwartung – sicher und effizient
        </p>

        {/* TODO: Implement HowItWorks3Steps module */}
        {/* TODO: Implement ProblemTypesList module */}
        {/* TODO: Implement SecurityAssurance module */}
        {/* TODO: Implement FAQ module */}
        {/* TODO: Implement CTA module */}
      </section>
    </main>
  );
}

