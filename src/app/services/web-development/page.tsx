import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { webDevelopmentData } from '@/data/services/web-development';

export const metadata: Metadata = {
  title: webDevelopmentData.seo.title,
  description: webDevelopmentData.seo.description,
  alternates: { canonical: `/services/${webDevelopmentData.slug}` },
  openGraph: {
    title: webDevelopmentData.seo.title,
    description: webDevelopmentData.seo.description,
    url: `https://durozen.in/services/${webDevelopmentData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: webDevelopmentData.seo.title,
    description: webDevelopmentData.seo.description,
  }
};

export default function Page() {
  return <ServicePageTemplate data={webDevelopmentData} />;
}
