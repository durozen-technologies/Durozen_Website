import type { Metadata } from 'next';
import SolutionPageTemplate from '@/components/SolutionPageTemplate';
import { businessIntelligenceData } from '@/data/solutions/business-intelligence';

export const metadata: Metadata = {
  title: businessIntelligenceData.seo.title,
  description: businessIntelligenceData.seo.description,
  alternates: { canonical: `/solutions/${businessIntelligenceData.slug}` },
  openGraph: {
    title: businessIntelligenceData.seo.title,
    description: businessIntelligenceData.seo.description,
    url: `https://www.durozen.in/solutions/${businessIntelligenceData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: businessIntelligenceData.seo.title,
    description: businessIntelligenceData.seo.description,
  }
};

export default function Page() {
  return <SolutionPageTemplate data={businessIntelligenceData} baseRoute="/solutions" baseName="Solutions" />;
}
