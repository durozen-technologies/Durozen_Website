import { ServicePageData } from '@/types/service';

export const mobileDevelopmentData: ServicePageData = {
  slug: 'mobile-development',
  seo: {
    title: 'Mobile App Development Services | Durozen',
    description: 'Launch-ready iOS, Android, and Cross-Platform applications built with clean UX, extreme performance, and stable enterprise backends.',
  },
  hero: {
    h1: 'Mobile Development Services',
    description: 'Launch-ready iOS, Android, and Cross-Platform applications built with clean UX, native performance, and stable enterprise backends.',
    ctaPrimary: { text: 'Discuss Your App Idea', link: '/contact' },
    ctaSecondary: { text: 'View Mobile Projects', link: '/projects' },
  },
  whatIsIt: {
    title: 'What Is Enterprise Mobile Development?',
    content: [
      'Mobile development is the engineering of applications for mobile devices. But for modern enterprises, it means building apps that seamlessly bridge the gap between offline hardware capabilities and cloud-based services.',
      'We do not just build simple apps; we architect complex mobile systems involving real-time data sync, geolocation, Bluetooth/IoT integrations, and secure offline-first architectures.',
      'Our team delivers high-performing native and cross-platform applications that provide frictionless experiences for consumers and critical utility for internal workforce teams.'
    ]
  },
  servicesIncluded: {
    title: 'Our Mobile Development Expertise',
    services: [
      { title: 'Cross-Platform Development', description: 'Write once, deploy everywhere. We build high-performance apps using React Native and Flutter for both iOS and Android.' },
      { title: 'Native iOS Development', description: 'Swift and Objective-C development for highly optimized, Apple-ecosystem specific applications.' },
      { title: 'Native Android Development', description: 'Kotlin and Java development leveraging the full power of the Android hardware ecosystem.' },
      { title: 'Mobile Backend Engineering (BaaS)', description: 'Architecting secure, scalable APIs and cloud databases to power your mobile application.' },
      { title: 'Mobile UI/UX Design', description: 'Designing intuitive, gesture-driven interfaces that follow strict Human Interface and Material Design guidelines.' },
      { title: 'App Store Deployment', description: 'Managing the strict compliance, review, and deployment processes for both Apple App Store and Google Play.' }
    ]
  },
  problemsSolved: {
    title: 'Mobile Challenges We Solve',
    problems: [
      'Inconsistent app behavior across different devices and screen sizes',
      'High development costs maintaining separate iOS and Android codebases',
      'Poor offline functionality leading to data loss in low-connectivity areas',
      'Slow app performance, janky animations, and high battery consumption',
      'Security vulnerabilities in mobile data storage and API communication',
      'Low user retention due to confusing UI or frustrating onboarding',
      'Rejection from App Stores due to compliance or performance issues',
      'Difficulty integrating mobile apps with legacy enterprise backends'
    ]
  },
  whoWeServe: {
    title: 'Who We Work With',
    audiences: [
      'Consumer Tech Startups',
      'Healthcare (Telehealth & Tracking)',
      'Logistics & Fleet Management',
      'Retail & Mobile Commerce',
      'On-Demand Services (Ride-sharing, Delivery)',
      'Fintech & Neobanks',
      'Field Services & Construction',
      'Enterprise Workforce Apps'
    ]
  },
  useCases: {
    title: 'Mobile App Use Cases',
    cases: [
      'E-commerce Apps', 'Telehealth Apps', 'Fleet Tracking', 'IoT Companion Apps',
      'Fintech Wallets', 'Field Service Management', 'Social Networks', 'Delivery Logistics',
      'Fitness & Wellness', 'Internal Employee Apps'
    ]
  },
  developmentProcess: {
    title: 'Our Mobile Engineering Process',
    steps: [
      { name: 'Product Strategy', description: 'Define the core loop, feature set, and target platforms (Native vs Cross-Platform).' },
      { name: 'UX/UI & Prototyping', description: 'Design gesture-based flows and test interactive prototypes on physical devices.' },
      { name: 'API & Backend Setup', description: 'Establish the secure cloud infrastructure required to serve data to the app.' },
      { name: 'App Development', description: 'Code the application, integrating native device features (Camera, GPS, Push).' },
      { name: 'Rigorous QA Testing', description: 'Automated and manual testing across hundreds of real devices and OS versions.' },
      { name: 'Store Launch', description: 'Navigate App Store Connect and Google Play Console to get your app approved and published.' },
      { name: 'Post-Launch Support', description: 'Monitor crash reports, optimize performance, and push new feature updates.' }
    ]
  },
  technologyStack: {
    title: 'Mobile Technology Stack',
    stacks: [
      { category: 'Cross-Platform', technologies: ['React Native', 'Flutter', 'Expo'] },
      { category: 'Native OS', technologies: ['Swift (iOS)', 'Kotlin (Android)', 'Objective-C', 'Java'] },
      { category: 'Backend & APIs', technologies: ['Node.js', 'Firebase', 'GraphQL', 'REST'] },
      { category: 'Testing & Analytics', technologies: ['Appium', 'Jest', 'Mixpanel', 'Crashlytics'] }
    ]
  },
  caseStudies: {
    title: 'Mobile Success Stories',
    studies: [
      {
        projectName: 'On-Demand Medical Delivery App',
        industry: 'Healthcare & Logistics',
        businessProblem: 'Pharmacies needed a secure, HIPAA-compliant way to dispatch drivers for critical medication deliveries.',
        solution: 'Built a React Native driver app with real-time GPS tracking, barcode scanning, and offline-first signature capture.',
        technologies: ['React Native', 'Google Maps API', 'Node.js', 'AWS'],
        keyFunctionality: ['Real-time routing', 'E-signatures', 'Offline mode'],
        result: ['Deployed to iOS and Android from one codebase', 'Completed 500k+ secure deliveries', 'Maintained 99.9% crash-free sessions'],
        link: '/projects'
      }
    ]
  },
  whyChooseUs: {
    title: 'Why Choose Durozen for Mobile',
    reasons: [
      'Experts in complex React Native and Flutter cross-platform architecture',
      'Deep knowledge of native device APIs (Bluetooth, GPS, NFC, Camera)',
      'Offline-first engineering for reliable apps in low-connectivity zones',
      'End-to-end capabilities: we build the App and the Cloud Backend',
      'Strict adherence to Apple HIG and Google Material Design',
      'Zero-hassle App Store deployment and compliance management',
      'Focus on battery-efficient and memory-optimized code'
    ]
  },
  engagementModels: {
    title: 'Mobile Engagement Models',
    models: [
      { title: 'MVP App Development', description: 'Rapidly build and launch a core-feature app to validate your market.' },
      { title: 'Full Product Engineering', description: 'Design, develop, and scale a complex enterprise or consumer application.' },
      { title: 'Legacy App Modernization', description: 'Rewrite an old, sluggish native app into a modern, performant cross-platform codebase.' },
      { title: 'Dedicated Mobile Team', description: 'Hire our senior mobile engineers to accelerate your internal roadmap.' }
    ]
  },
  faqs: {
    title: 'Mobile Development FAQs',
    questions: [
      { question: 'Should I build Native or Cross-Platform?', answer: 'For 90% of business use cases, cross-platform (React Native or Flutter) is best as it cuts development time and cost in half while delivering near-native performance. Native (Swift/Kotlin) is only strictly necessary for intense graphic games or deep, low-level OS integrations.' },
      { question: 'Do you build the backend as well?', answer: 'Yes. A mobile app is only as good as its API. We engineer secure, scalable cloud backends and databases to power your application.' },
      { question: 'Will you help us put it on the App Store?', answer: 'Yes. We handle the entire deployment process, including certificates, provisioning profiles, store listings, and the often-tricky Apple review process.' },
      { question: 'Can the app work without an internet connection?', answer: 'Yes. We specialize in "offline-first" architecture. Users can interact with the app, and data will securely sync to the cloud once connectivity is restored.' }
    ]
  },
  finalCta: {
    title: 'Ready to Build Your App?',
    subtitle: 'From consumer startups to enterprise workforce tools, we build mobile experiences that perform.',
    ctaText: 'Discuss Your App Idea',
    ctaLink: '/contact'
  },
  relatedServices: {
    title: 'Related Services',
    services: [
      { title: 'UI/UX Design', slug: 'ui-ux-design' },
      { title: 'Custom Software Development', slug: 'custom-software-development' },
      { title: 'API Development', slug: 'api-development' },
      { title: 'Cloud Engineering', slug: 'cloud-engineering' },
      { title: 'Product Development', slug: 'product-development' }
    ]
  }
};
