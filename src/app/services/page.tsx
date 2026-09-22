import type { Metadata } from 'next';
import Services from '@/views/Services';

export const metadata: Metadata = {
  title: 'Services | Durozen',
  description:
    'Enterprise IT services engineered for scale. Premium delivery across software, cloud, AI, product design, data, DevOps, and digital transformation.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return <Services />;
}
