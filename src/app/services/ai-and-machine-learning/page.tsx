import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { aiAndMachineLearningData } from '@/data/services/ai-and-machine-learning';

export const metadata: Metadata = {
  title: aiAndMachineLearningData.seo.title,
  description: aiAndMachineLearningData.seo.description,
  alternates: { canonical: `/services/${aiAndMachineLearningData.slug}` },
  openGraph: {
    title: aiAndMachineLearningData.seo.title,
    description: aiAndMachineLearningData.seo.description,
    url: `https://www.durozen.in/services/${aiAndMachineLearningData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: aiAndMachineLearningData.seo.title,
    description: aiAndMachineLearningData.seo.description,
  }
};

export default function Page() {
  return <ServicePageTemplate data={aiAndMachineLearningData} />;
}
