import type { Metadata } from 'next';
import Careers from '@/views/Careers';

export const metadata: Metadata = {
  title: 'Careers | Durozen',
  description:
    'Join Durozen and help us build serious digital products for ambitious teams.',
  alternates: { canonical: '/careers' },
};

export default function CareersPage() {
  return <Careers />;
}
