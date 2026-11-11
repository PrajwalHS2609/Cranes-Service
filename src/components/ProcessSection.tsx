import React from 'react';
import { WORK_STEPS } from '../data/companyData';
import { ArrowRight, Info } from 'lucide-react';

interface ProcessSectionProps {
  onStartEnquiry: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartEnquiry }) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-semibold text-[#F28C28] uppercase tracking-wider mb-2">
            Seamless Execution
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10263D] text-balance">
            How the Crane Rental Process Works
          </h2>
          <p className="mt-3 text-base text-[#697786]">
            A clear, four-step coordination flow designed to get the right lifting equipment to your worksite smoothly and safely.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORK_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F5F7FA] rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between relative group"
            >
              <div>
                <div className="text-3xl font-extrabold text-[#F28C28] font-mono tabular-nums mb-3">
                  {step.stepNumber}
                </div>
                <h3 className="text-lg font-bold text-[#10263D] leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-xs text-[#697786] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-semibold text-[#10263D]">
                <span>Phase {idx + 1}</span>
                <span className="text-[#F28C28]">Step {step.stepNumber}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Availability Note */}
        <div className="mt-8 bg-amber-50 rounded-xl p-4 sm:p-5 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
          <Info className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
          <p>
            <strong className="font-semibold text-amber-950">Please note: </strong> 
            Actual equipment availability, boom length configurations, and operational suitability depend on verified project load data and confirmation with Sri Shakthi Cranes dispatch team.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <button
            onClick={onStartEnquiry}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#10263D] hover:bg-[#1b344f] text-white text-xs font-semibold tracking-wide transition-all shadow cursor-pointer"
          >
            <span>Start Step 1: Share Your Requirements</span>
            <ArrowRight className="w-4 h-4 text-[#F28C28]" />
          </button>
        </div>
      </div>
    </section>
  );
};
