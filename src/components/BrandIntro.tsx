import React from 'react';
import { motion } from 'motion/react';
import { SafeImage } from './SafeImage';

export const BrandIntro: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="relative w-full bg-[#F4EFE6] text-[#2B211B] py-24 sm:py-32 lg:py-40 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Editorial Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Header Block */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-[#A7834A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8B6545] font-semibold font-sans-modern">
              THE HEAVEN PHILOSOPHY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.12] text-[#2B211B] mb-8"
          >
            WE DON’T FILL SPACES.
            <br />
            <span className="italic font-serif-luxury font-normal text-[#8B6545]">
              WE GIVE THEM CHARACTER.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#5C4D44] font-light leading-relaxed max-w-2xl font-sans-modern"
          >
            Heaven Furniture Mart creates bespoke furniture designed around real spaces, real lifestyles, and individual taste.
          </motion.p>
        </div>

        {/* Cinematic Authentic Showroom Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-hidden shadow-2xl bg-[#E8E0D2]"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden group">
            <SafeImage
              src="https://i.postimg.cc/0jn6k19D/fill-space.png"
              fallbackSrc="/images/space.png"
              alt="Heaven Furniture Mart Curated Architectural Living"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02] filter brightness-[0.97]"
            />
            {/* Subtle luxury edge vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B]/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Architectural overlay caption */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 text-[#F4EFE6] z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] block text-[#A7834A] mb-1 font-sans-modern">
                ATELIER SHOWROOM • AGRABAD ACCESS ROAD
              </span>
              <p className="font-cinzel text-base sm:text-lg tracking-wider">
                CURATED ARCHITECTURAL LIVING
              </p>
            </div>
          </div>
        </motion.div>

        {/* Elegantly Spaced Brand Pillars */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#DCD2C0] grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <span className="font-cinzel text-xl sm:text-2xl tracking-[0.2em] text-[#2B211B] block">
              BESPOKE
            </span>
            <div className="w-10 h-[1px] bg-[#A7834A]" />
            <p className="text-sm text-[#5C4D44] font-light leading-relaxed pt-1">
              Every curve, dimension, and contour engineered to complement the physical geometry of your residence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            <span className="font-cinzel text-xl sm:text-2xl tracking-[0.2em] text-[#2B211B] block">
              CRAFTED
            </span>
            <div className="w-10 h-[1px] bg-[#A7834A]" />
            <p className="text-sm text-[#5C4D44] font-light leading-relaxed pt-1">
              Heirloom-grade timber seasoned against coastal moisture, hand-carved with traditional bench techniques.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-2"
          >
            <span className="font-cinzel text-xl sm:text-2xl tracking-[0.2em] text-[#2B211B] block">
              PERSONAL
            </span>
            <div className="w-10 h-[1px] bg-[#A7834A]" />
            <p className="text-sm text-[#5C4D44] font-light leading-relaxed pt-1">
              Curated fabrics, finishes, and ergonomic tolerances harmonized with your lifestyle and family rhythm.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
