import React, { useState } from 'react';
import { COMPANY_CONTACT, SERVICES } from '../data/companyData';
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle, 
  ExternalLink, Clock, ShieldCheck, AlertCircle 
} from 'lucide-react';

interface ContactSectionProps {
  preFillData?: {
    service: string;
    weight: string;
    height: string;
    location: string;
    duration: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preFillData }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    service: preFillData?.service || 'Hydraulic Crane Hire and Rental',
    projectLocation: preFillData?.location || '',
    loadWeight: preFillData?.weight || '',
    preferredDate: '',
    duration: preFillData?.duration || 'Single Shift (8 Hours)',
    description: preFillData?.height ? `Lifting reach: ${preFillData.height}` : '',
    consent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedRefCode, setSubmittedRefCode] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-+]/g, '').slice(-10))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.projectLocation.trim()) errs.projectLocation = 'Project site location in Bangalore is required';
    if (!formData.consent) errs.consent = 'Please accept consent to receive quotation details';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = `SSC-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRefCode(ref);
    setIsSubmitted(true);

    // Save lead locally
    const existingLeads = JSON.parse(localStorage.getItem('ssc_enquiries') || '[]');
    existingLeads.push({
      ...formData,
      refCode: ref,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem('ssc_enquiries', JSON.stringify(existingLeads));
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      service: 'Hydraulic Crane Hire and Rental',
      projectLocation: '',
      loadWeight: '',
      preferredDate: '',
      duration: 'Single Shift (8 Hours)',
      description: '',
      consent: true,
    });
  };

  return (
    <section id="contact-section" className="py-16 sm:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-semibold text-[#F28C28] uppercase tracking-wider mb-2">
            Get In Touch · Fast Quotations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10263D] text-balance">
            Let's Discuss Your Crane Rental Requirements
          </h2>
          <p className="mt-3 text-base text-[#697786]">
            Contact Sri Shakthi Cranes for project feasibility, lift scheduling, and verified commercial quotations in Bangalore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Verified Contact Information & Quick Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#10263D] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6">
                Direct Contact Information
              </h3>

              <div className="space-y-5 text-sm">
                {/* Physical Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                    <MapPin className="w-4 h-4 text-[#F28C28]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Operational Yard &amp; Office
                    </h4>
                    <p className="font-medium text-white/95 mt-1 leading-relaxed">
                      {COMPANY_CONTACT.address}
                    </p>
                    <a
                      href={COMPANY_CONTACT.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#F28C28] hover:underline mt-2 font-semibold"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Primary & Alternate Telephones */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                    <Phone className="w-4 h-4 text-[#F28C28]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Telephone Numbers
                    </h4>
                    <div className="mt-1 space-y-1">
                      <div>
                        <a
                          href={`tel:${COMPANY_CONTACT.primaryPhoneRaw}`}
                          className="font-bold text-white hover:text-[#F28C28] transition-colors text-base"
                        >
                          {COMPANY_CONTACT.primaryPhone}
                        </a>
                        <span className="text-xs text-slate-400 ml-2">(Primary)</span>
                      </div>
                      <div>
                        <a
                          href={`tel:${COMPANY_CONTACT.alternatePhoneRaw}`}
                          className="font-medium text-slate-300 hover:text-white transition-colors text-sm"
                        >
                          {COMPANY_CONTACT.alternatePhone}
                        </a>
                        <span className="text-xs text-slate-400 ml-2">(Alternate)</span>
                      </div>
                    </div>

                    {/* Additional Hotline Numbers */}
                    <div className="mt-2.5 pt-2 border-t border-white/10 text-xs text-slate-300">
                      <span className="text-slate-400">Additional Hotlines: </span>
                      {COMPANY_CONTACT.additionalPhones.map((p, idx) => (
                        <a
                          key={idx}
                          href={`tel:${p.raw}`}
                          className="inline-block mr-2 text-[#F28C28] hover:underline"
                        >
                          {p.number}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                    <Mail className="w-4 h-4 text-[#F28C28]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Email Inquiries
                    </h4>
                    <a
                      href={`mailto:${COMPANY_CONTACT.email}`}
                      className="font-medium text-white hover:text-[#F28C28] transition-colors mt-1 block"
                    >
                      {COMPANY_CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* Hours & 24/7 Support */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                    <Clock className="w-4 h-4 text-[#F28C28]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Business Hours
                    </h4>
                    <p className="text-slate-300 mt-1">
                      {COMPANY_CONTACT.workingHours}
                    </p>
                    <p className="text-xs text-[#F28C28] mt-1 font-medium">
                      {COMPANY_CONTACT.emergencyAvailability}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={COMPANY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Coverage Areas Tag Strip */}
            <div className="bg-white rounded-xl p-5 border border-slate-200">
              <h4 className="text-xs font-bold text-[#10263D] uppercase tracking-wider mb-2.5">
                Bangalore Service Zones:
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-[#697786]">
                {COMPANY_CONTACT.serviceAreas.map((area, i) => (
                  <span key={i} className="bg-slate-100 text-[#202A35] px-2.5 py-1 rounded-md">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Verified Quotation Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            {isSubmitted ? (
              <div className="py-8 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#10263D]">
                  Quotation Request Received!
                </h3>
                <p className="mt-2 text-sm text-[#697786] max-w-md mx-auto">
                  Thank you, <strong className="text-[#10263D]">{formData.fullName}</strong>. Your lifting enquiry has been logged with reference code:
                </p>
                <div className="my-4 inline-block px-4 py-2 bg-slate-100 rounded-lg text-lg font-mono font-bold text-[#10263D]">
                  {submittedRefCode}
                </div>
                <p className="text-xs text-[#697786] max-w-md mx-auto leading-relaxed">
                  Our technical operations team in Yeshwanthpur is reviewing your load parameters ({formData.service}) and will contact you at <strong>{formData.phone}</strong> shortly.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%20Sri%20Shakthi%20Cranes,%20I%20just%20submitted%20quote%20request%20${submittedRefCode}%20for%20${encodeURIComponent(formData.service)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Follow Up on WhatsApp</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-[#10263D] hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-xl font-bold text-[#10263D]">
                    Crane Rental Quotation Form
                  </h3>
                  <span className="text-xs text-[#697786]">* Required fields</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#202A35] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full bg-[#F5F7FA] border rounded-lg px-3.5 py-2.5 text-sm text-[#202A35] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F28C28] ${
                        errors.fullName ? 'border-red-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.fullName}</span>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#202A35] mb-1.5">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Infra Projects Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-[#F5F7FA] border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-[#202A35] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-[#202A35] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-[#F5F7FA] border rounded-lg px-3.5 py-2.5 text-sm text-[#202A35] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F28C28] ${
                        errors.phone ? 'border-red-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.phone}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-[#202A35] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. ramesh@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-[#F5F7FA] border rounded-lg px-3.5 py-2.5 text-sm text-[#202A35] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F28C28] ${
                        errors.email ? 'border-red-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>
                    )}
                  </div>

                  {/* Required Service */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#202A35] mb-1.5">
                      Required Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#F5F7FA] border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-[#202A35] focus:outline-none focus:ring-2 focus:ring-[#F28C28] cursor-pointer"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Location */}
                  <div>
                    <label className="block text-xs font-semibold text-[#202A35] mb-1.5">
                      Project Location (Bangalore Site) *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Peenya Industrial Area 2nd Stage"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      className={`w-full bg-[#F5F7FA] border rounded-lg px-3.5 py-2.5 text-sm text-[#202A35] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F28C28] ${
                        errors.projectLocation ? 'border-red-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.projectLocation && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.projectLocation}</span>
                    )}
                  </div>

                  {/* Load Weight or Equipment Details */}
                  <div>
                    <label className="block text-xs font-semibold text-[#202A35] mb-1.5">
                      Load Weight / Machine Details
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 18-ton CNC machine / 25T beam"
                      value={formData.loadWeight}
                      onChange={(e) => setFormData({ ...formData, loadWeight: e.target.value })}
                      className="w-full bg-[#F5F7FA] border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-[#202A35] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                    />
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-semibold text-[#202A35] mb-1.5">
                      Preferred Rental Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#F5F7FA] border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-[#202A35] focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                    />
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="block text-xs font-semibold text-[#202A35] mb-1.5">
                      Expected Rental Duration
                    </label>
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="w-full bg-[#F5F7FA] border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-[#202A35] focus:outline-none focus:ring-2 focus:ring-[#F28C28] cursor-pointer"
                    >
                      <option value="Half-Day (Up to 4 Hours)">Half-Day (Up to 4 Hours)</option>
                      <option value="Single Shift (8 Hours)">Single Shift (8 Hours)</option>
                      <option value="2 to 4 Days">2 to 4 Days</option>
                      <option value="Weekly Rental">Weekly Rental</option>
                      <option value="Monthly Contract">Monthly Contract</option>
                    </select>
                  </div>

                  {/* Description */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#202A35] mb-1.5">
                      Project Description &amp; Lifting Conditions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe lifting height, ground conditions, door clearances, or specific crane boom reach requirements..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full bg-[#F5F7FA] border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-[#202A35] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                    />
                  </div>
                </div>

                {/* Consent */}
                <div>
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#697786]">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded text-[#F28C28] focus:ring-[#F28C28] border-slate-300"
                    />
                    <span>
                      I authorize Sri Shakthi Cranes to contact me regarding this quotation via telephone or WhatsApp.
                    </span>
                  </label>
                  {errors.consent && (
                    <span className="text-xs text-red-500 mt-1 block">{errors.consent}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-[#F28C28] hover:bg-[#D9771B] text-white font-semibold text-sm tracking-wide transition-all shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request a Crane Quote</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
