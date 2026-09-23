import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { devopsData } from '@/data/services/devops';

export const metadata: Metadata = {
  title: devopsData.seo.title,
  description: devopsData.seo.description,
  alternates: { canonical: `/services/${devopsData.slug}` },
  openGraph: {
    title: devopsData.seo.title,
    description: devopsData.seo.description,
    url: `https://www.durozen.in/services/${devopsData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: devopsData.seo.title,
    description: devopsData.seo.description,
  }
};

export default function Page() {
  return <ServicePageTemplate data={devopsData} />;
}
