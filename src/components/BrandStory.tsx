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
          {/* Left Column: Authentic Showroom Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] w-full overflow-hidden bg-[#E8E0D2] shadow-2xl relative">
              <SafeImage
                src="/images/story/heritage.png"
                fallbackSrc="/images/reasons/trust.png"
                alt="Heaven Furniture Mart Heritage & Leadership"
                className="w-full h-full object-cover object-center filter brightness-[0.98]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B]/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-[#F4EFE6]">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A7834A] mb-1 font-sans-modern">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>AGRABAD ACCESS ROAD • CHATTOGRAM</span>
                </div>
                <p className="font-cinzel text-sm sm:text-base tracking-wider">
                  HERITAGE & LEADERSHIP
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
            className="lg:col-span-7 space-y-8"
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
            <div className="grid grid-cols-2 gap-4 pt-4">
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
