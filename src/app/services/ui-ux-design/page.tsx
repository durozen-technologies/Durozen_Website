import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { uiUxDesignData } from '@/data/services/ui-ux-design';

export const metadata: Metadata = {
  title: uiUxDesignData.seo.title,
  description: uiUxDesignData.seo.description,
  alternates: { canonical: `/services/${uiUxDesignData.slug}` },
  openGraph: {
    title: uiUxDesignData.seo.title,
    description: uiUxDesignData.seo.description,
    url: `https://durozen.in/services/${uiUxDesignData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: uiUxDesignData.seo.title,
    description: uiUxDesignData.seo.description,
  }
};

export default function Page() {
  return <ServicePageTemplate data={uiUxDesignData} />;
}
