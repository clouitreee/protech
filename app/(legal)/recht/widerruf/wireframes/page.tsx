import React from 'react';
import Placeholder from '@/src/components/wireframes/Placeholder';

/**
 * Wireframe for Widerruf Page (/recht/widerruf)
 * 
 * Modules: LegalText
 */
export default function WiderrufWireframe() {
  return (
    <div className="wireframe-container">
      <h1 className="wireframe-title">Wireframe: Widerrufsbelehrung (/recht/widerruf)</h1>
      
      {/* LegalText */}
      <section className="wireframe-section">
        <h2>LegalText</h2>
        <Placeholder type="heading" label="H1: Widerrufsbelehrung" />
        <Placeholder type="paragraph" label="Gesetzliche Widerrufsbelehrung für Verbraucher..." />
        <Placeholder type="paragraph" label="Widerrufsrecht, Widerrufsfrist, Folgen des Widerrufs, etc." />
      </section>
    </div>
  );
}

