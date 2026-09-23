import { ServicePageData } from '@/types/service';

export const devopsData: ServicePageData = {
  slug: 'devops',
  seo: {
    title: 'DevOps & CI/CD Services | Durozen',
    description: 'Automate your software delivery pipeline. CI/CD automation, infrastructure workflows, site reliability engineering, and DevSecOps practices.',
  },
  hero: {
    h1: 'DevOps & CI/CD Automation',
    description: 'Automate your software delivery pipeline. CI/CD automation, infrastructure workflows, site reliability engineering (SRE), and DevSecOps practices.',
    ctaPrimary: { text: 'Automate Your Pipeline', link: '/contact' },
    ctaSecondary: { text: 'View Cloud Services', link: '/services/cloud-engineering' },
  },
  whatIsIt: {
    title: 'What Is DevOps?',
    content: [
      'DevOps is the cultural and technical philosophy of uniting software development (Dev) and IT operations (Ops). It breaks down the silos that cause slow software releases and buggy production deployments.',
      'Through advanced automation, Continuous Integration and Continuous Deployment (CI/CD) pipelines allow your developers to push code multiple times a day with complete confidence, knowing that automated testing and security checks will catch errors before they reach your users.',
      'At Durozen, we implement DevOps as a core engineering practice, ensuring your software is delivered faster, more securely, and with significantly higher reliability.'
    ]
  },
  servicesIncluded: {
    title: 'Our DevOps Services',
    services: [
      { title: 'CI/CD Pipeline Construction', description: 'Automating the building, testing, and deployment of code using GitHub Actions, GitLab CI, or Jenkins.' },
      { title: 'Infrastructure as Code (IaC)', description: 'Managing servers, databases, and networks via code (Terraform) rather than manual configuration.' },
      { title: 'Site Reliability Engineering (SRE)', description: 'Implementing robust monitoring, alerting, and automated incident response to guarantee high uptime.' },
      { title: 'DevSecOps', description: 'Integrating automated vulnerability scanning, container security, and dependency checks directly into the pipeline.' },
      { title: 'Containerization Strategy', description: 'Migrating legacy monolithic applications to Docker containers orchestrated by Kubernetes.' },
      { title: 'Release Management', description: 'Implementing zero-downtime deployment strategies like Blue/Green, Canary, and Feature Flags.' }
    ]
  },
  problemsSolved: {
    title: 'DevOps Challenges We Solve',
    problems: [
      'Developers spending hours manually deploying code instead of building features',
      '"It works on my machine" syndrome causing bugs in production',
      'Long, stressful release cycles that require weekend downtime',
      'Lack of visibility into system health until a customer complains',
      'Inconsistent server environments causing configuration drift',
      'Security vulnerabilities slipping into production code',
      'Inability to easily roll back a bad software update',
      'Friction and finger-pointing between developers and system administrators'
    ]
  },
  whoWeServe: {
    title: 'Who Needs DevOps',
    audiences: [
      'SaaS Product Teams',
      'E-Commerce & Retail Platforms',
      'Financial Technology (Fintech)',
      'Healthcare Software Providers',
      'Enterprise IT Departments',
      'Startups Scaling Rapidly',
      'Agencies managing multiple clients',
      'Gaming Companies'
    ]
  },
  useCases: {
    title: 'DevOps Use Cases',
    cases: [
      'Automated Testing Pipelines', 'Zero-Downtime Deployments', 'Automated Rollbacks', 'Infrastructure Provisioning',
      'Centralized Log Management', 'Vulnerability Scanning', 'Chaos Engineering', 'Microservices Architecture'
    ]
  },
  developmentProcess: {
    title: 'Our DevOps Implementation Process',
    steps: [
      { name: 'Workflow Audit', description: 'Analyze your current Git branching strategy, testing protocols, and deployment steps.' },
      { name: 'Toolchain Selection', description: 'Select the best CI/CD and IaC tools tailored to your specific tech stack.' },
      { name: 'Pipeline Engineering', description: 'Build automated workflows that compile, lint, test, and package your application.' },
      { name: 'Security Integration', description: 'Inject automated SAST and DAST security checks into the pipeline.' },
      { name: 'Deployment Automation', description: 'Configure automated staging deployments and manual-approval production rollouts.' },
      { name: 'Monitoring Setup', description: 'Install APM tools (like Datadog) for real-time observability of the deployed app.' }
    ]
  },
  technologyStack: {
    title: 'DevOps Technology Stack',
    stacks: [
      { category: 'CI/CD Pipelines', technologies: ['GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'CircleCI'] },
      { category: 'Infrastructure as Code', technologies: ['Terraform', 'Ansible', 'AWS CDK', 'Pulumi'] },
      { category: 'Containers & Orchestration', technologies: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD'] },
      { category: 'Monitoring & Logs', technologies: ['Datadog', 'Prometheus', 'Grafana', 'ELK Stack'] }
    ]
  },
  caseStudies: {
    title: 'DevOps Success Stories',
    studies: [
      {
        projectName: 'SaaS CI/CD Transformation',
        industry: 'B2B Software',
        businessProblem: 'Manual deployments took 4 hours and required the site to be put in maintenance mode every Friday night.',
        solution: 'Engineered a fully automated GitHub Actions CI/CD pipeline deploying to AWS ECS via Blue/Green deployment.',
        technologies: ['GitHub Actions', 'AWS ECS', 'Docker', 'Terraform'],
        keyFunctionality: ['Automated E2E testing', 'Zero-downtime deployments', '1-click rollbacks'],
        result: ['Deployment time reduced from 4 hours to 8 minutes', 'Zero deployment downtime', 'Release frequency increased 5x'],
        link: '/projects'
      }
    ]
  },
  whyChooseUs: {
    title: 'Why Choose Durozen for DevOps',
    reasons: [
      'We treat infrastructure as software—everything is version controlled code',
      'Deep expertise in Kubernetes and container orchestration at scale',
      'Focus on "Shift-Left" security, catching vulnerabilities during the build phase',
      'Proven ability to untangle and automate legacy deployment nightmares',
      'Customized solutions: we don\'t force a specific toolchain if it doesn\'t fit',
      'Emphasis on developer experience (DevEx) to boost team velocity',
      'Certified Cloud and DevOps Engineers'
    ]
  },
  engagementModels: {
    title: 'DevOps Engagement Models',
    models: [
      { title: 'DevOps Transformation', description: 'A complete overhaul of your development lifecycle, from Git to Production.' },
      { title: 'Pipeline as a Service', description: 'We build and maintain your CI/CD pipelines while your team focuses purely on coding.' },
      { title: 'SRE & Monitoring Setup', description: 'Implementation of robust observability, alerting, and incident response frameworks.' },
      { title: 'DevOps Staff Augmentation', description: 'Embed our senior DevOps engineers into your internal development pods.' }
    ]
  },
  faqs: {
    title: 'DevOps FAQs',
    questions: [
      { question: 'What is CI/CD?', answer: 'Continuous Integration (CI) is the practice of automatically testing code every time a developer commits it. Continuous Deployment (CD) is the practice of automatically pushing that tested code to a staging or production server. Together, they form an automated pipeline.' },
      { question: 'Do we really need DevOps if we only deploy once a month?', answer: 'Yes. Even if you deploy infrequently, manual deployments are prone to human error, configuration drift, and stress. Automating the process ensures that when you do deploy, it is consistent, tested, and reliable.' },
      { question: 'What is Infrastructure as Code (IaC)?', answer: 'Instead of clicking through a cloud provider\'s web console to create servers and databases, IaC uses code (like Terraform) to define your infrastructure. This means your infrastructure is version-controlled, reproducible, and can be spun up or torn down in seconds.' },
      { question: 'Can DevOps help with security?', answer: 'Absolutely. DevSecOps integrates security scanning into the CI/CD pipeline. Every line of code is automatically scanned for known vulnerabilities and secret leaks before it is ever deployed.' }
    ]
  },
  finalCta: {
    title: 'Stop Manual Deployments',
    subtitle: 'Ship code faster, safer, and with zero downtime. Let’s automate your pipeline.',
    ctaText: 'Talk to a DevOps Engineer',
    ctaLink: '/contact'
  },
  relatedServices: {
    title: 'Related Services',
    services: [
      { title: 'Cloud Engineering', slug: 'cloud-engineering' },
      { title: 'Custom Software Development', slug: 'custom-software-development' },
      { title: 'Enterprise Application Development', slug: 'enterprise-application-development' },
      { title: 'QA and Automation', slug: 'qa-and-automation' }
    ]
  }
};
