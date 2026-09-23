import { SolutionPageData } from '@/types/solution';

export const aiAutomationData: SolutionPageData = {
  slug: 'ai-automation',
  seo: {
    title: 'AI Automation Solutions for Business | Durozen',
    description: 'Automate repetitive business processes using AI, APIs, and intelligent workflows. From document processing to customer support.',
  },
  hero: {
    h1: 'AI Automation Solutions for Business',
    problem: 'Manual data processing, repetitive tasks, slow customer responses, and disconnected workflows are draining your profit margins.',
    ctaPrimary: { text: 'Automate Your Workflows', link: '/contact' },
    ctaSecondary: { text: 'See AI Use Cases', link: '/projects' },
  },
  overview: {
    title: 'What is AI Automation?',
    content: [
      'Artificial Intelligence is no longer a futuristic concept—it is a practical tool for eliminating the mundane, repetitive tasks that your employees hate doing. AI Automation combines Large Language Models (LLMs), optical character recognition (OCR), and API integrations to do the heavy lifting.',
      'Instead of humans manually reading invoices, answering basic customer emails, or extracting data from PDF contracts, AI systems can process these tasks in seconds with near-perfect accuracy.',
      'We build secure, private AI systems that integrate directly into your existing business workflows, dramatically reducing operational costs and freeing your team to focus on high-value work.'
    ]
  },
  problems: {
    title: 'Common Bottlenecks',
    list: [
      'Employees spending hours manually typing data from PDFs into the ERP system',
      'Customer support teams overwhelmed by the exact same 10 basic questions daily',
      'Slow invoice and contract processing causing delays in the supply chain',
      'Inability to analyze thousands of customer reviews or support tickets for trends',
      'Employees wasting hours searching through disorganized internal knowledge bases',
      'Security policies preventing the use of public AI tools like ChatGPT'
    ]
  },
  solution: {
    title: 'Intelligent, Automated Workflows',
    description: 'We deploy secure AI agents that can read, understand, and act upon unstructured data. By connecting AI directly to your databases and software, we automate the execution of complex business processes.'
  },
  keyFeatures: {
    title: 'Key AI Features',
    features: [
      { title: 'AI Document Processing', description: 'Automatically extract structured data (names, totals, dates) from messy PDFs, invoices, and receipts.' },
      { title: 'Intelligent Customer Support', description: 'Context-aware chatbots that can resolve complex customer issues by reading your proprietary manuals.' },
      { title: 'Email & Triage Automation', description: 'AI that reads incoming emails, categorizes them, and routes them to the correct department.' },
      { title: 'Internal AI Assistants (RAG)', description: 'A private search engine that allows employees to instantly query company policies or historical data.' },
      { title: 'Automated Report Generation', description: 'AI that analyzes raw spreadsheets and automatically writes weekly executive summaries.' },
      { title: 'Sentiment Analysis', description: 'Automatically scoring thousands of customer interactions to flag angry clients for immediate intervention.' }
    ]
  },
  useCases: {
    title: 'AI Business Use Cases',
    cases: [
      'Invoice & Receipt Processing', 'Automated Contract Review', 'Tier-1 Customer Support Resolution',
      'Lead Qualification & Scoring', 'Medical Records Triaging', 'Employee Onboarding Assistants'
    ]
  },
  whoIsItFor: {
    title: 'Who Needs AI Automation?',
    audiences: [
      'Customer Support Centers',
      'Legal & Compliance Departments',
      'Logistics & Supply Chain',
      'Financial Services & Accounting',
      'Healthcare Administrators',
      'Any business with high manual data entry'
    ]
  },
  benefits: {
    title: 'The Business Impact',
    list: [
      { title: 'Massive Cost Reduction', description: 'Automating Tier-1 support and data entry drastically reduces operational overhead.' },
      { title: 'Faster Processing Times', description: 'Tasks that took a human 15 minutes take an AI agent 3 seconds.' },
      { title: 'Fewer Manual Errors', description: 'AI does not get tired or mistype a crucial financial digit at 4:55 PM on a Friday.' },
      { title: 'Enterprise Security', description: 'We use private, localized AI models to ensure your proprietary data never leaks to the public.' }
    ]
  },
  howItWorks: {
    title: 'How AI Automation Works',
    steps: [
      { name: 'Data Ingestion', description: 'An unstructured file (e.g., a scanned PDF invoice) is uploaded or emailed to the system.' },
      { name: 'AI Analysis', description: 'The AI model reads the document, understands the context, and extracts the required data points.' },
      { name: 'Logic & Validation', description: 'The system checks the extracted data against your business rules (e.g., Does this invoice match a PO?).' },
      { name: 'Execution', description: 'The AI automatically inputs the structured data into your ERP or CRM via API.' }
    ]
  },
  implementationProcess: {
    title: 'Our Implementation Process',
    steps: [
      { name: 'Process Identification', description: 'We analyze your workflows to find the highest-ROI tasks to automate first.' },
      { name: 'Model Selection', description: 'We select the right AI model (OpenAI, Claude, or local open-source) based on your security needs.' },
      { name: 'Workflow Engineering', description: 'We build the code that connects the AI to your specific databases and software.' },
      { name: 'Rigorous Testing', description: 'We test the AI against thousands of edge cases to ensure absolute accuracy and prevent hallucinations.' },
      { name: 'Deployment', description: 'We deploy the automated system and monitor its performance continuously.' }
    ]
  },
  integrations: {
    title: 'Seamless Integrations',
    list: [
      'Customer Support (Zendesk, Intercom)',
      'ERP Systems (SAP, NetSuite)',
      'Internal Comms (Slack, Microsoft Teams)',
      'Email Servers (Exchange, Gmail)',
      'Document Storage (SharePoint, Google Drive)'
    ]
  },
  technology: {
    title: 'AI Technology Stack',
    stacks: [
      { category: 'AI Models & LLMs', technologies: ['OpenAI API', 'Anthropic Claude', 'Llama 3 (Self-Hosted)'] },
      { category: 'Vector Databases', technologies: ['Pinecone', 'PostgreSQL (pgvector)', 'Weaviate'] },
      { category: 'Orchestration', technologies: ['LangChain', 'LlamaIndex', 'Python'] },
      { category: 'Infrastructure', technologies: ['AWS SageMaker', 'Docker', 'Kubernetes'] }
    ]
  },
  caseStudy: {
    title: 'AI Automation Success Story',
    studies: [
      {
        projectName: 'Automated Logistics Invoice Processing',
        businessProblem: 'A logistics firm employed 12 clerks whose only job was manually typing data from PDF supplier invoices into their ERP.',
        solution: 'Built an AI pipeline using OCR and LLMs to automatically read invoices in email attachments, extract line items, and push to the ERP.',
        result: ['Reduced processing time from 10 minutes to 5 seconds per invoice', 'Saved $450k annually in operational costs', 'Zero data entry errors'],
        link: '/projects'
      }
    ]
  },
  faqs: {
    title: 'AI Automation FAQs',
    questions: [
      { question: 'Will the AI share our private data with the public?', answer: 'No. When building enterprise AI, we utilize secure enterprise APIs (with zero-data-retention policies) or host open-source models directly on your private cloud. Your data is never used to train public models like ChatGPT.' },
      { question: 'What is RAG?', answer: 'RAG stands for Retrieval-Augmented Generation. It is a technique we use to force the AI to read your specific company documents (like a return policy) before answering a question. This stops the AI from guessing or "hallucinating" an answer.' },
      { question: 'How accurate is AI document processing compared to older OCR?', answer: 'Traditional OCR (Optical Character Recognition) required you to set up strict templates for every single vendor. Modern AI is context-aware; it can extract the "Total Amount" from an invoice even if it has never seen that specific vendor\'s layout before, achieving 99%+ accuracy.' },
      { question: 'Does AI replace my employees?', answer: 'It replaces tasks, not necessarily people. By automating mundane data entry, your employees are freed up to focus on complex problem-solving, relationship building, and strategic work that actually drives growth.' }
    ]
  },
  finalCta: {
    title: 'Stop Doing Manual Work',
    subtitle: 'Leverage AI to automate the mundane and scale your business operations efficiently.',
    ctaText: 'Schedule an AI Strategy Call',
    ctaLink: '/contact'
  },
  relatedSolutions: {
    title: 'Related Solutions',
    solutions: [
      { title: 'Workflow Automation', slug: 'workflow-automation' },
      { title: 'Business Intelligence', slug: 'business-intelligence' },
      { title: 'Internal Business Tools', slug: 'internal-business-tools' }
    ]
  }
};
