import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/seo';

export const metadata: Metadata = genMeta({
  title: 'Widerrufsbelehrung',
  description: 'Widerrufsbelehrung für Verbraucher von Tech Hilfe Pro NRW',
  noindex: true,
  canonical: 'https://techhilfepro.de/recht/widerruf',
});

export default function WiderrufPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Widerrufsbelehrung</h1>

        <div className="prose prose-lg">
          {/* TODO: Add Widerrufsbelehrung content via generator or lawyer */}
          <p className="text-gray-600">
            <strong>Hinweis:</strong> Widerrufsbelehrung muss noch über einen Generator
            oder durch einen Anwalt erstellt werden.
          </p>

          <h2>Widerrufsrecht</h2>
          <p>
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen
            Vertrag zu widerrufen.
          </p>

          <h2>Folgen des Widerrufs</h2>
          <p>
            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die
            wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn
            Tagen zurückzuzahlen.
          </p>

          <h2>Muster-Widerrufsformular</h2>
          <p>
            Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses
            Formular aus und senden Sie es zurück.
          </p>

          {/* TODO: Add complete Widerrufsbelehrung with:
            - Widerrufsrecht (vollständiger Text)
            - Widerrufsfrist
            - Folgen des Widerrufs
            - Muster-Widerrufsformular
            - Ausnahmen vom Widerrufsrecht
          */}
        </div>
      </section>
    </main>
  );
}

