import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { productDevelopmentData } from '@/data/services/product-development';

export const metadata: Metadata = {
  title: productDevelopmentData.seo.title,
  description: productDevelopmentData.seo.description,
  alternates: { canonical: `/services/${productDevelopmentData.slug}` },
  openGraph: {
    title: productDevelopmentData.seo.title,
    description: productDevelopmentData.seo.description,
    url: `https://durozen.in/services/${productDevelopmentData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: productDevelopmentData.seo.title,
    description: productDevelopmentData.seo.description,
  }
};

export default function Page() {
  return <ServicePageTemplate data={productDevelopmentData} />;
}
