import { SolutionPageData } from '@/types/solution';

export const saasPlatformsData: SolutionPageData = {
  slug: 'saas-platforms',
  seo: {
    title: 'B2B SaaS Platform Development | Durozen',
    description: 'Build secure, scalable B2B SaaS platforms with multi-tenancy, role-based access, automated billing, and high availability.',
  },
  hero: {
    h1: 'B2B SaaS Platform Engineering',
    problem: 'Don\'t let technical debt kill your startup. Build a highly secure, subscription-ready SaaS platform designed for enterprise scale from day one.',
    ctaPrimary: { text: 'Discuss Your SaaS Idea', link: '/contact' },
    ctaSecondary: { text: 'View SaaS Architectures', link: '/projects' },
  },
  overview: {
    title: 'What is a SaaS Platform?',
    content: [
      'Software as a Service (SaaS) is a business model where software is hosted in the cloud and licensed on a subscription basis. However, building a true B2B SaaS platform requires solving incredibly complex engineering challenges that standard websites never face.',
      'A SaaS platform must be "multi-tenant" (meaning hundreds of different companies use the exact same codebase securely without seeing each other\'s data). It requires complex subscription billing logic, enterprise-grade security, and extreme scalability.',
      'We act as your technical co-founders. We engineer your SaaS product from the ground up, ensuring it passes the rigorous security audits (like SOC2) required to sell to enterprise clients.'
    ]
  },
  problems: {
    title: 'SaaS Engineering Nightmares',
    list: [
      'Data leaking between tenants because the database schema was not designed for multi-tenancy',
      'The platform crashing when a large enterprise client tries to upload massive amounts of data',
      'Struggling to implement complex billing logic (e.g., metered usage, tiered plans, pro-ration)',
      'Losing enterprise deals because your software cannot pass a SOC2 security audit',
      'High user churn rates caused by a clunky, confusing onboarding experience',
      'Technical debt making it impossible to release new features quickly'
    ]
  },
  solution: {
    title: 'Enterprise-Grade Architecture',
    description: 'We build SaaS products designed to scale. By implementing strict multi-tenant architectures, secure auth, and automated billing from day one, we ensure your software is ready for enterprise adoption.'
  },
  keyFeatures: {
    title: 'Core SaaS Capabilities',
    features: [
      { title: 'Secure Multi-Tenancy', description: 'Logical or physical data separation ensuring Client A can never accidentally access Client B\'s data.' },
      { title: 'Role-Based Access Control (RBAC)', description: 'Granular permissions (Admin, Editor, Viewer) within each tenant’s organization.' },
      { title: 'Subscription Billing Engine', description: 'Integration with Stripe/Chargebee to handle free trials, monthly/annual tiers, and metered usage.' },
      { title: 'Self-Serve Onboarding', description: 'Frictionless, automated sign-up flows that convert free trials into paying customers without sales intervention.' },
      { title: 'Super Admin Dashboard', description: 'A hidden portal for your internal team to manage all tenants, view metrics, and impersonate users for support.' },
      { title: 'Public API & Webhooks', description: 'Allowing your enterprise customers to connect your SaaS platform directly into their own internal tools.' }
    ]
  },
  useCases: {
    title: 'SaaS Business Models',
    cases: [
      'B2B Enterprise Software', 'Vertical SaaS (Industry-specific)', 'Micro-SaaS Tools',
      'Two-Sided Marketplaces', 'API-as-a-Service', 'Data & Analytics Platforms'
    ]
  },
  whoIsItFor: {
    title: 'Who We Build SaaS For',
    audiences: [
      'Funded Tech Startups',
      'Non-Technical Founders',
      'Established Enterprises launching a spin-off product',
      'Companies pivoting from on-premise to cloud software',
      'Private Equity firms rescuing a struggling SaaS',
      'Niche Industry Experts monetizing their knowledge'
    ]
  },
  benefits: {
    title: 'The Business Impact',
    list: [
      { title: 'Faster Time to Market', description: 'Our pre-built architectural blueprints mean we don’t waste weeks re-inventing authentication or billing.' },
      { title: 'Enterprise Sales Readiness', description: 'Built-in security (SSO, Audit Logs) means you won\'t fail the procurement phase with big clients.' },
      { title: 'Zero Scaling Pains', description: 'Cloud-native infrastructure that automatically scales up servers during traffic spikes and scales down to save costs.' },
      { title: 'Lower Churn', description: 'Premium UI/UX design ensures your users actually enjoy using the software.' }
    ]
  },
  howItWorks: {
    title: 'The Anatomy of a Great SaaS',
    steps: [
      { name: 'The Frontend App', description: 'The fast, responsive React interface that your users interact with in their browser.' },
      { name: 'The Auth Layer', description: 'A secure gatekeeper (like Auth0) handling logins, passwords, and Single Sign-On (SSO).' },
      { name: 'The Backend API', description: 'The "brain" of the operation, executing the business logic and enforcing data security.' },
      { name: 'The Billing Webhooks', description: 'Listening to Stripe in real-time to instantly downgrade users whose credit cards fail.' }
    ]
  },
  implementationProcess: {
    title: 'Our SaaS Engineering Process',
    steps: [
      { name: 'MVP Scoping', description: 'We brutally cut features to define the Minimum Viable Product needed to secure your first paying customers.' },
      { name: 'UI/UX Prototyping', description: 'We design high-fidelity Figma prototypes to test the user flow before writing any code.' },
      { name: 'Database Architecture', description: 'We design a robust multi-tenant schema that isolates client data securely.' },
      { name: 'Agile Development', description: 'We build the software in 2-week sprints, deploying working demos to a staging server for you to test.' },
      { name: 'Security & Load Testing', description: 'We attempt to hack the system and simulate heavy traffic to ensure it is bulletproof before launch.' }
    ]
  },
  integrations: {
    title: 'Crucial SaaS Integrations',
    list: [
      'Payment Gateways (Stripe, Braintree, Chargebee)',
      'Transactional Email (SendGrid, Postmark)',
      'Authentication (Auth0, AWS Cognito, Google SSO)',
      'Customer Support (Intercom, Zendesk)',
      'Product Analytics (Mixpanel, Amplitude)'
    ]
  },
  technology: {
    title: 'SaaS Technology Stack',
    stacks: [
      { category: 'Frontend & UI', technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
      { category: 'Backend & APIs', technologies: ['Node.js (NestJS)', 'Python (FastAPI)', 'GraphQL'] },
      { category: 'Database & Cache', technologies: ['PostgreSQL', 'Redis', 'Elasticsearch'] },
      { category: 'DevOps & Hosting', technologies: ['AWS', 'Vercel', 'Docker', 'Kubernetes'] }
    ]
  },
  caseStudy: {
    title: 'SaaS Success Story',
    studies: [
      {
        projectName: 'B2B Marketing Analytics SaaS',
        businessProblem: 'A marketing agency wanted to turn their internal analytics spreadsheet into a subscription software product for other agencies.',
        solution: 'Engineered a multi-tenant Next.js application with Stripe billing, automated onboarding, and real-time data visualization.',
        result: ['Launched MVP in 3 months', 'Acquired 100 paying agencies in year one', 'Zero data leakage incidents'],
        link: '/projects'
      }
    ]
  },
  faqs: {
    title: 'SaaS Development FAQs',
    questions: [
      { question: 'What is Multi-Tenancy?', answer: 'Multi-tenancy is the core concept of SaaS. It means one instance of the software serves multiple different companies (tenants). You must design the database carefully so Company A can never accidentally query Company B’s data. We specialize in secure multi-tenant architectures.' },
      { question: 'How much does it cost to build a SaaS?', answer: 'It varies wildly based on complexity. A simple micro-SaaS MVP might start around $30k-$50k, while an enterprise-grade platform with complex AI integrations and SOC2 requirements can exceed $150k. We scope the MVP aggressively to keep initial costs low.' },
      { question: 'Who owns the intellectual property (IP)?', answer: 'You do. Unlike some "SaaS factory" agencies that rent you their proprietary code, we build on open-source frameworks and perform a full IP transfer. The code belongs entirely to your company.' },
      { question: 'Do you provide ongoing support after launch?', answer: 'Yes. A SaaS product requires constant maintenance, bug fixes, server monitoring, and feature updates. We offer managed DevOps and retainer contracts to act as your continuous engineering team post-launch.' }
    ]
  },
  finalCta: {
    title: 'Launch Your Software Product',
    subtitle: 'Partner with engineers who understand how to build secure, scalable, and highly profitable SaaS platforms.',
    ctaText: 'Discuss Your SaaS Vision',
    ctaLink: '/contact'
  },
  relatedSolutions: {
    title: 'Related Solutions',
    solutions: [
      { title: 'Internal Business Tools', slug: 'internal-business-tools' },
      { title: 'Analytics Dashboards', slug: 'analytics-dashboards' },
      { title: 'Workflow Automation', slug: 'workflow-automation' }
    ]
  }
};
