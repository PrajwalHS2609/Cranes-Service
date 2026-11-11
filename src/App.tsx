import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuoteEstimator } from './components/QuoteEstimator';
import { ServicesGrid } from './components/ServicesGrid';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { IndustriesSection } from './components/IndustriesSection';
import { ProcessSection } from './components/ProcessSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { COMPANY_CONTACT } from './data/companyData';
import { Phone, MessageCircle, FileText } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'services' | 'service-detail' | 'gallery' | 'reviews' | 'contact'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('hydraulic-crane-hire');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalInitialService, setModalInitialService] = useState('Hydraulic Crane Hire and Rental');
  const [preFillQuoteData, setPreFillQuoteData] = useState<{
    service: string;
    weight: string;
    height: string;
    location: string;
    duration: string;
  } | null>(null);

  // Synchronize hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('services/')) {
        const id = hash.replace('services/', '');
        setSelectedServiceId(id);
        setCurrentView('service-detail');
      } else if (hash === 'about') {
        setCurrentView('about');
      } else if (hash === 'services') {
        setCurrentView('services');
      } else if (hash === 'gallery') {
        setCurrentView('gallery');
      } else if (hash === 'reviews') {
        setCurrentView('reviews');
      } else if (hash === 'contact') {
        setCurrentView('contact');
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: string) => {
    if (view === 'home') {
      window.location.hash = '';
      setCurrentView('home');
    } else {
      window.location.hash = view;
    }
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    window.location.hash = `services/${serviceId}`;
    setCurrentView('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteWithService = (serviceTitle: string) => {
    setModalInitialService(serviceTitle);
    setIsQuoteModalOpen(true);
  };

  const handleEstimatorPreFill = (details: {
    service: string;
    weight: string;
    height: string;
    location: string;
    duration: string;
  }) => {
    setPreFillQuoteData(details);
    // Navigate to contact section or open modal
    handleNavigate('contact');
    setTimeout(() => {
      const el = document.getElementById('contact-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA] text-[#202A35]">
      {/* Header and Top Information Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenQuote={() => {
          setModalInitialService('Hydraulic Crane Hire and Rental');
          setIsQuoteModalOpen(true);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero
              onOpenQuote={() => setIsQuoteModalOpen(true)}
              onExploreServices={() => handleNavigate('services')}
            />
            <QuoteEstimator onPreFillQuoteForm={handleEstimatorPreFill} />
            <ServicesGrid
              onSelectService={handleSelectService}
              onOpenQuoteWithService={handleOpenQuoteWithService}
            />
            <AboutSection
              onExploreServices={() => handleNavigate('services')}
              onContactClick={() => handleNavigate('contact')}
            />
            <WhyChooseUs />
            <IndustriesSection
              onDiscussProject={() => handleNavigate('contact')}
            />
            <ProcessSection
              onStartEnquiry={() => handleNavigate('contact')}
            />
            <GallerySection
              onOpenQuote={() => setIsQuoteModalOpen(true)}
            />
            <TestimonialsSection />
            <FaqSection />
            <ContactSection preFillData={preFillQuoteData} />
          </>
        )}

        {currentView === 'service-detail' && (
          <ServiceDetailPage
            serviceId={selectedServiceId}
            onBackToServices={() => handleNavigate('services')}
            onSelectService={handleSelectService}
            onOpenQuoteWithService={handleOpenQuoteWithService}
          />
        )}

        {currentView === 'services' && (
          <>
            <div className="bg-[#10263D] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto text-center">
                <span className="text-xs font-semibold text-[#F28C28] uppercase tracking-wider">
                  Complete Fleet &amp; Capabilities
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">
                  Crane Rental &amp; Heavy Lifting Services in Bangalore
                </h1>
                <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
                  Explore our comprehensive fleet of mobile and hydraulic cranes, specialized industrial machine moving teams, and high-capacity equipment lifting.
                </p>
              </div>
            </div>
            <ServicesGrid
              onSelectService={handleSelectService}
              onOpenQuoteWithService={handleOpenQuoteWithService}
            />
            <QuoteEstimator onPreFillQuoteForm={handleEstimatorPreFill} />
            <ContactSection preFillData={preFillQuoteData} />
          </>
        )}

        {currentView === 'about' && (
          <>
            <div className="bg-[#10263D] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto text-center">
                <span className="text-xs font-semibold text-[#F28C28] uppercase tracking-wider">
                  About Sri Shakthi Cranes
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">
                  Engineering Reliable Lifting Solutions in Bangalore
                </h1>
                <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
                  Headquartered in Yeshwanthpur Industrial Suburb with extensive operational reach across Peenya, Electronic City, Whitefield, and surrounding Karnataka regions.
                </p>
              </div>
            </div>
            <AboutSection
              onExploreServices={() => handleNavigate('services')}
              onContactClick={() => handleNavigate('contact')}
            />
            <WhyChooseUs />
            <ProcessSection onStartEnquiry={() => handleNavigate('contact')} />
            <ContactSection preFillData={preFillQuoteData} />
          </>
        )}

        {currentView === 'gallery' && (
          <>
            <div className="bg-[#10263D] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto text-center">
                <span className="text-xs font-semibold text-[#F28C28] uppercase tracking-wider">
                  On-Site Operations
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">
                  Lifting Project Gallery &amp; Fleet in Action
                </h1>
                <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
                  View completed crane rental lifts, hydraulic equipment operations, and machinery relocations conducted across Bangalore.
                </p>
              </div>
            </div>
            <GallerySection onOpenQuote={() => setIsQuoteModalOpen(true)} />
            <ContactSection preFillData={preFillQuoteData} />
          </>
        )}

        {currentView === 'reviews' && (
          <>
            <div className="bg-[#10263D] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto text-center">
                <span className="text-xs font-semibold text-[#F28C28] uppercase tracking-wider">
                  Client Trust &amp; Performance
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">
                  Client Reviews &amp; Testimonials
                </h1>
                <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
                  What civil engineers, plant supervisors, and project contractors say about working with Sri Shakthi Cranes.
                </p>
              </div>
            </div>
            <TestimonialsSection />
            <WhyChooseUs />
            <ContactSection preFillData={preFillQuoteData} />
          </>
        )}

        {currentView === 'contact' && (
          <>
            <div className="bg-[#10263D] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto text-center">
                <span className="text-xs font-semibold text-[#F28C28] uppercase tracking-wider">
                  Bangalore Dispatch Desk
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">
                  Contact Sri Shakthi Cranes
                </h1>
                <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
                  Get in touch for crane availability, site inspections, and customized quotations for your heavy lifting project.
                </p>
              </div>
            </div>
            <ContactSection preFillData={preFillQuoteData} />
            <FaqSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectService={handleSelectService}
        onOpenQuote={() => {
          setModalInitialService('Hydraulic Crane Hire and Rental');
          setIsQuoteModalOpen(true);
        }}
      />

      {/* Instant Crane Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={modalInitialService}
      />

      {/* Mobile Sticky Action Bar (Strict 15% mobile sticky cap compliant, max 52px height) */}
      <aside 
        aria-label="Quick Actions"
        className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#10263D]/95 backdrop-blur-md border-t border-white/10 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl"
      >
        <a
          href={`tel:${COMPANY_CONTACT.primaryPhoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold whitespace-nowrap active:scale-[0.98] border border-white/10"
        >
          <Phone className="w-3.5 h-3.5 text-[#F28C28]" />
          <span>Call Now</span>
        </a>

        <a
          href={COMPANY_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold whitespace-nowrap active:scale-[0.98]"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => {
            setModalInitialService('Hydraulic Crane Hire and Rental');
            setIsQuoteModalOpen(true);
          }}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-[#F28C28] hover:bg-[#D9771B] text-white text-xs font-semibold whitespace-nowrap active:scale-[0.98] cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Quote</span>
        </button>
      </aside>
    </div>
  );
}
