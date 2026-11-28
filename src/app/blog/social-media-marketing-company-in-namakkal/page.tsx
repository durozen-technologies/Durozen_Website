import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SocialMediaMarketingCompanyNamakkalBlog from "@/components/blog/SocialMediaMarketingCompanyNamakkalBlog";

export const metadata: Metadata = {
  title: "Social Media Marketing Company in Namakkal | Instagram, Meta Ads & YouTube Growth - Durozen",
  description:
    "Partner with a top social media marketing company in Namakkal. Durozen builds high-converting Instagram Reels, Meta Ads funnels, LinkedIn B2B branding, and YouTube campaigns.",
  alternates: {
    canonical: "/blog/social-media-marketing-company-in-namakkal",
  },
  openGraph: {
    title: "Social Media Marketing Company in Namakkal | Instagram, Meta Ads & YouTube Growth - Durozen",
    description:
      "Partner with a top social media marketing company in Namakkal. Durozen builds high-converting Instagram Reels, Meta Ads funnels, LinkedIn B2B branding, and YouTube campaigns.",
    url: "https://durozen.in/blog/social-media-marketing-company-in-namakkal",
    type: "article",
    siteName: "Durozen Technologies",
  },
};

export default function SocialMediaMarketingCompanyNamakkalPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 flex flex-col">
      <Navbar animateLogo={false} />
      <main className="flex-1 pt-24 sm:pt-28">
        <SocialMediaMarketingCompanyNamakkalBlog />
      </main>
      <Footer />
    </div>
  );
}
