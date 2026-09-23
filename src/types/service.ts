export interface ServiceIncluded {
  title: string;
  description: string;
}

export interface ProcessStep {
  name: string;
  description: string;
}

export interface TechCategory {
  category: string;
  technologies: string[];
}

export interface CaseStudy {
  projectName: string;
  industry: string;
  businessProblem: string;
  solution: string;
  technologies: string[];
  keyFunctionality: string[];
  result: string[];
  link?: string;
}

export interface EngagementModel {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    h1: string;
    description: string;
    ctaPrimary: { text: string; link: string };
    ctaSecondary?: { text: string; link: string };
  };
  whatIsIt: {
    title: string;
    content: string[]; // paragraphs
  };
  servicesIncluded: {
    title: string;
    services: ServiceIncluded[];
  };
  problemsSolved: {
    title: string;
    problems: string[];
  };
  whoWeServe: {
    title: string;
    audiences: string[];
  };
  useCases: {
    title: string;
    cases: string[];
  };
  developmentProcess: {
    title: string;
    steps: ProcessStep[];
  };
  technologyStack: {
    title: string;
    stacks: TechCategory[];
  };
  caseStudies: {
    title: string;
    studies: CaseStudy[];
  };
  whyChooseUs: {
    title: string;
    reasons: string[];
  };
  engagementModels: {
    title: string;
    models: EngagementModel[];
  };
  faqs: {
    title: string;
    questions: FAQ[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
  relatedServices: {
    title: string;
    services: { title: string; slug: string }[];
  };
}
