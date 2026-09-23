import { ServicePageData } from '@/types/service';

export const customSoftwareDevelopmentData: ServicePageData = {
  slug: 'custom-software-development',
  seo: {
    title: 'Custom Software Development Services | Durozen',
    description: 'Build secure, scalable software tailored to your business processes, users, integrations, and growth requirements with Durozen.',
  },
  hero: {
    h1: 'Custom Software Development Services',
    description: 'Build secure, scalable software tailored to your business processes, users, integrations, and growth requirements.',
    ctaPrimary: { text: 'Discuss Your Project', link: '/contact' },
    ctaSecondary: { text: 'View Our Work', link: '/projects' },
  },
  whatIsIt: {
    title: 'What Is Custom Software Development?',
    content: [
      'Custom software development is the process of designing, creating, deploying, and maintaining software specifically for a distinct set of users, functions, or organizations.',
      'Unlike off-the-shelf software, which targets a broad set of requirements, custom software is tailored to your exact business processes. It eliminates the need to change your workflows to fit a rigid tool.',
      'Businesses invest in custom development when they need to automate unique operations, integrate legacy systems, scale without licensing constraints, or create a proprietary platform that serves as a competitive advantage.'
    ]
  },
  servicesIncluded: {
    title: 'Our Custom Software Development Services',
    services: [
      { title: 'Business Software Development', description: 'Custom systems designed around your internal workflows, replacing spreadsheets and disjointed tools.' },
      { title: 'Web Application Development', description: 'Browser-based applications for employees, customers, and partners requiring high performance.' },
      { title: 'API Development & Integration', description: 'Connect your existing systems, third-party platforms, and databases for seamless data flow.' },
      { title: 'Legacy System Modernization', description: 'Modernize outdated applications and migrate to the cloud without disrupting business operations.' },
      { title: 'SaaS Development', description: 'Build scalable Software-as-a-Service products from initial MVP to full production deployment.' },
      { title: 'Software Maintenance', description: 'Ongoing improvements, security updates, monitoring, and proactive technical support.' }
    ]
  },
  problemsSolved: {
    title: 'Problems We Help Businesses Solve',
    problems: [
      'Manual data entry and repetitive administrative work',
      'Complex, spreadsheet-based workflows that do not scale',
      'Disconnected business systems requiring double-entry',
      'Slow internal processes and communication bottlenecks',
      'Lack of real-time reporting and analytics',
      'Legacy applications holding back digital transformation',
      'Poor customer experiences due to rigid technical limitations',
      'Difficult third-party integrations with rigid commercial tools'
    ]
  },
  whoWeServe: {
    title: 'Who We Work With',
    audiences: [
      'Fast-growing Startups',
      'Scaling SMEs',
      'Enterprise Companies',
      'Financial Services & Fintech',
      'Healthcare Businesses',
      'Manufacturing & Logistics',
      'Retail & E-commerce Operations',
      'Construction & Real Estate'
    ]
  },
  useCases: {
    title: 'What Can We Build?',
    cases: [
      'CRM Systems', 'ERP Platforms', 'POS Systems', 'Inventory Management',
      'Booking Engines', 'Customer Portals', 'Admin Dashboards', 'Employee Management',
      'Business Automation Platforms', 'Reporting Systems', 'SaaS Platforms'
    ]
  },
  developmentProcess: {
    title: 'Our Software Development Process',
    steps: [
      { name: 'Discovery', description: 'Understand your business, users, workflows, and requirements.' },
      { name: 'Planning', description: 'Define architecture, technology stack, scope, and project milestones.' },
      { name: 'UI/UX Design', description: 'Create user flows, wireframes, and intuitive interfaces.' },
      { name: 'Development', description: 'Build the application using the appropriate, modern technology stack.' },
      { name: 'Testing', description: 'Rigorously test functionality, security, performance, and integrations.' },
      { name: 'Deployment', description: 'Safely deploy the application to your production environment.' },
      { name: 'Support', description: 'Maintain, monitor, and continuously improve the system.' }
    ]
  },
  technologyStack: {
    title: 'Technologies We Use',
    stacks: [
      { category: 'Frontend', technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript'] },
      { category: 'Backend', technologies: ['Node.js', 'Python', 'FastAPI', 'Java', 'Go'] },
      { category: 'Database', technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
      { category: 'Cloud & Infrastructure', technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'] }
    ]
  },
  caseStudies: {
    title: 'Related Projects',
    studies: [
      {
        projectName: 'Enterprise Poultry Management Platform',
        industry: 'Agriculture & Logistics',
        businessProblem: 'Manual tracking of inventory and point-of-sale processes leading to severe inefficiencies and data loss.',
        solution: 'Developed a mobile-first POS and inventory management platform integrated with a central cloud backend.',
        technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
        keyFunctionality: ['Offline-first sync', 'Real-time inventory tracking', 'Automated reporting'],
        result: ['Reduced manual work by 45%', 'Processed over 1M+ transactions', 'Reduced processing time by 30%'],
        link: '/projects'
      },
      {
        projectName: 'Financial Operations Automation',
        industry: 'Fintech',
        businessProblem: 'Disconnected financial data across three legacy systems requiring manual reconciliation.',
        solution: 'Built a unified dashboard and automated API integration layer to sync data in real-time.',
        technologies: ['Next.js', 'Python', 'FastAPI', 'Redis'],
        keyFunctionality: ['Real-time dashboard', 'Automated reconciliation', 'Bank API integrations'],
        result: ['Saved 20 hours per week per analyst', 'Zero data entry errors', 'Real-time financial visibility'],
        link: '/projects'
      }
    ]
  },
  whyChooseUs: {
    title: 'Why Businesses Choose Us',
    reasons: [
      'Business-focused development aligned with ROI',
      'Custom architecture designed for extreme scalability',
      'API-first development for seamless future integrations',
      'Secure authentication and enterprise-grade compliance',
      'Transparent, Agile development process with regular updates',
      'Dedicated development teams that integrate with your business',
      'Post-launch support and active monitoring'
    ]
  },
  engagementModels: {
    title: 'Development Engagement Options',
    models: [
      { title: 'Fixed Project', description: 'Suitable for clearly defined requirements with a fixed scope, timeline, and budget.' },
      { title: 'Dedicated Development Team', description: 'Suitable for long-term development where you need a dedicated technical partner.' },
      { title: 'MVP Development', description: 'Suitable for startups and enterprises validating a new product idea rapidly.' },
      { title: 'Ongoing Development & Support', description: 'Suitable for businesses requiring continuous improvements and maintenance.' }
    ]
  },
  faqs: {
    title: 'Frequently Asked Questions',
    questions: [
      { question: 'How much does custom software development cost?', answer: 'Costs vary widely based on the complexity, features, and platform requirements. A simple application might cost significantly less than a complex enterprise ERP. We provide detailed estimates after our initial discovery phase.' },
      { question: 'How long does custom software development take?', answer: 'A minimum viable product (MVP) can take anywhere from 2 to 4 months, while complex enterprise systems can take 6 to 12 months. We use agile methodologies to deliver working software in sprints.' },
      { question: 'Should I build custom software or use an existing SaaS product?', answer: 'If existing SaaS products force you to alter your core business processes or lack critical integrations, custom software is the better investment. It provides ownership, exact feature sets, and avoids recurring per-user licensing fees.' },
      { question: 'Can you integrate with our existing software?', answer: 'Yes. We specialize in API development and can integrate your new custom software with existing CRMs, ERPs, accounting software, and proprietary databases.' },
      { question: 'Do you provide software maintenance after launch?', answer: 'Yes, we offer ongoing SLA-based support, security patching, monitoring, and feature iteration to ensure your software evolves with your business.' },
      { question: 'Who owns the intellectual property (IP)?', answer: 'You do. Once the project is completed and paid for, the source code and all intellectual property rights are fully transferred to your business.' }
    ]
  },
  finalCta: {
    title: 'Have a Software Project in Mind?',
    subtitle: 'Tell us about your business, current challenges, and what you want to build.',
    ctaText: 'Discuss Your Project',
    ctaLink: '/contact'
  },
  relatedServices: {
    title: 'Related Services',
    services: [
      { title: 'Enterprise Application Development', slug: 'enterprise-application-development' },
      { title: 'Web Development', slug: 'web-development' },
      { title: 'Mobile Development', slug: 'mobile-development' },
      { title: 'Cloud Engineering', slug: 'cloud-engineering' },
      { title: 'DevOps', slug: 'devops' }
    ]
  }
};
