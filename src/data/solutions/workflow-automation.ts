import { SolutionPageData } from '@/types/solution';

export const workflowAutomationData: SolutionPageData = {
  slug: 'workflow-automation',
  seo: {
    title: 'Custom Workflow Automation Solutions | Durozen',
    description: 'Replace manual handoffs with custom workflows, notifications, approvals, and API integrations. Streamline your business operations.',
  },
  hero: {
    h1: 'Custom Workflow Automation',
    problem: 'Replace slow, manual handoffs and emails with custom automated workflows, smart notifications, and instant API integrations.',
    ctaPrimary: { text: 'Automate Your Workflows', link: '/contact' },
    ctaSecondary: { text: 'Explore Case Studies', link: '/projects' },
  },
  overview: {
    title: 'What is Workflow Automation?',
    content: [
      'Every business runs on processes: onboarding a new employee, approving a purchase order, or routing a customer complaint. In most companies, these processes involve employees manually sending emails, pinging Slack channels, and updating spreadsheets.',
      'Workflow Automation replaces these manual, error-prone handoffs with code. It connects your existing software tools so that when an event happens in one system, a chain reaction of automated tasks executes instantly across the others.',
      'We build highly customized, secure automation pipelines that eliminate busywork, enforce strict approval rules, and ensure that nothing falls through the cracks.'
    ]
  },
  problems: {
    title: 'Signs You Need Workflow Automation',
    list: [
      'Important tasks being delayed because they are waiting on a manager’s email approval',
      'Employees spending hours copy-pasting data from one SaaS tool into another',
      'New employees waiting days for IT to manually provision their software accounts',
      'Customer complaints getting lost because they were forwarded to the wrong person',
      'Lack of an audit trail to prove who approved a critical financial transaction',
      'Processes completely breaking down when a key employee goes on vacation'
    ]
  },
  solution: {
    title: 'Seamless, Code-Driven Processes',
    description: 'We connect your APIs. When a trigger occurs, our custom code handles the logic, formatting, and routing—instantly passing the right data to the right system or person without human intervention.'
  },
  keyFeatures: {
    title: 'Key Automation Capabilities',
    features: [
      { title: 'Cross-Platform API Syncing', description: 'Instantly pushing data between your CRM, ERP, and support desk (e.g., Salesforce to Jira).' },
      { title: 'Automated Approval Routing', description: 'Creating tiered approval chains that automatically ping managers via Slack or email.' },
      { title: 'Document Generation', description: 'Automatically generating PDFs, contracts, and invoices based on form inputs, and sending them for e-signature.' },
      { title: 'Smart Notifications', description: 'Alerting the right team member only when their specific action is required, reducing notification fatigue.' },
      { title: 'Error Handling & Retries', description: 'Robust logic that automatically retries an integration if a third-party server goes down temporarily.' },
      { title: 'Comprehensive Audit Logs', description: 'Tracking every automated action, approval, and data transfer for compliance and troubleshooting.' }
    ]
  },
  useCases: {
    title: 'Automation Use Cases',
    cases: [
      'Employee Onboarding / Offboarding', 'Purchase Order Approvals', 'Automated Quote & Proposal Generation',
      'Customer Support Ticket Routing', 'Lead Nurture Handoffs to Sales', 'Compliance Document Tracking'
    ]
  },
  whoIsItFor: {
    title: 'Who Needs Workflow Automation?',
    audiences: [
      'Operations & Logistics Managers',
      'Human Resources Departments',
      'IT Support & SysAdmins',
      'Financial Controllers',
      'Sales Operations (RevOps)',
      'Customer Success Teams'
    ]
  },
  benefits: {
    title: 'The Business Impact',
    list: [
      { title: 'Drastic Time Savings', description: 'Processes that took days of back-and-forth emails now resolve in minutes.' },
      { title: 'Zero Human Error', description: 'Code doesn\'t forget to CC the compliance officer or misspell a customer\'s name.' },
      { title: 'Scalability', description: 'Your business can handle 10x the volume of transactions without needing to hire 10x the operational staff.' },
      { title: 'Clear Auditability', description: 'You always know exactly where a task is stuck and who is responsible for the next step.' }
    ]
  },
  howItWorks: {
    title: 'How an Automated Workflow Functions',
    steps: [
      { name: 'The Trigger', description: 'An event occurs in System A (e.g., A client signs a contract in DocuSign).' },
      { name: 'The Webhook', description: 'System A instantly sends a secure payload of data to our custom automation server.' },
      { name: 'The Logic', description: 'Our code processes the data, deciding what needs to happen next based on your business rules.' },
      { name: 'The Action', description: 'The code tells System B to create an invoice, and System C to ping the account manager in Slack.' }
    ]
  },
  implementationProcess: {
    title: 'Our Implementation Process',
    steps: [
      { name: 'Workflow Mapping', description: 'We map out your current manual processes visually to identify the slow handoffs.' },
      { name: 'API Feasibility Study', description: 'We review the API documentation of your existing tools to ensure the data can be moved.' },
      { name: 'Logic Engineering', description: 'We write the custom scripts and error-handling logic (using Node.js or Python).' },
      { name: 'Sandbox Testing', description: 'We run the automation in a safe testing environment to ensure it doesn’t trigger accidental emails.' },
      { name: 'Go-Live & Monitoring', description: 'We push the automation live and monitor server logs for any third-party API timeouts.' }
    ]
  },
  integrations: {
    title: 'Systems We Connect',
    list: [
      'Communication (Slack, Microsoft Teams, Twilio)',
      'CRMs (Salesforce, HubSpot, Pipedrive)',
      'Ticketing (Jira, Zendesk, ServiceNow)',
      'Finance (Stripe, Xero, QuickBooks)',
      'HR (Workday, BambooHR, Deel)'
    ]
  },
  technology: {
    title: 'Automation Technology Stack',
    stacks: [
      { category: 'Custom Code & Middleware', technologies: ['Node.js', 'Python', 'AWS Lambda', 'Serverless'] },
      { category: 'Enterprise iPaaS', technologies: ['MuleSoft', 'Workato', 'Boomi'] },
      { category: 'Lightweight Automation', technologies: ['Make (Integromat)', 'Zapier', 'n8n'] },
      { category: 'Infrastructure', technologies: ['AWS API Gateway', 'PostgreSQL', 'Docker'] }
    ]
  },
  caseStudy: {
    title: 'Automation Success Story',
    studies: [
      {
        projectName: 'HR Onboarding Automation',
        businessProblem: 'When a new employee was hired, HR had to manually email IT, Payroll, and Security. Provisioning accounts took an average of 4 days.',
        solution: 'Engineered a Node.js workflow that triggered when a contract was signed in BambooHR, automatically calling Google Workspace and Slack APIs.',
        result: ['Reduced onboarding time from 4 days to 5 minutes', 'Eliminated forgotten software licenses', 'Saved IT 15 hours a week in manual provisioning'],
        link: '/projects'
      }
    ]
  },
  faqs: {
    title: 'Workflow Automation FAQs',
    questions: [
      { question: 'Why hire you instead of just using Zapier ourselves?', answer: 'Zapier is great for simple, two-step tasks. However, when you need complex conditional logic, secure enterprise API connections, heavy data transformations, or guaranteed error-handling, Zapier breaks down. We write custom, robust middleware that doesn\'t fail.' },
      { question: 'What if a third-party API goes down?', answer: 'This is the biggest risk in automation. If Salesforce goes down for 10 minutes, a poorly built automation will just lose the data. We engineer "message queues" (like AWS SQS) and exponential backoff retry logic to ensure no data is ever lost during an outage.' },
      { question: 'Is the data secure while it moves between systems?', answer: 'Yes. All data is transmitted via secure TLS encryption. We do not store your payload data permanently on our servers; it is processed in memory and instantly passed to the destination system.' },
      { question: 'Can you automate a system that doesn\'t have an API?', answer: 'It is harder, but usually yes. We can often use Robotic Process Automation (RPA) tools or web-scraping scripts (Puppeteer/Playwright) to log into legacy systems and perform tasks as if a human were typing.' }
    ]
  },
  finalCta: {
    title: 'Eliminate the Busywork',
    subtitle: 'Free your team from manual data entry. Let code do the heavy lifting.',
    ctaText: 'Map Your Workflows',
    ctaLink: '/contact'
  },
  relatedSolutions: {
    title: 'Related Solutions',
    solutions: [
      { title: 'Internal Business Tools', slug: 'internal-business-tools' },
      { title: 'AI Automation', slug: 'ai-automation' },
      { title: 'Enterprise Resource Planning', slug: 'enterprise-resource-planning' }
    ]
  }
};
