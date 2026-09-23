import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import BlogPostTemplate from '@/components/BlogPostTemplate';
import { automateProcessesBlog } from '@/data/blogs/automate-repetitive-business-processes';

// This acts as our mini-database for now
const getBlogBySlug = (slug: string) => {
  if (slug === 'automate-repetitive-business-processes') {
    return automateProcessesBlog;
  }
  return null;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const p = await params;
  const blog = getBlogBySlug(p.slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | Durozen',
    };
  }

  return {
    title: `${blog.seo.title} | Durozen`,
    description: blog.seo.description,
    alternates: { canonical: `https://durozen.in/blog/${blog.slug}` },
    openGraph: {
      title: blog.seo.title,
      description: blog.seo.description,
      url: `https://durozen.in/blog/${blog.slug}`,
      type: 'article',
      publishedTime: new Date(blog.date).toISOString(),
      authors: [blog.author],
      images: [
        {
          url: `https://durozen.in${blog.heroImage}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.seo.title,
      description: blog.seo.description,
      images: [`https://durozen.in${blog.heroImage}`],
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const p = await params;
  const blog = getBlogBySlug(p.slug);

  if (!blog) {
    notFound();
  }

  return <BlogPostTemplate data={blog} />;
}
