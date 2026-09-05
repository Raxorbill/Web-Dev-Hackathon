import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WHY_REASONS } from '../data/content';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface WhyHeavenProps {
  onRequestConsultation: () => void;
}

export const WhyHeaven: React.FC<WhyHeavenProps> = ({ onRequestConsultation }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const activeItem = WHY_REASONS[activeIdx] || WHY_REASONS[0];

  return (
    <section
      id="why-heaven"
      className="relative w-full bg-[#102021] text-[#F4EFE6] py-24 sm:py-32 lg:py-40 border-t border-[#23393B]/60 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Background Architectural Grid Accent */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(167, 131, 74, 0.3) 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#A7834A]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#A7834A] font-sans-modern">
                THE ATELIER STANDARD
              </span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#F4EFE6]">
              WHY HEAVEN?
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#F4EFE6]/70 max-w-md font-sans-modern font-light leading-relaxed">
            In an era of mass-produced flat-pack disposability, we remain fiercely committed to architectural permanence, spatial precision, and bench-made devotion.
          </p>
        </div>

        {/* Desktop Split Showcase (lg+) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          {/* Left Column: Interactive Pillar List */}
          <div className="lg:col-span-5 flex flex-col border-t border-[#23393B]">
            {WHY_REASONS.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={item.number}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative border-b border-[#23393B] py-6 sm:py-8 transition-all duration-300 cursor-pointer ${
                    isActive ? 'bg-[#14282A]/60 pl-5' : 'hover:bg-[#14282A]/30 hover:pl-3'
                  }`}
                >
                  {/* Active Gold Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="active-reason-indicator"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#A7834A]"
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  <div className="flex items-start gap-4">
                    {/* Number */}
                    <span
                      className={`font-cinzel text-lg sm:text-xl font-light tracking-widest block transition-colors duration-300 ${
                        isActive ? 'text-[#A7834A]' : 'text-[#A7834A]/50 group-hover:text-[#A7834A]'
                      }`}
                    >
                      {item.number}
                    </span>

                    {/* Title & Summary */}
                    <div className="flex-1">
                      <h3
                        className={`font-cinzel text-lg sm:text-xl font-medium tracking-wide transition-colors duration-300 ${
                          isActive ? 'text-[#F4EFE6]' : 'text-[#F4EFE6]/75 group-hover:text-[#F4EFE6]'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#F4EFE6]/60 mt-1.5 font-sans-modern font-light leading-relaxed">
                        {item.summary}
                      </p>

                      {/* Detail revealed when active */}
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs text-[#A7834A]/90 mt-2 font-sans-modern font-light leading-relaxed pt-1"
                        >
                          {item.detail}
                        </motion.p>
                      )}
                    </div>

                    {/* Arrow Icon */}
                    <div
                      className={`w-8 h-8 flex items-center justify-center border transition-all ${
                        isActive
                          ? 'border-[#A7834A] text-[#A7834A] bg-[#A7834A]/10'
                          : 'border-[#23393B] text-[#F4EFE6]/40 group-hover:border-[#A7834A]/60 group-hover:text-[#A7834A]'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Direct Consultation Action Bar */}
            <div className="mt-8 pt-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#F4EFE6]/60 font-sans-modern">
                <CheckCircle2 className="w-4 h-4 text-[#A7834A]" />
                <span>Complimentary design review across Chattogram</span>
              </div>

              <button
                onClick={onRequestConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A7834A] hover:bg-[#BFA06A] text-[#102021] text-xs uppercase tracking-[0.2em] font-medium font-sans-modern transition-all shadow-md cursor-pointer"
              >
                <span>BOOK SESSION</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Definition Architectural Picture Showcase */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="relative w-full overflow-hidden bg-[#14282A] border border-[#23393B] shadow-2xl">
              {/* Picture Display with Crossfade Transition */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <SafeImage
                      src={activeItem.image}
                      alt={activeItem.title}
                      className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.02]"
                    />

                    {/* Editorial Lighting Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102021] via-[#102021]/30 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#102021]/60 via-transparent to-transparent pointer-events-none" />

                    {/* Top Architectural Specification Badge */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#102021]/80 backdrop-blur-md border border-[#A7834A]/40 text-[10px] uppercase tracking-[0.25em] text-[#E5DDCF]">
                        <Sparkles className="w-3 h-3 text-[#A7834A]" />
                        <span>ATELIER SPECIFICATION</span>
                      </div>

                      <span className="font-cinzel text-xl text-[#A7834A] bg-[#102021]/80 backdrop-blur-md px-3 py-1 border border-[#23393B]">
                        {activeItem.number} / 05
                      </span>
                    </div>

                    {/* Bottom Content Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#A7834A] block mb-1 font-sans-modern">
                        HEAVEN FURNITURE MART
                      </span>
                      <h4 className="font-cinzel text-2xl sm:text-3xl text-[#F4EFE6] font-medium tracking-wide">
                        {activeItem.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#F4EFE6]/80 mt-1 max-w-lg font-sans-modern font-light leading-relaxed">
                        {activeItem.detail}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Gallery Mini Selector Strip (Direct visual access to all 5 pictures) */}
              <div className="grid grid-cols-5 border-t border-[#23393B] bg-[#102021]">
                {WHY_REASONS.map((item, idx) => {
                  const isSelected = activeIdx === idx;
                  return (
                    <button
                      key={`thumb-${item.number}`}
                      onClick={() => setActiveIdx(idx)}
                      title={item.title}
                      className={`relative aspect-[16/10] overflow-hidden border-r last:border-r-0 border-[#23393B] transition-all cursor-pointer group ${
                        isSelected ? 'ring-2 ring-[#A7834A] z-10' : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <SafeImage
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          isSelected ? 'bg-transparent' : 'bg-[#102021]/40 group-hover:bg-transparent'
                        }`}
                      />
                      <span className="absolute bottom-1 left-1.5 text-[9px] font-mono font-medium text-[#F4EFE6] drop-shadow-md">
                        {item.number}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Card Gallery (Visible on screens < lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {WHY_REASONS.map((item) => (
            <div
              key={`mob-${item.number}`}
              onClick={onRequestConsultation}
              className="bg-[#14282A] border border-[#23393B] overflow-hidden shadow-lg flex flex-col group cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102021] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-[#102021]/80 backdrop-blur-md border border-[#A7834A]/40 px-2.5 py-1 text-[10px] font-cinzel text-[#A7834A]">
                  {item.number}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-lg sm:text-xl font-medium tracking-wide text-[#F4EFE6] group-hover:text-[#A7834A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#F4EFE6]/70 mt-2 font-sans-modern font-light leading-relaxed">
                    {item.summary}
                  </p>
                  <p className="text-xs text-[#A7834A]/80 mt-2 font-sans-modern font-light leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#23393B]/70 flex items-center justify-between text-xs text-[#A7834A] uppercase tracking-[0.2em] font-sans-modern">
                  <span>CONSULT ATELIER</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

