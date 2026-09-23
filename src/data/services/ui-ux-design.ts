import { ServicePageData } from '@/types/service';

export const uiUxDesignData: ServicePageData = {
  slug: 'ui-ux-design',
  seo: {
    title: 'UI/UX Design Services | Durozen',
    description: 'Transform complex workflows into intuitive, beautiful user interfaces. We specialize in enterprise product design, wireframing, and user experience strategy.',
  },
  hero: {
    h1: 'UI/UX Design Services',
    description: 'Transform complex workflows into intuitive, beautiful user interfaces. We specialize in enterprise product design, rapid prototyping, and user experience strategy.',
    ctaPrimary: { text: 'Discuss Your Design Needs', link: '/contact' },
    ctaSecondary: { text: 'View Design Portfolio', link: '/projects' },
  },
  whatIsIt: {
    title: 'What Is Enterprise UI/UX Design?',
    content: [
      'UI/UX design for enterprise applications is significantly different from designing consumer websites. It requires understanding complex, multi-step business workflows and translating them into interfaces that reduce cognitive load.',
      'User Experience (UX) focuses on the logic, flow, and usability of the application—ensuring users can accomplish tasks quickly. User Interface (UI) focuses on the visual aesthetics, brand alignment, and accessibility of the interactive elements.',
      'At Durozen, our design team works tightly with our engineers. We don\'t just design "pretty pictures"; we design highly functional systems built on reusable component libraries that developers can actually build.'
    ]
  },
  servicesIncluded: {
    title: 'Our Design Capabilities',
    services: [
      { title: 'UX Research & Strategy', description: 'Conducting user interviews, workflow analysis, and competitive research to define the product architecture.' },
      { title: 'Wireframing & Prototyping', description: 'Creating low-fidelity wireframes and interactive high-fidelity prototypes to validate ideas before coding.' },
      { title: 'Enterprise Product Design', description: 'Designing complex dashboards, data visualizations, and admin portals that manage massive amounts of data.' },
      { title: 'Mobile App Design', description: 'Creating intuitive, gesture-based interfaces strictly adhering to iOS HIG and Android Material Design.' },
      { title: 'Design Systems', description: 'Building scalable, documented component libraries (tokens, typography, UI elements) for engineering teams.' },
      { title: 'UI/UX Audits', description: 'Reviewing existing applications for usability bottlenecks, accessibility failures, and conversion drop-offs.' }
    ]
  },
  problemsSolved: {
    title: 'Design Challenges We Solve',
    problems: [
      'Low user adoption rates for newly launched internal software',
      'High customer support costs due to confusing interfaces',
      'Users abandoning e-commerce checkouts or SaaS onboarding flows',
      'Inconsistent branding and UI elements across different products',
      'Engineering teams wasting time rebuilding basic UI components',
      'Failure to comply with web accessibility standards (WCAG)',
      'Complex enterprise data that is impossible to read or analyze',
      'Designs that look great but are technically impossible to build'
    ]
  },
  whoWeServe: {
    title: 'Who Needs Our Design Services',
    audiences: [
      'B2B SaaS Companies',
      'Enterprise Software Teams',
      'Consumer Mobile Startups',
      'E-commerce Brands',
      'Fintech & Banking Portals',
      'Healthcare & Patient Apps',
      'Logistics & Dashboards',
      'Companies undergoing Digital Transformation'
    ]
  },
  useCases: {
    title: 'Design Use Cases',
    cases: [
      'SaaS Admin Dashboards', 'Mobile App Interfaces', 'E-commerce Storefronts', 'Design System Creation',
      'Legacy Software Redesign', 'Landing Page Conversion Optimization', 'Data Visualization UI', 'Customer Portals'
    ]
  },
  developmentProcess: {
    title: 'Our UI/UX Design Process',
    steps: [
      { name: 'Discovery & Research', description: 'Understand the business goals, user personas, and technical constraints of the project.' },
      { name: 'Information Architecture', description: 'Map out the user flows, navigation structures, and data hierarchies.' },
      { name: 'Wireframing', description: 'Create structural blueprints (low-fidelity) to establish layout without getting bogged down in visuals.' },
      { name: 'High-Fidelity UI Design', description: 'Apply branding, typography, color theory, and micro-interactions to the wireframes.' },
      { name: 'Interactive Prototyping', description: 'Link the screens together in Figma to simulate the final user experience for testing.' },
      { name: 'Developer Handoff', description: 'Deliver organized Figma files, design tokens, and CSS variables directly to the engineering team.' }
    ]
  },
  technologyStack: {
    title: 'Design & Handoff Tools',
    stacks: [
      { category: 'Design & Prototyping', technologies: ['Figma', 'Sketch', 'Framer'] },
      { category: 'Whiteboarding & Architecture', technologies: ['FigJam', 'Miro', 'Whimsical'] },
      { category: 'Developer Handoff', technologies: ['Zeplin', 'Figma Dev Mode', 'Storybook'] },
      { category: 'Testing & Analytics', technologies: ['Hotjar', 'Maze', 'Google Analytics'] }
    ]
  },
  caseStudies: {
    title: 'Design Success Stories',
    studies: [
      {
        projectName: 'Fintech Dashboard Redesign',
        industry: 'Financial Services',
        businessProblem: 'Traders were missing critical market movements due to a cluttered, outdated data visualization interface.',
        solution: 'Redesigned the entire trading dashboard focusing on dark mode legibility, modular widgets, and reduced cognitive load.',
        technologies: ['Figma', 'Framer', 'Highcharts UI'],
        keyFunctionality: ['Modular widgets', 'Accessible dark mode', 'Real-time state design'],
        result: ['Reduced task completion time by 40%', 'Increased user satisfaction scores', 'Seamless handoff to React developers'],
        link: '/projects'
      }
    ]
  },
  whyChooseUs: {
    title: 'Why Choose Durozen for UI/UX',
    reasons: [
      'We design for developers: our designs are modular, grid-based, and highly buildable',
      'Deep expertise in taming complex, data-heavy enterprise workflows',
      'Strict adherence to WCAG accessibility guidelines',
      'We build scalable Design Systems, not just one-off screens',
      'Focus on business ROI and conversion metrics, not just aesthetics',
      'Seamless integration with our internal software engineering teams',
      'Rapid iteration cycles using interactive Figma prototypes'
    ]
  },
  engagementModels: {
    title: 'Design Engagement Models',
    models: [
      { title: 'End-to-End Product Design', description: 'Taking an idea from a blank canvas all the way to high-fidelity, developer-ready prototypes.' },
      { title: 'UI/UX Redesign', description: 'Overhauling a sluggish, outdated application into a modern, highly usable platform.' },
      { title: 'Design System Creation', description: 'Standardizing your company’s UI into a reusable, documented Figma component library.' },
      { title: 'Design Augmentation', description: 'Providing senior product designers to work alongside your internal engineering teams.' }
    ]
  },
  faqs: {
    title: 'UI/UX Design FAQs',
    questions: [
      { question: 'What is the difference between UI and UX?', answer: 'UX (User Experience) focuses on how the product works—the logic, the user flows, and how easy it is to accomplish a task. UI (User Interface) focuses on how the product looks—the colors, typography, buttons, and visual hierarchy. We handle both.' },
      { question: 'Do you just design, or do you build the software too?', answer: 'We are a full-stack engineering firm. While you can hire us just for design, our superpower is that our designers and engineers work together. We design things that we know can be built efficiently.' },
      { question: 'What deliverables do we get at the end?', answer: 'You receive full ownership of the Figma source files, an interactive prototype, a documented UI component library (design system), and all exported assets required for development.' },
      { question: 'How do you handle accessibility?', answer: 'Accessibility is built into our design process from day one. We ensure adequate color contrast ratios, proper typography sizing, and logical tab orders to comply with WCAG (Web Content Accessibility Guidelines).' }
    ]
  },
  finalCta: {
    title: 'Elevate Your Digital Experience',
    subtitle: 'Great design is good business. Let’s create interfaces your users will love.',
    ctaText: 'Schedule a Design Review',
    ctaLink: '/contact'
  },
  relatedServices: {
    title: 'Related Services',
    services: [
      { title: 'Web Development', slug: 'web-development' },
      { title: 'Mobile Development', slug: 'mobile-development' },
      { title: 'Custom Software Development', slug: 'custom-software-development' },
      { title: 'Product Development', slug: 'product-development' }
    ]
  }
};
