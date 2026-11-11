import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/companyData';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', view: 'home' },
    { label: 'About Us', view: 'about' },
    { label: 'Services', view: 'services' },
    { label: 'Our Gallery', view: 'gallery' },
    { label: 'Client Reviews', view: 'reviews' },
    { label: 'Contact Us', view: 'contact' },
  ];

  const handleLinkClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Information Bar */}
      <div className="bg-[#10263D] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#F28C28] shrink-0" />
            <span className="font-medium text-white/90">Bangalore, Karnataka</span>
            <span className="hidden sm:inline text-slate-500">·</span>
            <span className="hidden sm:inline text-slate-300">Yeshwanthpur Industrial Suburb</span>
          </div>

          <div className="flex items-center flex-wrap gap-4 sm:gap-6">
            <a
              href={`tel:${COMPANY_CONTACT.primaryPhoneRaw}`}
              className="flex items-center gap-1.5 text-white/95 hover:text-[#F28C28] transition-colors font-medium whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#F28C28] shrink-0" />
              <span>{COMPANY_CONTACT.primaryPhone}</span>
            </a>
            <a
              href={`tel:${COMPANY_CONTACT.alternatePhoneRaw}`}
              className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-slate-400 shrink-0" />
              <span>{COMPANY_CONTACT.alternatePhone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              <Mail className="w-3 h-3 text-[#F28C28] shrink-0" />
              <span>{COMPANY_CONTACT.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single Wordmark Brand */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group shrink-0 cursor-pointer focus:outline-none"
            aria-label="Sri Shakthi Cranes Home"
          >
            <div className="w-10 h-10 rounded-lg bg-[#10263D] flex items-center justify-center text-white font-bold text-lg border border-[#F28C28]/40 group-hover:border-[#F28C28] transition-colors shadow-sm">
              <span className="text-[#F28C28]">S</span>C
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#10263D] whitespace-nowrap leading-tight">
                Sri Shakthi Cranes
              </span>
              <span className="text-[11px] text-[#697786] font-medium tracking-wide">
                Lifting Services · Bangalore
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#202A35]">
            {navLinks.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleLinkClick(item.view)}
                  className={`relative py-1 cursor-pointer transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#10263D] font-semibold'
                      : 'text-[#697786] hover:text-[#10263D]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F28C28]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F28C28] hover:bg-[#D9771B] text-white text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <span>Get a Crane Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#10263D] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleLinkClick(item.view)}
                  className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-slate-100 text-[#10263D] font-semibold'
                      : 'text-[#202A35] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#F28C28] hover:bg-[#D9771B] text-white font-semibold text-sm cursor-pointer shadow-sm"
            >
              <span>Get a Crane Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${COMPANY_CONTACT.primaryPhoneRaw}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-slate-200 text-[#10263D] font-medium bg-slate-50 hover:bg-slate-100"
              >
                <Phone className="w-3.5 h-3.5 text-[#F28C28]" />
                <span>Call Primary</span>
              </a>
              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-emerald-300 text-emerald-800 font-medium bg-emerald-50 hover:bg-emerald-100"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
