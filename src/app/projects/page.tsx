import type { Metadata } from 'next';
import Projects from '@/views/Projects';

export const metadata: Metadata = {
  title: 'Client Projects & Project Work | Durozen',
  description: 'Selected client work and product builds by Durozen.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return <Projects />;
}
