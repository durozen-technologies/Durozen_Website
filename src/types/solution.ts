export interface SolutionPageData {
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    h1: string;
    problem: string;
    ctaPrimary: {
      text: string;
      link: string;
    };
    ctaSecondary?: {
      text: string;
      link: string;
    };
  };
  overview: {
    title: string;
    content: string[];
  };
  problems: {
    title: string;
    list: string[];
  };
  solution: {
    title: string;
    description: string;
  };
  keyFeatures: {
    title: string;
    features: {
      title: string;
      description: string;
    }[];
  };
  useCases: {
    title: string;
    cases: string[];
  };
  whoIsItFor: {
    title: string;
    audiences: string[];
  };
  benefits: {
    title: string;
    list: {
      title: string;
      description: string;
    }[];
  };
  howItWorks: {
    title: string;
    steps: {
      name: string;
      description: string;
    }[];
  };
  implementationProcess: {
    title: string;
    steps: {
      name: string;
      description: string;
    }[];
  };
  integrations: {
    title: string;
    list: string[];
  };
  technology: {
    title: string;
    stacks: {
      category: string;
      technologies: string[];
    }[];
  };
  caseStudy: {
    title: string;
    studies: {
      projectName: string;
      businessProblem: string;
      solution: string;
      result: string[];
      link: string;
    }[];
  };
  faqs: {
    title: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
  relatedSolutions: {
    title: string;
    solutions: {
      title: string;
      slug: string;
    }[];
  };
}
