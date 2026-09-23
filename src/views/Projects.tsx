import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'POS Billing System and Tracking',
      solution: 'Architected an ultra-fast billing terminal with automated inventory reconciliations, multi-store offline caching, and sub-second thermal printing integrations for regional retail chains.',
      tags: ['React', 'Node.js', 'SQLite Sync', 'WebSockets', 'Redis'],
      image: '/images/boiler360_logo.png',
      imageClass: 'object-contain drop-shadow-md',
      imagePadding: true,
    },
    {
      url: 'https://admission.kongunadu.ac.in/',
      title: 'KNCET Admission Portal',
      solution: 'End-to-end applicant processing platform managing high-traffic counseling cycles, document verification pipelines, automated alerts, and secure digital fee collection.',
      tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'AWS S3', 'Razorpay'],
      image: '/images/kncet_portal.png',
      imageClass: 'object-contain',
      imagePadding: false,
    },
    {
      url: 'https://ramsconstruct.co.uk/',
      title: 'RAMS Construct',
      solution: 'High-conversion digital brand hub featuring interactive project walk-throughs, dynamic site plan explorers, automated quotation generators, and integrated CRM marketing pipelines.',
      tags: ['Three.js', 'Tailwind', 'TypeScript', 'Headless CMS'],
      image: '/images/rams_construct_new.png',
      imageClass: 'object-contain',
      imagePadding: false,
    },
    {
      url: 'https://www.elavarasandncchits.in/',
      title: 'Elavarasan & Co Chits',
      solution: 'Secure, legally compliant financial management system facilitating live bidding auctions, automated dividend distribution, subscriber ledgers, and regulatory compliance audits.',
      tags: ['Spring Boot', 'PostgreSQL', 'Docker', 'Microservices'],
      image: '/images/elavarasan_chits.png',
      imageClass: 'object-contain',
      imagePadding: false,
    },
    {
      url: 'https://gurudevimpex.in/',
      title: 'Gurudev Impex',
      solution: 'Full-suite global trade management engine streamlining cross-border container tracking, multimodal freight quotation calculations, customs documentation, and supplier compliance.',
      tags: ['Go', 'Python', 'Next.js', 'Kafka', 'AWS'],
      image: '/images/gurudev_impex.png',
      imageClass: 'object-contain',
      imagePadding: false,
    },
    {
      url: 'https://knp-bharathimhss.com/',
      title: 'KNP Bharathi',
      solution: 'Holistic institutional operating system consolidating student academic records, biometric student attendance, automated grade calculations, fee collections, and bilingual parent notifications.',
      tags: ['Flutter', 'Node.js', 'MongoDB', 'FCM Push'],
      image: '/images/knp_bharathi.png',
      imageClass: 'object-contain',
      imagePadding: false,
    }
  ];

  const projectWork = projects.slice(0, 1);
  const clientProjects = projects.slice(1);

  return (
    <>
      <div className="bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-6 pt-4 lg:pt-6 pb-8">

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 mb-16 mt-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-outline/40 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider text-text-muted uppercase">
                PROVEN IMPACT & REAL-WORLD DELIVERY
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary tracking-tight">
              Transforming Industry Leaders Through Precision Engineering
            </h1>

            <p className="text-lg text-text-muted max-w-3xl">
              Explore how Durozen delivers mission-critical platforms, enterprise SaaS, high-throughput financial architectures, and high-performance digital infrastructure for real-world businesses.
            </p>
          </div>

          {[
            { title: 'Client Projects', data: clientProjects },
            { title: 'Project Work', data: projectWork }
          ].map((section, idx) => (
            <div key={idx} className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8 border-b border-outline pb-4">{section.title}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {section.data.map((study, index) => (
                  <article key={index} className="flex flex-col bg-surface rounded-xl border border-outline shadow-sm overflow-hidden hover:scale-[1.01] hover:shadow-lg transition-all duration-300">

                {/* Visual Header */}
                <div className={`h-56 bg-primary/5 flex items-center justify-center border-b border-outline/10 ${study.imagePadding === false ? '' : 'p-8'}`}>
                  {study.image ? (
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={800}
                      height={600}
                      className={`${study.imageClass || 'object-cover'} w-full h-full object-top`}
                    />
                  ) : (
                    <div className="text-text-muted">No Image</div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {study.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-outline/50">

                    <div className="flex flex-wrap gap-2 mt-4">
                      {study.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full border border-outline bg-background text-text-muted shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    {study.url ? (
                      <a
                        href={study.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-primary hover:text-blue-700 transition-colors group"
                      >
                        Visit Live Project
                        <ArrowUpRight className="ml-2 w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ) : (
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-sm font-semibold text-primary hover:text-blue-700 transition-colors group"
                      >
                        Discuss similar project
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

