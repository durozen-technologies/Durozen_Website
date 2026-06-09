import { CheckCircle2, Construction, Key } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="w-full">
      <SEO
        title="About Us | RAMS Construct Ltd"
        description="RAMS Construct provides trusted construction and infrastructure services with a commitment to quality, safety, and reliability."
        path="/about"
      />
      <section className="bg-black pt-24 pb-16 relative overflow-hidden border-b border-outline">

        {/* Background Animation Marquee */}
        <div className="absolute inset-0 z-0">
          <style>{`
            @keyframes panCollage {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-pan-collage {
              animation: panCollage 60s linear infinite;
            }
          `}</style>
          <div className="flex animate-pan-collage h-full w-[max-content] bg-black">
            {[
              "/images/services_hero_1.png",
              "/images/housing_development_srv.png",
              "/images/services_hero_2.png",
              "/images/pavement_driveway.png",
              "/images/patch_work.png",
              "/images/domestic_building.png",
              "/images/services_hero_1.png",
              "/images/housing_development_srv.png",
              "/images/services_hero_2.png",
              "/images/pavement_driveway.png",
              "/images/patch_work.png",
              "/images/domestic_building.png"
            ].map((src, i) => (
              <img key={i} src={src} className="w-[50vw] md:w-[33.333vw] h-full object-cover shrink-0 opacity-40 grayscale-[20%]" alt="" />
            ))}
          </div>
          <div className="absolute inset-0 bg-black/50 pointer-events-none z-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="w-full flex flex-col items-start text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-md">
              Engineered Excellence in Domestic Building
            </h1>

            <div className="space-y-6 text-lg text-gray-200 leading-relaxed mb-10 drop-shadow-md text-justify w-full">
              <p>RAMS Construct provides trusted construction and infrastructure services with a commitment to quality, safety, and reliability. We specialise in domestic building, housing developments, paving, pathways, and repair works.</p>
              <p>With skilled workmanship, efficient project management, and attention to detail, we deliver durable, high-quality results that stand the test of time.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded shadow-sm mb-10 w-full">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-left">
                {[
                  'Quality Workmanship',
                  'Reliable Delivery',
                  'Health & Safety Focused',
                  'Transparent Communication',
                  'Customer-Centred Service',
                  'Trusted Construction Partner'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-secondary flex-shrink-0" />
                    <span className="text-sm font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="font-serif text-xl md:text-2xl font-bold text-white py-2 drop-shadow-md w-full">
              <span className="text-secondary text-2xl mr-2">"</span>From Blueprint to Completion — Building with Confidence and Lasting Value.<span className="text-secondary text-2xl ml-2">"</span>
            </p>
          </div>
        </div>

        {/* Decorative Grid */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.05] pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </section>

      <section className="bg-surface py-16 border-y border-outline">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold text-primary mb-12 text-center">The Engineered Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4 bg-surface-dim border border-outline p-8 rounded shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-secondary" />
                <h3 className="font-serif text-2xl font-bold text-primary">01. Consultation</h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">Establishing the foundation of understanding. We align our structural expertise with your architectural vision, defining constraints and possibilities.</p>
            </div>

            <div className="md:col-span-8 bg-surface-dim border border-outline p-8 rounded shadow-sm flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="text-secondary" />
                  <h3 className="font-serif text-2xl font-bold text-primary">02. Precision Design</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-6">Translating vision into actionable blueprints. Meticulous planning ensures structural integrity and aesthetic perfection before a single foundation is poured.</p>
                <ul className="space-y-2 text-sm text-text-muted font-medium">
                  <li className="bullet-square">Structural Feasibility</li>
                  <li className="bullet-square">Material Sourcing</li>
                  <li className="bullet-square">Milestone Mapping</li>
                </ul>
              </div>
              <div className="flex-1 min-h-[200px] rounded border border-outline bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBG8IcJhonq-qEYFuihUHUZ8FtNpRl-dgAWoHCkZd6Q75fESm1lncXSKIqqRrpiPblXqTILBq2ggh2f3M86ECpK7V2xDTHL_Akl1T4-Q7oi8B1iijX5XBLFp47TlgE4Z7RFrmXGLV9WECY_ksW2U2clnGMmD05CJqbcMi7W9-XpJ0kdgWjwwbE6YSUKyCH4mktCTfl4ad__c4H7wTN7gvt6ZVEBr18wlxP7E4aA9VUiqJhoWb9fiVattP0nApAYNNSGp0p_eM_flMxO')` }}></div>
            </div>

            <div className="md:col-span-8 bg-primary text-white p-8 rounded shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Construction className="text-secondary" />
                <h3 className="font-serif text-2xl font-bold text-white">03. Precision Build</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-xl">Execution with uncompromising exactitude. Our on-site management ensures every joint, beam, and finish meets our rigorous standards for high-end domestic environments.</p>

              <div className="w-full bg-gray-800 rounded-full h-2 mb-3">
                <div className="bg-secondary h-2 rounded-full w-[65%]"></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>Groundwork</span>
                <span>Superstructure</span>
                <span>Finishing</span>
              </div>
            </div>

            <div className="md:col-span-4 bg-surface-dim border border-outline p-8 rounded shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Key className="text-secondary" />
                <h3 className="font-serif text-2xl font-bold text-primary">04. Handover</h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">The final inspection. We deliver a meticulously clean, structurally sound, and beautifully finished legacy asset, ready for habitation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
