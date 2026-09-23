import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { digitalTransformationData } from '@/data/services/digital-transformation';

export const metadata: Metadata = {
  title: digitalTransformationData.seo.title,
  description: digitalTransformationData.seo.description,
  alternates: { canonical: `/services/${digitalTransformationData.slug}` },
  openGraph: {
    title: digitalTransformationData.seo.title,
    description: digitalTransformationData.seo.description,
    url: `https://durozen.in/services/${digitalTransformationData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: digitalTransformationData.seo.title,
    description: digitalTransformationData.seo.description,
  }
};

export default function Page() {
  return <ServicePageTemplate data={digitalTransformationData} />;
}
