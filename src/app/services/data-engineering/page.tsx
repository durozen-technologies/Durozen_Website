import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { dataEngineeringData } from '@/data/services/data-engineering';

export const metadata: Metadata = {
  title: dataEngineeringData.seo.title,
  description: dataEngineeringData.seo.description,
  alternates: { canonical: `/services/${dataEngineeringData.slug}` },
  openGraph: {
    title: dataEngineeringData.seo.title,
    description: dataEngineeringData.seo.description,
    url: `https://www.durozen.in/services/${dataEngineeringData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: dataEngineeringData.seo.title,
    description: dataEngineeringData.seo.description,
  }
};

export default function Page() {
  return <ServicePageTemplate data={dataEngineeringData} />;
}
