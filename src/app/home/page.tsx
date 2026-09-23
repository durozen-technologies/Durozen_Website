import type { Metadata } from 'next';
import Home from '@/views/Home';

export const metadata: Metadata = {
  title: 'Durozen | Enterprise Software & IT Services',
  description:
    'Engineering Digital Excellence for the Modern Enterprise. We build scalable software, cloud-native platforms, AI-powered solutions, and enterprise applications.',
  alternates: { canonical: 'https://durozen.in/home' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Durozen | Enterprise Software & IT Services',
    description: 'Engineering Digital Excellence for the Modern Enterprise. We build scalable software, cloud-native platforms, AI-powered solutions, and enterprise applications.',
    url: 'https://durozen.in/home',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Durozen | Enterprise Software & IT Services',
    description: 'Engineering Digital Excellence for the Modern Enterprise.',
  },
};

export default function HomePage() {
  return <Home />;
}
