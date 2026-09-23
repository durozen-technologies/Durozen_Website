import { ServicePageData } from '@/types/service';

export const cloudEngineeringData: ServicePageData = {
  slug: 'cloud-engineering',
  seo: {
    title: 'Cloud Engineering Services | Durozen',
    description: 'Cloud-native architecture, enterprise migration, deployment, auto-scaling, security, and continuous monitoring on AWS, Azure, and Google Cloud.',
  },
  hero: {
    h1: 'Cloud Engineering & Migration',
    description: 'Cloud-native architecture, secure enterprise migration, auto-scaling infrastructure, and continuous monitoring on AWS, Azure, and Google Cloud.',
    ctaPrimary: { text: 'Discuss Cloud Strategy', link: '/contact' },
    ctaSecondary: { text: 'Our Tech Stack', link: '/services' },
  },
  whatIsIt: {
    title: 'What Is Cloud Engineering?',
    content: [
      'Cloud engineering is the application of engineering disciplines to cloud computing. It goes far beyond simply hosting an application; it involves designing highly available, fault-tolerant systems that scale automatically based on user demand.',
      'A true cloud-native architecture decouples infrastructure from the application code, utilizing serverless functions, container orchestration, and managed databases to reduce overhead and costs.',
      'We help businesses migrate legacy on-premise systems to the cloud safely, without downtime, and engineer modern cloud infrastructures that act as the backbone for global digital operations.'
    ]
  },
  servicesIncluded: {
    title: 'Our Cloud Engineering Services',
    services: [
      { title: 'Cloud Architecture Design', description: 'Designing highly available, secure, and cost-optimized cloud architectures before writing any code.' },
      { title: 'Legacy to Cloud Migration', description: 'Safely lifting-and-shifting or fully refactoring legacy on-premise applications to modern cloud environments.' },
      { title: 'Serverless Computing', description: 'Building event-driven applications using AWS Lambda, Azure Functions, and managed API gateways.' },
      { title: 'Containerization & Orchestration', description: 'Dockerizing applications and managing them at scale using Kubernetes (EKS, AKS, GKE).' },
      { title: 'Cloud Security & Compliance', description: 'Implementing strict IAM roles, encryption, VPCs, and ensuring SOC2/HIPAA compliance.' },
      { title: 'Cloud Cost Optimization', description: 'Auditing existing cloud setups to eliminate waste, reserve instances, and drastically reduce monthly AWS/Azure bills.' }
    ]
  },
  problemsSolved: {
    title: 'Cloud Challenges We Solve',
    problems: [
      'Applications crashing during unexpected traffic spikes',
      'Exorbitant and unpredictable monthly cloud hosting bills',
      'Slow response times for users in different geographical regions',
      'Security vulnerabilities exposing sensitive customer data',
      'Painfully slow manual deployments causing downtime',
      'Fear of data loss due to lack of disaster recovery protocols',
      'Vendor lock-in preventing migration to cheaper providers',
      'Inability to rapidly deploy new microservices'
    ]
  },
  whoWeServe: {
    title: 'Who Needs Cloud Engineering',
    audiences: [
      'High-growth SaaS Startups',
      'Global E-Commerce Retailers',
      'Healthcare Data Providers',
      'Financial Services & Neobanks',
      'Media & Video Streaming Platforms',
      'IoT & Telematics Companies',
      'Enterprise Corporations',
      'Government Agencies'
    ]
  },
  useCases: {
    title: 'Cloud Engineering Use Cases',
    cases: [
      'On-Premise Migration', 'Multi-Region High Availability', 'Data Lake Architecture', 'Serverless APIs',
      'Microservices Rollout', 'Disaster Recovery Setup', 'Content Delivery Networks (CDN)', 'IoT Data Ingestion'
    ]
  },
  developmentProcess: {
    title: 'Our Cloud Engineering Process',
    steps: [
      { name: 'Audit & Assessment', description: 'Review existing infrastructure, bottlenecks, and security vulnerabilities.' },
      { name: 'Architecture Design', description: 'Create detailed network diagrams, scaling policies, and security topologies.' },
      { name: 'Infrastructure as Code', description: 'Write Terraform or CloudFormation scripts to provision resources automatically.' },
      { name: 'Migration & Testing', description: 'Migrate data securely and perform load testing against the new infrastructure.' },
      { name: 'Cutover', description: 'Switch DNS and traffic routing with zero perceived downtime for end users.' },
      { name: 'Monitoring & Optimization', description: 'Set up Datadog/CloudWatch to track performance and optimize costs.' }
    ]
  },
  technologyStack: {
    title: 'Cloud Technologies',
    stacks: [
      { category: 'Cloud Providers', technologies: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud (GCP)'] },
      { category: 'Infrastructure as Code', technologies: ['Terraform', 'AWS CloudFormation', 'Ansible'] },
      { category: 'Containers', technologies: ['Docker', 'Kubernetes (K8s)', 'AWS ECS/EKS'] },
      { category: 'Monitoring', technologies: ['Datadog', 'New Relic', 'AWS CloudWatch', 'Prometheus'] }
    ]
  },
  caseStudies: {
    title: 'Cloud Success Stories',
    studies: [
      {
        projectName: 'Global Media Streaming Migration',
        industry: 'Media & Entertainment',
        businessProblem: 'On-premise servers frequently crashed during live streaming events, costing thousands in lost ad revenue.',
        solution: 'Migrated infrastructure to an auto-scaling AWS Kubernetes cluster backed by CloudFront CDN.',
        technologies: ['AWS EKS', 'CloudFront', 'Terraform', 'Redis'],
        keyFunctionality: ['Auto-scaling to 100k concurrents', 'Sub-second video delivery', 'Automated failover'],
        result: ['Zero downtime during peak events', 'Reduced infrastructure costs by 40%', 'Global latency dropped by 60%'],
        link: '/projects'
      }
    ]
  },
  whyChooseUs: {
    title: 'Why Choose Durozen for Cloud',
    reasons: [
      'Certified AWS and Azure Cloud Architects',
      'Infrastructure as Code (IaC) methodology for absolute consistency',
      'Focus on absolute security (Zero-Trust networks, VPCs, IAM)',
      'Proven track record of zero-downtime enterprise migrations',
      'Cloud-agnostic capabilities avoiding vendor lock-in',
      'Experts in reducing bloated cloud invoices',
      '24/7 proactive monitoring and incident response'
    ]
  },
  engagementModels: {
    title: 'Cloud Engagement Models',
    models: [
      { title: 'End-to-End Migration', description: 'We handle the complete transition from your old servers to the cloud.' },
      { title: 'Cloud Architecture Consulting', description: 'Strategic planning and architecture design for your internal teams to execute.' },
      { title: 'Cost Optimization Audit', description: 'A focused, 2-week sprint to drastically reduce your AWS/Azure bills.' },
      { title: 'Managed Cloud Services', description: 'Ongoing maintenance, security patching, and monitoring of your cloud infrastructure.' }
    ]
  },
  faqs: {
    title: 'Cloud Engineering FAQs',
    questions: [
      { question: 'Which cloud provider should we choose?', answer: 'It depends on your current tech stack and business needs. AWS is the industry standard with the most services; Azure is excellent if you rely heavily on Microsoft/C# enterprise stacks; GCP is renowned for its data analytics and machine learning capabilities. We help you evaluate and choose.' },
      { question: 'Will my application go down during migration?', answer: 'No. We use a "Blue/Green" or parallel deployment strategy. We build the new cloud environment, sync your data, and only switch the DNS once the cloud environment is fully tested and verified. Your users will not notice.' },
      { question: 'Is the cloud more expensive than on-premise servers?', answer: 'If engineered poorly, yes. If engineered correctly using auto-scaling, serverless technologies, and reserved instances, it is significantly cheaper because you only pay for the exact compute power you use, and you eliminate the massive overhead of hardware maintenance.' },
      { question: 'Is the cloud secure?', answer: 'When configured correctly by experts, the cloud is far more secure than most on-premise servers. AWS and Azure comply with the strictest global security certifications (DoD, HIPAA, SOC2). We implement strict firewalls, private networks, and encryption.' }
    ]
  },
  finalCta: {
    title: 'Ready to Scale to the Cloud?',
    subtitle: 'Stop worrying about server maintenance and downtime. Build a resilient cloud infrastructure.',
    ctaText: 'Speak with a Cloud Architect',
    ctaLink: '/contact'
  },
  relatedServices: {
    title: 'Related Services',
    services: [
      { title: 'DevOps', slug: 'devops' },
      { title: 'Custom Software Development', slug: 'custom-software-development' },
      { title: 'Enterprise Application Development', slug: 'enterprise-application-development' },
      { title: 'API Development', slug: 'api-development' }
    ]
  }
};
