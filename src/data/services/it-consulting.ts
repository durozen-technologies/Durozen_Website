import { ServicePageData } from '@/types/service';

export const itConsultingData: ServicePageData = {
  slug: 'it-consulting',
  seo: {
    title: 'Strategic IT Consulting Services | Durozen',
    description: 'Technical advisory, enterprise architecture, security audits, and fractional CTO services to align your technology stack with your business goals.',
  },
  hero: {
    h1: 'Strategic IT Consulting',
    description: 'Technical advisory, enterprise architecture planning, security audits, and fractional CTO services to align your technology with your business goals.',
    ctaPrimary: { text: 'Schedule a Consultation', link: '/contact' },
    ctaSecondary: { text: 'View Our Services', link: '/services' },
  },
  whatIsIt: {
    title: 'What Is Strategic IT Consulting?',
    content: [
      'As businesses grow, their technology often becomes a tangled web of disjointed systems, mounting technical debt, and security vulnerabilities. Strategic IT Consulting provides the clarity needed to untangle this mess.',
      'We do not just offer generic advice. Our consultants are senior software architects and engineers who have built massive systems. We audit your current infrastructure, identify dangerous bottlenecks, and create a highly technical, actionable roadmap.',
      'Whether you are preparing for a major digital transformation, facing a critical compliance audit, or simply need an experienced Fractional CTO to guide your internal development team, we provide the technical leadership you need.'
    ]
  },
  servicesIncluded: {
    title: 'Our Consulting Expertise',
    services: [
      { title: 'Enterprise Architecture Design', description: 'Designing scalable, cloud-native architectures and microservices blueprints for your internal teams to execute.' },
      { title: 'Fractional CTO Services', description: 'Providing part-time, executive-level technical leadership to guide your engineering team and product roadmap.' },
      { title: 'Code & Architecture Audits', description: 'Deep-dive reviews of your existing codebase to identify technical debt, security flaws, and performance bottlenecks.' },
      { title: 'Cloud Strategy & Cost Optimization', description: 'Strategic planning for cloud migration and auditing existing AWS/Azure setups to slash monthly hosting bills.' },
      { title: 'Tech Stack Selection', description: 'Unbiased advisory on selecting the right programming languages, databases, and third-party SaaS tools.' },
      { title: 'Agile & DevOps Coaching', description: 'Training your internal engineering teams on modern CI/CD, Agile methodologies, and DevSecOps practices.' }
    ]
  },
  problemsSolved: {
    title: 'Business Problems We Solve',
    problems: [
      'Technology choices being made without understanding long-term scaling implications',
      'Exorbitant cloud hosting bills caused by inefficient infrastructure',
      'Slow development velocity due to massive amounts of technical debt',
      'Inability to pass security and compliance audits (SOC2, HIPAA, GDPR)',
      'High turnover in the engineering department due to poor technical leadership',
      'Disjointed software systems that require constant manual data syncing',
      'Lack of a clear technology roadmap aligned with business revenue goals',
      'Vendor lock-in preventing the company from adopting cheaper, better tools'
    ]
  },
  whoWeServe: {
    title: 'Who Needs IT Consulting',
    audiences: [
      'Non-Technical Founders & CEOs',
      'Startups needing a Fractional CTO',
      'Enterprises planning Digital Transformation',
      'Private Equity Firms conducting Tech Due Diligence',
      'Companies preparing for SOC2/HIPAA Audits',
      'Organizations facing massive Cloud Bills',
      'Engineering Teams needing Agile coaching',
      'Companies dealing with Legacy System debt'
    ]
  },
  useCases: {
    title: 'Consulting Use Cases',
    cases: [
      'Tech Due Diligence for M&A', 'Fractional CTO Placement', 'AWS Cost Optimization Audit', 'SOC2 Readiness Assessment',
      'Microservices Architecture Blueprint', 'Agile Transformation', 'Legacy System Audit', 'Vendor Selection Advisory'
    ]
  },
  developmentProcess: {
    title: 'Our Consulting Framework',
    steps: [
      { name: 'Discovery & Alignment', description: 'Meet with executive stakeholders to understand the business goals and current pain points.' },
      { name: 'Deep Technical Audit', description: 'Our architects review your codebase, infrastructure, security protocols, and engineering workflows.' },
      { name: 'Gap Analysis', description: 'Identify the exact gaps between your current technology state and where the business needs to be.' },
      { name: 'Strategic Roadmap', description: 'Deliver a phased, highly actionable technical roadmap, complete with tech stack recommendations and timelines.' },
      { name: 'Implementation Support', description: 'Provide ongoing advisory or embed our engineers to help your team execute the new roadmap.' },
      { name: 'Review & Optimize', description: 'Regular check-ins to measure progress against KPIs, optimize costs, and adjust the strategy.' }
    ]
  },
  technologyStack: {
    title: 'Areas of Expertise',
    stacks: [
      { category: 'Enterprise Architecture', technologies: ['Microservices', 'Event-Driven (Kafka)', 'Serverless', 'Monolith to Microservices'] },
      { category: 'Cloud & Infrastructure', technologies: ['AWS', 'Azure', 'Kubernetes', 'FinOps (Cost Optimization)'] },
      { category: 'Security & Compliance', technologies: ['SOC2 Readiness', 'HIPAA', 'GDPR', 'Zero-Trust Architecture'] },
      { category: 'Engineering Processes', technologies: ['Agile (Scrum/Kanban)', 'CI/CD Pipelines', 'Test-Driven Development (TDD)'] }
    ]
  },
  caseStudies: {
    title: 'Consulting Success Stories',
    studies: [
      {
        projectName: 'Tech Due Diligence & Rescue',
        industry: 'Private Equity / SaaS',
        businessProblem: 'A PE firm acquired a SaaS company and discovered the platform was crashing daily due to severe technical debt.',
        solution: 'Conducted a deep codebase audit, replaced the failing CTO with a Fractional CTO, and architected a 6-month stabilization plan.',
        technologies: ['Architecture Audit', 'AWS FinOps', 'Agile Coaching'],
        keyFunctionality: ['Stabilized legacy code', 'Implemented CI/CD', 'Restructured the engineering team'],
        result: ['Reduced server crashes to zero', 'Cut AWS costs by 30%', 'Increased feature release velocity by 2x'],
        link: '/projects'
      }
    ]
  },
  whyChooseUs: {
    title: 'Why Choose Durozen for IT Consulting',
    reasons: [
      'We are Practitioners, not just Theorists: Our consultants are active Senior Engineers and Architects',
      'Unbiased Advice: We do not take kickbacks from software vendors; we recommend what is best for you',
      'Focus on Business Value: We align every technical decision with your revenue and operational goals',
      'Actionable Deliverables: No useless 100-page PDFs; we provide clear architectures, code, and roadmaps',
      'Deep expertise in modern cloud-native architectures and enterprise security',
      'Flexible engagement models, from quick 2-week audits to multi-year Fractional CTO roles'
    ]
  },
  engagementModels: {
    title: 'Consulting Engagement Models',
    models: [
      { title: 'Fractional CTO', description: 'Ongoing, part-time executive technical leadership to guide your company and manage your engineers.' },
      { title: 'Fixed-Term Tech Audit', description: 'A rapid 2-4 week deep dive into your codebase, security, and cloud infrastructure to uncover hidden risks.' },
      { title: 'Architecture Blueprinting', description: 'A short engagement to design the technical architecture for a new product before your team builds it.' },
      { title: 'M&A Tech Due Diligence', description: 'Assessing the technical health of a software company before a merger, acquisition, or major investment.' }
    ]
  },
  faqs: {
    title: 'IT Consulting FAQs',
    questions: [
      { question: 'What does a Fractional CTO actually do?', answer: 'A Fractional CTO provides executive technical leadership without the cost of a full-time hire. They make high-level architecture decisions, manage your engineering team, oversee security, and ensure technology choices align with the CEO’s business goals.' },
      { question: 'Will you force us to change our entire tech stack?', answer: 'No. We are pragmatic. If your current stack is working, we will help you optimize it. We only recommend rewriting or changing stacks if the current technology is a massive security risk, unscalable, or severely hurting business operations.' },
      { question: 'Do you implement the roadmap you create?', answer: 'We can. We are a full-stack engineering firm. If you have an internal team, we can hand the roadmap to them and provide coaching. If you need developers, we can provide the engineering muscle to build the roadmap ourselves.' },
      { question: 'How do you handle confidentiality?', answer: 'We sign strict NDAs before any engagement begins. As experts in enterprise security, your proprietary source code, infrastructure details, and business strategies are kept highly secure.' }
    ]
  },
  finalCta: {
    title: 'Gain Technical Clarity',
    subtitle: 'Stop guessing on technical decisions. Get expert architecture and leadership.',
    ctaText: 'Schedule a Free Assessment',
    ctaLink: '/contact'
  },
  relatedServices: {
    title: 'Related Services',
    services: [
      { title: 'Digital Transformation', slug: 'digital-transformation' },
      { title: 'Cloud Engineering', slug: 'cloud-engineering' },
      { title: 'Enterprise Application Development', slug: 'enterprise-application-development' },
      { title: 'DevOps', slug: 'devops' }
    ]
  }
};
