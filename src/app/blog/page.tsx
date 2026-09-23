import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { automateProcessesBlog } from '@/data/blogs/automate-repetitive-business-processes';

export const metadata: Metadata = {
  title: 'Blog | Durozen Engineering & Technology Insights',
  description: 'Read the latest insights, practical guides, and technical deep-dives from the Durozen engineering and strategy team.',
  alternates: { canonical: 'https://www.durozen.in/blog' },
  openGraph: {
    title: 'Blog | Durozen Engineering & Technology Insights',
    description: 'Read the latest insights, practical guides, and technical deep-dives from the Durozen engineering and strategy team.',
    url: 'https://www.durozen.in/blog',
    type: 'website',
  },
};

const blogs = [automateProcessesBlog];

export default function BlogIndex() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
            Engineering Insights.
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            Practical guides, technical deep-dives, and strategic perspectives from the Durozen engineering and product teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link 
              key={blog.slug} 
              href={`/blog/${blog.slug}`}
              className="group flex flex-col bg-surface border border-outline rounded-xl overflow-hidden hover:shadow-xl hover:border-secondary/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-muted relative">
                <img 
                  src={blog.heroImage} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-secondary uppercase tracking-wider">
                  {blog.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                  {blog.title}
                </h2>
                <p className="text-text-muted text-sm line-clamp-3 mb-6 flex-grow">
                  {blog.excerpt}
                </p>
                <div className="flex flex-col gap-2 pt-4 border-t border-outline/50 mt-auto">
                  <div className="flex items-center justify-between text-xs text-text-muted font-medium">
                    <div className="flex items-center">
                       <User className="w-3.5 h-3.5 mr-1.5" />
                       {blog.author}
                    </div>
                    <div className="flex items-center">
                       <Clock className="w-3.5 h-3.5 mr-1.5" />
                       {blog.readingTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted font-medium">
                    <div className="flex items-center">
                       <Calendar className="w-3.5 h-3.5 mr-1.5" />
                       {blog.date}
                    </div>
                    <span className="text-secondary group-hover:translate-x-1 transition-transform inline-flex items-center font-bold">
                      Read Article <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
