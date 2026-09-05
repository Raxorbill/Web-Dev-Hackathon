import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CRAFT_STEPS } from '../data/content';
import { ShieldCheck } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const Craft: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="craft"
      className="relative w-full bg-[#F4EFE6] text-[#2B211B] py-24 sm:py-32 lg:py-40 border-t border-[#E8E0D2] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#A7834A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#8B6545] font-semibold font-sans-modern">
              ATELIER DISCIPLINES
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#2B211B] leading-[1.08] mb-6">
            FROM MATERIAL
            <br />
            <span className="italic font-serif-luxury font-normal text-[#8B6545]">
              TO MASTERPIECE.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#5C4D44] font-light leading-relaxed font-sans-modern">
            True luxury cannot be hurried. In our Chattogram workshop, hand-sculpted heritage meets exacting structural discipline.
          </p>
        </div>

        {/* Dual Column Layout: Sticky Left Content & Dynamic Large Photography Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Step List */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              {CRAFT_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-6 transition-all duration-300 border-l-2 ${
                      isActive
                        ? 'border-[#A7834A] bg-[#E8E0D2]/50'
                        : 'border-[#DCD2C0] hover:border-[#A7834A]/50 bg-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs uppercase tracking-widest font-mono ${isActive ? 'text-[#8B6545] font-bold' : 'text-[#5C4D44]/60'}`}>
                        {step.number}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B6545] opacity-80">
                        {step.subtitle}
                      </span>
                    </div>

                    <h3 className="font-cinzel text-lg sm:text-xl text-[#2B211B] font-medium tracking-wide">
                      {step.title}
                    </h3>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.35 }}
                        className="pt-4 space-y-4"
                      >
                        <p className="text-sm text-[#5C4D44] font-light leading-relaxed font-sans-modern">
                          {step.description}
                        </p>

                        <div className="grid grid-cols-2 gap-2 pt-2">
                          {step.materials.map((mat) => (
                            <div key={mat} className="flex items-center gap-1.5 text-xs text-[#2B211B]/80 font-sans-modern">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#A7834A] shrink-0" />
                              <span>{mat}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hero Photography with Crossfade & Subtle Scale */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#E8E0D2] shadow-2xl border border-[#DCD2C0]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <SafeImage
                    src={CRAFT_STEPS[activeStep].image}
                    alt={CRAFT_STEPS[activeStep].title}
                    className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.02]"
                  />

                  {/* Gradient & Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B]/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 right-6 text-[#F4EFE6] z-10 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#A7834A] block mb-1 font-sans-modern">
                        AUTHENTIC HEAVEN FURNITURE SPECIFICATION
                      </span>
                      <h4 className="font-cinzel text-xl sm:text-2xl text-[#F4EFE6] tracking-wider">
                        {CRAFT_STEPS[activeStep].title}
                      </h4>
                    </div>

                    <span className="font-cinzel text-2xl text-[#A7834A]/80 font-light">
                      {CRAFT_STEPS[activeStep].number} / 04
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
