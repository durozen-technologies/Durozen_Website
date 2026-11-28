import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PerformanceMarketingLeadGenerationCompanyNamakkalBlog from "@/components/blog/PerformanceMarketingLeadGenerationCompanyNamakkalBlog";

export const metadata: Metadata = {
  title: "Performance Marketing & Lead Generation Company in Namakkal | Google & Meta Ads - Durozen",
  description:
    "Looking for a performance marketing and lead generation company in Namakkal? Durozen engineers high-ROAS Google Ads, Meta CAPI funnels, and automated CRM lead pipelines.",
  alternates: {
    canonical: "/blog/performance-marketing-lead-generation-company-in-namakkal",
  },
  openGraph: {
    title: "Performance Marketing & Lead Generation Company in Namakkal | Google & Meta Ads - Durozen",
    description:
      "Looking for a performance marketing and lead generation company in Namakkal? Durozen engineers high-ROAS Google Ads, Meta CAPI funnels, and automated CRM lead pipelines.",
    url: "https://durozen.in/blog/performance-marketing-lead-generation-company-in-namakkal",
    type: "article",
    siteName: "Durozen Technologies",
  },
};

export default function PerformanceMarketingLeadGenerationCompanyNamakkalPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 flex flex-col">
      <Navbar animateLogo={false} />
      <main className="flex-1 pt-24 sm:pt-28">
        <PerformanceMarketingLeadGenerationCompanyNamakkalBlog />
      </main>
      <Footer />
    </div>
  );
}
