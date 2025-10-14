import React from 'react';
import Placeholder from '@/src/components/wireframes/Placeholder';

/**
 * Wireframe for Datenschutz Page (/recht/datenschutz)
 * 
 * Modules: LegalText
 */
export default function DatenschutzWireframe() {
  return (
    <div className="wireframe-container">
      <h1 className="wireframe-title">Wireframe: Datenschutz (/recht/datenschutz)</h1>
      
      {/* LegalText */}
      <section className="wireframe-section">
        <h2>LegalText</h2>
        <Placeholder type="heading" label="H1: Datenschutzerklärung" />
        <Placeholder type="paragraph" label="DSGVO-konforme Datenschutzerklärung..." />
        <Placeholder type="paragraph" label="Verantwortlicher, Datenerhebung, Verwendung, Rechte der Nutzer, etc." />
      </section>
    </div>
  );
}

