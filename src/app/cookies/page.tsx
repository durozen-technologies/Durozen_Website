import type { Metadata } from 'next';
import CookiePolicy from '@/views/CookiePolicy';

export const metadata: Metadata = {
  title: 'Cookie Policy | Durozen',
  description:
    'Information on how Durozen uses cookies to ensure the best possible experience on our website.',
  alternates: { canonical: '/cookies' },
};

export default function CookiesPage() {
  return <CookiePolicy />;
}
