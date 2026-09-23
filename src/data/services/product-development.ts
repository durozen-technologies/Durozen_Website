import { ServicePageData } from '@/types/service';

export const productDevelopmentData: ServicePageData = {
  slug: 'product-development',
  seo: {
    title: 'Product Development Services | Durozen',
    description: 'End-to-end digital product engineering. From MVP validation to full-scale SaaS product development, architecture, and launch strategy.',
  },
  hero: {
    h1: 'Digital Product Development',
    description: 'End-to-end digital product engineering. We turn complex business ideas into scalable, market-ready SaaS and enterprise products.',
    ctaPrimary: { text: 'Discuss Your Product Idea', link: '/contact' },
    ctaSecondary: { text: 'Explore Case Studies', link: '/projects' },
  },
  whatIsIt: {
    title: 'What Is Digital Product Development?',
    content: [
      'Digital product development is not just writing code; it is the comprehensive lifecycle of bringing a new software product to market. It requires deep alignment between business strategy, user experience, and technical architecture.',
      'Unlike custom internal software, a digital product (like a SaaS platform) must appeal to a broad market, offer frictionless onboarding, and scale elegantly as the user base grows.',
      'We act as your technical co-founders, taking your vision from wireframes and MVP (Minimum Viable Product) to a fully monetizable, highly secure software product ready for enterprise scale.'
    ]
  },
  servicesIncluded: {
    title: 'Our Product Engineering Services',
    services: [
      { title: 'MVP Development', description: 'Rapidly engineering a Minimum Viable Product to test core assumptions and validate market fit in weeks, not months.' },
      { title: 'SaaS Platform Engineering', description: 'Building multi-tenant Software-as-a-Service applications complete with subscription billing and RBAC.' },
      { title: 'Product UI/UX Design', description: 'Creating highly converting, intuitive user interfaces that reduce churn and drive user engagement.' },
      { title: 'Architecture & Scaling', description: 'Designing cloud-native, microservices-based architectures that can handle sudden spikes in user growth.' },
      { title: 'Product Modernization', description: 'Taking an outdated legacy product and rewriting it using modern frameworks (Next.js, Node.js) for better performance.' },
      { title: 'Continuous Feature Delivery', description: 'Acting as your dedicated product team to continuously design, build, and deploy new features post-launch.' }
    ]
  },
  problemsSolved: {
    title: 'Product Challenges We Solve',
    problems: [
      'Spending months building features that users ultimately don’t want or need',
      'Technical debt causing the product to slow down as new users are added',
      'High user churn rates due to confusing onboarding or poor UI/UX',
      'Difficulty implementing secure multi-tenant architecture for B2B SaaS',
      'Failing compliance audits (SOC2, GDPR) needed to sell to enterprises',
      'Integrating complex third-party payment gateways (Stripe, Braintree)',
      'Lack of internal engineering bandwidth to execute the product roadmap',
      'Inability to scale the database horizontally during high-traffic events'
    ]
  },
  whoWeServe: {
    title: 'Who We Build Products For',
    audiences: [
      'Early-Stage Tech Startups',
      'Funded B2B SaaS Companies',
      'Enterprise Innovation Labs',
      'Consumer Fintech Apps',
      'HealthTech & Wellness Brands',
      'EdTech & E-Learning Platforms',
      'Marketplace Operators',
      'On-Demand Service Providers'
    ]
  },
  useCases: {
    title: 'Product Use Cases',
    cases: [
      'B2B SaaS Platforms', 'Two-Sided Marketplaces', 'Fintech Consumer Apps', 'Enterprise Admin Portals',
      'Subscription Management Systems', 'Social Networking Apps', 'EdTech Learning Management', 'IoT Companion Apps'
    ]
  },
  developmentProcess: {
    title: 'Our Product Delivery Lifecycle',
    steps: [
      { name: 'Product Strategy & Scoping', description: 'Define the core value proposition, target user, and absolute minimum feature set for launch.' },
      { name: 'UI/UX & Prototyping', description: 'Design user flows and interactive prototypes to validate the concept before writing code.' },
      { name: 'Architecture Design', description: 'Select the optimal tech stack, database schema, and cloud infrastructure for long-term scalability.' },
      { name: 'Agile Engineering', description: 'Develop the product in 2-week sprints, providing you with working software demos regularly.' },
      { name: 'QA & Security Testing', description: 'Perform rigorous automated testing, penetration testing, and load testing prior to launch.' },
      { name: 'Launch & Iterate', description: 'Deploy to production, monitor user analytics (Mixpanel), and rapidly iterate based on feedback.' }
    ]
  },
  technologyStack: {
    title: 'Product Technology Stack',
    stacks: [
      { category: 'Frontend', technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript'] },
      { category: 'Backend', technologies: ['Node.js', 'Python/FastAPI', 'Go', 'GraphQL'] },
      { category: 'Database & Cache', technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
      { category: 'Cloud & DevOps', technologies: ['AWS', 'Vercel', 'Docker', 'Kubernetes'] }
    ]
  },
  caseStudies: {
    title: 'Product Success Stories',
    studies: [
      {
        projectName: 'B2B SaaS Analytics Platform',
        industry: 'SaaS & Marketing',
        businessProblem: 'The client needed to launch a multi-tenant analytics dashboard for enterprise marketers within 4 months.',
        solution: 'Built a highly scalable Next.js and Node backend utilizing Snowflake for lightning-fast data queries.',
        technologies: ['Next.js', 'Node.js', 'Snowflake', 'Stripe API'],
        keyFunctionality: ['Multi-tenant RBAC', 'Real-time charts', 'Stripe billing integration'],
        result: ['Launched MVP in 14 weeks', 'Onboarded 50+ enterprise clients', 'Zero downtime during launch'],
        link: '/projects'
      }
    ]
  },
  whyChooseUs: {
    title: 'Why Choose Durozen for Product Development',
    reasons: [
      'We focus on business viability and market-fit, not just writing code',
      'Deep expertise in complex SaaS architectures (Multi-tenancy, Billing, RBAC)',
      'Rapid MVP delivery to validate ideas without burning through capital',
      'In-house UI/UX designers ensuring your product looks and feels premium',
      'Scalable cloud-native architectures that won\'t require a rewrite in year two',
      'Transparent, Agile development process with zero technical black-boxes',
      'Full intellectual property (IP) ownership transferred to you upon completion'
    ]
  },
  engagementModels: {
    title: 'Product Engagement Models',
    models: [
      { title: 'End-to-End MVP Build', description: 'A fixed-scope, rapid development cycle to get your first version to market in weeks.' },
      { title: 'Dedicated Product Team', description: 'A full cross-functional team (PM, Design, Dev, QA) dedicated entirely to your product roadmap.' },
      { title: 'Product Rescue & Rewrite', description: 'Taking over a failing or heavily-indebted codebase and refactoring it for stability and scale.' },
      { title: 'Team Augmentation', description: 'Injecting our senior product engineers into your existing internal teams to boost velocity.' }
    ]
  },
  faqs: {
    title: 'Product Development FAQs',
    questions: [
      { question: 'What is an MVP (Minimum Viable Product)?', answer: 'An MVP is the most stripped-down version of your product that still delivers core value to the user. Building an MVP allows you to validate your idea with real users and start generating revenue without spending months building non-essential features.' },
      { question: 'Who owns the code?', answer: 'You do. Unlike some agencies that hold your code hostage, we execute a full IP transfer. Once the project is paid for, the source code, designs, and infrastructure belong 100% to your company.' },
      { question: 'Can you handle subscription billing (SaaS)?', answer: 'Yes. We frequently integrate Stripe, Braintree, and Chargebee to handle complex B2B and B2C billing scenarios, including free trials, tiered pricing, metered usage, and automated invoicing.' },
      { question: 'Do you provide ongoing support after launch?', answer: 'Yes. Software is never truly "finished." We offer managed support contracts to handle bug fixes, server maintenance, security updates, and continuous feature development.' }
    ]
  },
  finalCta: {
    title: 'Bring Your Product to Life',
    subtitle: 'From napkin sketch to enterprise scale, we are your technical partners in product engineering.',
    ctaText: 'Discuss Your Product Idea',
    ctaLink: '/contact'
  },
  relatedServices: {
    title: 'Related Services',
    services: [
      { title: 'UI/UX Design', slug: 'ui-ux-design' },
      { title: 'Cloud Engineering', slug: 'cloud-engineering' },
      { title: 'Custom Software Development', slug: 'custom-software-development' },
      { title: 'Web Development', slug: 'web-development' }
    ]
  }
};
