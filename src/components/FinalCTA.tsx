import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Phone, MessageSquare } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface FinalCTAProps {
  onRequestConsultation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestConsultation }) => {
  return (
    <section
      id="consultation"
      className="relative min-h-[90vh] w-full flex items-center justify-center bg-[#0B1617] text-[#F4EFE6] overflow-hidden py-24 sm:py-32 scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Cinematic Background Photography with Dark Luxury Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <SafeImage
          src="/images/bespoke/bespoke-home.png"
          alt="Heaven Furniture Mart Luxury Architectural Commission"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#102021] via-[#102021]/60 to-[#102021]" />
        <div className="absolute inset-0 bg-[#102021]/40 backdrop-blur-[1px]" />
      </div>

      {/* Centered Editorial Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="w-6 h-[1px] bg-[#A7834A]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#A7834A] font-sans-modern">
            BEGIN YOUR BESPOKE COMMISSION
          </span>
          <span className="w-6 h-[1px] bg-[#A7834A]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#F4EFE6] leading-[1.1] mb-6"
        >
          YOUR SPACE
          <br />
          DESERVES
          <br />
          <span className="text-[#A7834A]">SOMETHING PERSONAL.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl text-[#F4EFE6]/80 font-light font-sans-modern max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Let’s create something designed around you.
        </motion.p>

        {/* Primary Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          <button
            id="final-request-consultation-btn"
            onClick={onRequestConsultation}
            className="w-full sm:w-auto bg-[#A7834A] hover:bg-[#B89358] text-[#102021] px-10 py-4 text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl group"
          >
            <span>REQUEST A CONSULTATION</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://wa.me/8801960481983"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-[#A7834A]/60 hover:border-[#A7834A] text-[#F4EFE6] px-8 py-4 text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-2.5 transition-colors hover:bg-[#182E30]"
          >
            <MessageSquare className="w-4 h-4 text-[#A7834A]" />
            <span>DIRECT WHATSAPP</span>
          </a>
        </motion.div>

        {/* Showroom & Contact Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-10 border-t border-[#23393B]/70 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-xs uppercase tracking-widest text-[#F4EFE6]/60 font-sans-modern"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#A7834A]" />
            <span>Agrabad Access Road, Chattogram, Bangladesh</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#A7834A]" />
            <a href="tel:+8801960481983" className="hover:text-[#A7834A] transition-colors">
              +880 1960-481983
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
