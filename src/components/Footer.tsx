import React from 'react';
import { COMPANY_CONTACT, SERVICES } from '../data/companyData';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
  onSelectService: (serviceId: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectService,
  onOpenQuote,
}) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId: string) => {
    onSelectService(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#10263D] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Company Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-lg border border-[#F28C28]/40">
                <span className="text-[#F28C28]">S</span>C
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Sri Shakthi Cranes
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Professional crane hire, hydraulic crane rental, industrial machinery lifting, and heavy-lifting support for construction, commercial, and industrial facilities across Bangalore, Karnataka.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <span className="text-[#F28C28] font-semibold">Primary Base: </span>
              Yeshwanthpur Industrial Suburb, Bangalore 560022
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#F28C28] hover:bg-[#D9771B] text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer"
              >
                <span>Request a Crane Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-[#F28C28] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-[#F28C28] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-[#F28C28] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('gallery')}
                  className="hover:text-[#F28C28] transition-colors cursor-pointer"
                >
                  Our Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('reviews')}
                  className="hover:text-[#F28C28] transition-colors cursor-pointer"
                >
                  Client Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-[#F28C28] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Lifting Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleServiceClick(s.id)}
                    className="hover:text-[#F28C28] transition-colors text-left cursor-pointer line-clamp-1"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Contact Information
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {COMPANY_CONTACT.address}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div>
                    <a
                      href={`tel:${COMPANY_CONTACT.primaryPhoneRaw}`}
                      className="font-bold text-white hover:text-[#F28C28] transition-colors"
                    >
                      {COMPANY_CONTACT.primaryPhone}
                    </a>
                  </div>
                  <div>
                    <a
                      href={`tel:${COMPANY_CONTACT.alternatePhoneRaw}`}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {COMPANY_CONTACT.alternatePhone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="text-xs hover:text-[#F28C28] transition-colors"
                >
                  {COMPANY_CONTACT.email}
                </a>
              </div>

              <div className="pt-2 text-xs text-slate-400">
                Mon - Sat: 8:00 AM - 8:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} Sri Shakthi Cranes. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Bangalore, Karnataka</span>
            <span>·</span>
            <span>Heavy Lifting Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
