import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Zap, Target, Briefcase, Server, Code, Blocks, LayoutTemplate, MessageSquare } from 'lucide-react';
import { ServicePageData } from '@/types/service';
import JsonLd from '@/components/JsonLd';

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.seo.title,
    provider: {
      '@type': 'Organization',
      name: 'Durozen',
      url: 'https://durozen.in/'
    },
    description: data.seo.description,
    url: `https://durozen.in/services/\${data.slug}`
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="bg-background min-h-screen text-text-main">
        
        {/* Breadcrumb */}
        <div className="pt-24 pb-4 md:pt-32 max-w-7xl mx-auto px-6">
          <nav className="flex text-sm text-text-muted">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-primary font-semibold">{data.hero.h1}</span>
          </nav>
        </div>

        {/* 1. Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/40 z-10" />
            <Image
              src="/images/company_building_2.jpg"
              alt={`\${data.hero.h1} Background`}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mt-4 mb-6 max-w-4xl leading-tight">
              {data.hero.h1}
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
              {data.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={data.hero.ctaPrimary.link}
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-md font-medium transition-all hover:-translate-y-0.5 inline-flex items-center"
              >
                {data.hero.ctaPrimary.text}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              {data.hero.ctaSecondary && (
                <Link
                  href={data.hero.ctaSecondary.link}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-md font-medium transition-all inline-flex items-center"
                >
                  {data.hero.ctaSecondary.text}
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* 2. What Is This Service */}
        <section className="py-20 bg-surface">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
              {data.whatIsIt.title}
            </h2>
            <div className="space-y-6 text-lg text-text-muted leading-relaxed">
              {data.whatIsIt.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Services Included */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                {data.servicesIncluded.title}
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.servicesIncluded.services.map((svc, idx) => (
                <div key={idx} className="bg-surface p-8 rounded-xl border border-outline hover:border-primary/20 transition-all shadow-sm">
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6">
                    <Blocks className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{svc.title}</h3>
                  <p className="text-text-muted">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 & 5. Problems Solved & Who We Serve (Split layout) */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8 flex items-center">
                  <Target className="w-8 h-8 mr-4 text-brand-yellow" />
                  {data.problemsSolved.title}
                </h2>
                <ul className="space-y-4">
                  {data.problemsSolved.problems.map((problem, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-brand-yellow shrink-0 mr-3 mt-0.5" />
                      <span className="text-lg text-blue-100">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8 flex items-center">
                  <Briefcase className="w-8 h-8 mr-4 text-secondary" />
                  {data.whoWeServe.title}
                </h2>
                <ul className="space-y-4">
                  {data.whoWeServe.audiences.map((audience, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mr-3 mt-0.5" />
                      <span className="text-lg text-blue-100">{audience}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Use Cases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
              {data.useCases.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {data.useCases.cases.map((useCase, idx) => (
                <span key={idx} className="px-6 py-3 bg-surface border border-outline rounded-full text-text-muted font-medium hover:text-primary hover:border-primary/30 transition-colors">
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Development Process */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                {data.developmentProcess.title}
              </h2>
              <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.developmentProcess.steps.map((step, idx) => (
                <div key={idx} className="relative p-6 border border-outline rounded-xl bg-background hover:shadow-md transition-shadow">
                  <span className="text-5xl font-serif font-black text-outline/40 absolute top-4 right-6">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-3 mt-8 relative z-10">{step.name}</h3>
                  <p className="text-text-muted relative z-10">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Technology Stack */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center flex items-center justify-center">
              <Server className="w-8 h-8 mr-4 text-secondary" />
              {data.technologyStack.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.technologyStack.stacks.map((stack, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-primary text-lg mb-4 border-b border-outline pb-2">{stack.category}</h4>
                  <ul className="space-y-2">
                    {stack.technologies.map((tech, tIdx) => (
                      <li key={tIdx} className="text-text-muted flex items-center">
                        <Code className="w-4 h-4 mr-2 text-slate-400" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Case Studies */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                {data.caseStudies.title}
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {data.caseStudies.studies.map((study, idx) => (
                <div key={idx} className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                  <h3 className="text-2xl font-bold mb-2">{study.projectName}</h3>
                  <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full uppercase tracking-wider mb-6">
                    {study.industry}
                  </span>
                  
                  <div className="space-y-4 mb-8 text-slate-300">
                    <div><strong className="text-white block mb-1">The Problem:</strong> {study.businessProblem}</div>
                    <div><strong className="text-white block mb-1">The Solution:</strong> {study.solution}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                      <strong className="text-white block mb-2 text-sm">Technologies</strong>
                      <ul className="text-sm text-slate-400 space-y-1">
                        {study.technologies.map((tech, tIdx) => <li key={tIdx}>&bull; {tech}</li>)}
                      </ul>
                    </div>
                    <div>
                      <strong className="text-white block mb-2 text-sm">Results</strong>
                      <ul className="text-sm text-brand-green space-y-1">
                        {study.result.map((res, rIdx) => <li key={rIdx}>&bull; {res}</li>)}
                      </ul>
                    </div>
                  </div>
                  
                  {study.link && (
                    <Link href={study.link} className="text-secondary hover:text-white font-medium inline-flex items-center transition-colors">
                      Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
                  {data.whyChooseUs.title}
                </h2>
                <ul className="space-y-6">
                  {data.whyChooseUs.reasons.map((reason, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-lg text-text-muted mt-1.5">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface p-12 rounded-2xl border border-outline shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">Trusted by Enterprises</h3>
                <p className="text-text-muted mb-8 relative z-10">
                  Our engineering teams have a proven track record of delivering complex, mission-critical systems on time and within budget.
                </p>
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div>
                    <div className="text-4xl font-black text-secondary mb-1">50+</div>
                    <div className="text-sm text-text-muted font-medium">Enterprise Clients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-brand-green mb-1">100%</div>
                    <div className="text-sm text-text-muted font-medium">Delivery Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Pricing / Engagement Model */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
              {data.engagementModels.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.engagementModels.models.map((model, idx) => (
                <div key={idx} className="bg-background p-8 rounded-xl border border-outline hover:border-secondary transition-colors">
                  <h3 className="text-xl font-bold text-primary mb-4">{model.title}</h3>
                  <p className="text-text-muted text-sm">{model.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. FAQ */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 mr-4 text-primary" />
                {data.faqs.title}
              </h2>
            </div>
            <div className="space-y-6">
              {data.faqs.questions.map((faq, idx) => (
                <div key={idx} className="bg-surface p-6 rounded-xl border border-outline">
                  <h3 className="text-lg font-bold text-primary mb-2">{faq.question}</h3>
                  <p className="text-text-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 14. Related Services */}
        <section className="py-20 bg-surface border-t border-outline">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">
              {data.relatedServices.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {data.relatedServices.services.map((svc, idx) => (
                <Link 
                  key={idx} 
                  href={`/services/${svc.slug}`}
                  className="px-6 py-3 bg-background border border-outline rounded-lg text-primary font-medium hover:border-primary transition-all flex items-center shadow-sm hover:shadow"
                >
                  <LayoutTemplate className="w-4 h-4 mr-2 opacity-50" />
                  {svc.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 13. Final CTA */}
        <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/company_building.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {data.finalCta.title}
            </h2>
            <p className="text-xl text-blue-200 mb-10">
              {data.finalCta.subtitle}
            </p>
            <Link
              href={data.finalCta.ctaLink}
              className="inline-flex items-center justify-center bg-secondary hover:bg-white hover:text-primary text-white px-10 py-5 rounded-md font-bold text-lg transition-all shadow-xl hover:-translate-y-1"
            >
              {data.finalCta.ctaText}
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </div>
        </section>
        
      </div>
    </>
  );
}
