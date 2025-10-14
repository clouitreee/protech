import React from 'react';
import Placeholder from '@/src/components/wireframes/Placeholder';

/**
 * Wireframe for IT Support Page (/leistungen/it-support)
 * 
 * Modules: EmergencyBanner, TroubleshootList, RemoteVsOnsite, CostTransparency, FAQ, CTA
 */
export default function ITSupportWireframe() {
  return (
    <div className="wireframe-container">
      <h1 className="wireframe-title">Wireframe: IT-Support (Break/Fix) (/leistungen/it-support)</h1>
      
      {/* EmergencyBanner */}
      <section className="wireframe-section">
        <h2>EmergencyBanner</h2>
        <Placeholder type="card" label="IT-Notfall? Sofort-Hilfe: Telefon +49 1556 5029989 | WhatsApp" />
      </section>

      {/* TroubleshootList */}
      <section className="wireframe-section">
        <h2>TroubleshootList</h2>
        <Placeholder type="list">
          <Placeholder type="text" label="Problem 1: Server-Ausfall" />
          <Placeholder type="text" label="Problem 2: Netzwerk-Probleme" />
          <Placeholder type="text" label="Problem 3: Software-Fehler" />
          <Placeholder type="text" label="Problem 4: Hardware-Defekte" />
        </Placeholder>
      </section>

      {/* RemoteVsOnsite */}
      <section className="wireframe-section">
        <h2>RemoteVsOnsite</h2>
        <Placeholder type="grid">
          <Placeholder type="card" label="Remote: Schnell, kostengünstig, sofort verfügbar" />
          <Placeholder type="card" label="Vor-Ort: Hardware-Probleme, Netzwerk-Setup, persönlicher Kontakt" />
        </Placeholder>
      </section>

      {/* CostTransparency */}
      <section className="wireframe-section">
        <h2>CostTransparency</h2>
        <Placeholder type="card" label="Stundensätze: Remote ab 95€/h, Vor-Ort ab 125€/h plus Anfahrt" />
      </section>

      {/* FAQ */}
      <section className="wireframe-section">
        <h2>FAQ</h2>
        <Placeholder type="list">
          <Placeholder type="text" label="FAQ 1: Wie schnell reagieren Sie bei IT-Problemen?" />
          <Placeholder type="text" label="FAQ 2: Was kostet IT-Support auf Stundenbasis?" />
          <Placeholder type="text" label="FAQ 3: Können Sie auch am Wochenende helfen?" />
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

