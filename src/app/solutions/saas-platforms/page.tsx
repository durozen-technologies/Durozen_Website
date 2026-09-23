import type { Metadata } from 'next';
import SolutionPageTemplate from '@/components/SolutionPageTemplate';
import { saasPlatformsData } from '@/data/solutions/saas-platforms';

export const metadata: Metadata = {
  title: saasPlatformsData.seo.title,
  description: saasPlatformsData.seo.description,
  alternates: { canonical: `/solutions/${saasPlatformsData.slug}` },
  openGraph: {
    title: saasPlatformsData.seo.title,
    description: saasPlatformsData.seo.description,
    url: `https://www.durozen.in/solutions/${saasPlatformsData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: saasPlatformsData.seo.title,
    description: saasPlatformsData.seo.description,
  }
};

export default function Page() {
  return <SolutionPageTemplate data={saasPlatformsData} baseRoute="/solutions" baseName="Solutions" />;
}
