import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/seo';

export const metadata: Metadata = genMeta({
  title: 'Impressum',
  description: 'Impressum und Anbieterkennzeichnung von Tech Hilfe Pro NRW',
  noindex: true,
  canonical: 'https://techhilfepro.de/recht/impressum',
});

export default function ImpressumPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        <div className="prose prose-lg">
          {/* TODO: Add legal content via generator or lawyer */}
          <p className="text-gray-600">
            <strong>Hinweis:</strong> Rechtliche Inhalte müssen noch über einen
            Impressum-Generator oder durch einen Anwalt erstellt werden.
          </p>

          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Tech Hilfe Pro NRW
            <br />
            Schirmerstr. 7
            <br />
            50823 Köln
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 1556 5029989
            <br />
            E-Mail: info@techhilfepro.de
          </p>

          {/* TODO: Add remaining legal sections:






          */}
        </div>
      </section>
    </main>
  );
}

