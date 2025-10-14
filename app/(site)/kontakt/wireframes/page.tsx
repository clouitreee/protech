import React from 'react';
import Placeholder from '@/src/components/wireframes/Placeholder';

/**
 * Wireframe for Contact Page (/kontakt)
 * 
 * Modules: ContactIntro, ContactCards, ContactForm, MapEmbed, ComplianceNote
 */
export default function ContactWireframe() {
  return (
    <div className="wireframe-container">
      <h1 className="wireframe-title">Wireframe: Kontakt (/kontakt)</h1>
      
      {/* ContactIntro */}
      <section className="wireframe-section">
        <h2>ContactIntro</h2>
        <Placeholder type="heading" label="H1: Kontaktieren Sie uns" />
        <Placeholder type="paragraph" label="Wir freuen uns auf Ihre Anfrage und melden uns schnellstmöglich bei Ihnen." />
      </section>

      {/* ContactCards */}
      <section className="wireframe-section">
        <h2>ContactCards</h2>
        <Placeholder type="grid">
          <Placeholder type="card" label="Telefon: +49 1556 5029989" />
          <Placeholder type="card" label="E-Mail: info@techhilfepro-nrw.de" />
          <Placeholder type="card" label="WhatsApp: +49 1556 5029989" />
        </Placeholder>
      </section>

      {/* ContactForm */}
      <section className="wireframe-section">
        <h2>ContactForm</h2>
        <Placeholder type="form">
          <Placeholder type="text" label="Name (Pflichtfeld)" />
          <Placeholder type="text" label="E-Mail (Pflichtfeld)" />
          <Placeholder type="text" label="Telefon (Optional)" />
          <Placeholder type="text" label="Nachricht (Pflichtfeld)" />
          <Placeholder type="text" label="☐ Ich akzeptiere die Datenschutzerklärung" />
          <Placeholder type="button" label="Nachricht senden" />
        </Placeholder>
      </section>

      {/* MapEmbed */}
      <section className="wireframe-section">
        <h2>MapEmbed</h2>
        <Placeholder type="image" label="Karte: Standort Köln" height="400px" />
      </section>

      {/* ComplianceNote */}
      <section className="wireframe-section">
        <h2>ComplianceNote</h2>
        <Placeholder type="paragraph" label="Hinweis: Ihre Daten werden DSGVO-konform verarbeitet." />
      </section>
    </div>
  );
}

