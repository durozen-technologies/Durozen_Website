import type { Metadata } from 'next';
import TermsOfService from '@/views/TermsOfService';

export const metadata: Metadata = {
  title: 'Terms of Service | Durozen',
  description:
    'Terms and conditions for using the Durozen website and our services.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return <TermsOfService />;
}
