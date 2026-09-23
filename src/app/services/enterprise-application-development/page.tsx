import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { enterpriseApplicationDevelopmentData } from '@/data/services/enterprise-application-development';

export const metadata: Metadata = {
  title: enterpriseApplicationDevelopmentData.seo.title,
  description: enterpriseApplicationDevelopmentData.seo.description,
  alternates: { canonical: `/services/${enterpriseApplicationDevelopmentData.slug}` },
  openGraph: {
    title: enterpriseApplicationDevelopmentData.seo.title,
    description: enterpriseApplicationDevelopmentData.seo.description,
    url: `https://www.durozen.in/services/${enterpriseApplicationDevelopmentData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: enterpriseApplicationDevelopmentData.seo.title,
    description: enterpriseApplicationDevelopmentData.seo.description,
  }
};

export default function Page() {
  return <ServicePageTemplate data={enterpriseApplicationDevelopmentData} />;
}
