import React from 'react';
import { Button } from '@/components/ui/button';
import { ctaRegistry } from '@/config/cta-registry';

interface FinalCTAProps {
  title: string;
  subtitle: string;
  ctaId?: string; // ID from ctaRegistry
}

const FinalCTA: React.FC<FinalCTAProps> = ({ title, subtitle, ctaId }) => {
  const cta = ctaId ? ctaRegistry[ctaId] : null;

  return (
    <section className="container mx-auto px-4 py-16 text-center bg-gray-100 rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-bold mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        {subtitle}
      </p>
      {cta && (
        <Button asChild variant={cta.variant} size={cta.size}>
          <a href={cta.href} data-tracking-id={cta.trackingId}>
            {cta.text}
          </a>
        </Button>
      )}
    </section>
  );
};

export default FinalCTA;

