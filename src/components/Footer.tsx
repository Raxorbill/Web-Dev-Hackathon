import React from 'react';

interface FooterProps {
  onRequestConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestConsultation }) => {
  return (
    <footer
      id="main-footer"
      className="relative w-full bg-[#0B1617] text-[#F4EFE6] border-t border-[#23393B]/70 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#23393B]/50">
          {/* Left: Brand Identity */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-cinzel text-2xl tracking-[0.25em] text-[#F4EFE6] block">
              HEAVEN
            </span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#A7834A] block">
              FURNITURE MART
            </span>

            <div className="pt-4 text-xs font-serif-luxury text-[#E5DDCF]/80 space-y-1 text-base italic leading-relaxed">
              <p>Designed.</p>
              <p>Crafted.</p>
              <p>Customized.</p>
            </div>

            <p className="text-xs text-[#F4EFE6]/50 font-sans-modern pt-2 max-w-sm leading-relaxed">
              Bespoke luxury furniture and spatial architecture tailored exclusively to your residence and lifestyle in Chattogram, Bangladesh.
            </p>
          </div>

          {/* Center: Navigation Explore */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A7834A] font-semibold block font-sans-modern">
              EXPLORE
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-widest text-[#F4EFE6]/70 font-sans-modern">
              <li>
                <a
                  href="#spaces"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('spaces')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#A7834A] transition-colors"
                >
                  Spaces
                </a>
              </li>
              <li>
                <a
                  href="#bespoke"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('bespoke')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#A7834A] transition-colors"
                >
                  Bespoke
                </a>
              </li>
              <li>
                <a
                  href="#craft"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('craft')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#A7834A] transition-colors"
                >
                  Craft
                </a>
              </li>
              <li>
                <a
                  href="#why-heaven"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('why-heaven')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#A7834A] transition-colors"
                >
                  Why Heaven
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#A7834A] transition-colors"
                >
                  Heritage Story
                </a>
              </li>
              <li>
                <button
                  onClick={onRequestConsultation}
                  className="text-[#A7834A] hover:underline transition-all text-left uppercase"
                >
                  Request A Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Right: Visit & Contact */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A7834A] font-semibold block font-sans-modern">
                VISIT SHOWROOM
              </span>
              <p className="text-xs text-[#F4EFE6]/70 font-sans-modern leading-relaxed">
                Agrabad Access Road
                <br />
                Chattogram, Bangladesh
              </p>
              <p className="text-[11px] text-[#A7834A] font-sans-modern">
                Open Daily: 10:00 AM – 9:00 PM
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#A7834A] font-semibold block font-sans-modern">
                  CONTACT
                </span>
                <p className="text-xs text-[#F4EFE6]/80 font-sans-modern">
                  <a href="tel:+8801960481983" className="hover:text-[#A7834A] transition-colors">
                    +880 1960-481983
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#A7834A] font-semibold block font-sans-modern">
                  SOCIAL
                </span>
                <div className="flex flex-col space-y-1 text-xs text-[#F4EFE6]/70 font-sans-modern">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A7834A] transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A7834A] transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A7834A] transition-colors"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F4EFE6]/40 font-sans-modern gap-4">
          <p>© 2026 Heaven Furniture Mart. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Bespoke Hand-Carved Furniture Atelier</span>
            <span className="w-1 h-1 rounded-full bg-[#A7834A]" />
            <span>Chattogram, Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
