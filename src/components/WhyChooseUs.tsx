import React from 'react';
import { WHY_CHOOSE_US } from '../data/companyData';
import { 
  Compass, Layers, CalendarCheck, ShieldCheck, Briefcase, PhoneCall 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#F28C28]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#F28C28]" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-[#F28C28]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#F28C28]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#F28C28]" />;
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-[#F28C28]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#F28C28]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-semibold text-[#F28C28] uppercase tracking-wider mb-2">
            Professional Lifting Evaluation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10263D] text-balance">
            Why Choose Sri Shakthi Cranes?
          </h2>
          <p className="mt-3 text-base text-[#697786]">
            Practical considerations for contractors, plant managers, and builders selecting a dependable heavy lifting provider in Bangalore.
          </p>
        </div>

        {/* 6 Practical Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#10263D] flex items-center justify-center mb-4 shadow-sm">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-[#10263D] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#697786] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
