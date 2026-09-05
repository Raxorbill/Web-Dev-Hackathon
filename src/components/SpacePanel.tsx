import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SpaceItem } from '../types';
import { SafeImage } from './SafeImage';

interface SpacePanelProps {
  space: SpaceItem;
  index: number;
  onSelectSpace: (spaceName: string) => void;
}

export const SpacePanel: React.FC<SpacePanelProps> = ({ space, index, onSelectSpace }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.12 }}
      onClick={() => onSelectSpace(space.name)}
      className="group relative h-[380px] sm:h-[460px] lg:h-[520px] w-full overflow-hidden bg-[#0B1617] cursor-pointer"
    >
      {/* Background Photography with Slow Controlled Scale */}
      <SafeImage
        src={space.image}
        alt={`Heaven Furniture Mart ${space.name}`}
        className="w-full h-full object-cover object-center transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105 filter brightness-[0.88] contrast-[1.03]"
      />

      {/* Subtle Default Overlay -> Lightens slightly on hover */}
      <div className="absolute inset-0 bg-[#102021]/50 group-hover:bg-[#102021]/30 transition-colors duration-700 pointer-events-none" />

      {/* Bottom Gradient for Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#102021]/95 via-[#102021]/40 to-transparent pointer-events-none" />

      {/* Panel Content */}
      <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between z-10">
        {/* Top Space Index */}
        <div className="flex justify-between items-start">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A7834A] font-sans-modern">
            0{index + 1}
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#F4EFE6]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-sans-modern">
            BESPOKE COMMISSION
          </span>
        </div>

        {/* Bottom Title & Action */}
        <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
          <span className="text-xs uppercase tracking-[0.2em] text-[#A7834A] block mb-1.5 font-sans-modern">
            {space.subtitle}
          </span>

          <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl tracking-wider text-[#F4EFE6] font-medium mb-3">
            {space.name}
          </h3>

          <p className="text-xs sm:text-sm text-[#F4EFE6]/70 line-clamp-2 max-w-md mb-4 font-sans-modern font-light leading-relaxed">
            {space.description}
          </p>

          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F4EFE6] group-hover:text-[#A7834A] transition-colors">
            <span>Explore Customization</span>
            <ArrowRight className="w-4 h-4 transform transition-transform duration-500 group-hover:translate-x-1.5 text-[#A7834A]" />
          </div>
        </div>
      </div>

      {/* Subtle Border Line */}
      <div className="absolute inset-0 border border-[#23393B]/40 group-hover:border-[#A7834A]/50 transition-colors duration-700 pointer-events-none" />
    </motion.div>
  );
};
