import type { Metadata } from 'next';
import Solutions from '@/views/Solutions';

export const metadata: Metadata = {
  title: 'Solutions | Durozen',
  description:
    'Business platforms that solve operational problems. ERP, CRM, AI Automation, BI, and more.',
  alternates: { canonical: '/solutions' },
};

export default function SolutionsPage() {
  return <Solutions />;
}
