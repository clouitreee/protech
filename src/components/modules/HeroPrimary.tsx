import React from 'react';
import { Button } from '@/components/ui/button';
import { ctaRegistry } from '@/config/cta-registry';

interface HeroPrimaryProps {
  title: string;
  subtitle: string;
  ctaId?: string; // ID from ctaRegistry
}

const HeroPrimary: React.FC<HeroPrimaryProps> = ({ title, subtitle, ctaId }) => {
  const cta = ctaId ? ctaRegistry[ctaId] : null;

  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">
        {title}
      </h1>
      <p className="text-xl text-gray-600 mb-8">
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

export default HeroPrimary;

