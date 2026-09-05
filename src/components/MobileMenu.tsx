import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, MapPin, Phone } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestConsultation: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onRequestConsultation
}) => {
  // Support closing with Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const menuLinks = [
    { label: 'EXPLORE SPACES', href: '#spaces' },
    { label: 'LIVING ROOM', href: '#spaces', sub: true },
    { label: 'BEDROOM', href: '#spaces', sub: true },
    { label: 'DINING', href: '#spaces', sub: true },
    { label: 'OFFICE & STUDY', href: '#spaces', sub: true },
    { label: 'BESPOKE EXPERIENCE', href: '#bespoke' },
    { label: 'OUR CRAFT', href: '#craft' },
    { label: 'WHY HEAVEN', href: '#why-heaven' },
    { label: 'HERITAGE & STORY', href: '#story' }
  ];

  const handleLinkClick = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu-overlay"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#102021] text-[#F4EFE6] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-[#23393B] pb-5">
            <div>
              <span className="font-cinzel text-xl tracking-[0.25em] text-[#F4EFE6] block">
                HEAVEN
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#A7834A] block">
                FURNITURE MART
              </span>
            </div>
            <button
              id="close-mobile-menu"
              onClick={onClose}
              className="p-2 text-[#A7834A] hover:text-[#F4EFE6] transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Links list */}
          <div className="py-8 space-y-3">
            {menuLinks.map((link, idx) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * idx, duration: 0.3 }}
              >
                <button
                  onClick={() => handleLinkClick(link.href)}
                  className={`block text-left transition-colors ${
                    link.sub
                      ? 'pl-6 text-sm text-[#F4EFE6]/60 hover:text-[#A7834A] tracking-wider'
                      : 'text-xl sm:text-2xl font-cinzel tracking-wider text-[#F4EFE6] hover:text-[#A7834A]'
                  }`}
                >
                  {link.label}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Bottom Action & Info */}
          <div className="border-t border-[#23393B] pt-6 space-y-4">
            <button
              id="mobile-request-consultation-btn"
              onClick={() => {
                onClose();
                onRequestConsultation();
              }}
              className="w-full bg-[#A7834A] hover:bg-[#B89358] text-[#102021] py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <span>REQUEST A CONSULTATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-xs text-[#F4EFE6]/60 space-y-1 font-sans-modern">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A7834A]" />
                <span>Agrabad Access Road, Chattogram</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#A7834A]" />
                <span>+880 1960-481983</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
