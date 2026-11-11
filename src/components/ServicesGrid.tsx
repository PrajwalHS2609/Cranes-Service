import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/companyData';
import { ImageFallback } from './ImageFallback';
import { ArrowRight, Check, Phone } from 'lucide-react';

interface ServicesGridProps {
  onSelectService: (serviceId: string) => void;
  onOpenQuoteWithService: (serviceTitle: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onSelectService,
  onOpenQuoteWithService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'General Crane Hire', label: 'Crane Hire' },
    { id: 'Specialized Lifting', label: 'Hydraulic Cranes' },
    { id: 'Machinery Services', label: 'Machinery Moving' },
    { id: 'Heavy Lifting', label: 'Heavy Lifts' },
    { id: 'Mobile Fleet', label: 'Mobile Fleet' },
  ];

  const filteredServices =
    selectedCategory === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="services-section" className="py-16 sm:py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F28C28] uppercase tracking-wider mb-2">
              <span>Lifting Capabilities &amp; Fleet</span>
              <span className="text-slate-400">·</span>
              <span>Bangalore Operations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10263D] text-balance">
              Comprehensive Crane Rental &amp; Heavy Lifting Services
            </h2>
            <p className="mt-3 text-base text-[#697786] max-w-2xl">
              Engineered lifting solutions across 9 specialized categories for construction sites, industrial plants, and commercial developers in Bangalore.
            </p>
          </div>

          {/* Interactive Category Segmented Control */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl overflow-x-auto shrink-0 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-[#10263D] shadow-sm font-semibold'
                    : 'text-[#697786] hover:text-[#10263D]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 9 Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <ImageFallback
                    src={service.image}
                    alt={`${service.title} - Sri Shakthi Cranes Bangalore`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10263D]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Clean unboxed category label */}
                  <div className="absolute bottom-3 left-4 text-xs font-semibold text-white/90 drop-shadow">
                    <span>{service.category}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#10263D] group-hover:text-[#F28C28] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#697786] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* 2 Quick Applications */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    {service.typicalApplications.slice(0, 2).map((app, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#202A35]">
                        <Check className="w-3.5 h-3.5 text-[#F28C28] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-slate-50">
                <button
                  onClick={() => onSelectService(service.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10263D] hover:text-[#F28C28] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenQuoteWithService(service.title)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#F28C28] hover:text-white text-[#10263D] text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assistance Note */}
        <div className="mt-12 bg-white rounded-xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#10263D]">
              Need help deciding which crane matches your load &amp; radius?
            </h4>
            <p className="text-xs text-[#697786] mt-1">
              Speak directly with our technical rigging supervisors for on-site feasibility evaluations.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteWithService('Crane on Hire')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#10263D] hover:bg-[#1b344f] text-white text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Consult Technical Team</span>
            <ArrowRight className="w-4 h-4 text-[#F28C28]" />
          </button>
        </div>
      </div>
    </section>
  );
};
