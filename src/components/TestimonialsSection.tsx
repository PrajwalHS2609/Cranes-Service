import React from 'react';
import { TESTIMONIALS } from '../data/companyData';
import { Quote, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews-section" className="py-16 sm:py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-semibold text-[#F28C28] uppercase tracking-wider mb-2">
            Contractor &amp; Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10263D] text-balance">
            Trusted by Bangalore Builders &amp; Industrial Facilities
          </h2>
          <p className="mt-3 text-base text-[#697786]">
            Real feedback from site managers, project engineers, and manufacturing plants on lifting performance and reliability.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#F28C28]/10 flex items-center justify-center text-[#F28C28] mb-4">
                  <Quote className="w-4 h-4" />
                </div>
                <p className="text-sm text-[#202A35] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="font-bold text-sm text-[#10263D]">
                  {t.author}
                </div>
                <div className="text-xs text-[#697786]">
                  {t.role} · {t.company}
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-[#697786]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#F28C28]" />
                    <span>{t.location}</span>
                  </span>
                  <span className="font-medium text-[#10263D] bg-slate-100 px-2 py-0.5 rounded">
                    {t.serviceUsed}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
