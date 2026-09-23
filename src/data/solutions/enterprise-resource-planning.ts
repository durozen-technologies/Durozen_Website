import { SolutionPageData } from '@/types/solution';

export const enterpriseResourcePlanningData: SolutionPageData = {
  slug: 'enterprise-resource-planning',
  seo: {
    title: 'Enterprise Resource Planning (ERP) Solutions | Durozen',
    description: 'Centralize operations, finance, inventory, and reporting into one custom ERP system. Eliminate disjointed spreadsheets and manual data entry.',
  },
  hero: {
    h1: 'Enterprise Resource Planning (ERP) Solutions',
    problem: 'Stop running your business on disjointed spreadsheets. Centralize your operations, finance, and inventory into one reliable, custom-built platform.',
    ctaPrimary: { text: 'Discuss Your ERP Needs', link: '/contact' },
    ctaSecondary: { text: 'View ERP Architecture', link: '/projects' },
  },
  overview: {
    title: 'What is Custom ERP?',
    content: [
      'Enterprise Resource Planning (ERP) systems act as the central nervous system of your business. They connect your finance, manufacturing, retail, supply chain, HR, and operations departments onto a single, unified database.',
      'While off-the-shelf ERPs (like SAP or Oracle) are powerful, they are notoriously rigid and require you to change your business processes to fit their software. A custom ERP is built specifically around your unique operations, workflows, and competitive advantages.',
      'We engineer scalable, cloud-based ERP solutions that give your executive team real-time visibility into every aspect of the company without the bloat of traditional enterprise software.'
    ]
  },
  problems: {
    title: 'Common Operational Nightmares',
    list: [
      'Employees doing double data-entry across CRM, accounting, and inventory systems',
      'Inability to know exactly how much inventory is in the warehouse in real-time',
      'End-of-month financial reconciliation taking weeks instead of hours',
      'Off-the-shelf ERP systems that cost millions and are too complex for staff to use',
      'Critical business knowledge living inside the heads of a few key employees',
      'Using 15 different SaaS subscriptions to run one department'
    ]
  },
  solution: {
    title: 'Centralize Your Business Logic',
    description: 'We build a single source of truth. By centralizing data and automating hand-offs between departments, we eliminate manual bottlenecks and give you total operational visibility.'
  },
  keyFeatures: {
    title: 'Key ERP Capabilities',
    features: [
      { title: 'Unified Data Architecture', description: 'One central database linking sales, inventory, finance, and HR to prevent data silos.' },
      { title: 'Automated Financials', description: 'Real-time ledger updates, automated invoicing, and seamless payment gateway integrations.' },
      { title: 'Inventory & Supply Chain', description: 'Live tracking of stock levels, automated reordering, and warehouse management.' },
      { title: 'Role-Based Access Control', description: 'Granular permissions ensuring employees only see the data relevant to their specific job function.' },
      { title: 'Custom Approval Workflows', description: 'Automated routing for purchase orders, expense reports, and leave requests.' },
      { title: 'Real-Time Reporting', description: 'Executive dashboards showing KPIs, cash flow, and operational bottlenecks instantly.' }
    ]
  },
  useCases: {
    title: 'Business Use Cases',
    cases: [
      'Multi-Warehouse Inventory Tracking', 'End-to-End Order Fulfillment', 'Manufacturing Resource Planning (MRP)',
      'Automated Payroll & HR', 'Procurement & Vendor Management', 'Multi-Entity Financial Consolidation'
    ]
  },
  whoIsItFor: {
    title: 'Who Needs a Custom ERP?',
    audiences: [
      'Mid-Market Manufacturing',
      'Complex Retail & E-Commerce',
      'Logistics & Supply Chain Operations',
      'Healthcare & Hospital Administration',
      'Construction & Real Estate Management',
      'Fast-Growing Startups outgrowing spreadsheets'
    ]
  },
  benefits: {
    title: 'The Business Impact',
    list: [
      { title: 'Reduced Operational Costs', description: 'Eliminating manual data entry and redundant software licenses saves hundreds of hours monthly.' },
      { title: 'Zero Data Discrepancies', description: 'When every department looks at the same database, "bad data" arguments disappear.' },
      { title: 'Faster Decision Making', description: 'Executives can make critical decisions based on real-time dashboards instead of 30-day-old reports.' },
      { title: 'Infinite Scalability', description: 'A custom ERP scales with your transaction volume without charging you arbitrary per-user license fees.' }
    ]
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { name: 'Data Ingestion', description: 'Data flows securely from your website, sales team, and suppliers directly into the unified database.' },
      { name: 'Automated Routing', description: 'The system automatically routes the data (e.g., an order) to the correct department (e.g., the warehouse).' },
      { name: 'Task Execution', description: 'Employees receive clear, actionable tasks on their dashboard without needing to chase down approvals.' },
      { name: 'Real-Time Logging', description: 'Every action is logged in the general ledger and operational dashboards instantly.' }
    ]
  },
  implementationProcess: {
    title: 'Our Implementation Process',
    steps: [
      { name: 'Process Mapping', description: 'We map out exactly how your business currently operates and identify the manual bottlenecks.' },
      { name: 'Architecture Design', description: 'We design the database schema and UI prototypes specifically tailored to your workflows.' },
      { name: 'Modular Development', description: 'We build the ERP module by module (e.g., Finance first, then Inventory) so you see value quickly.' },
      { name: 'Data Migration', description: 'We safely migrate your historical data from spreadsheets and legacy systems into the new ERP.' },
      { name: 'Training & Launch', description: 'We train your staff and execute a phased rollout to ensure zero operational downtime.' }
    ]
  },
  integrations: {
    title: 'Seamless Integrations',
    list: [
      'Banking APIs (Stripe, Plaid)',
      'E-Commerce (Shopify, WooCommerce)',
      'Shipping Providers (FedEx, UPS)',
      'HRIS & Payroll (Gusto, Workday)',
      'Marketing CRM (HubSpot, Salesforce)'
    ]
  },
  technology: {
    title: 'ERP Technology Stack',
    stacks: [
      { category: 'Backend Architecture', technologies: ['Node.js', 'Python', 'Java Spring Boot', 'GraphQL'] },
      { category: 'Database & Caching', technologies: ['PostgreSQL', 'Redis', 'MongoDB'] },
      { category: 'Frontend Interface', technologies: ['React', 'Next.js', 'Tailwind CSS'] },
      { category: 'Cloud Infrastructure', technologies: ['AWS', 'Docker', 'Kubernetes', 'Datadog'] }
    ]
  },
  caseStudy: {
    title: 'ERP Success Story',
    studies: [
      {
        projectName: 'Manufacturing Operations ERP',
        businessProblem: 'A mid-sized manufacturer was losing 5% of its raw materials due to inaccurate spreadsheet tracking and delayed supplier orders.',
        solution: 'Engineered a custom cloud ERP connecting the factory floor, procurement, and accounting in real-time.',
        result: ['Reduced raw material waste to 0.5%', 'Automated 100% of purchase orders', 'Saved $400k annually in operational costs'],
        link: '/projects'
      }
    ]
  },
  faqs: {
    title: 'ERP Implementation FAQs',
    questions: [
      { question: 'Why build custom instead of buying SAP or NetSuite?', answer: 'Off-the-shelf ERPs are incredibly expensive, take years to implement, and often require you to change how your business operates to fit their software. A custom ERP is built around your competitive advantage and eliminates expensive per-seat licensing fees.' },
      { question: 'How long does a custom ERP take to build?', answer: 'We use an agile, modular approach. Instead of waiting 2 years for a massive launch, we might launch the Inventory Module in 3 months, the Finance Module 2 months later, and so on. You get ROI faster.' },
      { question: 'Is a custom ERP secure enough for our financial data?', answer: 'Yes. We engineer our systems with enterprise-grade security, including strict Role-Based Access Control (RBAC), end-to-end encryption, automated backups, and compliance with SOC2 standards.' },
      { question: 'Can we migrate our old data into the new system?', answer: 'Absolutely. Data migration is a critical part of our implementation process. We write custom ETL scripts to clean and port your historical data from spreadsheets or legacy software into the new PostgreSQL database.' }
    ]
  },
  finalCta: {
    title: 'Take Control of Your Operations',
    subtitle: 'Stop patching together incompatible software. Build the central nervous system your business deserves.',
    ctaText: 'Schedule an ERP Audit',
    ctaLink: '/contact'
  },
  relatedSolutions: {
    title: 'Related Solutions',
    solutions: [
      { title: 'Workflow Automation', slug: 'workflow-automation' },
      { title: 'Internal Business Tools', slug: 'internal-business-tools' },
      { title: 'Business Intelligence', slug: 'business-intelligence' }
    ]
  }
};
