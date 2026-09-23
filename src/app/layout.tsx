import type { Metadata, Viewport } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.durozen.in'),
  title: 'Durozen | Enterprise IT Services',
  description:
    'Durozen builds scalable software, cloud-native platforms, AI-powered solutions, and enterprise applications.',
  keywords: [
    'enterprise software',
    'cloud engineering',
    'AI solutions',
    'custom software',
    'IT services',
    'Durozen',
  ],
  authors: [{ name: 'Durozen' }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  applicationName: 'Durozen',
  appleWebApp: {
    capable: true,
    title: 'Durozen',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.durozen.in/',
    siteName: 'Durozen',
    title: 'Durozen | Enterprise IT Services',
    description:
      'Durozen builds scalable software, cloud-native platforms, AI-powered solutions, and enterprise applications.',
    images: [{ url: '/images/company_building.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Durozen | Enterprise IT Services',
    description:
      'Durozen builds scalable software, cloud-native platforms, AI-powered solutions, and enterprise applications.',
    images: ['/images/company_building.jpg'],
  },
  other: {
    'revisit-after': '7 days',
    language: 'English',
    'mobile-web-app-capable': 'yes',
  },
};

export const viewport: Viewport = {
  themeColor: '#303f9f',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <div className="min-h-screen flex flex-col font-sans bg-background text-text-main">
          <ScrollToTop />
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
