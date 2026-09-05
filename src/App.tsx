import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { Spaces } from './components/Spaces';
import { BespokeExperience } from './components/BespokeExperience';
import { Craft } from './components/Craft';
import { WhyHeaven } from './components/WhyHeaven';
import { BrandStory } from './components/BrandStory';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { FloatingActions } from './components/FloatingActions';
import { HeavenConcierge } from './components/HeavenConcierge';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState<string>('Living Room');

  const handleOpenConsultation = (space: string = 'Living Room') => {
    setSelectedSpace(space);
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#102021] text-[#F4EFE6] selection:bg-[#A7834A] selection:text-[#102021] overflow-x-hidden">
      {/* Top Luxury Navigation */}
      <Navbar onRequestConsultation={() => handleOpenConsultation('Bespoke Commission')} />

      {/* Main Cinematic Landing Page Flow */}
      <main>
        {/* Section 02: Full-screen Cinematic Hero */}
        <Hero onRequestConsultation={() => handleOpenConsultation('Living Room')} />

        {/* Section 03: Brand Introduction & Philosophy (Warm Ivory) */}
        <BrandIntro />

        {/* Section 04: Explore Your Space (2x2 Immersive Visual Panels) */}
        <Spaces onSelectSpace={(spaceName) => handleOpenConsultation(spaceName)} />

        {/* Section 05: The Bespoke Experience (Deep Charcoal 4-Stage Visual Journey) */}
        <BespokeExperience onRequestConsultation={() => handleOpenConsultation('Bespoke Commission')} />

        {/* Section 06: The Craft (Warm Ivory Editorial Sticky Presentation) */}
        <Craft />

        {/* Section 07: Why Heaven? (Deep Charcoal Large Editorial Numbered List) */}
        <WhyHeaven onRequestConsultation={() => handleOpenConsultation('Bespoke Commission')} />

        {/* Section 08: Brand Story & Social Proof (Warm Ivory Founder Quote & Heritage) */}
        <BrandStory />

        {/* Section 09: Final Cinematic Closing CTA */}
        <FinalCTA onRequestConsultation={() => handleOpenConsultation('Bespoke Commission')} />
      </main>

      {/* Section 10: Luxury Minimal Footer */}
      <Footer onRequestConsultation={() => handleOpenConsultation('Bespoke Commission')} />

      {/* Floating Concierge & Back-To-Top */}
      <FloatingActions onRequestConsultation={() => handleOpenConsultation('Bespoke Commission')} />

      {/* Official Virtual Concierge: Heaven Concierge */}
      <HeavenConcierge onRequestConsultation={handleOpenConsultation} />

      {/* Primary Conversion Goal: Luxury Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={handleCloseConsultation}
        defaultSpace={selectedSpace}
      />
    </div>
  );
}
