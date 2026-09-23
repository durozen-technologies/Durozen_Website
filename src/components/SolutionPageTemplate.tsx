'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  Building,
  Target,
  LayoutTemplate,
  CheckCircle,
  Lightbulb,
  Workflow
} from 'lucide-react';
import { SolutionPageData } from '@/types/solution';
import JsonLd from './JsonLd';

interface SolutionPageTemplateProps {
  data: SolutionPageData;
  baseRoute?: string;
  baseName?: string;
}

export default function SolutionPageTemplate({ 
  data,
  baseRoute = "/solutions",
  baseName = "Solutions"
}: SolutionPageTemplateProps) {
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.seo.title,
    "description": data.seo.description,
    "provider": {
      "@type": "Organization",
      "name": "Durozen Technologies",
      "url": "https://www.durozen.in"
    }
  };

  return (
    <>
      <JsonLd data={schema} />
      <main className="min-h-screen pt-20 pb-16">
        
        {/* 1. Hero Section */}
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm text-blue-200 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href={baseRoute} className="hover:text-white transition-colors">{baseName}</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white font-medium">{data.hero.h1}</span>
            </div>

            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                {data.hero.h1}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 font-light leading-relaxed">
                {data.hero.problem}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={data.hero.ctaPrimary.link}
                  className="bg-secondary hover:bg-white hover:text-primary text-white px-8 py-4 rounded-md font-bold text-lg text-center transition-all shadow-lg hover:-translate-y-1"
                >
                  {data.hero.ctaPrimary.text}
                </Link>
                {data.hero.ctaSecondary && (
                  <Link 
                    href={data.hero.ctaSecondary.link}
                    className="bg-transparent border border-white/30 hover:border-white text-white px-8 py-4 rounded-md font-bold text-lg text-center transition-all hover:bg-white/5"
                  >
                    {data.hero.ctaSecondary.text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 2. Overview */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                {data.overview.title}
              </h2>
              <div className="w-20 h-1 bg-secondary mb-8"></div>
              <div className="prose prose-lg text-text-muted">
                {data.overview.content.map((paragraph, idx) => (
                  <p key={idx} className="mb-6 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* 3. Problems */}
            <div className="lg:w-1/2">
              <div className="bg-surface p-10 rounded-xl shadow-sm border border-outline h-full">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <Target className="w-6 h-6 text-brand-red mr-3" />
                  {data.problems.title}
                </h3>
                <ul className="space-y-4">
                  {data.problems.list.map((prob, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                      </div>
                      <span className="ml-4 text-text-muted">{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Solution & 5. Key Features */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                {data.solution.title}
              </h2>
              <p className="text-xl text-text-muted">
                {data.solution.description}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">{data.keyFeatures.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.keyFeatures.features.map((feature, idx) => (
                  <div key={idx} className="bg-background p-8 rounded-xl shadow-sm border border-outline hover:border-secondary transition-colors group">
                    <CheckCircle className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-bold text-primary mb-3">{feature.title}</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Use Cases & 7. Who Is It For? */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 relative z-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-8">
                {data.useCases.title}
              </h2>
              <div className="flex flex-wrap gap-3">
                {data.useCases.cases.map((useCase, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/20">
                    {useCase}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-8">
                {data.whoIsItFor.title}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.whoIsItFor.audiences.map((audience, idx) => (
                  <li key={idx} className="flex items-center text-blue-100">
                    <Building className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 8. Benefits */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
              {data.benefits.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.benefits.list.map((benefit, idx) => (
                <div key={idx} className="p-6 border-l-4 border-secondary bg-surface rounded-r-lg">
                  <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-text-muted text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. How It Works & 10. Implementation Process */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
            {/* How It Works */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center">
                <Workflow className="w-8 h-8 text-secondary mr-3" />
                {data.howItWorks.title}
              </h2>
              <div className="space-y-8">
                {data.howItWorks.steps.map((step, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                        {idx + 1}
                      </div>
                      {idx !== data.howItWorks.steps.length - 1 && (
                        <div className="w-0.5 h-full bg-outline mx-auto my-2"></div>
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-bold text-primary mb-2">{step.name}</h3>
                      <p className="text-text-muted">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation Process */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center">
                <Lightbulb className="w-8 h-8 text-brand-green mr-3" />
                {data.implementationProcess.title}
              </h2>
              <div className="space-y-6">
                {data.implementationProcess.steps.map((step, idx) => (
                  <div key={idx} className="bg-background p-6 rounded-lg shadow-sm border border-outline">
                    <h3 className="text-lg font-bold text-primary mb-2">Step {idx + 1}: {step.name}</h3>
                    <p className="text-text-muted text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 11. Integrations & 12. Technology */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">
                  {data.integrations.title}
                </h2>
                <ul className="space-y-3">
                  {data.integrations.list.map((integration, idx) => (
                    <li key={idx} className="flex items-center text-text-muted font-medium">
                      <CheckCircle2 className="w-5 h-5 text-brand-green mr-3" />
                      {integration}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">
                  {data.technology.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.technology.stacks.map((stack, idx) => (
                    <div key={idx} className="p-6 bg-surface rounded-lg border border-outline">
                      <h4 className="font-bold text-primary mb-4 border-b border-outline pb-2">{stack.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {stack.technologies.map((tech, i) => (
                          <span key={i} className="text-sm bg-background px-3 py-1 rounded text-text-muted border border-outline">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Case Study */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
              {data.caseStudy.title}
            </h2>
            <div className="space-y-12">
              {data.caseStudy.studies.map((study, idx) => (
                <div key={idx} className="bg-background rounded-2xl overflow-hidden shadow-lg border border-outline">
                  <div className="p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-primary mb-2">{study.projectName}</h3>
                    <div className="w-16 h-1 bg-secondary mb-6"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">The Problem</h4>
                        <p className="text-primary font-medium">{study.businessProblem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">The Solution</h4>
                        <p className="text-primary font-medium">{study.solution}</p>
                      </div>
                    </div>
                    <div className="bg-surface p-6 rounded-lg">
                      <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4">Business Results</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {study.result.map((res, i) => (
                          <li key={i} className="flex items-center text-sm font-bold text-primary">
                            <CheckCircle2 className="w-5 h-5 text-brand-green mr-2 flex-shrink-0" />
                            {res}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 14. FAQs */}
        <section className="py-20 bg-background">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
              {data.faqs.title}
            </h2>
            <div className="space-y-6">
              {data.faqs.questions.map((faq, idx) => (
                <div key={idx} className="bg-surface p-6 rounded-lg border border-outline">
                  <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                  <p className="text-text-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 15. Related Solutions */}
        <section className="py-20 bg-surface border-t border-outline">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">
              {data.relatedSolutions.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {data.relatedSolutions.solutions.map((sol, idx) => (
                <Link 
                  key={idx} 
                  href={`/solutions/${sol.slug}`}
                  className="px-6 py-3 bg-background border border-outline rounded-lg text-primary font-medium hover:border-primary transition-all flex items-center shadow-sm hover:shadow"
                >
                  <LayoutTemplate className="w-4 h-4 mr-2 opacity-50" />
                  {sol.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
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
        
      </main>
    </>
  );
}
