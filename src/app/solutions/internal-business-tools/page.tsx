import type { Metadata } from 'next';
import SolutionPageTemplate from '@/components/SolutionPageTemplate';
import { internalBusinessToolsData } from '@/data/solutions/internal-business-tools';

export const metadata: Metadata = {
  title: internalBusinessToolsData.seo.title,
  description: internalBusinessToolsData.seo.description,
  alternates: { canonical: `/solutions/${internalBusinessToolsData.slug}` },
  openGraph: {
    title: internalBusinessToolsData.seo.title,
    description: internalBusinessToolsData.seo.description,
    url: `https://durozen.in/solutions/${internalBusinessToolsData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: internalBusinessToolsData.seo.title,
    description: internalBusinessToolsData.seo.description,
  }
};

export default function Page() {
  return <SolutionPageTemplate data={internalBusinessToolsData} baseRoute="/solutions" baseName="Solutions" />;
}
