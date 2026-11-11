import React from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/companyData';
import { ImageFallback } from './ImageFallback';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreServices }) => {
  return (
    <section className="relative bg-[#10263D] text-white overflow-hidden">
      {/* Subtle industrial blueprint grid background */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Core Message & Conversion Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Location & Division Kicker - Clean unboxed text with separator */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F28C28] uppercase tracking-wider mb-3">
              <span>Yeshwanthpur Industrial Suburb</span>
              <span className="text-slate-500">·</span>
              <span>Bangalore, Karnataka</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Reliable Crane Rental &amp; Heavy Lifting Services in Bangalore
            </h1>

            {/* Supporting Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Sri Shakthi Cranes provides crane hire, hydraulic crane rental, industrial machinery lifting, and heavy-lifting support for construction, commercial, and industrial projects. Discuss your project requirements with our team to identify a suitable lifting solution.
            </p>

            {/* Primary & Secondary Action Block */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#F28C28] hover:bg-[#D9771B] text-white font-semibold text-base transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <span>Get a Crane Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`tel:${COMPANY_CONTACT.primaryPhoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-base transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <Phone className="w-5 h-5 text-[#F28C28]" />
                <span>Call Our Team: {COMPANY_CONTACT.primaryPhone}</span>
              </a>
            </div>

            {/* Trust Highlights Strip (Mandatory 3 concise highlights) */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#F28C28] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-semibold text-white">Crane Rental Solutions</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Flexible single-shift &amp; contract hire</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#F28C28] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-semibold text-white">Industrial &amp; Heavy Lifting</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Precision plant machine rigging</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#F28C28] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-semibold text-white">Professional Service Support</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Skilled operators &amp; site coordination</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Quality Authentic Commercial Crane Photograph */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group h-full min-h-[320px] lg:min-h-[460px]">
              <ImageFallback
                src="/src/assets/images/hero_crane_operation_1793276863600.jpg"
                alt="Sri Shakthi Cranes mobile crane lifting structural steel beam on Bangalore construction site"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10263D]/90 via-[#10263D]/20 to-transparent pointer-events-none" />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#F28C28] tracking-wider uppercase">
                      Active Site Operations
                    </span>
                    <p className="text-sm font-medium text-white/95 mt-0.5">
                      Telescopic Mobile &amp; Hydraulic Cranes in Bangalore
                    </p>
                  </div>
                  <button
                    onClick={onExploreServices}
                    className="flex items-center gap-1 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>View Fleet</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
