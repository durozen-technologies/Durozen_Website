import type { Metadata } from 'next';
import CaseStudies from '@/views/CaseStudies';

export const metadata: Metadata = {
  title: 'Case Studies | Durozen',
  description: 'Selected client work and product builds by Durozen.',
  alternates: { canonical: '/case-studies' },
};

export default function CaseStudiesPage() {
  return <CaseStudies />;
}
