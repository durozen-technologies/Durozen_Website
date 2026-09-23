import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { mobileDevelopmentData } from '@/data/services/mobile-development';

export const metadata: Metadata = {
  title: mobileDevelopmentData.seo.title,
  description: mobileDevelopmentData.seo.description,
  alternates: { canonical: `/services/${mobileDevelopmentData.slug}` },
  openGraph: {
    title: mobileDevelopmentData.seo.title,
    description: mobileDevelopmentData.seo.description,
    url: `https://www.durozen.in/services/${mobileDevelopmentData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: mobileDevelopmentData.seo.title,
    description: mobileDevelopmentData.seo.description,
  }
};

export default function Page() {
  return <ServicePageTemplate data={mobileDevelopmentData} />;
}
