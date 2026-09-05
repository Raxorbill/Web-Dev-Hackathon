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
      className="relative min-h-screen w-full flex items-center justify-start bg-[#102021] text-[#F4EFE6] overflow-hidden pt-24 pb-16 lg:py-0"
    >
      {/* Background Cinematic Video/Media with Furniture Reveal from Cloudinary */}
      <HeroVideo
        posterSrc="/images/bespoke/bespoke-home.png"
        directVideoSrc="https://res.cloudinary.com/xsz2cpge/video/upload/Hevean_furniture.mp4"
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 flex flex-col justify-center min-h-[85vh]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl lg:max-w-3xl"
        >
          {/* Step 1: Small brand label */}
          <motion.div variants={lineVariants} className="mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#A7834A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#A7834A] font-medium font-sans-modern">
              HEAVEN FURNITURE MART
            </span>
          </motion.div>

          {/* Step 2: Headline reveals line by line */}
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-medium leading-[1.05] tracking-tight text-[#F4EFE6] mb-8">
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
            className="text-base sm:text-lg text-[#F4EFE6]/80 font-light leading-relaxed max-w-xl mb-10 font-sans-modern"
          >
            Bespoke furniture and interior styling, designed around your space, taste, and lifestyle.
          </motion.p>

          {/* Step 4: Call to Actions */}
          <motion.div
            variants={lineVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
          >
            {/* Primary CTA */}
            <button
              id="hero-request-consultation-btn"
              onClick={onRequestConsultation}
              className="group relative inline-flex items-center justify-center gap-3 bg-[#A7834A] hover:bg-[#B89358] text-[#102021] px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <span>REQUEST A CONSULTATION</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary subtle explore action */}
            <button
              id="hero-explore-scroll-btn"
              onClick={handleScrollToExplore}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F4EFE6]/70 hover:text-[#A7834A] transition-colors py-2 px-2"
            >
              <span>EXPLORE</span>
              <ChevronDown className="w-4 h-4 text-[#A7834A] group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* Subtle trust badge */}
          <motion.div
            variants={lineVariants}
            className="mt-14 pt-6 border-t border-[#23393B]/60 flex items-center gap-6 text-[11px] uppercase tracking-widest text-[#F4EFE6]/50 font-sans-modern"
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
