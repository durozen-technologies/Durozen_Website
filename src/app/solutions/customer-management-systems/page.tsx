import type { Metadata } from 'next';
import SolutionPageTemplate from '@/components/SolutionPageTemplate';
import { customerManagementSystemsData } from '@/data/solutions/customer-management-systems';

export const metadata: Metadata = {
  title: customerManagementSystemsData.seo.title,
  description: customerManagementSystemsData.seo.description,
  alternates: { canonical: `/solutions/${customerManagementSystemsData.slug}` },
  openGraph: {
    title: customerManagementSystemsData.seo.title,
    description: customerManagementSystemsData.seo.description,
    url: `https://www.durozen.in/solutions/${customerManagementSystemsData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: customerManagementSystemsData.seo.title,
    description: customerManagementSystemsData.seo.description,
  }
};

export default function Page() {
  return <SolutionPageTemplate data={customerManagementSystemsData} baseRoute="/solutions" baseName="Solutions" />;
}
