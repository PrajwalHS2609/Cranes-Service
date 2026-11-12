import React from 'react';
import { COMPANY_CONTACT, CRANE_IMAGES } from '../data/companyData';
import { ImageFallback } from './ImageFallback';
import { ArrowRight, Phone, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onExploreServices: () => void;
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onExploreServices,
  onContactClick,
}) => {
  const coreCompetencies = [
    'Telescopic mobile crane hire for construction and infrastructure',
    'Hydraulic crane rental for precision heavy industrial machinery placement',
    'Factory machinery shifting and workshop plant relocation',
    'Commercial rooftop chiller, transformer, and generator hoisting',
    'Experienced crane operators, certified riggers, and lift planners'
  ];

  return (
    <section id="about-section" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Industrial Narrative */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F28C28] uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bangalore Industrial Hub · Yeshwanthpur</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10263D] leading-tight text-balance">
              Your Crane Rental Partner for Construction and Industrial Projects
            </h2>

            <div className="mt-5 space-y-4 text-base text-[#697786] leading-relaxed">
              <p>
                Sri Shakthi Cranes provides crane hire, crane rental, hydraulic crane rental, and heavy-lifting services in Bangalore. The company supports a range of construction and industrial requirements, including machinery lifting, equipment shifting, material handling, and other lifting operations.
              </p>
              <p>
                With a focus on dependable service, suitable equipment selection, and customer coordination, Sri Shakthi Cranes aims to help businesses and contractors manage their lifting requirements efficiently.
              </p>
              <p className="text-sm font-medium text-[#202A35]">
                Customers can contact the team to discuss their project scope, load details, site conditions, and rental requirements.
              </p>
            </div>

            {/* Core Capability Checklist */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <h3 className="text-xs font-bold text-[#10263D] uppercase tracking-wider mb-3">
                Core Service Focus:
              </h3>
              <div className="space-y-2.5">
                {coreCompetencies.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#202A35]">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#10263D] hover:bg-[#1b344f] text-white text-xs font-semibold tracking-wide transition-all shadow cursor-pointer whitespace-nowrap"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#F28C28]" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 hover:border-[#10263D] text-[#10263D] text-xs font-semibold tracking-wide transition-all bg-slate-50 hover:bg-white cursor-pointer whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#F28C28]" />
                <span>Contact Our Team</span>
              </button>
            </div>
          </div>

          {/* Right Column: Fleet Image & Verified Statistics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 aspect-[16/11] relative group">
              <ImageFallback
                src={CRANE_IMAGES.craneFleetYard}
                alt="Sri Shakthi Cranes fleet yard in Bangalore"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10263D]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-semibold text-[#F28C28] uppercase tracking-wider">
                  Operational Equipment Yard
                </span>
                <p className="text-sm font-medium text-white/95 mt-0.5">
                  Conveniently based in Yeshwanthpur Industrial Suburb for rapid Bangalore-wide dispatch.
                </p>
              </div>
            </div>

            {/* Verified Operational Statistics Grid (Clean Tabular-Nums, No Floating Pill Clutter) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F5F7FA] rounded-xl p-4 border border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#10263D] font-mono tabular-nums">
                  15+
                </div>
                <div className="text-xs font-semibold text-[#202A35] mt-1">
                  Years of Experience
                </div>
                <div className="text-[11px] text-[#697786] mt-0.5">
                  Serving Bangalore industries
                </div>
              </div>

              <div className="bg-[#F5F7FA] rounded-xl p-4 border border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#10263D] font-mono tabular-nums">
                  9
                </div>
                <div className="text-xs font-semibold text-[#202A35] mt-1">
                  Services Offered
                </div>
                <div className="text-[11px] text-[#697786] mt-0.5">
                  Mobile, hydraulic &amp; machinery
                </div>
              </div>

              <div className="bg-[#F5F7FA] rounded-xl p-4 border border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#10263D] font-mono tabular-nums">
                  2,500+
                </div>
                <div className="text-xs font-semibold text-[#202A35] mt-1">
                  Projects Completed
                </div>
                <div className="text-[11px] text-[#697786] mt-0.5">
                  Construction &amp; manufacturing
                </div>
              </div>

              <div className="bg-[#F5F7FA] rounded-xl p-4 border border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#10263D] font-mono tabular-nums">
                  100%
                </div>
                <div className="text-xs font-semibold text-[#202A35] mt-1">
                  Trained Operators
                </div>
                <div className="text-[11px] text-[#697786] mt-0.5">
                  Certified lifting crews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
