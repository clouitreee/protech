import React from 'react';
import Placeholder from '@/src/components/wireframes/Placeholder';

/**
 * Wireframe for FAQ Page (/faq)
 * 
 * Modules: FAQ, CTA
 */
export default function FAQWireframe() {
  return (
    <div className="wireframe-container">
      <h1 className="wireframe-title">Wireframe: FAQ (/faq)</h1>
      
      {/* FAQ */}
      <section className="wireframe-section">
        <h2>FAQ</h2>
        <Placeholder type="list">
          <Placeholder type="text" label="FAQ 1: Wie schnell können Sie bei einem IT-Notfall helfen?" />
          <Placeholder type="text" label="FAQ 2: Was kostet IT-Support?" />
          <Placeholder type="text" label="FAQ 3: Brauche ich einen langfristigen Vertrag?" />
          <Placeholder type="text" label="FAQ 4: Arbeiten Sie auch mit bestehenden IT-Dienstleistern zusammen?" />
          <Placeholder type="text" label="FAQ 5: Welche Sicherheitsstandards setzen Sie um?" />
        </Placeholder>
      </section>

      {/* CTA */}
      <section className="wireframe-section">
        <h2>CTA</h2>
        <Placeholder type="button" label="Erstgespräch vereinbaren" />
        <Placeholder type="button" label="Kontakt aufnehmen" />
      </section>
    </div>
  );
}

