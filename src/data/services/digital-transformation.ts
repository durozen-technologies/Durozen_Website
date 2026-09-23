import { ServicePageData } from '@/types/service';

export const digitalTransformationData: ServicePageData = {
  slug: 'digital-transformation',
  seo: {
    title: 'Digital Transformation Consulting & Engineering | Durozen',
    description: 'End-to-end digital transformation for enterprises. Legacy modernization, cloud migration, process automation, and technology strategy.',
  },
  hero: {
    h1: 'Enterprise Digital Transformation',
    description: 'End-to-end digital transformation. We help legacy enterprises modernize their technology stack, automate manual workflows, and migrate to the cloud.',
    ctaPrimary: { text: 'Start Your Transformation', link: '/contact' },
    ctaSecondary: { text: 'Read Our Case Studies', link: '/projects' },
  },
  whatIsIt: {
    title: 'What Is Digital Transformation?',
    content: [
      'Digital Transformation is not just about buying new software; it is a fundamental shift in how an enterprise operates and delivers value to its customers. It involves ripping out outdated legacy systems and replacing them with agile, scalable technology.',
      'Many established businesses are bogged down by paper-based processes, disconnected systems, and monolithic codebases that make it impossible to compete with modern, tech-first startups.',
      'We act as your technical partner in this journey. We don\'t just consult; we actually engineer the transformation. We modernize your legacy applications, migrate your data to the cloud, and automate your manual workflows.'
    ]
  },
  servicesIncluded: {
    title: 'Our Transformation Services',
    services: [
      { title: 'Legacy Modernization', description: 'Refactoring or entirely rewriting outdated, monolithic legacy applications into modern microservices.' },
      { title: 'Process Automation (RPA)', description: 'Identifying manual, spreadsheet-heavy workflows and replacing them with automated, integrated software.' },
      { title: 'Cloud Migration Strategy', description: 'Safely moving your on-premise infrastructure to AWS or Azure to reduce IT overhead and increase scalability.' },
      { title: 'Enterprise Architecture Consulting', description: 'Auditing your current IT landscape and providing a technical roadmap for modernization.' },
      { title: 'Data Silo Integration', description: 'Building custom APIs and data pipelines to connect disjointed systems (ERP, CRM, HRIS) into a single source of truth.' },
      { title: 'Digital Customer Experience', description: 'Rebuilding outdated customer-facing portals into highly responsive, modern web and mobile applications.' }
    ]
  },
  problemsSolved: {
    title: 'Enterprise Challenges We Solve',
    problems: [
      'Losing market share to tech-first competitors and agile startups',
      'Exorbitant IT maintenance costs keeping 20-year-old servers running',
      'Inability to launch new features quickly due to a fragile, monolithic codebase',
      'Employees spending hours on manual data entry and reconciliation',
      'Lack of real-time business intelligence due to fragmented data silos',
      'High security and compliance risks associated with unsupported legacy software',
      'Poor customer experiences caused by outdated, unresponsive digital portals',
      'Fear of migrating mission-critical data to the cloud'
    ]
  },
  whoWeServe: {
    title: 'Industries We Transform',
    audiences: [
      'Traditional Banking & Financial Services',
      'Legacy Manufacturing & Logistics',
      'Healthcare Providers & Hospitals',
      'Established Retail Chains',
      'Insurance Companies',
      'Government & Public Sector',
      'Real Estate & Construction',
      'Telecommunications'
    ]
  },
  useCases: {
    title: 'Transformation Use Cases',
    cases: [
      'Mainframe to Cloud Migration', 'Paperless Workflow Automation', 'Monolith to Microservices', 'Unified Customer Portals',
      'ERP Modernization', 'API-led Connectivity', 'Automated Reporting Dashboards', 'Legacy Database Upgrades'
    ]
  },
  developmentProcess: {
    title: 'Our Transformation Framework',
    steps: [
      { name: 'Technical Audit', description: 'Deep dive into your existing codebase, infrastructure, and business workflows to identify critical bottlenecks.' },
      { name: 'Roadmap & Strategy', description: 'Develop a phased, low-risk modernization roadmap that aligns with your business objectives and budget.' },
      { name: 'Proof of Concept (PoC)', description: 'Modernize a small, non-critical slice of the business first to prove the architecture and ROI.' },
      { name: 'Agile Execution', description: 'Iteratively rewrite code, build APIs, and automate workflows using modern software engineering practices.' },
      { name: 'Cloud Migration', description: 'Safely transition data and workloads to the cloud utilizing zero-downtime deployment strategies.' },
      { name: 'Change Management', description: 'Ensure your internal teams are trained and comfortable with the new technology stack.' }
    ]
  },
  technologyStack: {
    title: 'Transformation Technology Stack',
    stacks: [
      { category: 'Cloud Infrastructure', technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Terraform'] },
      { category: 'Modernization Frameworks', technologies: ['Node.js', 'React', 'Java Spring Boot', 'Go'] },
      { category: 'Integration & APIs', technologies: ['GraphQL', 'REST', 'Apache Kafka', 'MuleSoft'] },
      { category: 'Containers & DevOps', technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'Datadog'] }
    ]
  },
  caseStudies: {
    title: 'Transformation Success Stories',
    studies: [
      {
        projectName: 'Insurance Claim Automation',
        industry: 'Insurance',
        businessProblem: 'Processing a single claim took 14 days due to manual data entry across 3 disconnected legacy systems.',
        solution: 'Engineered a modern web portal and automated backend that consolidated the 3 systems via custom APIs.',
        technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
        keyFunctionality: ['Automated OCR scanning', 'Unified API layer', 'Real-time status tracking'],
        result: ['Reduced claim processing to 2 days', 'Saved $2M annually in operational costs', 'Eliminated 95% of data entry errors'],
        link: '/projects'
      }
    ]
  },
  whyChooseUs: {
    title: 'Why Choose Durozen for Digital Transformation',
    reasons: [
      'We are Engineers, not just Consultants: We actually write the code to execute the transformation',
      'Phased approach to minimize risk and avoid catastrophic "big bang" deployments',
      'Deep expertise in legacy systems (mainframes, old Java/.NET monoliths)',
      'Security-first mindset to ensure compliance during cloud migrations',
      'Focus on tangible ROI and business outcomes, not just upgrading tech for tech’s sake',
      'Change management support to ensure high adoption rates among your staff'
    ]
  },
  engagementModels: {
    title: 'Transformation Engagement Models',
    models: [
      { title: 'End-to-End Modernization', description: 'A multi-year partnership where we execute the entire transformation roadmap from audit to deployment.' },
      { title: 'Specific System Rewrite', description: 'Targeting a single, painful legacy application and rewriting it into a modern, cloud-native app.' },
      { title: 'Cloud Migration Execution', description: 'Executing the safe lift-and-shift or refactor of your on-premise infrastructure to AWS/Azure.' },
      { title: 'Technical Advisory', description: 'Providing senior architects to advise your internal executive team on technology strategy.' }
    ]
  },
  faqs: {
    title: 'Digital Transformation FAQs',
    questions: [
      { question: 'What is the biggest risk in digital transformation?', answer: 'The biggest risk is the "big bang" rewrite—trying to replace a massive legacy system all at once. We mitigate this using the "Strangler Fig" pattern: gradually replacing small pieces of the legacy system with modern microservices until the old system is entirely phased out.' },
      { question: 'Will this disrupt our daily operations?', answer: 'No. Our phased approach ensures that new systems run in parallel with legacy systems during the testing phase. We only cut over to the new system once it has been rigorously tested, ensuring zero operational downtime.' },
      { question: 'How do you handle employees who are resistant to new software?', answer: 'We involve key users early in the UX/UI design phase. When employees see that the new software will save them hours of tedious work, resistance turns into advocacy. We also build intuitive interfaces that require minimal training.' },
      { question: 'Do you just provide a strategy deck, or do you build it?', answer: 'We build it. While many consulting firms hand you a PDF and walk away, we are a software engineering firm. We design the architecture and our engineers write the code to make it a reality.' }
    ]
  },
  finalCta: {
    title: 'Future-Proof Your Business',
    subtitle: 'Stop letting legacy technology hold you back. Let’s modernize your operations.',
    ctaText: 'Schedule a Strategy Session',
    ctaLink: '/contact'
  },
  relatedServices: {
    title: 'Related Services',
    services: [
      { title: 'Enterprise Application Development', slug: 'enterprise-application-development' },
      { title: 'Cloud Engineering', slug: 'cloud-engineering' },
      { title: 'Data Engineering', slug: 'data-engineering' },
      { title: 'IT Consulting', slug: 'it-consulting' }
    ]
  }
};
