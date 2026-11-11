import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, MessageCircle, Phone, SlidersHorizontal } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/companyData';

interface QuoteEstimatorProps {
  onPreFillQuoteForm: (details: {
    service: string;
    weight: string;
    height: string;
    location: string;
    duration: string;
  }) => void;
}

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({ onPreFillQuoteForm }) => {
  const [service, setService] = useState('Hydraulic Crane Hire and Rental');
  const [weight, setWeight] = useState('10 - 25 Tons');
  const [height, setHeight] = useState('Up to 15m (1-4 Floors)');
  const [location, setLocation] = useState('Yeshwanthpur / Peenya');
  const [duration, setDuration] = useState('Single Shift (8 Hours)');

  const getRecommendedCrane = () => {
    if (service.includes('Tower')) {
      return {
        craneType: 'Tower Crane / Top-Slewing Crane Coordination',
        riggingNote: 'Requires engineered foundation fixing angle and mobile crane for erection.',
        safetyChecks: ['Foundation civil test certificate', 'Airspace & tower crane erection clearance', 'Continuous 415V electrical supply']
      };
    }
    if (weight === '50 - 100+ Tons' || service.includes('Heavy Machine')) {
      return {
        craneType: 'Heavy High-Tonnage Telescopic Mobile Crane',
        riggingNote: 'Configured with heavy counterweight pack, alloy chain bridles, and load cell check.',
        safetyChecks: ['Ground bearing resistance inspection', 'Steel spreader mats under outriggers', 'Clear counterweight swing radius']
      };
    }
    if (service.includes('Industrial Machine')) {
      return {
        craneType: 'Precision Hydraulic Crane with Machine Moving Gear',
        riggingNote: 'Equipped with synthetic web slings, machine skates, and hydraulic toe jacks.',
        safetyChecks: ['Workshop doorway & shutter height verification', 'Floor load bearing capacity check', 'Overhead crane rail clearances']
      };
    }
    return {
      craneType: 'All-Terrain Telescopic Mobile Crane',
      riggingNote: 'Standard multi-stage telescopic boom with rated wire rope and certified operator.',
      safetyChecks: ['Access road width for crane carrier', 'Level ground for full outrigger beam extension', 'Clear overhead power lines']
    };
  };

  const recommendation = getRecommendedCrane();

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Hello Sri Shakthi Cranes! I would like to request a quotation for crane rental in Bangalore:\n` +
      `• Service: ${service}\n` +
      `• Estimated Weight: ${weight}\n` +
      `• Working Height: ${height}\n` +
      `• Location: ${location}\n` +
      `• Duration: ${duration}\n` +
      `Please let me know equipment availability and pricing.`
    );
    window.open(`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleFillDetailedForm = () => {
    onPreFillQuoteForm({
      service,
      weight,
      height,
      location,
      duration,
    });
  };

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#10263D] text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-800">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F28C28] uppercase tracking-wider mb-2">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Interactive Requirement Estimator</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Find the Right Crane &amp; Request an Accurate Quote
              </h2>
              <p className="mt-2 text-sm text-slate-300 max-w-2xl">
                Configure your lifting parameters to determine the recommended crane configuration and site checklist.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#F28C28]" />
              <span>Bangalore Rapid Dispatch Desk Active</span>
            </div>
          </div>

          {/* Configuration Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            {/* Input Controls (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Service Type */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  Lifting Service Type
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#1b344f] border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F28C28] cursor-pointer"
                >
                  <option value="Crane on Hire">Crane on Hire</option>
                  <option value="Crane Rental Services">Crane Rental Services</option>
                  <option value="Hydraulic Crane Hire and Rental">Hydraulic Crane Hire and Rental</option>
                  <option value="Industrial Machine Lifting">Industrial Machine Lifting</option>
                  <option value="Heavy Machine Lifting">Heavy Machine Lifting</option>
                  <option value="Heavy Equipment Lifting">Heavy Equipment Lifting</option>
                  <option value="Product Lifting Services">Product Lifting Services</option>
                  <option value="Mobile Crane Rental">Mobile Crane Rental</option>
                  <option value="Tower Crane Rental">Tower Crane Rental</option>
                </select>
              </div>

              {/* Load Weight */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  Estimated Load Weight
                </label>
                <select
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-[#1b344f] border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F28C28] cursor-pointer"
                >
                  <option value="Under 5 Tons">Under 5 Tons (Light)</option>
                  <option value="5 - 15 Tons">5 – 15 Tons (Medium)</option>
                  <option value="10 - 25 Tons">10 – 25 Tons (Standard Heavy)</option>
                  <option value="25 - 50 Tons">25 – 50 Tons (Heavy Industrial)</option>
                  <option value="50 - 100+ Tons">50 – 100+ Tons (Ultra Heavy)</option>
                </select>
              </div>

              {/* Height / Reach */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  Lifting Height / Radius
                </label>
                <select
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-[#1b344f] border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F28C28] cursor-pointer"
                >
                  <option value="Ground Level Shifting">Ground Level Shifting / Machine Skates</option>
                  <option value="Up to 15m (1-4 Floors)">Up to 15m (1 – 4 Building Floors)</option>
                  <option value="15m - 30m (5-10 Floors)">15m – 30m (5 – 10 Building Floors)</option>
                  <option value="30m+ High Reach">30m+ High Altitude Hook Reach</option>
                </select>
              </div>

              {/* Location in Bangalore */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  Project Location (Bangalore)
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#1b344f] border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F28C28] cursor-pointer"
                >
                  <option value="Yeshwanthpur / Peenya">Yeshwanthpur / Peenya Industrial</option>
                  <option value="Whitefield / Mahadevapura">Whitefield / Mahadevapura</option>
                  <option value="Electronic City / Bommasandra">Electronic City / Bommasandra</option>
                  <option value="Bidadi / Kumbalgodu Industrial">Bidadi / Kumbalgodu Industrial</option>
                  <option value="Rajajinagar / Malleshwaram">Rajajinagar / Malleshwaram</option>
                  <option value="Hebbal / Yelahanka / Airport Rd">Hebbal / Yelahanka / Airport Rd</option>
                  <option value="Nelamangala / Dabaspet">Nelamangala / Dabaspet Corridor</option>
                  <option value="Other Greater Bangalore Area">Other Greater Bangalore Area</option>
                </select>
              </div>

              {/* Expected Duration */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  Rental Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-[#1b344f] border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F28C28] cursor-pointer"
                >
                  <option value="Half-Day (Up to 4 Hours)">Half-Day (Up to 4 Hours)</option>
                  <option value="Single Shift (8 Hours)">Single Shift (8 Hours)</option>
                  <option value="2 to 4 Days Project">2 to 4 Days Project</option>
                  <option value="Weekly Rental">Weekly Rental</option>
                  <option value="Monthly Contract">Monthly Contract</option>
                </select>
              </div>
            </div>

            {/* Recommendation & Action Output Card (5 Cols) */}
            <div className="lg:col-span-5 bg-white/5 rounded-xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                  <span>RECOMMENDED CRANE CONFIGURATION</span>
                  <span className="text-[#F28C28]">Ready to Quote</span>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {recommendation.craneType}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {recommendation.riggingNote}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Key Site Checks for this Lift:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {recommendation.safetyChecks.map((check, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                        <span>{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Conversion Buttons */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleFillDetailedForm}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#F28C28] hover:bg-[#D9771B] text-white font-semibold text-xs tracking-wide transition-all shadow cursor-pointer whitespace-nowrap"
                >
                  <span>Request Official Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleWhatsAppEnquiry}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
