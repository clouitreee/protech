import React from 'react';
import Placeholder from '@/src/components/wireframes/Placeholder';

/**
 * Wireframe for On-Site Service Page (/leistungen/vor-ort-service)
 * 
 * Modules: UseCasesGrid, RegionMap, SLA/Anfahrt, FAQ, CTA
 */
export default function OnsiteServiceWireframe() {
  return (
    <div className="wireframe-container">
      <h1 className="wireframe-title">Wireframe: IT-Service vor Ort (/leistungen/vor-ort-service)</h1>
      
      {/* UseCasesGrid */}
      <section className="wireframe-section">
        <h2>UseCasesGrid</h2>
        <Placeholder type="grid">
          <Placeholder type="card" label="Use Case 1: Hardware-Installation" />
          <Placeholder type="card" label="Use Case 2: Netzwerk-Setup" />
          <Placeholder type="card" label="Use Case 3: Server-Wartung" />
          <Placeholder type="card" label="Use Case 4: Arbeitsplatz-Einrichtung" />
        </Placeholder>
      </section>

      {/* RegionMap */}
      <section className="wireframe-section">
        <h2>RegionMap</h2>
        <Placeholder type="image" label="Karte: Servicegebiet NRW (Köln, Düsseldorf, Bonn, etc.)" height="400px" />
        <Placeholder type="list">
          <Placeholder type="text" label="Region 1: Köln (< 1 Stunde)" />
          <Placeholder type="text" label="Region 2: Düsseldorf (1-2 Stunden)" />
          <Placeholder type="text" label="Region 3: Weiteres NRW (2-3 Stunden)" />
        </Placeholder>
      </section>

      {/* SLA/Anfahrt */}
      <section className="wireframe-section">
        <h2>SLA/Anfahrt</h2>
        <Placeholder type="card" label="Reaktionszeit: 2-4 Stunden | Anfahrtskosten: Nach Region" />
      </section>

      {/* FAQ */}
      <section className="wireframe-section">
        <h2>FAQ</h2>
        <Placeholder type="list">
          <Placeholder type="text" label="FAQ 1: In welchen Regionen bieten Sie Vor-Ort-Service an?" />
          <Placeholder type="text" label="FAQ 2: Was sind typische Vor-Ort-Einsätze?" />
          <Placeholder type="text" label="FAQ 3: Wie lange dauert die Anfahrt?" />
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

