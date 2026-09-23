import { SolutionPageData } from '@/types/solution';

export const customerManagementSystemsData: SolutionPageData = {
  slug: 'customer-management-systems',
  seo: {
    title: 'Custom CRM Solutions & Development | Durozen',
    description: 'Manage leads, service workflows, customer histories, and follow-up automation with clarity. Build a custom CRM that fits your exact sales process.',
  },
  hero: {
    h1: 'Custom CRM Solutions',
    problem: 'Stop losing leads in messy spreadsheets and rigid software. Manage leads, service workflows, and customer histories with a CRM built for your exact sales process.',
    ctaPrimary: { text: 'Discuss Your CRM Strategy', link: '/contact' },
    ctaSecondary: { text: 'View CRM Case Studies', link: '/projects' },
  },
  overview: {
    title: 'What is a Custom CRM?',
    content: [
      'Customer Relationship Management (CRM) systems are how businesses track interactions with prospects and clients. But off-the-shelf CRMs are often bloated with features you don’t need, while completely missing the specific workflows your sales team actually uses.',
      'A custom CRM is engineered around how you sell. It tracks the exact metrics you care about, automates your specific follow-up cadences, and integrates perfectly with your proprietary internal systems.',
      'We build high-performance, secure CRM platforms that empower your sales and support teams to close deals faster and retain clients longer.'
    ]
  },
  problems: {
    title: 'Common CRM Pain Points',
    list: [
      'Sales reps refusing to use the current CRM because it requires too many clicks',
      'Leads slipping through the cracks due to a lack of automated follow-up reminders',
      'Paying exorbitant per-user license fees for Salesforce or HubSpot',
      'Customer support lacking context because sales data is kept in a separate system',
      'Inability to accurately forecast quarterly revenue due to messy pipeline data',
      'Sales reps manually copying and pasting emails into the database'
    ]
  },
  solution: {
    title: 'A CRM Your Team Will Actually Use',
    description: 'We focus on frictionless UX. By automating data entry and building intuitive pipelines, we ensure your sales team spends their time selling, not fighting with software.'
  },
  keyFeatures: {
    title: 'Key CRM Capabilities',
    features: [
      { title: 'Custom Sales Pipelines', description: 'Visual drag-and-drop Kanban boards that reflect your exact deal stages.' },
      { title: 'Automated Lead Capture', description: 'Automatically routing leads from your website, social media, and emails directly to the right rep.' },
      { title: 'Communication Tracking', description: 'Auto-logging all emails, calls, and SMS messages against the client record.' },
      { title: 'Task & Workflow Automation', description: 'Automated follow-up reminders and task creation when a deal changes stages.' },
      { title: '360° Customer Profiles', description: 'A single dashboard showing a customer’s entire history: sales, support tickets, and billing.' },
      { title: 'Revenue Forecasting', description: 'Real-time analytics and dashboards predicting future revenue based on current pipeline velocity.' }
    ]
  },
  useCases: {
    title: 'CRM Use Cases',
    cases: [
      'B2B Enterprise Sales Tracking', 'Real Estate Lead Management', 'Healthcare Patient Management (HIPAA)',
      'Automotive Dealership CRMs', 'SaaS Customer Success Portals', 'High-Volume Call Center Dispatch'
    ]
  },
  whoIsItFor: {
    title: 'Who Needs a Custom CRM?',
    audiences: [
      'B2B Sales Organizations',
      'Real Estate Brokerages',
      'Financial Advisors & Wealth Management',
      'Healthcare & Telemedicine',
      'Large Field Service Teams',
      'Companies Outgrowing Spreadsheets'
    ]
  },
  benefits: {
    title: 'The Business Impact',
    list: [
      { title: 'Higher Close Rates', description: 'Automated follow-ups ensure no lead goes cold, directly increasing revenue.' },
      { title: '100% User Adoption', description: 'A CRM built specifically for your team means they will actually want to use it.' },
      { title: 'No Per-Seat Licenses', description: 'You own the software. Add 10 or 1,000 employees without your monthly software bill increasing.' },
      { title: 'Data Security & Ownership', description: 'Your most valuable asset—your customer list—is stored on your private servers, not a third-party cloud.' }
    ]
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { name: 'Lead Ingestion', description: 'A new prospect submits a form on your website. The CRM automatically creates a profile.' },
      { name: 'Intelligent Routing', description: 'The system assigns the lead to a sales rep based on territory, workload, or expertise.' },
      { name: 'Automated Nurture', description: 'The CRM sends an initial welcome email and schedules a follow-up call task for the rep.' },
      { name: 'Deal Progression', description: 'As the rep works the lead, they drag the deal through custom pipeline stages until closed.' }
    ]
  },
  implementationProcess: {
    title: 'Our Implementation Process',
    steps: [
      { name: 'Sales Process Audit', description: 'We interview your top performers to understand exactly how a deal gets done.' },
      { name: 'UX/UI Design', description: 'We design the CRM interface to be as frictionless and fast as possible.' },
      { name: 'Custom Development', description: 'We build the backend logic, third-party integrations, and automated workflows.' },
      { name: 'Data Migration', description: 'We safely import your messy historical data, cleaning it before inserting it into the new CRM.' },
      { name: 'Deployment', description: 'We launch the system to your team and monitor usage to ensure immediate adoption.' }
    ]
  },
  integrations: {
    title: 'Seamless Integrations',
    list: [
      'Email Clients (Gmail, Outlook/Exchange)',
      'VoIP & Telephony (Twilio, RingCentral)',
      'Calendar Syncing (Google Calendar)',
      'Marketing Automation (Mailchimp)',
      'Contract Signing (DocuSign)'
    ]
  },
  technology: {
    title: 'CRM Technology Stack',
    stacks: [
      { category: 'Frontend Interface', technologies: ['React', 'Next.js', 'Redux'] },
      { category: 'Backend Architecture', technologies: ['Node.js', 'Python (FastAPI)', 'GraphQL'] },
      { category: 'Database & Search', technologies: ['PostgreSQL', 'Elasticsearch (for fast search)'] },
      { category: 'Infrastructure', technologies: ['AWS', 'Vercel', 'Redis Caching'] }
    ]
  },
  caseStudy: {
    title: 'CRM Success Story',
    studies: [
      {
        projectName: 'National Real Estate CRM',
        businessProblem: 'A brokerage with 500 agents was losing leads because their off-the-shelf CRM was too complex to use on mobile phones.',
        solution: 'Engineered a highly responsive, mobile-first CRM with automated SMS follow-ups and one-click lead claiming.',
        result: ['Agent adoption increased from 40% to 98%', 'Lead response time dropped to under 5 minutes', 'Saved $250k annually in licensing fees'],
        link: '/projects'
      }
    ]
  },
  faqs: {
    title: 'Custom CRM FAQs',
    questions: [
      { question: 'Why not just use Salesforce?', answer: 'Salesforce is incredibly powerful, but it requires expensive consultants to customize, costs hundreds of dollars per user per month, and is often overwhelming for standard sales teams. A custom CRM gives you exactly what you need with zero licensing fees.' },
      { question: 'Can the CRM sync with my email?', answer: 'Yes. We integrate deeply with Gmail and Outlook APIs so that emails sent from your normal inbox are automatically logged against the correct customer profile in the CRM.' },
      { question: 'Is it mobile friendly?', answer: 'Absolutely. We build our custom CRMs as Progressive Web Apps (PWAs) or React Native apps, ensuring your field sales team can update deals effortlessly from their phones.' },
      { question: 'How do you handle data privacy?', answer: 'We build strict Role-Based Access Control (RBAC). A regional manager can see their entire team’s pipeline, while a junior rep can only see their own assigned leads. We also implement encryption to protect PII.' }
    ]
  },
  finalCta: {
    title: 'Close More Deals',
    subtitle: 'Give your sales team a tool they actually want to use. Build a CRM that drives revenue.',
    ctaText: 'Schedule a CRM Consultation',
    ctaLink: '/contact'
  },
  relatedSolutions: {
    title: 'Related Solutions',
    solutions: [
      { title: 'Workflow Automation', slug: 'workflow-automation' },
      { title: 'Analytics Dashboards', slug: 'analytics-dashboards' },
      { title: 'Internal Business Tools', slug: 'internal-business-tools' }
    ]
  }
};
