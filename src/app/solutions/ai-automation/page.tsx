import type { Metadata } from 'next';
import SolutionPageTemplate from '@/components/SolutionPageTemplate';
import { aiAutomationData } from '@/data/solutions/ai-automation';

export const metadata: Metadata = {
  title: aiAutomationData.seo.title,
  description: aiAutomationData.seo.description,
  alternates: { canonical: `/solutions/${aiAutomationData.slug}` },
  openGraph: {
    title: aiAutomationData.seo.title,
    description: aiAutomationData.seo.description,
    url: `https://www.durozen.in/solutions/${aiAutomationData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: aiAutomationData.seo.title,
    description: aiAutomationData.seo.description,
  }
};

export default function Page() {
  return <SolutionPageTemplate data={aiAutomationData} baseRoute="/solutions" baseName="Solutions" />;
}
