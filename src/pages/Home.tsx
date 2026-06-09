import { ArrowRight, Building2, HardHat, Home as HomeIcon } from 'lucide-react';
import SEO from '../components/SEO';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <SEO
        title="RAMS Construct Ltd | Built on Quality &amp; Reliability"
        description="From domestic building construction and housing projects to paving, pavement works, and patch repairs, we deliver quality workmanship across the UK."
        keywords="domestic building, concrete repairs, pavement works, Rams Construct Ltd, UK home developments, Coventry construction, structural integrity"
        path="/"
      />
      {/* Hero */}
      <section className="relative w-full min-h-[85vh] flex items-center mb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <style>{`
            @keyframes slideHero {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-slide-hero {
              animation: slideHero 40s linear infinite;
            }
          `}</style>
          <div className="flex animate-slide-hero h-full w-[max-content]">
            <img src="/images/hero_bg_1.png" alt="Hero 1" className="w-[100vw] h-full object-cover shrink-0" />
            <img src="/images/hero_bg_2.png" alt="Hero 2" className="w-[100vw] h-full object-cover shrink-0" />
            <img src="/images/hero_bg_3.png" alt="Hero 3" className="w-[100vw] h-full object-cover shrink-0" />
            <img src="/images/hero_bg_1.png" alt="Hero 1" className="w-[100vw] h-full object-cover shrink-0" />
            <img src="/images/hero_bg_2.png" alt="Hero 2" className="w-[100vw] h-full object-cover shrink-0" />
            <img src="/images/hero_bg_3.png" alt="Hero 3" className="w-[100vw] h-full object-cover shrink-0" />
          </div>
          <div className="absolute inset-0 bg-primary/80 md:bg-black/60 pointer-events-none z-10"></div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-16">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-md">
              Building Strong Foundations <br /><span className="text-gray-300">for Better Living</span>
            </h1>
            <p className="text-lg text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              From domestic building construction and housing projects to paving, pavement works, and patch repairs, we deliver quality workmanship with reliability and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate('/contact')} className="bg-secondary text-white border border-secondary px-8 py-4 rounded text-sm font-medium hover:bg-orange-700 transition-colors shadow-lg">
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Bento */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="mb-16">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4">Our Expertise</h2>
          <div className="w-16 h-1 bg-secondary mb-6"></div>
          <p className="text-lg text-text-muted max-w-3xl leading-relaxed">
            Delivering high-quality construction and infrastructure solutions with precision, reliability, and attention to detail. From residential developments to public pathways, we bring experience, craftsmanship, and professionalism to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface border border-outline p-10 rounded-lg shadow-sm flex flex-col justify-between group hover:border-primary/20 transition-colors">
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Domestic Building Construction</h3>
              <p className="text-text-muted mb-8 leading-relaxed">
                Creating homes built to last. We manage every stage of the construction process, delivering quality workmanship, structural integrity, and exceptional attention to detail from foundation to completion.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-primary/80 mb-6">
                <li className="flex items-center"><ArrowRight size={16} className="text-secondary mr-2" /> New Build Homes</li>
                <li className="flex items-center"><ArrowRight size={16} className="text-secondary mr-2" /> Residential Extensions</li>
                <li className="flex items-center"><ArrowRight size={16} className="text-secondary mr-2" /> Structural Construction</li>
              </ul>
            </div>
          </div>

          <div className="bg-surface border border-outline p-10 rounded-lg shadow-sm flex flex-col justify-between group hover:border-primary/20 transition-colors">
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Housing Development</h3>
              <p className="text-text-muted mb-8 leading-relaxed">
                Comprehensive housing solutions designed to meet the needs of modern communities. From planning through delivery, we ensure every development is completed to the highest standards.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-primary/80 mb-6">
                <li className="flex items-center"><ArrowRight size={16} className="text-secondary mr-2" /> Residential Developments</li>
                <li className="flex items-center"><ArrowRight size={16} className="text-secondary mr-2" /> Affordable Housing Projects</li>
                <li className="flex items-center"><ArrowRight size={16} className="text-secondary mr-2" /> Site Infrastructure</li>
              </ul>
            </div>
          </div>

          <div className="bg-surface border border-outline p-10 rounded-lg shadow-sm flex flex-col justify-between group hover:border-primary/20 transition-colors">
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Pavement & Path Construction</h3>
              <p className="text-text-muted mb-8 leading-relaxed">
                Providing durable and professionally constructed pathways, pavements, and pedestrian access routes that enhance safety, accessibility, and long-term performance.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-primary/80 mb-6">
                <li className="flex items-center"><ArrowRight size={16} className="text-secondary mr-2" /> Footpaths & Walkways</li>
                <li className="flex items-center"><ArrowRight size={16} className="text-secondary mr-2" /> Pavement Installation</li>
                <li className="flex items-center"><ArrowRight size={16} className="text-secondary mr-2" /> Public Realm Improvements</li>
              </ul>
            </div>
          </div>

          <div className="bg-surface border border-outline p-10 rounded-lg shadow-sm flex flex-col justify-between group hover:border-primary/20 transition-colors">
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Patch & Repair Works</h3>
              <p className="text-text-muted mb-8 leading-relaxed">
                Efficient maintenance and repair services that restore surfaces, structures, and infrastructure while minimising disruption and extending asset lifespan.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-primary/80 mb-6">
                <li className="flex items-center"><ArrowRight size={16} className="text-secondary mr-2" /> Surface Repairs</li>
                <li className="flex items-center"><ArrowRight size={16} className="text-secondary mr-2" /> Maintenance Works</li>
                <li className="flex items-center"><ArrowRight size={16} className="text-secondary mr-2" /> Infrastructure Restoration</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2 bg-primary text-white p-10 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between mt-4">
            <div className="mb-6 md:mb-0 max-w-2xl">
              <h3 className="font-serif text-3xl font-bold mb-3">Built on Quality & Reliability</h3>
              <p className="text-gray-300 leading-relaxed">Every project is delivered with a commitment to safety, quality craftsmanship, and client satisfaction. Our experienced team works closely with clients, consultants, and stakeholders to ensure successful outcomes from start to finish.</p>
            </div>
            <button onClick={() => navigate('/contact')} className="bg-secondary text-white px-8 py-3 rounded text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4">The Build Process</h2>
          <p className="text-lg text-text-muted">Transparent, structured, and engineered for predictability.</p>
        </div>

        <div className="relative border-l-2 border-outline ml-4 md:ml-1/2 md:border-none">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-outline -translate-x-1/2"></div>
          <div className="hidden md:block absolute left-1/2 top-0 h-1/2 w-0.5 bg-secondary -translate-x-1/2"></div>
          <div className="md:hidden absolute left-[-1px] top-0 h-1/2 w-0.5 bg-secondary"></div>

          {[
            { phase: 'Pre-Construction', desc: 'Consultation, site surveying, and architectural detailing.', active: true },
            { phase: 'Structural Works', desc: 'Foundations, steelwork, and primary envelope construction.', active: true },
            { phase: 'Fit-Out & Handover', desc: 'M&E installation, bespoke joinery, and final finishes.', active: false },
          ].map((step, idx) => (
            <div key={idx} className={`relative flex items-center mb-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="absolute left-[-21px] md:left-1/2 w-10 h-10 rounded-full border-4 border-background flex items-center justify-center md:-translate-x-1/2 bg-background">
                <div className={`w-3.5 h-3.5 rounded-full ${step.active ? 'bg-secondary' : 'bg-outline'}`}></div>
              </div>
              <div className={`pl-10 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'} ${step.active ? '' : 'opacity-50'}`}>
                <h4 className="font-serif text-2xl font-bold text-primary mb-2">{step.phase}</h4>
                <p className="text-text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
