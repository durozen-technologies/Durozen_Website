import type { Metadata } from 'next';
import SolutionPageTemplate from '@/components/SolutionPageTemplate';
import { workflowAutomationData } from '@/data/solutions/workflow-automation';

export const metadata: Metadata = {
  title: workflowAutomationData.seo.title,
  description: workflowAutomationData.seo.description,
  alternates: { canonical: `/solutions/${workflowAutomationData.slug}` },
  openGraph: {
    title: workflowAutomationData.seo.title,
    description: workflowAutomationData.seo.description,
    url: `https://durozen.in/solutions/${workflowAutomationData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: workflowAutomationData.seo.title,
    description: workflowAutomationData.seo.description,
  }
};

export default function Page() {
  return <SolutionPageTemplate data={workflowAutomationData} baseRoute="/solutions" baseName="Solutions" />;
}
