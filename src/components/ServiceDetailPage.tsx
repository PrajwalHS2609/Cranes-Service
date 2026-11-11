import React from 'react';
import { SERVICES, ServiceItem, COMPANY_CONTACT } from '../data/companyData';
import { ImageFallback } from './ImageFallback';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, HelpCircle, 
  Phone, MessageCircle, FileText, ChevronRight 
} from 'lucide-react';

interface ServiceDetailPageProps {
  serviceId: string;
  onBackToServices: () => void;
  onSelectService: (serviceId: string) => void;
  onOpenQuoteWithService: (serviceTitle: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onBackToServices,
  onSelectService,
  onOpenQuoteWithService,
}) => {
  const service = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <article className="min-h-screen bg-[#F5F7FA] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#697786]">
          <button 
            onClick={onBackToServices}
            className="hover:text-[#10263D] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <button 
            onClick={onBackToServices}
            className="hover:text-[#10263D] transition-colors cursor-pointer"
          >
            Services
          </button>
          <span>/</span>
          <span className="font-semibold text-[#10263D]">{service.title}</span>
        </nav>

        {/* Back Link */}
        <button
          onClick={onBackToServices}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#10263D] hover:text-[#F28C28] transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </button>

        {/* Hero Banner for Service */}
        <div className="bg-[#10263D] rounded-2xl p-6 sm:p-10 text-white mb-10 overflow-hidden relative shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-block text-xs font-semibold text-[#F28C28] uppercase tracking-wider mb-3">
              {service.category} · Bangalore Operations
            </div>
            {/* Unique H1 Heading as required for SEO */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {service.title} in Bangalore
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {service.fullDesc}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteWithService(service.title)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F28C28] hover:bg-[#D9771B] text-white font-semibold text-sm transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>Request {service.title} Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${COMPANY_CONTACT.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all whitespace-nowrap cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#F28C28]" />
                <span>Call {COMPANY_CONTACT.primaryPhone}</span>
              </a>
            </div>
          </div>

          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        {/* Grid Layout: Main Details & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Area (8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 aspect-[16/9]">
              <ImageFallback
                src={service.image}
                alt={`${service.title} operation by Sri Shakthi Cranes Bangalore`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Typical Applications */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-[#10263D] mb-4">
                Typical Applications for {service.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.typicalApplications.map((app, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#202A35]">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment & Rigging Details */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-[#10263D] mb-4">
                Equipment &amp; Rigging Specifications
              </h2>
              <ul className="space-y-3 text-sm text-[#202A35]">
                {service.equipmentDetails.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10263D] mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Site Considerations & Safety Protocols */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-[#10263D]">
                <AlertCircle className="w-5 h-5 text-[#F28C28]" />
                <h2 className="text-xl font-bold">Important Site Considerations</h2>
              </div>
              <div className="space-y-3 text-sm text-[#697786]">
                {service.siteConsiderations.map((consideration, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-slate-400 font-mono text-xs mt-0.5">{`0${idx + 1}.`}</span>
                    <span className="text-[#202A35]">{consideration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service-Specific FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-[#10263D]">
                  <HelpCircle className="w-5 h-5 text-[#F28C28]" />
                  <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                      <h3 className="text-base font-semibold text-[#10263D]">
                        {faq.question}
                      </h3>
                      <p className="mt-1.5 text-sm text-[#697786] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Quotation Checklist Box */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm sticky top-24">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F28C28] uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4" />
                <span>Quotation Requirements</span>
              </div>
              <h3 className="text-lg font-bold text-[#10263D]">
                Details Needed for a Fast Quote
              </h3>
              <p className="mt-1 text-xs text-[#697786]">
                Having these parameters ready helps our engineers provide an exact equipment match:
              </p>

              <ul className="mt-4 space-y-2.5 text-xs text-[#202A35]">
                {service.quoteChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  onClick={() => onOpenQuoteWithService(service.title)}
                  className="w-full py-3 px-4 rounded-lg bg-[#F28C28] hover:bg-[#D9771B] text-white font-semibold text-xs transition-colors cursor-pointer text-center shadow-sm"
                >
                  Request Quotation for this Service
                </button>
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%20Sri%20Shakthi%20Cranes,%20I%20am%20enquiring%20about%20${encodeURIComponent(service.title)}%20in%20Bangalore.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors text-center cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>

              {/* Direct Hotline */}
              <div className="mt-5 pt-4 border-t border-slate-100 text-center">
                <span className="text-[11px] text-[#697786]">Immediate Site Coordination:</span>
                <a
                  href={`tel:${COMPANY_CONTACT.primaryPhoneRaw}`}
                  className="block mt-1 text-sm font-bold text-[#10263D] hover:text-[#F28C28] transition-colors"
                >
                  {COMPANY_CONTACT.primaryPhone}
                </a>
                <span className="text-[11px] text-slate-400">Yeshwanthpur, Bangalore Hub</span>
              </div>
            </div>

            {/* Related Services Links */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-[#10263D] mb-4">
                Other Lifting Services
              </h3>
              <div className="space-y-3">
                {relatedServices.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => {
                      onSelectService(rel.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-left p-3 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-[#10263D] group-hover:text-[#F28C28] transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-[11px] text-[#697786] line-clamp-1 mt-0.5">
                        {rel.category}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#F28C28] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
