import { ServicePageData } from '@/types/service';

export const dataEngineeringData: ServicePageData = {
  slug: 'data-engineering',
  seo: {
    title: 'Data Engineering Services | Durozen',
    description: 'Transform raw data into business intelligence. We build scalable data pipelines, ETL processes, data lakes, and enterprise data warehouses.',
  },
  hero: {
    h1: 'Enterprise Data Engineering',
    description: 'Transform scattered, raw data into actionable business intelligence. We build scalable data pipelines, data lakes, and modern cloud data warehouses.',
    ctaPrimary: { text: 'Discuss Your Data Strategy', link: '/contact' },
    ctaSecondary: { text: 'View Engineering Projects', link: '/projects' },
  },
  whatIsIt: {
    title: 'What Is Data Engineering?',
    content: [
      'Data engineering is the foundation of modern business intelligence and AI. It involves designing and building the infrastructure required to securely collect, transport, clean, and store massive amounts of data from disparate sources.',
      'Without proper data engineering, data scientists and business analysts spend 80% of their time cleaning messy spreadsheets. We build automated ETL (Extract, Transform, Load) pipelines that do this work in real-time.',
      'By centralizing your data into a modern cloud warehouse (like Snowflake or BigQuery), we enable your executive team to make critical decisions based on real-time, accurate dashboards rather than gut feelings.'
    ]
  },
  servicesIncluded: {
    title: 'Our Data Engineering Services',
    services: [
      { title: 'Data Pipeline (ETL/ELT) Construction', description: 'Automating the extraction, cleaning, and loading of data from third-party APIs, databases, and CRMs into a central repository.' },
      { title: 'Data Warehouse Architecture', description: 'Designing high-performance, structured data warehouses using Snowflake, Google BigQuery, or Amazon Redshift.' },
      { title: 'Data Lake Implementation', description: 'Building scalable storage solutions in AWS S3 or Azure Data Lake for massive volumes of unstructured and semi-structured data.' },
      { title: 'Real-Time Streaming Analytics', description: 'Engineering event-driven architectures using Apache Kafka or AWS Kinesis to process data instantly as it occurs.' },
      { title: 'Data Quality & Governance', description: 'Implementing strict validation rules, data masking, and access controls to ensure data accuracy and compliance.' },
      { title: 'Business Intelligence & Dashboards', description: 'Connecting clean data to visualization tools like Tableau, PowerBI, or custom React dashboards.' }
    ]
  },
  problemsSolved: {
    title: 'Data Challenges We Solve',
    problems: [
      'Data trapped in disconnected silos across the company (CRM, ERP, Marketing tools)',
      'Executive reporting taking weeks to compile manually via spreadsheets',
      'Inconsistent or "dirty" data leading to incorrect business decisions',
      'Inability to run complex analytical queries without crashing the production database',
      'Lack of real-time visibility into critical business metrics',
      'High storage costs and slow query performance on legacy systems',
      'Compliance and security risks due to lack of strict data governance',
      'AI/ML initiatives stalling because the foundational data is not ready'
    ]
  },
  whoWeServe: {
    title: 'Who Needs Data Engineering',
    audiences: [
      'Financial Institutions & Fintechs',
      'E-commerce & Retail Giants',
      'Healthcare & Life Sciences',
      'Logistics & Supply Chain Operations',
      'SaaS & Technology Companies',
      'Marketing & AdTech Agencies',
      'Manufacturing Enterprises',
      'Telecommunications'
    ]
  },
  useCases: {
    title: 'Data Engineering Use Cases',
    cases: [
      'Unified Customer 360 Views', 'Real-time Fraud Detection', 'Automated Financial Reporting', 'Supply Chain Visibility',
      'Predictive Maintenance Data Ingestion', 'IoT Sensor Data Processing', 'Marketing Attribution Modeling', 'Log Analysis at Scale'
    ]
  },
  developmentProcess: {
    title: 'Our Data Engineering Process',
    steps: [
      { name: 'Data Source Audit', description: 'Identify all systems generating data and assess their quality, format, and access methods.' },
      { name: 'Architecture Design', description: 'Design the optimal ETL/ELT pipeline and choose between a Data Warehouse, Data Lake, or Lakehouse.' },
      { name: 'Pipeline Development', description: 'Write scalable code (Python, PySpark, SQL) to extract, transform, and securely transport the data.' },
      { name: 'Infrastructure Provisioning', description: 'Deploy the data infrastructure to the cloud using Infrastructure as Code (Terraform).' },
      { name: 'Testing & Validation', description: 'Run rigorous data quality checks to ensure zero data loss and accurate transformations.' },
      { name: 'Visualization & Handoff', description: 'Connect the new warehouse to BI tools and train your analysts on querying the clean data.' }
    ]
  },
  technologyStack: {
    title: 'Data Engineering Stack',
    stacks: [
      { category: 'Data Warehousing', technologies: ['Snowflake', 'Google BigQuery', 'Amazon Redshift', 'Databricks'] },
      { category: 'ETL & Orchestration', technologies: ['Apache Airflow', 'dbt (data build tool)', 'Fivetran', 'Apache Spark'] },
      { category: 'Real-Time Streaming', technologies: ['Apache Kafka', 'AWS Kinesis', 'Google Pub/Sub'] },
      { category: 'Storage & BI', technologies: ['AWS S3', 'PostgreSQL', 'Tableau', 'PowerBI'] }
    ]
  },
  caseStudies: {
    title: 'Data Engineering Success Stories',
    studies: [
      {
        projectName: 'Retail Customer 360 Data Lake',
        industry: 'E-commerce & Retail',
        businessProblem: 'Marketing could not effectively target customers because sales data, support tickets, and website analytics were locked in 4 different systems.',
        solution: 'Engineered an automated ELT pipeline using Fivetran and dbt to centralize all data into Snowflake.',
        technologies: ['Snowflake', 'dbt', 'Fivetran', 'AWS'],
        keyFunctionality: ['Automated daily syncs', 'Unified customer IDs', 'Clean reporting views'],
        result: ['Reduced reporting time from 2 weeks to 1 hour', 'Enabled highly personalized marketing', 'Increased ROAS by 22%'],
        link: '/projects'
      }
    ]
  },
  whyChooseUs: {
    title: 'Why Choose Durozen for Data',
    reasons: [
      'Experts in modern Data Stack technologies (Snowflake, dbt, Airflow)',
      'Focus on ELT (Extract, Load, Transform) over outdated ETL for superior performance',
      'Strict adherence to data governance, masking PII, and security compliance',
      'Ability to handle both batch processing and sub-second real-time streaming',
      'We treat data infrastructure as code, ensuring version control and reliability',
      'Deep understanding of how data engineering impacts downstream AI/ML projects',
      'Cloud-agnostic expertise across AWS, GCP, and Azure'
    ]
  },
  engagementModels: {
    title: 'Data Engagement Models',
    models: [
      { title: 'Warehouse Migration', description: 'Safely migrating your data from legacy on-premise systems to modern cloud warehouses.' },
      { title: 'Pipeline Construction', description: 'Building specific, automated data pipelines to replace manual reporting workflows.' },
      { title: 'Data Architecture Consulting', description: 'Strategic advisory to help design your enterprise data roadmap and tool selection.' },
      { title: 'Managed Data Ops', description: 'Ongoing monitoring, maintenance, and optimization of your data infrastructure.' }
    ]
  },
  faqs: {
    title: 'Data Engineering FAQs',
    questions: [
      { question: 'What is the difference between a Data Warehouse and a Data Lake?', answer: 'A Data Warehouse (like Snowflake) stores highly structured, clean data optimized for fast SQL queries and business reporting. A Data Lake (like AWS S3) stores massive amounts of raw, unstructured data (like images, logs, or raw JSON) cheaply, which data scientists can later process.' },
      { question: 'What does ETL/ELT mean?', answer: 'ETL stands for Extract, Transform, Load. It is the process of pulling data out of a source system, transforming it into a clean format, and loading it into a warehouse. ELT (Extract, Load, Transform) is the modern approach where data is loaded into a powerful cloud warehouse first, and transformed directly inside the warehouse.' },
      { question: 'Do you work with real-time data?', answer: 'Yes. While many reporting needs can be met with daily or hourly batch processing, we also build streaming architectures (using Kafka or Kinesis) for use cases that require sub-second latency, like fraud detection or live IoT monitoring.' },
      { question: 'How do you ensure data security?', answer: 'We implement role-based access control (RBAC), data encryption in transit and at rest, and automated PII (Personally Identifiable Information) masking to ensure compliance with GDPR, HIPAA, and industry standards.' }
    ]
  },
  finalCta: {
    title: 'Unlock Your Data’s Potential',
    subtitle: 'Stop wrestling with spreadsheets. Build a scalable data foundation for your enterprise.',
    ctaText: 'Speak with a Data Engineer',
    ctaLink: '/contact'
  },
  relatedServices: {
    title: 'Related Services',
    services: [
      { title: 'AI & Machine Learning', slug: 'ai-and-machine-learning' },
      { title: 'Cloud Engineering', slug: 'cloud-engineering' },
      { title: 'Enterprise Application Development', slug: 'enterprise-application-development' },
      { title: 'Custom Software Development', slug: 'custom-software-development' }
    ]
  }
};
