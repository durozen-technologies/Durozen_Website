import { Helmet } from 'react-helmet-async';
import { Users, Briefcase, Zap, Terminal, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Careers() {
  const benefits = [
    {
      title: "Challenging Work",
      description: "Build serious enterprise products that solve complex operational problems at scale.",
      icon: <Terminal className="w-6 h-6 text-blue-500 mb-4" />
    },
    {
      title: "Strong Culture",
      description: "Work with a team of ambitious, driven engineers who value execution over politics.",
      icon: <Users className="w-6 h-6 text-blue-500 mb-4" />
    },
    {
      title: "Fast Growth",
      description: "Take on massive responsibilities early. We reward velocity and high-quality output.",
      icon: <Zap className="w-6 h-6 text-blue-500 mb-4" />
    }
  ];

  const positions: any[] = [];

  return (
    <>
      <Helmet>
        <title>Careers | Durozen</title>
        <meta name="description" content="Join Durozen and help us build serious digital products for ambitious teams." />
      </Helmet>
      
      <div className="bg-background min-h-screen">
        {/* Hero */}
        <section className="py-8 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Careers at Durozen</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              We're always looking for sharp, dedicated people to join our engineering and product teams.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-24">
          
          {/* Why Join Us */}
          <div className="mb-24 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-12">Why join us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-surface p-8 rounded-xl border border-outline shadow-sm text-left">
                  {benefit.icon}
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-text-muted leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Open Positions</h2>
            
            <div className="bg-surface p-8 rounded-lg border border-outline text-center mb-16 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-2">No Active Openings</h3>
              <p className="text-text-muted">
                We currently don't have any specific roles open. However, we are always looking for exceptional talent.
              </p>
            </div>

            {/* General Application */}
            <div className="bg-primary/5 p-8 rounded-xl border border-outline text-center">
              <Mail className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Don't see a fit?</h3>
              <p className="text-text-muted mb-6">
                We are always open to meeting talented engineers, designers, and operators. Send us your resume and let us know how you can contribute.
              </p>
              <Link to="/contact" className="inline-block bg-secondary text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
