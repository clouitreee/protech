import React from 'react';
import Placeholder from '@/src/components/wireframes/Placeholder';

/**
 * Wireframe for Services Overview Page (/leistungen)
 * 
 * Modules: ServiceCards, ContextCTA
 */
export default function ServicesWireframe() {
  return (
    <div className="wireframe-container">
      <h1 className="wireframe-title">Wireframe: Leistungen (/leistungen)</h1>
      
      {/* ServiceCards */}
      <section className="wireframe-section">
        <h2>ServiceCards</h2>
        <Placeholder type="grid">
          <Placeholder type="card" label="Managed IT-Services: Abo-Betreuung, Nutzen vs Break/Fix" />
          <Placeholder type="card" label="IT-Support (Break/Fix): Reaktive Hilfe, Geschwindigkeit" />
          <Placeholder type="card" label="IT-Service vor Ort: Regionale Nähe, Szenarien" />
          <Placeholder type="card" label="Remote-Service: Soforthilfe ohne Anfahrt" />
        </Placeholder>
      </section>

      {/* ContextCTA */}
      <section className="wireframe-section">
        <h2>ContextCTA</h2>
        <Placeholder type="card" label="CTA: Nicht sicher, welcher Service passt? Jetzt beraten lassen" />
        <Placeholder type="button" label="Kontakt aufnehmen" />
      </section>
    </div>
  );
}

