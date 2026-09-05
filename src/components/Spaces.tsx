import React from 'react';
import { motion } from 'motion/react';
import { SPACES_DATA } from '../data/content';
import { SpacePanel } from './SpacePanel';

interface SpacesProps {
  onSelectSpace: (spaceName: string) => void;
}

export const Spaces: React.FC<SpacesProps> = ({ onSelectSpace }) => {
  return (
    <section
      id="spaces"
      className="relative w-full bg-[#102021] text-[#F4EFE6] py-24 sm:py-32 lg:py-40 border-t border-[#23393B]/50 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#A7834A]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#A7834A] font-sans-modern">
                COLLECTIONS & SPATIAL DOMAINS
              </span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#F4EFE6] leading-[1.1]">
              EXPLORE
              <br />
              <span className="text-[#E5DDCF]/90">YOUR SPACE.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#F4EFE6]/70 max-w-md font-sans-modern font-light leading-relaxed">
            Every room demands a distinct dialogue between scale, light, and utility. Select a space to begin conceptualizing your custom commission.
          </p>
        </div>

        {/* 2 x 2 Immersive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SPACES_DATA.map((space, idx) => (
            <SpacePanel
              key={space.id}
              space={space}
              index={idx}
              onSelectSpace={onSelectSpace}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
