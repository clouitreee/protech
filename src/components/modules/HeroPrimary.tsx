import Image from 'next/image';
import Script from 'next/script';

export default function HeroPrimary() {
  return (
    <section className="relative bg-gray-100 dark:bg-gray-900 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
            Your IT Partner for a Digital Future
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Seamless IT solutions tailored for your business needs, ensuring efficiency and security.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-cta hover:bg-brand-cta-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-focus"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-focus dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      {/* Placeholder for an image to demonstrate CLS prevention */}
      <div className="relative w-full h-64 md:h-96 lg:h-[500px] mt-12">
        <Image
          src="/images/hero-placeholder.jpg" // Assuming a placeholder image exists or will be created
          alt="Digital solutions for business"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {/* Example of next/script for third-party scripts that might cause CLS */}
      <Script
        src="https://example.com/third-party-analytics.js"
        strategy="lazyOnload"
        id="third-party-analytics"
      />
    </section>
  );
}
