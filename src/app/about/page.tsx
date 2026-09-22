import type { Metadata } from 'next';
import About from '@/views/About';

export const metadata: Metadata = {
  title: 'About Us | Durozen',
  description:
    'A technology partner for ambitious teams building serious digital products.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <About />;
}
