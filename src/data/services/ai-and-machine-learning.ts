import { ServicePageData } from '@/types/service';

export const aiAndMachineLearningData: ServicePageData = {
  slug: 'ai-and-machine-learning',
  seo: {
    title: 'AI & Machine Learning Services | Durozen',
    description: 'Integrate artificial intelligence into your business. Custom AI assistants, predictive machine learning models, NLP, and computer vision solutions.',
  },
  hero: {
    h1: 'AI & Machine Learning Engineering',
    description: 'Integrate enterprise-grade artificial intelligence into your business. Custom AI assistants, predictive ML models, NLP, and computer vision solutions.',
    ctaPrimary: { text: 'Discuss Your AI Strategy', link: '/contact' },
    ctaSecondary: { text: 'Explore AI Use Cases', link: '/projects' },
  },
  whatIsIt: {
    title: 'What Is Enterprise AI Engineering?',
    content: [
      'Artificial Intelligence and Machine Learning are no longer just buzzwords; they are practical engineering tools used to solve complex business problems that traditional software cannot.',
      'We help businesses move beyond the hype by engineering production-ready AI systems. This includes training custom models on your proprietary data, integrating Large Language Models (LLMs) securely, and building predictive algorithms.',
      'From automating customer support with highly contextual chatbots to predicting supply chain failures before they happen, we build AI solutions that deliver measurable ROI and scale securely.'
    ]
  },
  servicesIncluded: {
    title: 'Our AI & ML Services',
    services: [
      { title: 'Generative AI & LLM Integration', description: 'Securely integrating OpenAI, Anthropic, or open-source LLMs into your applications for text generation and summarization.' },
      { title: 'Custom AI Assistants (RAG)', description: 'Building Retrieval-Augmented Generation (RAG) chatbots that accurately answer questions based entirely on your company’s private data.' },
      { title: 'Predictive Analytics', description: 'Training machine learning models on historical data to predict future trends, customer churn, or equipment failures.' },
      { title: 'Natural Language Processing (NLP)', description: 'Extracting meaning, sentiment, and structured data from massive amounts of unstructured text (emails, reviews, contracts).' },
      { title: 'Computer Vision', description: 'Implementing image and video analysis for automated quality control, facial recognition, or medical imaging.' },
      { title: 'MLOps & Model Deployment', description: 'Engineering the infrastructure required to deploy, monitor, and continuously retrain machine learning models in production.' }
    ]
  },
  problemsSolved: {
    title: 'Business Problems Solved by AI',
    problems: [
      'Customer support teams overwhelmed by repetitive, basic inquiries',
      'Inability to extract actionable insights from terabytes of unstructured data',
      'Manual, error-prone visual inspections in manufacturing or logistics',
      'High customer churn rates due to lack of predictive intervention',
      'Employees wasting hours searching through internal knowledge bases',
      'Inefficient supply chain forecasting based on outdated spreadsheet models',
      'Security concerns preventing the use of public AI tools (like ChatGPT)',
      'Difficulty personalizing user experiences at a massive scale'
    ]
  },
  whoWeServe: {
    title: 'Industries Leveraging Our AI',
    audiences: [
      'Financial Services & Fintech',
      'Healthcare & Diagnostics',
      'E-commerce & Retail',
      'Manufacturing & Supply Chain',
      'Legal & Compliance Services',
      'Customer Support Centers',
      'SaaS Platforms',
      'Real Estate & PropTech'
    ]
  },
  useCases: {
    title: 'AI Use Cases',
    cases: [
      'Internal Knowledge Chatbots', 'Automated Contract Analysis', 'Predictive Maintenance', 'Churn Prediction',
      'Dynamic Pricing Engines', 'Visual Quality Assurance', 'Automated Medical Triaging', 'Personalized Product Recommendations'
    ]
  },
  developmentProcess: {
    title: 'Our AI Implementation Process',
    steps: [
      { name: 'AI Feasibility Study', description: 'Assess your business problem to determine if AI is actually the right technical solution.' },
      { name: 'Data Readiness & Cleaning', description: 'Audit, clean, and structure your historical data to prepare it for model training.' },
      { name: 'Model Selection & Training', description: 'Choose the right algorithm (or LLM) and train it securely on your proprietary data.' },
      { name: 'Evaluation & Tuning', description: 'Rigorously test the model for accuracy, bias, and edge cases, tuning hyperparameters as needed.' },
      { name: 'API Engineering', description: 'Wrap the trained model in a secure, scalable API that your applications can easily consume.' },
      { name: 'MLOps & Deployment', description: 'Deploy the model to the cloud with infrastructure to monitor performance and data drift.' }
    ]
  },
  technologyStack: {
    title: 'AI & ML Technology Stack',
    stacks: [
      { category: 'Machine Learning Frameworks', technologies: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'XGBoost'] },
      { category: 'LLMs & GenAI', technologies: ['OpenAI API', 'Anthropic Claude', 'Llama 3', 'Hugging Face'] },
      { category: 'Data & Vector Databases', technologies: ['Pinecone', 'Weaviate', 'PostgreSQL (pgvector)', 'Milvus'] },
      { category: 'MLOps & Cloud', technologies: ['AWS SageMaker', 'MLflow', 'Python/FastAPI', 'Databricks'] }
    ]
  },
  caseStudies: {
    title: 'AI Success Stories',
    studies: [
      {
        projectName: 'Secure Enterprise Knowledge Assistant',
        industry: 'Legal Services',
        businessProblem: 'Paralegals spent an average of 15 hours a week manually searching through thousands of past case files.',
        solution: 'Built a secure RAG (Retrieval-Augmented Generation) system utilizing a localized vector database and LLM to instantly query case files.',
        technologies: ['Python', 'Pinecone', 'LangChain', 'OpenAI (Enterprise)'],
        keyFunctionality: ['Semantic search', 'Automated summarization', 'Strict access controls'],
        result: ['Reduced search time by 85%', 'Zero data leakage', 'Adopted by 200+ legal professionals'],
        link: '/projects'
      }
    ]
  },
  whyChooseUs: {
    title: 'Why Choose Durozen for AI',
    reasons: [
      'Focus on practical ROI rather than AI hype or gimmicks',
      'Deep expertise in secure, private data handling (no public model training)',
      'End-to-end capabilities: we build the AI models AND the software that uses them',
      'Strong data engineering foundation (AI is only as good as its data)',
      'Experience with the latest RAG and Vector Search architectures',
      'Transparent explanations of how models make decisions (Explainable AI)',
      'Dedicated MLOps practices to ensure models do not degrade over time'
    ]
  },
  engagementModels: {
    title: 'AI Engagement Models',
    models: [
      { title: 'AI Proof of Concept (PoC)', description: 'A rapid 4-6 week sprint to validate if an AI solution is technically viable for your data.' },
      { title: 'Custom AI Integration', description: 'Integrating LLMs or predictive models securely into your existing enterprise software.' },
      { title: 'End-to-End AI Product Build', description: 'Designing and engineering a completely new AI-driven product from the ground up.' },
      { title: 'AI Strategy Consulting', description: 'Consulting services to help executives identify high-ROI AI opportunities within the business.' }
    ]
  },
  faqs: {
    title: 'AI & Machine Learning FAQs',
    questions: [
      { question: 'Will the AI share my company’s private data with the public?', answer: 'No. For enterprise clients, we utilize private LLM instances, secure APIs with zero-data-retention policies, or self-hosted open-source models (like Llama) to ensure your data is never used to train public models.' },
      { question: 'What is RAG (Retrieval-Augmented Generation)?', answer: 'RAG is a technique that allows an AI model to read your company’s specific, private documents before answering a question. This prevents "hallucinations" and ensures the AI only gives answers based on your actual data.' },
      { question: 'Do I have enough data for Machine Learning?', answer: 'It depends on the problem. For training custom predictive models from scratch, you often need large, clean datasets. However, for Generative AI (like chatbots or text summarization), you can start providing value with just a few hundred well-documented files.' },
      { question: 'How long does it take to implement an AI solution?', answer: 'A simple AI integration (like adding an LLM-powered summarizer to an app) can take weeks. Building a complex predictive model or a highly secure enterprise RAG system typically takes 3 to 6 months.' }
    ]
  },
  finalCta: {
    title: 'Harness the Power of AI',
    subtitle: 'Move beyond the hype. Build practical, secure AI solutions that drive real business value.',
    ctaText: 'Schedule an AI Consultation',
    ctaLink: '/contact'
  },
  relatedServices: {
    title: 'Related Services',
    services: [
      { title: 'Data Engineering', slug: 'data-engineering' },
      { title: 'Custom Software Development', slug: 'custom-software-development' },
      { title: 'Cloud Engineering', slug: 'cloud-engineering' },
      { title: 'Digital Transformation', slug: 'digital-transformation' }
    ]
  }
};
