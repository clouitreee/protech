import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/seo';

export const metadata: Metadata = genMeta({
  title: 'Wissenscenter / Blog',
  description:
    'IT-Wissen für KMU: Fachartikel, Praxistipps und Trends zu IT-Sicherheit, Cloud, Digitalisierung und mehr. Von Experten für Entscheider.',
  keywords: [
    'IT-Wissen',
    'IT-Tipps KMU',
    'Cyber-Security',
    'Cloud-Migration',
    'IT-Trends',
  ],
  canonical: 'https://techhilfepro.de/blog',
});

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Wissenscenter</h1>
        <p className="text-xl text-gray-600 mb-8">
          Fachartikel und Praxistipps rund um IT für KMU
        </p>

        {/* TODO: Implement PostList module */}
        {/* TODO: Implement CategoryFilter module */}
        {/* TODO: Implement SidebarCTA module */}
        {/* TODO: Implement CTA module */}
      </section>
    </main>
  );
}

