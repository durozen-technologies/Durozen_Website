import { ServicePageData } from '@/types/service';

export const enterpriseApplicationDevelopmentData: ServicePageData = {
  slug: 'enterprise-application-development',
  seo: {
    title: 'Enterprise Application Development Services | Durozen',
    description: 'Secure, scalable applications for complex workflows, role-based access control, enterprise reporting, and legacy integrations.',
  },
  hero: {
    h1: 'Enterprise Application Development',
    description: 'Secure, scalable applications engineered for complex workflows, deep system integrations, and global enterprise operations.',
    ctaPrimary: { text: 'Discuss Your Enterprise Project', link: '/contact' },
    ctaSecondary: { text: 'Explore Case Studies', link: '/projects' },
  },
  whatIsIt: {
    title: 'What Is Enterprise Application Development?',
    content: [
      'Enterprise Application Development is the process of building massive, scalable, and highly secure software systems designed to operate in a corporate environment.',
      'Unlike consumer apps, enterprise applications must handle complex business rules, strict compliance regulations, role-based access controls (RBAC), and integrate deeply with legacy infrastructure (like mainframes, SAP, or Oracle DBs).',
      'The goal is to unify distinct business units—HR, finance, supply chain, and operations—into a single source of truth, eliminating data silos and enabling real-time decision making at scale.'
    ]
  },
  servicesIncluded: {
    title: 'Our Enterprise Software Services',
    services: [
      { title: 'ERP System Development', description: 'Custom Enterprise Resource Planning platforms to manage day-to-day business activities like accounting and procurement.' },
      { title: 'CRM Solutions', description: 'Highly customized Customer Relationship Management systems tailored to your unique sales cycle and data privacy needs.' },
      { title: 'Supply Chain Management (SCM)', description: 'End-to-end visibility platforms for tracking logistics, inventory, suppliers, and distribution.' },
      { title: 'Business Intelligence Dashboards', description: 'Data aggregation platforms that turn terabytes of scattered data into actionable executive insights.' },
      { title: 'Legacy System Integration', description: 'Building secure API layers to connect modern web interfaces to older on-premise mainframes.' },
      { title: 'Intranet & Employee Portals', description: 'Secure internal portals for document management, HR workflows, and employee communication.' }
    ]
  },
  problemsSolved: {
    title: 'Enterprise Challenges We Solve',
    problems: [
      'Data silos preventing a unified view of the organization',
      'Inefficient, paper-based or disjointed digital workflows',
      'High licensing costs of bloated off-the-shelf enterprise software',
      'Security vulnerabilities in outdated legacy systems',
      'Inability to scale software globally without performance degradation',
      'Lack of compliance with industry regulations (GDPR, HIPAA, SOC2)',
      'Difficulty onboarding new employees due to fragmented tools',
      'Poor mobile accessibility for field and remote workers'
    ]
  },
  whoWeServe: {
    title: 'Industries We Serve',
    audiences: [
      'Banking & Financial Institutions',
      'Healthcare & Pharmaceuticals',
      'Global Supply Chain & Logistics',
      'Large Scale Manufacturing',
      'Retail Enterprises',
      'Government & Public Sector',
      'Telecommunications',
      'Energy & Utilities'
    ]
  },
  useCases: {
    title: 'Enterprise Use Cases',
    cases: [
      'Global ERP Rollouts', 'Custom CRM Portals', 'Automated Billing Systems', 'Compliance Tracking',
      'Multi-tenant SaaS', 'Supply Chain Visibility', 'Enterprise Identity Management', 'Big Data Warehousing',
      'HR Information Systems', 'Procurement Platforms'
    ]
  },
  developmentProcess: {
    title: 'Our Enterprise Delivery Framework',
    steps: [
      { name: 'Architecture Review', description: 'Analyze existing infrastructure, data flows, and security constraints.' },
      { name: 'Requirement Engineering', description: 'Detailed mapping of business logic, RBAC rules, and compliance needs.' },
      { name: 'Prototyping', description: 'Develop interactive prototypes to align stakeholders across departments.' },
      { name: 'Agile Implementation', description: 'Iterative development focusing on core modules and integration points.' },
      { name: 'Security & QA', description: 'Penetration testing, load testing, and strict QA protocols.' },
      { name: 'Staged Rollout', description: 'Deploying to staging, conducting UAT, and phased production rollouts.' },
      { name: 'Enterprise Support', description: '24/7 SLA-backed monitoring and continuous modernization.' }
    ]
  },
  technologyStack: {
    title: 'Enterprise Technology Stack',
    stacks: [
      { category: 'Frontend', technologies: ['React', 'Angular', 'Next.js', 'Micro-frontends'] },
      { category: 'Backend', technologies: ['Java (Spring Boot)', 'C# (.NET Core)', 'Node.js', 'Go'] },
      { category: 'Data & Analytics', technologies: ['PostgreSQL', 'Oracle', 'Snowflake', 'Elasticsearch'] },
      { category: 'Infrastructure', technologies: ['AWS', 'Azure', 'Kubernetes', 'Kafka', 'Terraform'] }
    ]
  },
  caseStudies: {
    title: 'Enterprise Success Stories',
    studies: [
      {
        projectName: 'Global Supply Chain Unified Portal',
        industry: 'Logistics',
        businessProblem: 'Tracking shipments across 5 different legacy systems caused a 48-hour delay in reporting.',
        solution: 'Built a centralized enterprise portal aggregating data via custom microservices.',
        technologies: ['Java Spring Boot', 'Angular', 'Kafka', 'PostgreSQL'],
        keyFunctionality: ['Real-time tracking', 'Multi-role dashboards', 'Legacy DB syncing'],
        result: ['Reduced reporting delay to real-time', 'Consolidated 5 systems into 1', 'Adopted by 5,000+ users'],
        link: '/projects'
      }
    ]
  },
  whyChooseUs: {
    title: 'Why Choose Durozen for Enterprise',
    reasons: [
      'Deep expertise in complex systems integration and legacy modernization',
      'Microservices and event-driven architecture specialists',
      'Strict adherence to enterprise security and compliance standards',
      'Scalable cloud-native deployment strategies',
      'Experience managing multi-stakeholder enterprise projects',
      'Transparent governance and reporting throughout the SDLC',
      'Dedicated support teams for business-critical applications'
    ]
  },
  engagementModels: {
    title: 'Enterprise Engagement Models',
    models: [
      { title: 'Project Outsourcing', description: 'End-to-end delivery of a specific enterprise application with shared risk and defined SLAs.' },
      { title: 'Dedicated Engineering Center', description: 'A remote, dedicated team of senior engineers seamlessly integrated into your IT department.' },
      { title: 'Team Augmentation', description: 'Specific technical experts (Architects, DevOps, QA) injected into your existing projects.' },
      { title: 'Digital Transformation Consulting', description: 'Strategic consulting to map out your enterprise modernization roadmap.' }
    ]
  },
  faqs: {
    title: 'Enterprise Development FAQs',
    questions: [
      { question: 'How do you ensure data security during development?', answer: 'We follow DevSecOps practices, implement SOC2 compliance standards, utilize encryption at rest and in transit, and conduct rigorous penetration testing before any enterprise deployment.' },
      { question: 'Can you integrate a new application with our 20-year-old mainframe?', answer: 'Yes. We specialize in legacy modernization. We often build secure API wrappers or middleware layers that allow modern web and mobile applications to communicate safely with legacy databases.' },
      { question: 'What is your approach to scalability?', answer: 'We utilize cloud-native architectures, containerization (Kubernetes), microservices, and asynchronous event streaming (like Kafka) to ensure the application scales horizontally to handle enterprise loads.' },
      { question: 'How do you manage changes in scope for large projects?', answer: 'We use Agile methodologies, typically Scrum or SAFe for enterprise. This allows us to adjust to changing business priorities iteratively while maintaining strict governance and budget oversight.' }
    ]
  },
  finalCta: {
    title: 'Modernize Your Enterprise',
    subtitle: 'Partner with Durozen to build secure, scalable applications that drive operational excellence.',
    ctaText: 'Schedule a Technical Consultation',
    ctaLink: '/contact'
  },
  relatedServices: {
    title: 'Related Services',
    services: [
      { title: 'Custom Software Development', slug: 'custom-software-development' },
      { title: 'Cloud Engineering', slug: 'cloud-engineering' },
      { title: 'Data Engineering', slug: 'data-engineering' },
      { title: 'API Development', slug: 'api-development' },
      { title: 'Digital Transformation', slug: 'digital-transformation' }
    ]
  }
};
