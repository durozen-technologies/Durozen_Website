import { SolutionPageData } from '@/types/solution';

export const analyticsDashboardsData: SolutionPageData = {
  slug: 'analytics-dashboards',
  seo: {
    title: 'Custom Analytics Dashboards | Durozen',
    description: 'Monitor KPIs, users, revenue, campaigns, and system health in real time with high-performance, custom-built analytics dashboards.',
  },
  hero: {
    h1: 'Custom Analytics Dashboards',
    problem: 'Stop waiting for monthly reports. Monitor KPIs, revenue, campaigns, and operations in real-time with beautiful, high-performance dashboards.',
    ctaPrimary: { text: 'Discuss Your Data Visualization', link: '/contact' },
    ctaSecondary: { text: 'View Dashboard Examples', link: '/projects' },
  },
  overview: {
    title: 'What are Custom Analytics Dashboards?',
    content: [
      'Analytics dashboards are visual interfaces that translate massive, complex datasets into easily understandable charts, graphs, and KPIs. They act as the command center for your business.',
      'While there are many off-the-shelf dashboard tools available, they often fail when you need to combine data from highly specific, proprietary sources or when you need to embed the dashboard directly into your own SaaS product for your customers to see.',
      'We build custom, interactive dashboards using React, D3.js, and high-performance databases. This allows us to create pixel-perfect visualizations that load instantly, no matter how much data is behind them.'
    ]
  },
  problems: {
    title: 'Data Visualization Challenges',
    list: [
      'Executives unable to see the real-time financial health of the company without requesting a report',
      'Dashboards taking 30 seconds to load because the underlying database queries are not optimized',
      'Inability to embed a clean, branded analytics page inside your own software product',
      'Marketing teams unable to view ad spend vs. actual closed revenue on a single screen',
      'Data scattered across so many different tabs that the "big picture" is lost',
      'Mobile un-friendly dashboards that executives cannot check on their phones'
    ]
  },
  solution: {
    title: 'Real-Time Visibility',
    description: 'We build fast, intuitive dashboards that centralize your most critical data. By engineering the backend pipeline and the frontend visualization together, we deliver insights at lightning speed.'
  },
  keyFeatures: {
    title: 'Key Dashboard Features',
    features: [
      { title: 'Real-Time Data Streaming', description: 'WebSockets pushing live updates to the dashboard without requiring the user to refresh the page.' },
      { title: 'Interactive Filtering', description: 'Allowing users to drill down into specific date ranges, regions, or product lines instantly.' },
      { title: 'Embedded Analytics', description: 'White-labeling the dashboard so you can safely expose data to your clients inside your own app.' },
      { title: 'Automated Alerts', description: 'Triggering an email or SMS if a specific metric drops below a critical threshold (e.g., server uptime).' },
      { title: 'Custom Visualizations', description: 'Building unique charts (Sankey diagrams, heatmaps) that standard tools cannot support.' },
      { title: 'Role-Based Views', description: 'Ensuring the CEO sees the high-level revenue metrics, while the marketing manager sees ad performance.' }
    ]
  },
  useCases: {
    title: 'Dashboard Use Cases',
    cases: [
      'Executive KPI Command Centers', 'Marketing Campaign ROI Tracking', 'Embedded SaaS Customer Analytics',
      'Real-Time Server/IoT Monitoring', 'Sales Pipeline & Forecasting', 'Financial Cash Flow Analysis'
    ]
  },
  whoIsItFor: {
    title: 'Who Needs Custom Dashboards?',
    audiences: [
      'C-Suite Executives & Founders',
      'B2B SaaS Companies (For their users)',
      'Marketing & Performance Agencies',
      'Financial & Investment Firms',
      'Logistics & Fleet Managers',
      'E-commerce & Retail Operations'
    ]
  },
  benefits: {
    title: 'The Business Impact',
    list: [
      { title: 'Immediate Insight', description: 'Spot a negative trend on Tuesday and fix it on Wednesday, rather than finding out at the end of the month.' },
      { title: 'Product Value Expansion', description: 'Adding beautiful analytics to your SaaS product allows you to charge a higher premium tier.' },
      { title: 'Total Alignment', description: 'When the entire company is looking at the same real-time scoreboard, departmental goals align.' },
      { title: 'Zero Reporting Labor', description: 'Eliminate the 20 hours a week your analysts spend manually compiling Excel charts.' }
    ]
  },
  howItWorks: {
    title: 'The Dashboard Architecture',
    steps: [
      { name: 'Data Aggregation', description: 'We pull your data from APIs, CRMs, and legacy databases into a fast, central cache or warehouse.' },
      { name: 'Backend Processing', description: 'The server performs the heavy mathematical aggregations (sums, averages) so the browser doesn\'t have to.' },
      { name: 'API Delivery', description: 'A lightweight API securely delivers the aggregated numbers to the frontend.' },
      { name: 'Frontend Rendering', description: 'React and charting libraries (like Recharts) draw the interactive visualizations on the screen.' }
    ]
  },
  implementationProcess: {
    title: 'Our Implementation Process',
    steps: [
      { name: 'Metric Definition', description: 'We help you ruthlessly prioritize which metrics actually matter to avoid "dashboard clutter."' },
      { name: 'UI/UX Design', description: 'We design the layout focusing on visual hierarchy, ensuring the most important number is seen first.' },
      { name: 'Data Pipeline Engineering', description: 'We build the backend connections to ensure the data is accurate and flows in real-time.' },
      { name: 'Frontend Development', description: 'We build the interactive charts and filters, optimizing them for mobile and desktop viewing.' },
      { name: 'Testing & Launch', description: 'We verify the data against your old reports to ensure 100% accuracy before pushing it live.' }
    ]
  },
  integrations: {
    title: 'Data Sources We Visualize',
    list: [
      'Web Analytics (Google Analytics, Mixpanel)',
      'Advertising (Google Ads, Facebook Ads)',
      'Sales (Salesforce, Stripe)',
      'Operations (AWS CloudWatch, Datadog)',
      'Custom SQL Databases'
    ]
  },
  technology: {
    title: 'Dashboard Technology Stack',
    stacks: [
      { category: 'Frontend Charting', technologies: ['React', 'Recharts', 'Chart.js', 'D3.js'] },
      { category: 'Backend & Data', technologies: ['Node.js', 'GraphQL', 'PostgreSQL', 'Redis (Caching)'] },
      { category: 'Analytics Engines', technologies: ['ClickHouse', 'Snowflake', 'Cube.dev'] },
      { category: 'BI Tools (Alternatives)', technologies: ['Tableau', 'PowerBI', 'Metabase'] }
    ]
  },
  caseStudy: {
    title: 'Dashboard Success Story',
    studies: [
      {
        projectName: 'Embedded SaaS Analytics',
        businessProblem: 'A B2B SaaS company wanted to offer a premium "Analytics Tier" to their customers, but their database was too slow to handle thousands of users querying charts simultaneously.',
        solution: 'Engineered a specialized analytics database (ClickHouse) and built a highly performant React dashboard embedded directly into their app.',
        result: ['Queries that took 15 seconds now take 50ms', 'Enabled a $99/mo upsell tier', 'Zero performance impact on the main application'],
        link: '/projects'
      }
    ]
  },
  faqs: {
    title: 'Analytics Dashboards FAQs',
    questions: [
      { question: 'Should we build a custom dashboard or use PowerBI/Tableau?', answer: 'If the dashboard is strictly for internal use and your team already knows PowerBI, that is often the cheapest route. However, if you want to embed the dashboard into your own software for your customers to see, or if you need a highly branded, lightning-fast mobile experience, a custom React dashboard is the better choice.' },
      { question: 'Why is our current dashboard so slow?', answer: 'Slowness is almost never a frontend UI problem; it is a database problem. If a dashboard takes 20 seconds to load, it is likely trying to run complex math (sums, averages) across millions of rows in a transactional database. We fix this by introducing caching (Redis) or analytical databases (ClickHouse/Snowflake).' },
      { question: 'Can the dashboard update in real-time?', answer: 'Yes. We can use WebSockets or Server-Sent Events (SSE) to push live data to the dashboard without the user needing to hit the refresh button. This is crucial for stock trading, server monitoring, or live logistics tracking.' },
      { question: 'Can we export the data from the dashboard?', answer: 'Yes. We always include functionality to export any chart or table into a clean CSV or PDF report for offline sharing.' }
    ]
  },
  finalCta: {
    title: 'See the Big Picture',
    subtitle: 'Transform your raw data into clear, actionable insights with a custom analytics dashboard.',
    ctaText: 'Design Your Dashboard',
    ctaLink: '/contact'
  },
  relatedSolutions: {
    title: 'Related Solutions',
    solutions: [
      { title: 'Business Intelligence', slug: 'business-intelligence' },
      { title: 'SaaS Platforms', slug: 'saas-platforms' },
      { title: 'Internal Business Tools', slug: 'internal-business-tools' }
    ]
  }
};
