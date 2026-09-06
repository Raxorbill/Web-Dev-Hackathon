import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { HeroVideo } from './HeroVideo';

interface HeroProps {
  onRequestConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestConsultation }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const handleScrollToExplore = () => {
    const nextSection = document.getElementById('philosophy');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] lg:min-h-screen w-full flex items-center justify-start bg-[#102021] text-[#F4EFE6] overflow-hidden pt-16 pb-6 sm:pt-24 sm:pb-16 lg:py-0"
    >
      {/* Background Cinematic Video/Media with Furniture Reveal from Cloudinary */}
      <HeroVideo
        posterSrc="/images/bespoke/bespoke-home.png"
        directVideoSrc="https://res.cloudinary.com/xsz2cpge/video/upload/Hevean_furniture.mp4"
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 py-2 sm:py-12 flex flex-col justify-center min-h-[calc(100dvh-5.5rem)] lg:min-h-[85vh]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl lg:max-w-3xl"
        >
          {/* Step 1: Small brand label */}
          <motion.div variants={lineVariants} className="mb-2.5 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <span className="w-5 sm:w-8 h-[1px] bg-[#A7834A]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.3em] text-[#A7834A] font-medium font-sans-modern">
              HEAVEN FURNITURE MART
            </span>
          </motion.div>

          {/* Step 2: Headline reveals line by line */}
          <h1 className="font-cinzel text-[1.85rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-[5.25rem] font-medium leading-[1.08] sm:leading-[1.05] tracking-tight text-[#F4EFE6] mb-3.5 sm:mb-8">
            <motion.span variants={lineVariants} className="block">
              FURNITURE,
            </motion.span>
            <motion.span variants={lineVariants} className="block text-[#E5DDCF]">
              CRAFTED
            </motion.span>
            <motion.span variants={lineVariants} className="block text-[#A7834A]/90">
              AROUND YOU.
            </motion.span>
          </h1>

          {/* Step 3: Description */}
          <motion.p
            variants={lineVariants}
            className="text-xs sm:text-base lg:text-lg text-[#F4EFE6]/85 font-light leading-relaxed max-w-xl mb-4 sm:mb-10 font-sans-modern"
          >
            Bespoke furniture and interior styling, designed around your space, taste, and lifestyle.
          </motion.p>

          {/* Step 4: Call to Actions */}
          <motion.div
            variants={lineVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-6 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <button
              id="hero-request-consultation-btn"
              onClick={onRequestConsultation}
              className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#A7834A] hover:bg-[#B89358] text-[#102021] px-5 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.25em] font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl text-center cursor-pointer"
            >
              <span>REQUEST A CONSULTATION</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary subtle explore action */}
            <button
              id="hero-explore-scroll-btn"
              onClick={handleScrollToExplore}
              className="group inline-flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.25em] text-[#F4EFE6]/75 hover:text-[#A7834A] transition-colors py-1.5 sm:py-2.5 px-2 sm:px-3 cursor-pointer"
            >
              <span>EXPLORE</span>
              <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A7834A] group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* Subtle trust badge */}
          <motion.div
            variants={lineVariants}
            className="mt-4 sm:mt-14 pt-3 sm:pt-6 border-t border-[#23393B]/60 flex flex-wrap items-center gap-y-1.5 gap-x-2.5 sm:gap-6 text-[9px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-[#F4EFE6]/60 font-sans-modern"
          >
            <span>BESPOKE ATELIER</span>
            <span className="w-1 h-1 rounded-full bg-[#A7834A]" />
            <span>AGRABAD • CHATTOGRAM</span>
            <span className="w-1 h-1 rounded-full bg-[#A7834A]" />
            <span>EST. 2020</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating subtle scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#F4EFE6]/40 select-none z-20">
        <span className="rotate-90 origin-right translate-y-3">SCROLL</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#A7834A] to-transparent animate-pulse" />
      </div>
    </section>
  );
};
