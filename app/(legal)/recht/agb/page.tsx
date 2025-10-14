import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/seo';

export const metadata: Metadata = genMeta({
  title: 'AGB',
  description: 'Allgemeine Geschäftsbedingungen von Tech Hilfe Pro NRW',
  noindex: true,
  canonical: 'https://techhilfepro.de/recht/agb',
});

export default function AGBPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <div className="prose prose-lg">
          {/* TODO: Add AGB content via lawyer */}
          <p className="text-gray-600">
            <strong>Hinweis:</strong> AGB müssen noch durch einen Anwalt erstellt werden.
          </p>

          <h2>1. Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen
            Tech Hilfe Pro NRW und unseren Geschäftskunden.
          </p>

          <h2>2. Vertragspartner</h2>
          <p>
            Tech Hilfe Pro NRW
            <br />
            Schirmerstr. 7
            <br />
            50823 Köln
            <br />
            E-Mail: info@techhilfepro.de
          </p>

          {/* TODO: Add remaining AGB sections:
            - Vertragsschluss
            - Leistungsumfang
            - Preise und Zahlungsbedingungen
            - Vertragslaufzeit und Kündigung
            - Haftung
            - Geheimhaltung
            - Datenschutz
            - Schlussbestimmungen
          */}
        </div>
      </section>
    </main>
  );
}

