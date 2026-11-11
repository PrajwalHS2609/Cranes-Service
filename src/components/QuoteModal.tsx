import React, { useState } from 'react';
import { COMPANY_CONTACT, SERVICES } from '../data/companyData';
import { X, CheckCircle2, MessageCircle, Send, Phone } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || 'Hydraulic Crane Hire and Rental');
  const [location, setLocation] = useState('');
  const [loadWeight, setLoadWeight] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !location.trim()) {
      setError('Please provide your name, phone number, and project location.');
      return;
    }

    const ref = `SSC-${Math.floor(100000 + Math.random() * 900000)}`;
    const leads = JSON.parse(localStorage.getItem('ssc_enquiries') || '[]');
    leads.push({
      fullName,
      phone,
      service,
      projectLocation: location,
      loadWeight,
      description: notes,
      refCode: ref,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem('ssc_enquiries', JSON.stringify(leads));

    setIsSubmitted(true);
    setError('');
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhone('');
    setLocation('');
    setLoadWeight('');
    setNotes('');
    setError('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close quote dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center animate-in fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#10263D]">
              Quotation Request Received!
            </h3>
            <p className="mt-2 text-sm text-[#697786]">
              Thank you, <strong>{fullName}</strong>. Our dispatch team in Bangalore is reviewing your lifting requirement for <strong>{service}</strong> and will call you on <strong>{phone}</strong> shortly.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%20Sri%20Shakthi%20Cranes,%20I%20requested%20a%20quote%20for%20${encodeURIComponent(service)}%20at%20${encodeURIComponent(location)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Follow Up on WhatsApp</span>
              </a>
              <button
                onClick={handleClose}
                className="px-4 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-[#10263D] hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-xs font-semibold text-[#F28C28] uppercase tracking-wider">
                Fast Crane Quote
              </span>
              <h3 className="text-2xl font-bold text-[#10263D] mt-1">
                Request a Crane Rental Quote
              </h3>
              <p className="text-xs text-[#697786] mt-1">
                Share your load and site parameters. Our Bangalore dispatch team responds promptly with options and rates.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 text-xs border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#202A35] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Your Name / Company Contact"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#F5F7FA] border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-[#202A35] focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#202A35] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#F5F7FA] border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-[#202A35] focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202A35] mb-1">
                    Required Service
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#F5F7FA] border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-[#202A35] focus:outline-none focus:ring-2 focus:ring-[#F28C28] cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#202A35] mb-1">
                    Bangalore Site Location *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Yeshwanthpur / Peenya"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#F5F7FA] border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-[#202A35] focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202A35] mb-1">
                    Est. Load Weight / Machine
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 15 Tons"
                    value={loadWeight}
                    onChange={(e) => setLoadWeight(e.target.value)}
                    className="w-full bg-[#F5F7FA] border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-[#202A35] focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202A35] mb-1">
                  Additional Notes (Height, Reach, Duration)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. 4th floor terrace lift, 1 day rental"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#F5F7FA] border border-slate-200 rounded-lg px-3.5 py-2 text-sm text-[#202A35] focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-[#F28C28] hover:bg-[#D9771B] text-white font-semibold text-sm transition-all shadow cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Crane Quotation Request</span>
                </button>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-[#697786]">Or call our dispatch team immediately: </span>
                <a
                  href={`tel:${COMPANY_CONTACT.primaryPhoneRaw}`}
                  className="font-bold text-[#10263D] hover:text-[#F28C28] text-xs ml-1"
                >
                  {COMPANY_CONTACT.primaryPhone}
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
