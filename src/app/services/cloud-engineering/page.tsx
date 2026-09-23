import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { cloudEngineeringData } from '@/data/services/cloud-engineering';

export const metadata: Metadata = {
  title: cloudEngineeringData.seo.title,
  description: cloudEngineeringData.seo.description,
  alternates: { canonical: `/services/${cloudEngineeringData.slug}` },
  openGraph: {
    title: cloudEngineeringData.seo.title,
    description: cloudEngineeringData.seo.description,
    url: `https://www.durozen.in/services/${cloudEngineeringData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: cloudEngineeringData.seo.title,
    description: cloudEngineeringData.seo.description,
  }
};

export default function Page() {
  return <ServicePageTemplate data={cloudEngineeringData} />;
}
