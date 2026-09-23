import type { Metadata } from 'next';
import SolutionPageTemplate from '@/components/SolutionPageTemplate';
import { analyticsDashboardsData } from '@/data/solutions/analytics-dashboards';

export const metadata: Metadata = {
  title: analyticsDashboardsData.seo.title,
  description: analyticsDashboardsData.seo.description,
  alternates: { canonical: `/solutions/${analyticsDashboardsData.slug}` },
  openGraph: {
    title: analyticsDashboardsData.seo.title,
    description: analyticsDashboardsData.seo.description,
    url: `https://www.durozen.in/solutions/${analyticsDashboardsData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: analyticsDashboardsData.seo.title,
    description: analyticsDashboardsData.seo.description,
  }
};

export default function Page() {
  return <SolutionPageTemplate data={analyticsDashboardsData} baseRoute="/solutions" baseName="Solutions" />;
}
