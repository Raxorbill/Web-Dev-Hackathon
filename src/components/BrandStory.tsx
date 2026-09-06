import React from 'react';
import { motion } from 'motion/react';
import { MILESTONES } from '../data/content';
import { Award, ShieldCheck, MapPin } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const BrandStory: React.FC = () => {
  return (
    <section
      id="story"
      className="relative w-full bg-[#F4EFE6] text-[#2B211B] py-24 sm:py-32 lg:py-40 border-t border-[#E8E0D2] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-[1px] bg-[#A7834A]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#8B6545] font-semibold font-sans-modern">
            HERITAGE & LEADERSHIP
          </span>
        </div>

        {/* Editorial Quote & Founder Presence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 sm:mb-32">
          {/* Left Column: Authentic Leadership Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 relative"
          >
            <div className="aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-[#E8E0D2] shadow-2xl relative">
              <SafeImage
                src="https://i.postimg.cc/tTtJkGnH/group.png"
                fallbackSrc="/images/reasons/trust.png"
                alt="Heaven Furniture Mart Founder Abul Kalam Bhuiyan and Leadership Team"
                className="w-full h-full object-cover object-top filter brightness-[0.98]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B]/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-[#F4EFE6]">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A7834A] mb-1 font-sans-modern">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>AGRABAD ACCESS ROAD • CHATTOGRAM</span>
                </div>
                <p className="font-cinzel text-sm sm:text-base tracking-wider">
                  FOUNDER & LEADERSHIP TEAM
                </p>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#8B6545]/30 -z-10 hidden sm:block pointer-events-none" />
          </motion.div>

          {/* Right Column: Large Editorial Quote */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="lg:col-span-6 space-y-8"
          >
            <span className="font-serif-luxury text-6xl sm:text-7xl text-[#8B6545]/30 block -mb-6 leading-none">
              “
            </span>

            <blockquote className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#2B211B] leading-[1.3] font-normal italic">
              At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.
            </blockquote>

            <div className="pt-4 border-t border-[#DCD2C0]">
              <h4 className="font-cinzel text-lg sm:text-xl text-[#2B211B] tracking-wider font-semibold">
                ABUL KALAM BHUIYAN
              </h4>
              <p className="text-xs uppercase tracking-[0.25em] text-[#8B6545] font-sans-modern mt-1">
                Managing Director & Founder • Heaven Furniture Mart
              </p>
              <p className="text-xs text-[#5C4D44] mt-2 font-sans-modern">
                Pioneering bespoke hand-carved master furniture commissions across Bangladesh.
              </p>
            </div>

            {/* Trust highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-4">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#8B6545] shrink-0 mt-0.5" />
                <span className="text-xs text-[#5C4D44] font-sans-modern leading-relaxed">
                  Certified Kiln-Seasoned Hardwood with Lifetime Structural Integrity
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Award className="w-5 h-5 text-[#8B6545] shrink-0 mt-0.5" />
                <span className="text-xs text-[#5C4D44] font-sans-modern leading-relaxed">
                  Member of Chattogram Chamber of Commerce & Industry
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Physical Flagship Showroom Architectural Showcase */}
        <div className="pt-12 sm:pt-16 pb-16 sm:pb-20 border-t border-[#DCD2C0]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#E8E0D2] shadow-2xl"
            >
              <SafeImage
                src="https://i.postimg.cc/R0tN3HMn/showroom.png"
                fallbackSrc="/images/reasons/trust.png"
                alt="Heaven Furniture Mart Flagship Showroom Building Agrabad Access Road"
                className="w-full h-full object-cover object-center filter brightness-[0.98]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 text-[#F4EFE6]">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A7834A] mb-1 font-sans-modern">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>AGRABAD ACCESS ROAD • CHATTOGRAM</span>
                </div>
                <p className="font-cinzel text-sm sm:text-base tracking-wider">
                  TWO-STORY FLAGSHIP SHOWROOM
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-5 space-y-5"
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#8B6545] block font-sans-modern font-semibold">
                EXPERIENCE THE ATELIER IN PERSON
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl text-[#2B211B] tracking-wider leading-snug">
                WHERE CRAFT MEETS REALITY.
              </h3>
              <p className="text-sm text-[#5C4D44] font-sans-modern font-light leading-relaxed">
                Step into our flagship destination on Agrabad Access Road. Spanning two expansive floors, our curated showroom brings together bespoke living sets, hand-carved dining centerpieces, and intimate consultation suites where your floor plans are brought to life.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center gap-2 bg-[#2B211B] hover:bg-[#43342B] text-[#F4EFE6] px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors w-full sm:w-auto text-center"
                >
                  <span>PLAN A VISIT</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Heaven+Furniture+Mart+Agrabad+Access+Road+Chattogram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#8B6545]/50 hover:border-[#8B6545] text-[#2B211B] px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors w-full sm:w-auto text-center"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#8B6545]" />
                  <span>VIEW LOCATION</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subtle Milestone Timeline */}
        <div className="pt-16 border-t border-[#DCD2C0]">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#8B6545] block mb-2 font-sans-modern">
              JOURNEY OF DISTINCTION
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl text-[#2B211B] tracking-wider">
              MILESTONES IN CRAFTSMANSHIP
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {MILESTONES.map((item, idx) => (
              <div
                key={item.year}
                className="relative p-5 border-t border-[#8B6545]/40 hover:border-[#8B6545] transition-colors group"
              >
                <span className="text-xs font-mono font-bold text-[#8B6545] block mb-2">
                  {item.year}
                </span>
                <h4 className="font-cinzel text-sm text-[#2B211B] font-semibold tracking-wide mb-1.5 group-hover:text-[#8B6545] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5C4D44] font-light leading-relaxed font-sans-modern">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
