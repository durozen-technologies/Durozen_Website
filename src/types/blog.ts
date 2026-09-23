export interface BlogContentSection {
  type: 'paragraph' | 'h2' | 'h3' | 'list' | 'quote';
  text?: string;
  items?: string[]; // for lists
}

export interface BlogPostData {
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  title: string;
  date: string;
  author: string;
  readingTime: string;
  heroImage: string;
  category: string;
  excerpt: string;
  content: BlogContentSection[];
}
