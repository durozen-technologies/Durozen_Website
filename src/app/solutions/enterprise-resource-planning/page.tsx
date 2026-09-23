import type { Metadata } from 'next';
import SolutionPageTemplate from '@/components/SolutionPageTemplate';
import { enterpriseResourcePlanningData } from '@/data/solutions/enterprise-resource-planning';

export const metadata: Metadata = {
  title: enterpriseResourcePlanningData.seo.title,
  description: enterpriseResourcePlanningData.seo.description,
  alternates: { canonical: `/solutions/${enterpriseResourcePlanningData.slug}` },
  openGraph: {
    title: enterpriseResourcePlanningData.seo.title,
    description: enterpriseResourcePlanningData.seo.description,
    url: `https://www.durozen.in/solutions/${enterpriseResourcePlanningData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: enterpriseResourcePlanningData.seo.title,
    description: enterpriseResourcePlanningData.seo.description,
  }
};

export default function Page() {
  return <SolutionPageTemplate data={enterpriseResourcePlanningData} baseRoute="/solutions" baseName="Solutions" />;
}
