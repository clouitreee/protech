import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/seo';

export const metadata: Metadata = genMeta({
  title: 'Datenschutz',
  description: 'Datenschutzerklärung von Tech Hilfe Pro NRW gemäß DSGVO',
  noindex: true,
  canonical: 'https://techhilfepro.de/recht/datenschutz',
});

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-lg">
          {/* TODO: Add DSGVO-compliant privacy policy via generator or lawyer */}
          <p className="text-gray-600">
            <strong>Hinweis:</strong> DSGVO-konforme Datenschutzerklärung muss noch
            über einen Generator oder durch einen Anwalt erstellt werden.
          </p>

          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
            Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
          </p>

          <h2>2. Verantwortliche Stelle</h2>
          <p>
            Tech Hilfe Pro NRW
            <br />
            Schirmerstr. 7
            <br />
            50823 Köln
            <br />
            E-Mail: info@techhilfepro.de
          </p>

          {/* TODO: Add remaining DSGVO sections:
            - Datenerfassung auf dieser Website
            - Analyse-Tools und Tools von Drittanbietern
            - Plugins und Tools
            - Ihre Rechte
            - SSL-/TLS-Verschlüsselung
            - Kontaktformular
            - Cookies
            - Server-Log-Dateien
            - Widerspruchsrecht
          */}
        </div>
      </section>
    </main>
  );
}

