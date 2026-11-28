import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BestDigitalMarketingCompanyNamakkalBlog from "@/components/blog/BestDigitalMarketingCompanyNamakkalBlog";

export const metadata: Metadata = {
  title: "Best Digital Marketing Company in Namakkal | Performance Marketing, SEO & AI Growth - Durozen",
  description:
    "Looking for the best digital marketing company in Namakkal? Durozen Technologies combines technical SEO, Google & Meta Ads, conversion landing pages, and WhatsApp lead automation.",
  alternates: {
    canonical: "/blog/best-digital-marketing-company-in-namakkal",
  },
  openGraph: {
    title: "Best Digital Marketing Company in Namakkal | Performance Marketing, SEO & AI Growth - Durozen",
    description:
      "Looking for the best digital marketing company in Namakkal? Durozen Technologies combines technical SEO, Google & Meta Ads, conversion landing pages, and WhatsApp lead automation.",
    url: "https://durozen.in/blog/best-digital-marketing-company-in-namakkal",
    type: "article",
    siteName: "Durozen Technologies",
  },
};

export default function BestDigitalMarketingCompanyNamakkalPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 flex flex-col">
      <Navbar animateLogo={false} />
      <main className="flex-1 pt-24 sm:pt-28">
        <BestDigitalMarketingCompanyNamakkalBlog />
      </main>
      <Footer />
    </div>
  );
}
