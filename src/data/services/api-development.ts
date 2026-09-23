import { ServicePageData } from '@/types/service';

export const apiDevelopmentData: ServicePageData = {
  slug: 'api-development',
  seo: {
    title: 'Custom API Development Services | Durozen',
    description: 'Secure, high-performance custom API development and integration services. REST, GraphQL, microservices, and legacy system API wrappers.',
  },
  hero: {
    h1: 'Custom API Development & Integration',
    description: 'Secure, high-performance custom API engineering. We build REST, GraphQL, and microservices architectures that seamlessly connect your enterprise systems.',
    ctaPrimary: { text: 'Discuss Your API Project', link: '/contact' },
    ctaSecondary: { text: 'Explore Tech Stack', link: '/services/cloud-engineering' },
  },
  whatIsIt: {
    title: 'What Is Custom API Development?',
    content: [
      'Application Programming Interfaces (APIs) are the connective tissue of modern software. They allow entirely different systems—like a mobile app, a web dashboard, and a legacy mainframe—to communicate and share data securely.',
      'We architect robust, scalable APIs designed for high concurrency and low latency. Whether you need a public API for your customers to consume, or a private API to connect internal microservices, we build endpoints that are secure by design.',
      'Beyond building new APIs from scratch, we specialize in API integration, hooking your application into hundreds of third-party platforms (Stripe, Twilio, Salesforce, etc.) to rapidly expand functionality.'
    ]
  },
  servicesIncluded: {
    title: 'Our API Engineering Services',
    services: [
      { title: 'REST & GraphQL API Design', description: 'Designing intuitive, versioned APIs following strict OpenAPI (Swagger) specifications and best practices.' },
      { title: 'Third-Party API Integration', description: 'Connecting your software to payment gateways, CRMs, ERPs, SMS providers, and external data sources.' },
      { title: 'Microservices Architecture', description: 'Decoupling massive monolithic applications into small, independent API services for better scalability.' },
      { title: 'Legacy System API Wrappers', description: 'Building secure, modern API layers on top of outdated mainframes or legacy databases to unlock their data.' },
      { title: 'API Security & OAuth2', description: 'Implementing robust authentication (OAuth2, JWT), rate limiting, and encryption to prevent data breaches.' },
      { title: 'API Documentation & Developer Portals', description: 'Generating comprehensive documentation (Swagger/Postman) so internal or public developers can easily consume your API.' }
    ]
  },
  problemsSolved: {
    title: 'API Challenges We Solve',
    problems: [
      'Disjointed software systems that require employees to perform double-data entry',
      'Slow, bloated monolithic applications that cannot scale to meet user demand',
      'Security vulnerabilities in public-facing endpoints (No rate limiting, weak auth)',
      'Legacy databases that are impossible for modern web and mobile apps to talk to',
      'Undocumented, "spaghetti" APIs that frustrate new developers and slow down delivery',
      'Third-party integrations breaking unexpectedly without proper error handling',
      'High latency and timeout errors when serving data to mobile clients'
    ]
  },
  whoWeServe: {
    title: 'Who Needs API Engineering',
    audiences: [
      'B2B SaaS Companies offering Public APIs',
      'Fintechs requiring secure Banking Integrations',
      'E-commerce & Retail Logistics platforms',
      'Healthcare Providers (HL7/FHIR Integrations)',
      'Enterprise IT Departments modernizing legacy systems',
      'Mobile App Startups requiring a Backend',
      'Data Providers & Aggregators'
    ]
  },
  useCases: {
    title: 'API Use Cases',
    cases: [
      'Payment Gateway Integration', 'Mobile App Backends', 'Legacy Database Modernization', 'IoT Device Communication',
      'Public Developer APIs', 'Microservices Communication', 'CRM/ERP Syncing', 'Real-time WebSockets'
    ]
  },
  developmentProcess: {
    title: 'Our API Delivery Process',
    steps: [
      { name: 'Architecture & Spec Design', description: 'Draft the API contract (OpenAPI/Swagger) before writing any code to ensure frontend/backend alignment.' },
      { name: 'Security Planning', description: 'Define the authentication strategy (JWT/OAuth2), RBAC roles, and rate-limiting policies.' },
      { name: 'Endpoint Engineering', description: 'Develop the API using Node.js, Python, or Go, optimizing database queries for sub-100ms latency.' },
      { name: 'Automated Testing', description: 'Write extensive unit, integration, and load tests to ensure the API will not break under pressure.' },
      { name: 'Deployment & CI/CD', description: 'Deploy the API to a scalable cloud environment (AWS API Gateway, Kubernetes) using automated pipelines.' },
      { name: 'Monitoring & Analytics', description: 'Set up APM (Datadog) to track endpoint latency, error rates, and usage metrics in real-time.' }
    ]
  },
  technologyStack: {
    title: 'API Technology Stack',
    stacks: [
      { category: 'Frameworks', technologies: ['Node.js (Express/NestJS)', 'Python (FastAPI/Django)', 'Go', 'Java (Spring Boot)'] },
      { category: 'Architectures', technologies: ['REST', 'GraphQL', 'gRPC', 'WebSockets'] },
      { category: 'Security & Auth', technologies: ['OAuth2.0', 'JWT (JSON Web Tokens)', 'Auth0', 'AWS Cognito'] },
      { category: 'Infrastructure & Docs', technologies: ['AWS API Gateway', 'Postman', 'Swagger (OpenAPI)', 'Kong'] }
    ]
  },
  caseStudies: {
    title: 'API Success Stories',
    studies: [
      {
        projectName: 'Enterprise Legacy Modernization',
        industry: 'Insurance',
        businessProblem: 'A 20-year-old on-premise mainframe was impossible to connect to a new mobile application.',
        solution: 'Engineered a highly secure, caching REST API layer (in Node.js) that safely wrapped the mainframe database.',
        technologies: ['Node.js', 'Redis', 'AWS API Gateway', 'OAuth2'],
        keyFunctionality: ['Legacy DB translation', 'Aggressive caching', 'Strict rate limiting'],
        result: ['Unlocked mobile app development', 'Reduced mainframe load by 60%', 'Zero security breaches'],
        link: '/projects'
      }
    ]
  },
  whyChooseUs: {
    title: 'Why Choose Durozen for API Development',
    reasons: [
      'API-First Methodology: We write the specification and docs before writing code',
      'Obsession with performance: we aim for sub-100ms endpoint response times',
      'Deep expertise in enterprise security, OAuth2, and Zero-Trust architectures',
      'Experience building massively scalable microservices (handling 10k+ req/sec)',
      'We generate beautiful, interactive developer documentation automatically',
      'Robust error handling and retry mechanisms for flaky third-party integrations',
      'Extensive experience integrating with Stripe, Salesforce, SAP, and Twilio'
    ]
  },
  engagementModels: {
    title: 'API Engagement Models',
    models: [
      { title: 'Custom API Build', description: 'End-to-end development of a secure backend API for your new web or mobile application.' },
      { title: 'Third-Party Integration', description: 'A focused project to connect your existing software to an external service (e.g., Stripe integration).' },
      { title: 'Legacy Wrapper Strategy', description: 'Modernizing your enterprise architecture by building REST APIs on top of old mainframes.' },
      { title: 'API Security Audit', description: 'A comprehensive review of your existing APIs to identify vulnerabilities, N+1 query issues, and performance bottlenecks.' }
    ]
  },
  faqs: {
    title: 'API Development FAQs',
    questions: [
      { question: 'Should we build a REST API or a GraphQL API?', answer: 'It depends on your use case. REST is the industry standard, highly cacheable, and great for microservices. GraphQL is fantastic for complex web and mobile apps where the frontend needs exact, tailored data to prevent over-fetching. We will advise you based on your specific requirements.' },
      { question: 'How do you secure the API?', answer: 'We implement OAuth2 or JWT for authentication, strict CORS policies, rate limiting to prevent DDoS/Brute-force attacks, input validation to prevent SQL injection, and encrypt all data in transit (TLS 1.3).' },
      { question: 'Can you integrate our app with X?', answer: 'If service X has an open API, yes. We have integrated with hundreds of systems including payment gateways (Stripe, PayPal), CRMs (Salesforce, HubSpot), ERPs, and shipping providers.' },
      { question: 'How do you ensure the API doesn’t crash under heavy load?', answer: 'We build stateless APIs deployed on auto-scaling cloud infrastructure (like AWS ECS or Kubernetes). We also implement caching layers (Redis) and message queues (Kafka/RabbitMQ) to offload heavy processing.' }
    ]
  },
  finalCta: {
    title: 'Connect Your Ecosystem',
    subtitle: 'Build secure, lightning-fast APIs that scale with your business.',
    ctaText: 'Discuss Your API Architecture',
    ctaLink: '/contact'
  },
  relatedServices: {
    title: 'Related Services',
    services: [
      { title: 'Cloud Engineering', slug: 'cloud-engineering' },
      { title: 'Mobile Development', slug: 'mobile-development' },
      { title: 'Data Engineering', slug: 'data-engineering' },
      { title: 'Custom Software Development', slug: 'custom-software-development' }
    ]
  }
};
