import { SolutionPageData } from '@/types/solution';

export const internalBusinessToolsData: SolutionPageData = {
  slug: 'internal-business-tools',
  seo: {
    title: 'Custom Internal Business Tools & Portals | Durozen',
    description: 'Create fast, secure internal tools for operations, field staff, and management decisions. Replace spreadsheets with custom web applications.',
  },
  hero: {
    h1: 'Custom Internal Business Tools',
    problem: 'Stop running your operations on fragile spreadsheets and endless email chains. We build secure, custom internal web applications that make your team faster and more accurate.',
    ctaPrimary: { text: 'Discuss Your Internal Tool', link: '/contact' },
    ctaSecondary: { text: 'View Tool Examples', link: '/projects' },
  },
  overview: {
    title: 'What are Internal Business Tools?',
    content: [
      'Internal tools are the custom software applications used exclusively by your employees to run the business. This includes admin panels, inventory trackers, employee onboarding portals, and custom reporting dashboards.',
      'Many companies rely on a chaotic mix of Google Sheets, Airtable, and shared inboxes to manage critical operations. While cheap initially, these "tools" quickly break as you scale, leading to data loss, security risks, and massive inefficiencies.',
      'We build professional-grade, secure internal web applications tailored exactly to your operational workflows, ensuring your employees have the exact tools they need to do their jobs efficiently.'
    ]
  },
  problems: {
    title: 'Signs You Need Custom Internal Tools',
    list: [
      'Your core business operations run on a massive spreadsheet that frequently crashes',
      'Employees spend hours manually copying data from one system to another',
      'Field workers cannot easily update job statuses from their mobile phones',
      'You cannot control who sees what data because your spreadsheets lack granular permissions',
      'Off-the-shelf software has too many useless features confusing your staff',
      'Data is frequently overwritten or lost due to human error'
    ]
  },
  solution: {
    title: 'Tailor-Made Operational Software',
    description: 'We build exactly what you need and nothing you don’t. By creating streamlined, custom interfaces connected to a secure central database, we eliminate the friction holding your team back.'
  },
  keyFeatures: {
    title: 'Key Capabilities of Internal Tools',
    features: [
      { title: 'Granular Access Control (RBAC)', description: 'Ensure that junior staff only see what they need, while managers have full override capabilities.' },
      { title: 'Mobile-First Field Apps', description: 'Responsive web apps that allow technicians to upload photos and update job statuses directly from the field.' },
      { title: 'Unified Data Dashboards', description: 'Pulling data from your CRM, ERP, and payment gateways into a single admin view.' },
      { title: 'Automated Data Validation', description: 'Preventing employees from entering bad data (e.g., typos in SKU numbers) through strict form validation.' },
      { title: 'Bulk Data Processing', description: 'Tools that allow operations managers to upload a CSV and safely process 10,000 records instantly.' },
      { title: 'Activity Audit Logs', description: 'Tracking exactly who changed what piece of data and when, for total accountability.' }
    ]
  },
  useCases: {
    title: 'Internal Tool Use Cases',
    cases: [
      'Custom Admin Panels', 'Field Service Dispatch Apps', 'Inventory & Asset Trackers',
      'Employee Onboarding Portals', 'Approval Routing Systems', 'Customer Support Overrides'
    ]
  },
  whoIsItFor: {
    title: 'Who Needs Custom Internal Tools?',
    audiences: [
      'Operations & Logistics Managers',
      'Field Service Companies (Plumbing, HVAC, Delivery)',
      'Customer Support Departments',
      'HR & Onboarding Teams',
      'Warehouse Managers',
      'Any team outgrowing Google Sheets'
    ]
  },
  benefits: {
    title: 'The Business Impact',
    list: [
      { title: 'Massive Productivity Gains', description: 'Tasks that required navigating three different software systems now take one click.' },
      { title: 'Data Security & Compliance', description: 'Stop emailing sensitive spreadsheets around. Keep data locked in a secure database.' },
      { title: 'Zero Training Time', description: 'Because the tool is built exactly around your specific workflow, new hires inherently understand how to use it.' },
      { title: 'High ROI', description: 'A custom tool that saves 10 employees 5 hours a week pays for itself in months.' }
    ]
  },
  howItWorks: {
    title: 'How an Internal Tool Functions',
    steps: [
      { name: 'The Interface', description: 'A clean, intuitive web interface designed only for the specific task at hand (e.g., approving an expense).' },
      { name: 'The API Layer', description: 'The tool communicates with your central database and third-party APIs (like Stripe or Salesforce).' },
      { name: 'The Logic', description: 'The backend ensures business rules are followed before saving data (e.g., checking if budget > $0).' },
      { name: 'The Output', description: 'The database is updated, and the tool instantly reflects the new state to all other employees.' }
    ]
  },
  implementationProcess: {
    title: 'Our Tool Building Process',
    steps: [
      { name: 'Workflow Shadowing', description: 'We observe your employees doing their daily tasks to see exactly where they get frustrated or slowed down.' },
      { name: 'Rapid Prototyping', description: 'We create quick wireframes of the new tool and have the employees test the layout.' },
      { name: 'Backend Integration', description: 'We connect the new tool to your existing databases so it has access to live data.' },
      { name: 'Development & Testing', description: 'We build the tool, ensuring it is highly responsive and secure.' },
      { name: 'Rollout', description: 'We launch the tool, phasing out the old spreadsheets one department at a time.' }
    ]
  },
  integrations: {
    title: 'Common Integrations',
    list: [
      'Identity Providers (Okta, Google Workspace)',
      'Databases (PostgreSQL, MySQL)',
      'Internal Communication (Slack, Microsoft Teams)',
      'File Storage (AWS S3, Google Drive)',
      'Core Business Systems (Salesforce, SAP)'
    ]
  },
  technology: {
    title: 'Internal Tool Technology Stack',
    stacks: [
      { category: 'Low-Code / Rapid Dev', technologies: ['Retool', 'Appsmith', 'Supabase'] },
      { category: 'Custom Frontend', technologies: ['React', 'Next.js', 'Tailwind CSS'] },
      { category: 'Backend API', technologies: ['Node.js', 'Python (FastAPI)'] },
      { category: 'Database', technologies: ['PostgreSQL', 'MongoDB'] }
    ]
  },
  caseStudy: {
    title: 'Internal Tool Success Story',
    studies: [
      {
        projectName: 'Field Technician Dispatch Portal',
        businessProblem: 'A telecommunications company was dispatching technicians via text message and tracking job statuses in a massive, chaotic spreadsheet.',
        solution: 'Built a custom React web app for dispatchers and a mobile-friendly view for technicians to see their daily routes and upload job completion photos.',
        result: ['Eliminated lost job tickets entirely', 'Reduced dispatcher workload by 40%', 'Real-time visibility into fleet location'],
        link: '/projects'
      }
    ]
  },
  faqs: {
    title: 'Internal Tools FAQs',
    questions: [
      { question: 'Should we build custom or use a tool like Retool?', answer: 'We evaluate this on a case-by-case basis. For simple admin dashboards, using a platform like Retool can save weeks of development time. However, if the tool requires complex mobile interfaces or highly specific business logic, building a custom React application is often better for long-term scalability.' },
      { question: 'Can the tool connect to our existing, old database?', answer: 'Yes. Internal tools are often used precisely for this reason—to put a modern, fast web interface on top of a slow, legacy database. We can build secure API wrappers to interact with your existing data.' },
      { question: 'How do you handle authentication?', answer: 'We typically integrate the tool with your existing corporate identity provider (like Google Workspace, Okta, or Microsoft Entra). This means employees don’t need to remember a new password—they just log in with their company email (SSO).' },
      { question: 'Is it mobile friendly?', answer: 'Yes. Unless it is a highly complex data-visualization dashboard meant only for desktop monitors, we build our internal tools to be fully responsive so they work perfectly on tablets and smartphones.' }
    ]
  },
  finalCta: {
    title: 'Empower Your Team',
    subtitle: 'Give your employees the tools they need to do their best work without the friction of bad software.',
    ctaText: 'Discuss Your Internal Tool',
    ctaLink: '/contact'
  },
  relatedSolutions: {
    title: 'Related Solutions',
    solutions: [
      { title: 'Workflow Automation', slug: 'workflow-automation' },
      { title: 'Enterprise Resource Planning', slug: 'enterprise-resource-planning' },
      { title: 'Analytics Dashboards', slug: 'analytics-dashboards' }
    ]
  }
};
