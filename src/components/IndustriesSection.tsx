import React from 'react';
import { INDUSTRIES, IndustryItem } from '../data/companyData';
import { 
  Building2, Factory, Warehouse, HardHat, Truck, PackageCheck, ArrowRight, MessageSquare 
} from 'lucide-react';

interface IndustriesSectionProps {
  onDiscussProject: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onDiscussProject }) => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#F28C28]" />;
      case 'Factory':
        return <Factory className="w-6 h-6 text-[#F28C28]" />;
      case 'Warehouse':
        return <Warehouse className="w-6 h-6 text-[#F28C28]" />;
      case 'HardHat':
        return <HardHat className="w-6 h-6 text-[#F28C28]" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-[#F28C28]" />;
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6 text-[#F28C28]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#F28C28]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-semibold text-[#F28C28] uppercase tracking-wider mb-2">
            Sector Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10263D] text-balance">
            Industries and Applications We Serve
          </h2>
          <p className="mt-3 text-base text-[#697786]">
            Delivering coordinated mobile crane rental and heavy equipment shifting across Bangalore's major industrial sectors.
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="bg-[#F5F7FA] rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-sm">
                  {getIndustryIcon(ind.iconName)}
                </div>
                <h3 className="text-lg font-bold text-[#10263D]">
                  {ind.title}
                </h3>
                <p className="mt-2 text-sm text-[#697786] leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200">
                <div className="text-xs font-semibold text-[#10263D] mb-2">Key Lift Profiles:</div>
                <div className="flex flex-wrap gap-1.5 text-xs text-[#202A35]">
                  {ind.highlights.map((h, i) => (
                    <span key={i} className="text-xs text-[#697786] flex items-center gap-1.5">
                      <span>•</span>
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner Beneath Section */}
        <div className="mt-12 bg-[#10263D] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Have a Specific Lifting Requirement?
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Tell us about your project, and our team can discuss suitable crane rental options and site feasibility.
            </p>
          </div>
          <button
            onClick={onDiscussProject}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F28C28] hover:bg-[#D9771B] text-white text-sm font-semibold transition-all shadow cursor-pointer whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuss Your Project</span>
          </button>
        </div>
      </div>
    </section>
  );
};
