import React from 'react';
import { Button } from '@/components/ui/button';
import { ctaRegistry } from '@/config/cta-registry';

interface ContextCTAProps {
  title: string;
  subtitle: string;
  ctaId?: string; // ID from ctaRegistry
}

const ContextCTA: React.FC<ContextCTAProps> = ({ title, subtitle, ctaId }) => {
  const cta = ctaId ? ctaRegistry[ctaId] : null;

  return (
    <section className="container mx-auto px-4 py-12 text-center bg-blue-50 dark:bg-blue-900 rounded-lg shadow-sm mt-8">
      <h2 className="text-2xl font-semibold mb-3">
        {title}
      </h2>
      <p className="text-md text-gray-600 dark:text-gray-300 mb-6">
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

export default ContextCTA;

