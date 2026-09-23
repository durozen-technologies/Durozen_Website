import { ServicePageData } from '@/types/service';

export const qaAndAutomationData: ServicePageData = {
  slug: 'qa-and-automation',
  seo: {
    title: 'QA & Test Automation Services | Durozen',
    description: 'Ensure flawless software releases. Automated E2E testing, performance load testing, security QA, and manual exploratory testing.',
  },
  hero: {
    h1: 'QA & Test Automation',
    description: 'Ensure flawless software releases. We engineer robust automated test suites, conduct extreme load testing, and guarantee zero-defect deployments.',
    ctaPrimary: { text: 'Audit Your Software', link: '/contact' },
    ctaSecondary: { text: 'View DevOps Services', link: '/services/devops' },
  },
  whatIsIt: {
    title: 'What Is Enterprise QA & Automation?',
    content: [
      'Quality Assurance (QA) is no longer just a team of people clicking through a website before a release. In modern enterprise software, QA is a highly technical engineering discipline.',
      'We focus on Test Automation: writing code that tests your code. By integrating automated unit, integration, and end-to-end (E2E) tests into your CI/CD pipeline, we catch critical bugs before they ever reach a staging environment.',
      'From simulating 100,000 concurrent users to ensure your servers do not crash on Black Friday, to running automated regression suites overnight, we guarantee the reliability of your mission-critical applications.'
    ]
  },
  servicesIncluded: {
    title: 'Our QA & Automation Services',
    services: [
      { title: 'Automated End-to-End (E2E) Testing', description: 'Scripting user journeys using Playwright or Cypress to automatically test the UI/UX across all browsers on every commit.' },
      { title: 'API & Integration Testing', description: 'Automating backend API tests to ensure data payloads, status codes, and security tokens function perfectly.' },
      { title: 'Performance & Load Testing', description: 'Using tools like k6 or JMeter to simulate massive traffic spikes and identify exactly where your infrastructure breaks.' },
      { title: 'Security & Vulnerability QA', description: 'Running automated DAST/SAST scans and manual penetration tests to uncover security flaws before hackers do.' },
      { title: 'Mobile App Automation', description: 'Automating testing across hundreds of real iOS and Android devices using Appium and cloud device farms.' },
      { title: 'Manual Exploratory Testing', description: 'Human-led testing to find edge cases, UX friction points, and visual bugs that automated scripts might miss.' }
    ]
  },
  problemsSolved: {
    title: 'QA Challenges We Solve',
    problems: [
      'Bugs consistently slipping into production and frustrating end-users',
      'Painfully slow manual testing cycles that delay feature releases by weeks',
      'Applications crashing during high-traffic events or marketing launches',
      'Developers spending more time fixing regressions than building new features',
      'Lack of test coverage causing fear of refactoring legacy code',
      'Inconsistent app behavior across different browsers or mobile devices',
      'Security vulnerabilities discovered only after a data breach',
      'High costs associated with maintaining a massive manual QA team'
    ]
  },
  whoWeServe: {
    title: 'Who Needs QA & Automation',
    audiences: [
      'E-commerce & Retail Platforms',
      'B2B SaaS Companies',
      'Healthcare (Strict Compliance QA)',
      'Fintech (Zero-Defect Financial Logic)',
      'High-Traffic Media Sites',
      'Gaming Companies',
      'Enterprise Software Vendors',
      'Mobile App Startups'
    ]
  },
  useCases: {
    title: 'Automation Use Cases',
    cases: [
      'CI/CD Pipeline Integration', 'Black Friday Load Testing', 'Cross-Browser UI Testing', 'Mobile Device Farm Testing',
      'API Regression Suites', 'Security Penetration Testing', 'Accessibility (a11y) Auditing', 'Database Migration Verification'
    ]
  },
  developmentProcess: {
    title: 'Our QA Engineering Process',
    steps: [
      { name: 'QA Audit & Strategy', description: 'Review your current defect rate, manual processes, and identify critical user flows to automate first.' },
      { name: 'Toolchain Selection', description: 'Select the optimal automation frameworks (e.g., Playwright for web, Appium for mobile).' },
      { name: 'Test Script Engineering', description: 'Write modular, maintainable automation scripts that simulate real user behavior.' },
      { name: 'CI/CD Integration', description: 'Embed the test suite into your GitHub Actions or Jenkins pipeline to run automatically on every PR.' },
      { name: 'Performance Stress Testing', description: 'Execute staged load tests, pushing the infrastructure to its breaking point to find bottlenecks.' },
      { name: 'Continuous Maintenance', description: 'Update test scripts as the UI changes to prevent "flaky tests" and ensure high confidence.' }
    ]
  },
  technologyStack: {
    title: 'QA & Automation Stack',
    stacks: [
      { category: 'Web UI Automation', technologies: ['Playwright', 'Cypress', 'Selenium', 'Puppeteer'] },
      { category: 'API & Backend Testing', technologies: ['Postman', 'RestAssured', 'Jest', 'PyTest'] },
      { category: 'Performance & Load', technologies: ['k6', 'Apache JMeter', 'Gatling', 'Artillery'] },
      { category: 'Mobile & Cloud Farms', technologies: ['Appium', 'BrowserStack', 'AWS Device Farm'] }
    ]
  },
  caseStudies: {
    title: 'QA Success Stories',
    studies: [
      {
        projectName: 'E-Commerce Peak Load Testing',
        industry: 'Retail',
        businessProblem: 'The client’s website crashed the previous Black Friday, losing an estimated $500k in sales.',
        solution: 'Engineered a highly aggressive k6 load testing suite to simulate 50,000 concurrent checkouts and identified database bottlenecks.',
        technologies: ['k6', 'Grafana', 'AWS', 'Playwright'],
        keyFunctionality: ['Distributed load generation', 'Database query optimization', 'Automated failover testing'],
        result: ['100% uptime during Black Friday', 'Handled 3x more traffic than previous year', 'Zero checkout errors'],
        link: '/projects'
      }
    ]
  },
  whyChooseUs: {
    title: 'Why Choose Durozen for QA',
    reasons: [
      'We treat QA as software engineering: our SDETs write clean, maintainable test code',
      'Focus on eliminating "flaky tests" that waste developer time',
      'Deep expertise in modern frameworks like Playwright and k6',
      'Seamless integration into your existing CI/CD pipelines',
      'We test for performance and security, not just UI functionality',
      'Strategic mix of automation for speed and manual testing for human empathy',
      'Clear, actionable bug reports with video reproductions and network logs'
    ]
  },
  engagementModels: {
    title: 'QA Engagement Models',
    models: [
      { title: 'Automation Transformation', description: 'Transitioning your QA process from 100% manual to a highly automated CI/CD integrated pipeline.' },
      { title: 'Performance Load Testing', description: 'A focused sprint to stress-test your infrastructure before a major launch or marketing event.' },
      { title: 'Dedicated QA Engineering', description: 'Providing dedicated SDETs (Software Development Engineers in Test) to work alongside your devs.' },
      { title: 'Security QA Audit', description: 'Comprehensive vulnerability scanning and manual penetration testing of your application.' }
    ]
  },
  faqs: {
    title: 'QA & Test Automation FAQs',
    questions: [
      { question: 'Should we automate 100% of our tests?', answer: 'No. Aiming for 100% automation has diminishing returns and leads to high maintenance costs. We recommend automating 80%—focusing on critical paths (like checkout, login, API endpoints) and leaving edge-case UI testing to manual exploratory QA.' },
      { question: 'What is the difference between Cypress and Playwright?', answer: 'Both are excellent modern E2E testing tools. Playwright (by Microsoft) is currently our preferred tool for enterprise apps because it natively supports multi-tab testing, handles cross-domain iframes better, and is generally faster. We evaluate the best tool based on your specific app.' },
      { question: 'Do you test on real mobile devices?', answer: 'Yes. We utilize cloud device farms like BrowserStack or AWS Device Farm to run automated scripts across hundreds of real, physical iOS and Android devices, ensuring perfect compatibility.' },
      { question: 'What happens when the UI changes and tests break?', answer: 'This is known as a "flaky test." We engineer our test scripts using resilient data-testid attributes rather than CSS selectors, which drastically reduces breakage when the UI changes. As part of our managed service, we continuously update tests to match UI evolution.' }
    ]
  },
  finalCta: {
    title: 'Deploy with Confidence',
    subtitle: 'Stop worrying about bugs in production. Let’s automate your quality assurance.',
    ctaText: 'Schedule a QA Audit',
    ctaLink: '/contact'
  },
  relatedServices: {
    title: 'Related Services',
    services: [
      { title: 'DevOps', slug: 'devops' },
      { title: 'Web Development', slug: 'web-development' },
      { title: 'Mobile Development', slug: 'mobile-development' },
      { title: 'API Development', slug: 'api-development' }
    ]
  }
};
