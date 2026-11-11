import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/companyData';
import { ImageFallback } from './ImageFallback';
import { Maximize2, X, MapPin, ArrowRight } from 'lucide-react';

interface GallerySectionProps {
  onOpenQuote: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenQuote }) => {
  const [filter, setFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Operations' },
    { id: 'mobile-cranes', label: 'Mobile Cranes' },
    { id: 'hydraulic', label: 'Hydraulic Lifting' },
    { id: 'machinery', label: 'Machinery Shifting' },
    { id: 'construction', label: 'Construction Projects' },
  ];

  const filteredItems =
    filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery-section" className="py-16 sm:py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F28C28] uppercase tracking-wider mb-2">
              <span>On-Site Visual Portfolio</span>
              <span className="text-slate-400">·</span>
              <span>Bangalore Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10263D]">
              Our Work and Gallery
            </h2>
            <p className="mt-2 text-base text-[#697786] max-w-xl">
              Authentic on-site photographs showcasing crane rental operations, factory machinery positioning, and structural heavy lifts.
            </p>
          </div>

          {/* Segmented Filter Control */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl overflow-x-auto shrink-0 max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  filter === tab.id
                    ? 'bg-white text-[#10263D] shadow-sm font-semibold'
                    : 'text-[#697786] hover:text-[#10263D]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <ImageFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#10263D]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#10263D] flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-5 h-5 text-[#10263D]" />
                  </div>
                </div>

                <div className="absolute bottom-2 left-3 text-[11px] font-semibold text-white/90 drop-shadow">
                  <span>{item.categoryLabel}</span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-[#697786] mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F28C28]" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-base font-bold text-[#10263D] leading-snug group-hover:text-[#F28C28] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-[#697786] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActiveItem(null)}
          >
            <div 
              className="bg-[#10263D] text-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close image lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                <ImageFallback
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="p-6 bg-[#10263D] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#F28C28] uppercase tracking-wider mb-1">
                    <span>{activeItem.categoryLabel}</span>
                    <span className="text-slate-400">·</span>
                    <span>{activeItem.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-xl">
                    {activeItem.description}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setActiveItem(null);
                    onOpenQuote();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F28C28] hover:bg-[#D9771B] text-white font-semibold text-xs tracking-wide transition-all shadow cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Enquire for Similar Lift</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
