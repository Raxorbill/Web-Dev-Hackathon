import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, MessageSquare, Phone } from 'lucide-react';

interface FloatingActionsProps {
  onRequestConsultation: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onRequestConsultation }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 420);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <aside aria-label="Floating Controls">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-[4.8rem] right-6 z-30 flex flex-col items-end gap-2.5 pointer-events-auto"
          >
            {/* Quick Inquiry Pill */}
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/8801960481983?text=Hello%20Heaven%20Furniture%20Mart,%20I%20would%20like%20to%20inquire%20about%20a%20bespoke%20furniture%20commission."
                target="_blank"
                rel="noopener noreferrer"
                title="Direct WhatsApp with Atelier Concierge"
                className="group flex items-center gap-2 px-3.5 py-2 bg-[#102021]/95 hover:bg-[#14282A] text-[#F4EFE6] border border-[#23393B] hover:border-[#A7834A] shadow-xl backdrop-blur-md transition-all duration-300 rounded-none text-xs font-sans-modern"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium hidden sm:inline-block">
                  WHATSAPP
                </span>
              </a>

              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                title="Return to top of page"
                aria-label="Scroll back to top"
                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#102021]/95 hover:bg-[#A7834A] text-[#A7834A] hover:text-[#102021] border border-[#23393B] hover:border-[#A7834A] shadow-xl backdrop-blur-md transition-all duration-300 rounded-none group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A7834A]"
              >
                <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};
