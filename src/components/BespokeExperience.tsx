import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BESPOKE_STEPS } from '../data/content';
import { ArrowRight, Compass, Ruler, Hammer, Home } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface BespokeExperienceProps {
  onRequestConsultation: () => void;
}

export const BespokeExperience: React.FC<BespokeExperienceProps> = ({ onRequestConsultation }) => {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [Compass, Ruler, Hammer, Home];

  return (
    <section
      id="bespoke"
      className="relative w-full bg-[#102021] text-[#F4EFE6] py-24 sm:py-32 lg:py-40 border-t border-[#23393B]/40 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header Block */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-[#A7834A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#A7834A] font-sans-modern">
              MADE FOR YOU
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#F4EFE6] leading-[1.08] mb-6"
          >
            YOUR SPACE
            <br />
            ISN’T LIKE
            <br />
            <span className="text-[#A7834A]">EVERYONE ELSE’S.</span>
          </motion.h2>

          <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#E5DDCF]/80 font-normal">
            Your furniture shouldn’t be either.
          </p>
        </div>

        {/* Process Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 border-b border-[#23393B] pb-6">
          {BESPOKE_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`text-left transition-all p-3 sm:p-4 rounded-none border-b-2 relative ${
                  isActive
                    ? 'border-[#A7834A] bg-[#182E30]/40 text-[#F4EFE6]'
                    : 'border-transparent text-[#F4EFE6]/50 hover:text-[#F4EFE6]/80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs uppercase tracking-[0.25em] font-cinzel ${isActive ? 'text-[#A7834A]' : 'text-[#F4EFE6]/40'}`}>
                    {step.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#A7834A]' : 'text-[#F4EFE6]/30'}`} />
                </div>
                <span className="font-cinzel text-sm sm:text-base tracking-wider block font-medium">
                  {step.title}
                </span>
                <span className="text-[11px] text-[#F4EFE6]/60 block mt-0.5 truncate font-sans-modern">
                  {step.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Dual Column Stage Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[480px]">
          {/* Left Column: Stage Detail Content */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.45 }}
                className="space-y-6"
              >
                <div className="inline-block px-3 py-1 bg-[#182E30] border border-[#23393B] text-[11px] uppercase tracking-[0.25em] text-[#A7834A]">
                  PHASE {BESPOKE_STEPS[activeStep].number} OF 04
                </div>

                <h3 className="font-cinzel text-2xl sm:text-4xl text-[#F4EFE6] tracking-wide">
                  {BESPOKE_STEPS[activeStep].title}
                </h3>

                <p className="font-serif-luxury italic text-lg text-[#A7834A]">
                  "{BESPOKE_STEPS[activeStep].subtitle}"
                </p>

                <p className="text-sm sm:text-base text-[#F4EFE6]/75 font-sans-modern font-light leading-relaxed">
                  {BESPOKE_STEPS[activeStep].description}
                </p>

                <div className="pt-4 flex items-center gap-6">
                  <button
                    onClick={onRequestConsultation}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A7834A] hover:text-[#F4EFE6] transition-colors py-2 group"
                  >
                    <span>Initiate Your Bespoke Order</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 3))}
                      className="px-3 py-1.5 border border-[#23393B] text-xs text-[#F4EFE6]/60 hover:text-[#F4EFE6] hover:border-[#A7834A] transition-colors"
                      aria-label="Previous step"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => setActiveStep((prev) => (prev < 3 ? prev + 1 : 0))}
                      className="px-3 py-1.5 border border-[#23393B] text-xs text-[#F4EFE6]/60 hover:text-[#F4EFE6] hover:border-[#A7834A] transition-colors"
                      aria-label="Next step"
                    >
                      →
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Visual Presentation (Real Photos for Craft/Live, Architectural Blueprint/Design for Imagine/Design) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#0B1617] border border-[#23393B] shadow-2xl">
              <AnimatePresence mode="wait">
                {/* Step 01: Architectural Spatial Grid / Blueprint (You Imagine) */}
                {activeStep === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-br from-[#102021] via-[#0B1617] to-[#14282A]"
                  >
                    {/* Architectural Grid SVG background */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#A7834A" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>

                    <div className="relative z-10 flex justify-between items-start">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#A7834A] border border-[#A7834A]/40 px-3 py-1 font-sans-modern">
                        FIG 1.0 — INITIAL CLIENT CONSULTATION
                      </span>
                      <span className="text-[11px] text-[#F4EFE6]/40 font-mono">
                        SCALE 1:20 • CHATTOGRAM ATELIER
                      </span>
                    </div>

                    <div className="relative z-10 text-center max-w-md mx-auto py-6">
                      <div className="w-16 h-16 mx-auto mb-4 border border-[#A7834A]/60 flex items-center justify-center text-[#A7834A]">
                        <Compass className="w-8 h-8" />
                      </div>
                      <span className="font-cinzel text-xl sm:text-2xl text-[#F4EFE6] block mb-2">
                        DIALOGUE & SPATIAL MAPPING
                      </span>
                      <p className="text-xs text-[#F4EFE6]/60 font-sans-modern leading-relaxed">
                        We map natural light angles, doorway clearances, and human flow vectors before timber is selected.
                      </p>
                    </div>

                    <div className="relative z-10 flex justify-between items-end text-[10px] uppercase tracking-widest text-[#F4EFE6]/40 font-mono">
                      <span>X: 2400mm | Y: 1100mm | Z: 850mm</span>
                      <span>BESPOKE TOLERANCE: ±0.5mm</span>
                    </div>
                  </motion.div>
                )}

                {/* Step 02: Design & Proportions (We Design) */}
                {activeStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <SafeImage
                      src="/images/reasons/plan.png"
                      alt="Architectural design consultation sketch, fabric swatches and floor plans"
                      className="w-full h-full object-cover object-center filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102021] via-transparent to-transparent opacity-85" />
                    <div className="absolute bottom-6 left-6 text-[#F4EFE6]">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#A7834A] block mb-1">
                        DESIGN CONSULTATION & SPECIFICATION
                      </span>
                      <span className="font-cinzel text-base tracking-wider">
                        ARCHITECTURAL SKETCHES & TACTILE SWATCHES
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Step 03: Real Photo of Workshop & Craft (We Craft) */}
                {activeStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <SafeImage
                      src="/images/reasons/craft.png"
                      alt="Master Craftsman hand-carved classical relief at Heaven Furniture Mart"
                      className="w-full h-full object-cover object-center filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102021] via-transparent to-transparent opacity-85" />
                    <div className="absolute bottom-6 left-6 text-[#F4EFE6]">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#A7834A] block mb-1">
                        AUTHENTIC HEAVEN FURNITURE ATELIER
                      </span>
                      <span className="font-cinzel text-base tracking-wider">
                        HAND-CARVED FLORAL SCROLLWORK IN SOLID HARDWOOD
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Step 04: Real Photo of Final Bespoke Home (You Live) */}
                {activeStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <SafeImage
                      src="/images/reasons/space.png"
                      alt="Bespoke furniture installed in luxury residence"
                      className="w-full h-full object-cover object-center filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102021] via-transparent to-transparent opacity-85" />
                    <div className="absolute bottom-6 left-6 text-[#F4EFE6]">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#A7834A] block mb-1">
                        PRIVATE RESIDENCE INSTALLATION
                      </span>
                      <span className="font-cinzel text-base tracking-wider">
                        TAILORED LIVING SUITE IN SITU
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
