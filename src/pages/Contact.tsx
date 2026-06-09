import { Building2, Clock, Mail, MapPin, Phone, SendHorizontal } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import SEO from '../components/SEO';

// Note: Make sure VITE_GOOGLE_SCRIPT_URL is defined in your .env file
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL?.trim();

export default function Contact() {
  const location = useLocation();
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', inquiryType: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (location.pathname === '/quote' && formRef.current) {
      // Small delay to ensure rendering is complete before scrolling
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-12 pb-24">
      <SEO
        title="Contact Us | RAMS Construct Ltd"
        description="Connect with our team to discuss your next architectural or domestic building project. Get a free quote today."
        path="/contact"
      />
      <div className="mb-10">
        <h1 className="font-serif text-5xl font-bold text-primary mb-6">Contact Us</h1>
        <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
          Connect with our team to discuss your next architectural project. We bring engineered excellence to every engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="bg-surface border border-outline rounded-lg p-10 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <Building2 className="text-secondary" /> Office
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-text-muted shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Address</h3>
                  <p className="text-text-main leading-relaxed">Flat 1, 19 Friars Road<br />Coventry, CV1 2LJ<br />United Kingdom</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-text-muted shrink-0 mt-1" size={20} />
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Phone</h3>
                  <a href="tel:+447861641303" className="block text-text-main hover:text-secondary cursor-pointer transition-colors break-all">+44 7861641303</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-text-muted shrink-0 mt-1" size={20} />
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Email</h3>
                  <a href="mailto:ramsconstructltd19@gmail.com" className="block text-text-main hover:text-secondary cursor-pointer transition-colors break-all">ramsconstructltd19@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-dim border border-outline rounded-lg p-11 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <Clock className="text-secondary" /> Business Hours
            </h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-outline pb-4">
                <span className="text-text-main font-medium">Monday - Friday</span>
                <span className="text-text-muted text-sm pr-2">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-outline pb-4">
                <span className="text-text-main font-medium">Saturday</span>
                <span className="text-text-muted text-sm pl-2">9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between items-center pt-2">
                <span className="text-gray-500 font-medium tracking-wide">Sunday</span>
                <span className="text-gray-500 text-sm pl-2 font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7" ref={formRef}>
          <div className="bg-surface border border-outline rounded-lg p-10 md:p-14 shadow-sm flex flex-col">
            <h2 className="font-serif text-3xl font-bold text-primary mb-10 pb-6 border-b border-outline">Send us a message</h2>

            {submitStatus === 'success' ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                <p className="text-text-muted mb-8">Thank you for reaching out. We will get back to you shortly.</p>
                <button onClick={() => setSubmitStatus('idle')} className="text-secondary font-medium hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 flex-grow flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">First Name</label>
                    <input required name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="Enter your first name" className="border-0 border-b border-outline bg-transparent py-2 px-0 focus:ring-0 focus:border-primary transition-colors text-text-main placeholder-gray-400 font-sans" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Last Name</label>
                    <input required name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Enter your last name" className="border-0 border-b border-outline bg-transparent py-2 px-0 focus:ring-0 focus:border-primary transition-colors text-text-main placeholder-gray-400 font-sans" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="name@company.com" className="border-0 border-b border-outline bg-transparent py-2 px-0 focus:ring-0 focus:border-primary transition-colors text-text-main placeholder-gray-400 font-sans" />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Nature of Inquiry</label>
                  <div className="relative">
                    <select required name="inquiryType" value={formData.inquiryType} onChange={handleChange} className="border-0 border-b border-outline bg-transparent py-2 px-0 focus:ring-0 focus:border-primary transition-colors text-text-main w-full font-sans appearance-none cursor-pointer">
                      <option value="" disabled>Select an option...</option>
                      <option value="res">Residential Construction</option>
                      <option value="com">Commercial Project</option>
                      <option value="arc">Architectural Consultation</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Message</label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Provide details about your project requirements..." className="border-0 border-b border-outline bg-transparent py-2 px-0 focus:ring-0 focus:border-primary transition-colors text-text-main placeholder-gray-400 resize-none font-sans"></textarea>
                </div>

                {submitStatus === 'error' && (
                  <p className="text-red-500 text-sm font-medium">There was an error sending your message. Please try again.</p>
                )}

                <div className="pt-4">
                  <button disabled={isSubmitting} type="submit" className="bg-primary text-white px-8 py-4 rounded font-medium text-sm flex items-center gap-3 hover:bg-gray-800 transition-colors shadow-sm w-full md:w-auto justify-center disabled:opacity-70">
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'} <SendHorizontal size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="h-[450px] rounded-lg border border-outline overflow-hidden relative shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d658.778672926852!2d-1.5106200379682984!3d52.40390480873523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774bb06bf64a7d%3A0x1b673dd282ea1957!2s19%20Friars&#39;%20Rd%2C%20Coventry%20CV1%202LJ%2C%20UK!5e1!3m2!1sen!2sin!4v1780916084747!5m2!1sen!2sin"
            className="w-full h-full border-0 hover:grayscale-0 transition-all duration-700"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
