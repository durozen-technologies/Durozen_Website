import { ArrowRight } from "lucide-react";
import SEO from '../components/SEO';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/services_hero_1.png",
    "/images/services_hero_2.png",
    "/images/services_hero_3.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      img: "/images/domestic_building.png",
      tag: "RESIDENTIAL",
      title: "Domestic Building Construction",
      desc: "High-end domestic construction and architectural upgrades tailored for premium residential living spaces."
    },
    {
      img: "/images/housing_development_srv.png",
      tag: "DEVELOPMENT",
      title: "Housing Development",
      desc: "Comprehensive housing development projects focusing on sustainable, modern, and high-quality residential communities."
    },
    {
      img: "/images/pavement_driveway.png",
      tag: "DRIVEWAYS",
      title: "Pavement & Path Construction",
      desc: "Professional block paving, path installation, and driveway design providing durable and premium finishes for homes."
    },
    {
      img: "/images/patch_work.png",
      tag: "REPAIR",
      title: "Patch & Repair Works",
      desc: "Expert repair and patching services for brickwork, concrete, and masonry, ensuring seamless integration and structural integrity."
    }
  ];

  return (
    <div className="w-full">
      <SEO
        title="Our Services | RAMS Construct Ltd"
        description="Explore our construction, pavement, repair, and housing development services delivered with precision and expertise."
        path="/services"
      />
      <section className="relative w-full min-h-[70vh] flex items-center justify-center mb-2 overflow-hidden pt-10 pb-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/70 md:bg-black/60 pointer-events-none"></div>
          </div>
        ))}

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-10">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-semibold tracking-widest border border-white/20 rounded-sm mb-6 uppercase">Our Services</span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Building Quality. <br className="hidden md:block" />Delivering Reliability.
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed drop-shadow-md max-w-3xl mx-auto">
            We provide professional construction and infrastructure solutions with a commitment to quality, safety, and lasting value. From residential developments to public realm improvements, every project is delivered with precision, expertise, and attention to detail.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-6 mb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, i) => (
            <div key={i} className="bg-surface border border-outline p-8 rounded-lg group hover:shadow-md transition-all">
              <div className="aspect-[16/9] mb-8 bg-surface-dim rounded overflow-hidden relative border border-outline">
                <img src={srv.img} alt={srv.title} className="w-full h-full object-cover transition-all duration-700" />
                <div className="absolute top-4 left-4 bg-white border border-outline px-2 py-1 text-[10px] font-bold tracking-widest uppercase text-primary rounded-sm shadow-sm">{srv.tag}</div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">{srv.title}</h3>
              <p className="text-text-muted leading-relaxed min-h-[72px]">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-dim py-16 border-t border-outline text-center px-6">
        <h2 className="font-serif text-4xl font-bold text-primary mb-6">Ready to Discuss Your Blueprint?</h2>
        <p className="text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Contact our engineering team to review your architectural plans and begin the estimation process.
        </p>
        <button onClick={() => navigate('/contact')} className="bg-primary text-white border border-primary px-8 py-4 rounded text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
          Get a Quote
        </button>
      </section>
    </div>
  );
}
