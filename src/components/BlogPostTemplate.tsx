import { BlogPostData } from '@/types/blog';
import { ChevronRight, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';
import JsonLd from './JsonLd';

interface BlogPostTemplateProps {
  data: BlogPostData;
}

export default function BlogPostTemplate({ data }: BlogPostTemplateProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://durozen.in/blog/${data.slug}`,
    },
    headline: data.seo.title,
    description: data.seo.description,
    image: `https://durozen.in${data.heroImage}`,
    author: {
      '@type': 'Organization',
      name: data.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Durozen',
      logo: {
        '@type': 'ImageObject',
        url: 'https://durozen.in/images/logo.png',
      },
    },
    datePublished: data.date,
    dateModified: data.date,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <article className="bg-background min-h-screen pb-20">
        {/* Breadcrumb & Hero */}
        <div className="pt-24 md:pt-32 pb-12 bg-surface border-b border-outline">
          <div className="max-w-4xl mx-auto px-6">
            <nav className="flex items-center text-sm font-medium text-text-muted mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
              <Link href="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-outline shrink-0" />
              <Link href="/blog" className="hover:text-secondary transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-outline shrink-0" />
              <span className="text-primary truncate">{data.title}</span>
            </nav>

            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              {data.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary tracking-tight mb-8 leading-tight">
              {data.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted font-medium">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {data.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {data.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {data.readingTime}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto px-6 -mt-8 relative z-10 mb-16">
          <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-xl border border-outline bg-surface">
            <img 
              src={data.heroImage} 
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-text-muted">
            {data.content.map((section, idx) => {
              if (section.type === 'paragraph') {
                return <p key={idx} className="mb-6 leading-relaxed">{section.text}</p>;
              }
              if (section.type === 'h2') {
                return <h2 key={idx} className="text-2xl font-bold text-primary mt-12 mb-6">{section.text}</h2>;
              }
              if (section.type === 'h3') {
                return <h3 key={idx} className="text-xl font-bold text-primary mt-8 mb-4">{section.text}</h3>;
              }
              if (section.type === 'list' && section.items) {
                return (
                  <ul key={idx} className="space-y-3 mb-8 ml-6 list-disc marker:text-secondary">
                    {section.items.map((item, i) => (
                      <li key={i} className="pl-2">{item}</li>
                    ))}
                  </ul>
                );
              }
              if (section.type === 'quote') {
                return (
                  <blockquote key={idx} className="border-l-4 border-secondary pl-6 py-2 my-8 italic text-primary bg-surface/50 rounded-r-lg">
                    {section.text}
                  </blockquote>
                );
              }
              return null;
            })}
          </div>
          
          <div className="mt-16 pt-8 border-t border-outline flex flex-col sm:flex-row items-center justify-between">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h4 className="font-bold text-primary">Need Help with Automation?</h4>
              <p className="text-sm text-text-muted">Our engineering team can build it.</p>
            </div>
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-secondary text-white rounded-md font-medium hover:bg-secondary/90 transition-colors"
            >
              Consult with an Engineer
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
