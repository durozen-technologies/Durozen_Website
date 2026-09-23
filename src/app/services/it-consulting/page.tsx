import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { itConsultingData } from '@/data/services/it-consulting';

export const metadata: Metadata = {
  title: itConsultingData.seo.title,
  description: itConsultingData.seo.description,
  alternates: { canonical: `/services/${itConsultingData.slug}` },
  openGraph: {
    title: itConsultingData.seo.title,
    description: itConsultingData.seo.description,
    url: `https://durozen.in/services/${itConsultingData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: itConsultingData.seo.title,
    description: itConsultingData.seo.description,
  }
};

export default function Page() {
  return <ServicePageTemplate data={itConsultingData} />;
}
