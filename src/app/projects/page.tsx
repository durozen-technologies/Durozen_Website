import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Projects from '@/views/Projects';

export const metadata: Metadata = {
  title: 'Client Projects & Project Work | Durozen',
  description: 'Selected client work and product builds by Durozen.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Client Projects & Project Work | Durozen',
    description: 'Selected client work and product builds by Durozen.',
    url: 'https://www.durozen.in/projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Projects & Project Work | Durozen',
    description: 'Selected client work and product builds by Durozen.',
  },
};

export default function ProjectsPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Client Projects & Project Work | Durozen",
  "description": "Selected client work and product builds by Durozen.",
  "url": "https://www.durozen.in/projects"
};

  return (
    <>
      <JsonLd data={jsonLd} />
      <Projects />
    </>
  );
}
