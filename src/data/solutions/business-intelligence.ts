import { SolutionPageData } from '@/types/solution';

export const businessIntelligenceData: SolutionPageData = {
  slug: 'business-intelligence',
  seo: {
    title: 'Business Intelligence & Data Solutions | Durozen',
    description: 'Turn raw data into executive dashboards, operational insights, and performance visibility to drive faster, more accurate business decisions.',
  },
  hero: {
    h1: 'Business Intelligence Solutions',
    problem: 'Stop flying blind. Turn scattered, raw data into real-time executive dashboards that drive faster, more accurate business decisions.',
    ctaPrimary: { text: 'Discuss Your Data Strategy', link: '/contact' },
    ctaSecondary: { text: 'View BI Case Studies', link: '/projects' },
  },
  overview: {
    title: 'What is Business Intelligence?',
    content: [
      'Business Intelligence (BI) is the architecture and tools required to transform raw, disconnected data into actionable insights. While many companies have vast amounts of data stored in CRMs, ERPs, and marketing platforms, very few can actually use that data to make decisions.',
      'A proper BI solution extracts data from these disconnected silos, cleans it, and centralizes it into a secure Data Warehouse. From there, it is visualized on beautiful, real-time dashboards.',
      'We build end-to-end Business Intelligence pipelines that empower executives to see the exact health of their company at a glance, without waiting two weeks for a manual spreadsheet report.'
    ]
  },
  problems: {
    title: 'Data Problems You Are Likely Facing',
    list: [
      'Waiting weeks for analysts to compile reports manually using Excel',
      'Executives arguing over "whose data is right" during board meetings',
      'Data trapped in disconnected silos (e.g., Sales data in Salesforce, Support data in Zendesk)',
      'Inability to accurately forecast next quarter’s revenue',
      'Marketing teams unable to prove the true ROI of their campaigns',
      'Slow, crashing databases when trying to run complex analytical queries'
    ]
  },
  solution: {
    title: 'A Single Source of Truth',
    description: 'We build an automated data pipeline that pulls from all your software, cleans the data, and presents it in a unified dashboard. No more manual Excel exports; just real-time visibility.'
  },
  keyFeatures: {
    title: 'Key BI Capabilities',
    features: [
      { title: 'Automated Data Pipelines (ETL)', description: 'Automatically extracting data from APIs, CRMs, and databases into a central location.' },
      { title: 'Cloud Data Warehousing', description: 'Storing massive amounts of historical data securely in Snowflake or Google BigQuery.' },
      { title: 'Executive Dashboards', description: 'High-level, highly visual dashboards showing KPIs like MRR, Churn, and Profit Margins instantly.' },
      { title: 'Operational Reporting', description: 'Granular reports for middle management to track daily team performance and bottlenecks.' },
      { title: 'Predictive Analytics', description: 'Using historical data models to forecast future trends, inventory needs, and revenue.' },
      { title: 'Data Governance', description: 'Strict rules ensuring data is clean, accurate, and compliant with privacy regulations.' }
    ]
  },
  useCases: {
    title: 'Business Intelligence Use Cases',
    cases: [
      'Unified Customer 360 View', 'Marketing ROI & Attribution Modeling', 'Supply Chain Visibility',
      'Financial Consolidation & Forecasting', 'Sales Pipeline Velocity Analysis', 'E-commerce Conversion Tracking'
    ]
  },
  whoIsItFor: {
    title: 'Who Needs Business Intelligence?',
    audiences: [
      'C-Suite Executives & Founders',
      'Financial Controllers & CFOs',
      'Marketing & Growth Leaders',
      'Supply Chain & Operations Managers',
      'SaaS & Tech Companies',
      'Enterprise Retail & E-commerce'
    ]
  },
  benefits: {
    title: 'The Business Impact',
    list: [
      { title: 'Faster Decision Making', description: 'Spot trends and fix operational bottlenecks in days, not months.' },
      { title: 'Elimination of Manual Reporting', description: 'Save hundreds of hours previously spent downloading and merging Excel files.' },
      { title: 'Total Alignment', description: 'When everyone looks at the same dashboard, departmental alignment happens naturally.' },
      { title: 'Increased Revenue', description: 'Identify highly profitable customer segments and focus sales efforts there.' }
    ]
  },
  howItWorks: {
    title: 'How a BI Pipeline Works',
    steps: [
      { name: 'Extract', description: 'Automated scripts pull raw data from your CRM, ERP, Website, and Marketing tools.' },
      { name: 'Transform', description: 'The data is cleaned, standardized (e.g., converting all currencies to USD), and joined together.' },
      { name: 'Load', description: 'The clean data is securely stored in a centralized Cloud Data Warehouse.' },
      { name: 'Visualize', description: 'BI tools like Tableau or PowerBI query the warehouse to display real-time charts and graphs.' }
    ]
  },
  implementationProcess: {
    title: 'Our Implementation Process',
    steps: [
      { name: 'KPI Discovery', description: 'We work with your executive team to define exactly which metrics actually drive the business.' },
      { name: 'Data Audit', description: 'We locate where the data for those metrics currently lives and assess its quality.' },
      { name: 'Pipeline Engineering', description: 'We build the automated ETL pipelines to extract and clean the data daily or hourly.' },
      { name: 'Warehouse Setup', description: 'We architect a scalable cloud warehouse optimized for fast analytical queries.' },
      { name: 'Dashboard Design', description: 'We design intuitive, interactive dashboards and train your team on how to read them.' }
    ]
  },
  integrations: {
    title: 'Data Sources We Integrate',
    list: [
      'CRMs (Salesforce, HubSpot)',
      'ERPs (NetSuite, SAP)',
      'Marketing (Google Analytics, Meta Ads)',
      'Finance (Stripe, QuickBooks)',
      'Support (Zendesk, Intercom)'
    ]
  },
  technology: {
    title: 'BI Technology Stack',
    stacks: [
      { category: 'Data Warehousing', technologies: ['Snowflake', 'Google BigQuery', 'Amazon Redshift'] },
      { category: 'ETL / Data Pipelines', technologies: ['dbt', 'Fivetran', 'Apache Airflow'] },
      { category: 'Visualization / Dashboards', technologies: ['Tableau', 'Microsoft PowerBI', 'Looker', 'Metabase'] },
      { category: 'Database Infrastructure', technologies: ['PostgreSQL', 'AWS S3 (Data Lakes)'] }
    ]
  },
  caseStudy: {
    title: 'BI Success Story',
    studies: [
      {
        projectName: 'Retail Marketing Attribution Dashboard',
        businessProblem: 'A major retailer was spending $2M a month on ads but could not accurately track which campaigns led to in-store purchases because online and offline data were siloed.',
        solution: 'Engineered a data pipeline using Fivetran to pull Shopify and POS data into Snowflake, visualized through Tableau.',
        result: ['Unified online and in-store sales data', 'Identified $300k of wasted ad spend in week one', 'Reduced reporting time from 10 days to real-time'],
        link: '/projects'
      }
    ]
  },
  faqs: {
    title: 'Business Intelligence FAQs',
    questions: [
      { question: 'What is the difference between a Data Warehouse and my current database?', answer: 'Your current database (like PostgreSQL or MySQL) is designed for transactional speed—processing thousands of small actions (like a user logging in) quickly. A Data Warehouse is designed for analytical speed—scanning millions of historical records instantly to find a trend without crashing your live app.' },
      { question: 'Do we need a Data Lake or a Data Warehouse?', answer: 'Most companies need a Data Warehouse, which stores clean, structured data for reporting. A Data Lake is used to store massive amounts of raw, unstructured data (like images or server logs) and is typically needed only by advanced data science teams.' },
      { question: 'How secure is our data in the cloud?', answer: 'Extremely secure. We implement strict Role-Based Access Control (RBAC), data encryption at rest and in transit, and IP allow-listing. We also automatically mask PII (Personally Identifiable Information) before it hits the dashboards.' },
      { question: 'Which BI tool is best: Tableau or PowerBI?', answer: 'It depends on your current ecosystem. If you are already deeply embedded in the Microsoft ecosystem, PowerBI is usually the most cost-effective. If you need highly complex, beautiful visualizations, Tableau is often preferred. We help you choose the right tool for your budget.' }
    ]
  },
  finalCta: {
    title: 'Unlock Your Data',
    subtitle: 'Stop arguing over spreadsheets. Get a clear, real-time view of your entire business.',
    ctaText: 'Schedule a Data Audit',
    ctaLink: '/contact'
  },
  relatedSolutions: {
    title: 'Related Solutions',
    solutions: [
      { title: 'Analytics Dashboards', slug: 'analytics-dashboards' },
      { title: 'Enterprise Resource Planning', slug: 'enterprise-resource-planning' },
      { title: 'AI Automation', slug: 'ai-automation' }
    ]
  }
};
