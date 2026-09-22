import type { Metadata } from 'next';
import Home from '@/views/Home';

export const metadata: Metadata = {
  title: 'Durozen | Enterprise Software & IT Services',
  description:
    'Engineering Digital Excellence for the Modern Enterprise. We build scalable software, cloud-native platforms, AI-powered solutions, and enterprise applications.',
  alternates: { canonical: '/home' },
  robots: { index: false, follow: true },
};

export default function HomePage() {
  return <Home />;
}
