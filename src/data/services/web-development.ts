import { ServicePageData } from '@/types/service';

export const webDevelopmentData: ServicePageData = {
  slug: 'web-development',
  seo: {
    title: 'Web Development Services | Durozen',
    description: 'High-performance websites, portals, dashboards, landing pages, and complex web applications built for speed, SEO, and conversion.',
  },
  hero: {
    h1: 'Web Development Services',
    description: 'High-performance websites, portals, dashboards, and complex web applications built for extreme speed, SEO, and user conversion.',
    ctaPrimary: { text: 'Start Your Web Project', link: '/contact' },
    ctaSecondary: { text: 'See Our Portfolio', link: '/projects' },
  },
  whatIsIt: {
    title: 'What Is Enterprise Web Development?',
    content: [
      'Web development goes beyond building simple websites. Modern enterprise web development involves engineering complex, interactive web applications that run flawlessly in the browser.',
      'We focus on building web platforms that deliver native-app-like experiences. This means lightning-fast load times, exceptional Core Web Vitals, accessible UI/UX, and robust security.',
      'Whether you need a high-converting marketing site, a secure customer portal, or a complex SaaS dashboard, we build web solutions that drive tangible business results and scale effortlessly.'
    ]
  },
  servicesIncluded: {
    title: 'Our Web Development Solutions',
    services: [
      { title: 'Web Application Development', description: 'Complex, interactive Single Page Applications (SPAs) and Progressive Web Apps (PWAs) that run in the browser.' },
      { title: 'Corporate Websites', description: 'High-performance, beautifully designed marketing websites optimized for SEO and lead generation.' },
      { title: 'B2B Customer Portals', description: 'Secure, authenticated portals for your clients to manage their accounts, invoices, and support tickets.' },
      { title: 'E-Commerce Platforms', description: 'Custom headless e-commerce solutions built for high transaction volumes and seamless checkout experiences.' },
      { title: 'SaaS Dashboards', description: 'Intuitive, data-heavy admin panels and dashboards with real-time data visualization.' },
      { title: 'Headless CMS Integration', description: 'Decoupled web architectures using modern CMS platforms like Sanity, Contentful, or Strapi.' }
    ]
  },
  problemsSolved: {
    title: 'Web Challenges We Solve',
    problems: [
      'Slow page load times costing you conversions and SEO rankings',
      'Outdated designs that damage brand credibility',
      'Non-responsive websites that break on mobile devices',
      'Hard-to-manage content due to rigid legacy CMS platforms',
      'Security vulnerabilities in outdated plugins or themes',
      'Poor accessibility failing compliance standards (WCAG)',
      'High bounce rates due to confusing user journeys',
      'Inability to handle traffic spikes during peak events'
    ]
  },
  whoWeServe: {
    title: 'Who We Work With',
    audiences: [
      'Technology Startups',
      'B2B SaaS Companies',
      'E-commerce Brands',
      'Corporate Enterprises',
      'Media & Publishing',
      'Healthcare Providers',
      'Real Estate Agencies',
      'Educational Institutions'
    ]
  },
  useCases: {
    title: 'What Can We Build?',
    cases: [
      'Marketing Sites', 'SaaS Dashboards', 'E-commerce Storefronts', 'Customer Portals',
      'Internal Tools', 'News & Media Sites', 'Booking Platforms', 'Learning Management Systems',
      'Fintech Interfaces', 'Marketplaces'
    ]
  },
  developmentProcess: {
    title: 'Our Web Engineering Process',
    steps: [
      { name: 'Discovery & Strategy', description: 'Analyze your target audience, business goals, and technical requirements.' },
      { name: 'UI/UX Design', description: 'Create responsive wireframes and high-fidelity prototypes focused on conversion.' },
      { name: 'Frontend Engineering', description: 'Develop pixel-perfect, accessible, and performant interfaces using modern frameworks.' },
      { name: 'Backend & API Integration', description: 'Connect the frontend to headless CMS platforms, databases, and third-party APIs.' },
      { name: 'Performance & QA', description: 'Audit Core Web Vitals, cross-browser compatibility, and strict security testing.' },
      { name: 'Launch & SEO', description: 'Deploy to a global CDN and ensure all technical SEO parameters are perfectly configured.' },
      { name: 'Maintenance', description: 'Continuous monitoring, content updates, and performance optimization.' }
    ]
  },
  technologyStack: {
    title: 'Web Technology Stack',
    stacks: [
      { category: 'Frontend Frameworks', technologies: ['React', 'Next.js', 'Vue.js', 'SvelteKit'] },
      { category: 'Styling & UI', technologies: ['Tailwind CSS', 'Framer Motion', 'Radix UI', 'Sass'] },
      { category: 'Headless CMS', technologies: ['Sanity', 'Contentful', 'Strapi', 'WordPress (Headless)'] },
      { category: 'Hosting & Deployment', technologies: ['Vercel', 'AWS', 'Netlify', 'Cloudflare'] }
    ]
  },
  caseStudies: {
    title: 'Web Success Stories',
    studies: [
      {
        projectName: 'High-Volume E-Commerce Replatforming',
        industry: 'Retail',
        businessProblem: 'Legacy monolithic architecture caused 8-second page loads, severely impacting mobile sales.',
        solution: 'Rebuilt the frontend using Next.js (Headless Shopify) deployed on the Edge.',
        technologies: ['Next.js', 'Tailwind CSS', 'Shopify Storefront API', 'Vercel'],
        keyFunctionality: ['Sub-second page loads', 'Dynamic cart', 'Personalized recommendations'],
        result: ['Increased mobile conversion rate by 35%', 'Achieved 99/100 Lighthouse score', 'Handled Black Friday traffic flawlessly'],
        link: '/projects'
      }
    ]
  },
  whyChooseUs: {
    title: 'Why Choose Durozen for Web Development',
    reasons: [
      'Obsessive focus on Web Performance and Core Web Vitals',
      'Pixel-perfect implementation of UI/UX designs',
      'Deep expertise in modern React and Next.js ecosystems',
      'SEO-first architecture built into the foundation',
      'Fully responsive, mobile-first development',
      'Accessible web design compliant with WCAG guidelines',
      'Seamless integration with modern headless CMS platforms'
    ]
  },
  engagementModels: {
    title: 'Web Engagement Models',
    models: [
      { title: 'Full Website Redesign', description: 'End-to-end strategy, design, and development for a complete digital overhaul.' },
      { title: 'Web App Development', description: 'Building a complex, interactive web application from scratch.' },
      { title: 'Frontend Augmentation', description: 'Adding our senior React/Next.js engineers to your existing team.' },
      { title: 'Performance Audits & Fixes', description: 'Analyzing your current site and rewriting code to achieve perfect Lighthouse scores.' }
    ]
  },
  faqs: {
    title: 'Web Development FAQs',
    questions: [
      { question: 'Do you build WordPress websites?', answer: 'We specialize in modern web architectures. If you require WordPress, we build it as a "Headless CMS", using a high-performance React frontend (Next.js) connected to a WordPress backend via API.' },
      { question: 'Will my website be fast and optimized for Google?', answer: 'Yes. Performance and technical SEO are our top priorities. We build static or server-side rendered sites that consistently score 90+ on Google Lighthouse Core Web Vitals.' },
      { question: 'Can you help with UI/UX design?', answer: 'Absolutely. We have a dedicated design team that creates wireframes, prototypes, and final designs before writing any code.' },
      { question: 'Is the website easy to update?', answer: 'Yes. We integrate modern Headless CMS platforms (like Sanity or Contentful) that provide an incredibly intuitive editing experience for your marketing team.' }
    ]
  },
  finalCta: {
    title: 'Upgrade Your Web Presence',
    subtitle: 'Stop losing customers to slow, outdated websites. Let’s build something extraordinary.',
    ctaText: 'Start Your Web Project',
    ctaLink: '/contact'
  },
  relatedServices: {
    title: 'Related Services',
    services: [
      { title: 'UI/UX Design', slug: 'ui-ux-design' },
      { title: 'Mobile Development', slug: 'mobile-development' },
      { title: 'API Development', slug: 'api-development' },
      { title: 'Cloud Engineering', slug: 'cloud-engineering' },
      { title: 'Product Development', slug: 'product-development' }
    ]
  }
};
