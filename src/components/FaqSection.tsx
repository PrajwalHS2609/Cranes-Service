import React, { useState } from 'react';
import { FAQS } from '../data/companyData';
import { ChevronDown, Search, HelpCircle, PhoneCall } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/companyData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState<string>('all');

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === 'all' || faq.category === category;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs-section" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-block text-xs font-semibold text-[#F28C28] uppercase tracking-wider mb-2">
            Answers &amp; Operational Insights
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10263D] text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#697786]">
            Clear answers to common questions about crane rental, machinery lifting, site planning, and booking in Bangalore.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search crane rental questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F5F7FA] border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#202A35] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
            />
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-[#F5F7FA] rounded-lg border border-slate-200 overflow-x-auto shrink-0">
            {['all', 'general', 'equipment', 'booking', 'site'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md capitalize transition-colors whitespace-nowrap cursor-pointer ${
                  category === cat
                    ? 'bg-white text-[#10263D] shadow-sm font-semibold'
                    : 'text-[#697786] hover:text-[#10263D]'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-sm text-slate-500 bg-[#F5F7FA] rounded-xl border border-slate-200">
              No matching questions found for "{searchQuery}". Call us directly at {COMPANY_CONTACT.primaryPhone} for immediate assistance.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#F5F7FA] rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-[#10263D]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#F28C28]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-[#697786] leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions? Help card */}
        <div className="mt-10 p-5 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#F28C28] shrink-0" />
            <span className="text-xs text-[#202A35] font-medium">
              Have a specific load or site situation not answered here?
            </span>
          </div>
          <a
            href={`tel:${COMPANY_CONTACT.primaryPhoneRaw}`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#10263D] hover:text-[#F28C28] transition-colors whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call {COMPANY_CONTACT.primaryPhone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
