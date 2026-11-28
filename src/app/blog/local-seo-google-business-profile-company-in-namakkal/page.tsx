import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import LocalSeoGoogleBusinessProfileCompanyNamakkalBlog from "@/components/blog/LocalSeoGoogleBusinessProfileCompanyNamakkalBlog";

export const metadata: Metadata = {
  title: "Local SEO & Google Business Profile Company in Namakkal | Rank #1 on Google Maps - Durozen",
  description:
    "Partner with a top Local SEO and Google Business Profile optimization company in Namakkal. Durozen helps local businesses dominate Google Maps 3-Pack and 'near me' searches.",
  alternates: {
    canonical: "/blog/local-seo-google-business-profile-company-in-namakkal",
  },
  openGraph: {
    title: "Local SEO & Google Business Profile Company in Namakkal | Rank #1 on Google Maps - Durozen",
    description:
      "Partner with a top Local SEO and Google Business Profile optimization company in Namakkal. Durozen helps local businesses dominate Google Maps 3-Pack and 'near me' searches.",
    url: "https://durozen.in/blog/local-seo-google-business-profile-company-in-namakkal",
    type: "article",
    siteName: "Durozen Technologies",
  },
};

export default function LocalSeoGoogleBusinessProfileCompanyNamakkalPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 flex flex-col">
      <Navbar animateLogo={false} />
      <main className="flex-1 pt-24 sm:pt-28">
        <LocalSeoGoogleBusinessProfileCompanyNamakkalBlog />
      </main>
      <Footer />
    </div>
  );
}
