import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Phone, MapPin, Calendar, Clock } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSpace?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultSpace = 'Living Room'
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [space, setSpace] = useState(defaultSpace);
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync selected space when modal opens or defaultSpace changes
  useEffect(() => {
    if (isOpen) {
      if (defaultSpace) {
        setSpace(defaultSpace);
      }
    }
  }, [isOpen, defaultSpace]);

  // Support closing with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  const spaceOptions = [
    'Living Room',
    'Bedroom Suite',
    'Dining Room',
    'Office & Study',
    'Full Home Bespoke',
    'Commercial Project'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="consultation-modal-root" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B1617]/85 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#102021] border border-[#23393B] text-[#F4EFE6] p-6 sm:p-10 shadow-2xl z-10 my-8"
          >
            {/* Close Button */}
            <button
              id="close-consultation-modal"
              onClick={onClose}
              className="absolute top-6 right-6 text-[#A7834A] hover:text-[#F4EFE6] transition-colors p-2"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-8 pr-8">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#A7834A] block mb-2 font-sans-modern">
                    Bespoke Commission
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-cinzel tracking-wider text-[#F4EFE6]">
                    REQUEST A CONSULTATION
                  </h3>
                  <p className="mt-2 text-sm text-[#F4EFE6]/70 leading-relaxed font-sans-modern">
                    Meet with our design directors at our Agrabad showroom or schedule an on-site spatial measurement.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#F4EFE6]/70 mb-2 font-sans-modern">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Tariq Ahmed"
                        className="w-full bg-[#182E30] border border-[#23393B] px-4 py-3 text-sm text-[#F4EFE6] focus:border-[#A7834A] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#F4EFE6]/70 mb-2 font-sans-modern">
                        Phone or WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+880 1..."
                        className="w-full bg-[#182E30] border border-[#23393B] px-4 py-3 text-sm text-[#F4EFE6] focus:border-[#A7834A] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#F4EFE6]/70 mb-2 font-sans-modern">
                      Space of Interest
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {spaceOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setSpace(opt)}
                          className={`px-3 py-2 text-xs uppercase tracking-wider text-left transition-all border ${
                            space === opt
                              ? 'border-[#A7834A] bg-[#A7834A]/15 text-[#F4EFE6]'
                              : 'border-[#23393B] bg-[#182E30]/50 text-[#F4EFE6]/70 hover:border-[#A7834A]/50'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#F4EFE6]/70 mb-2 font-sans-modern">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#182E30] border border-[#23393B] px-4 py-3 text-sm text-[#F4EFE6] focus:border-[#A7834A] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#F4EFE6]/70 mb-2 font-sans-modern">
                      Your Space & Design Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Share details on room dimensions, preferred wood, or specific style aesthetics..."
                      className="w-full bg-[#182E30] border border-[#23393B] px-4 py-3 text-sm text-[#F4EFE6] focus:border-[#A7834A] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      id="submit-consultation-request"
                      type="submit"
                      className="w-full bg-[#A7834A] hover:bg-[#B89358] text-[#102021] py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300"
                    >
                      CONFIRM CONSULTATION REQUEST →
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#F4EFE6]/50 pt-2 border-t border-[#23393B]/60">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#A7834A]" /> Showroom: 10 AM – 9 PM Daily
                    </span>
                    <a
                      href="https://wa.me/8801960481983"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A7834A] hover:underline flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" /> WhatsApp Direct (+880 1960-481983)
                    </a>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-[#A7834A] flex items-center justify-center text-[#A7834A]">
                  <Check className="w-8 h-8" />
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#A7834A] block mb-2 font-sans-modern">
                  Consultation Initiated
                </span>
                <h3 className="text-2xl sm:text-3xl font-cinzel tracking-wider text-[#F4EFE6] mb-4">
                  THANK YOU, {fullName.toUpperCase()}.
                </h3>
                <p className="text-sm text-[#F4EFE6]/80 max-w-md mx-auto mb-6 leading-relaxed">
                  Our Senior Interior Director will contact you at <span className="text-[#A7834A]">{phone}</span> shortly to coordinate your personalized bespoke design session for your <span className="text-[#F4EFE6]">{space}</span>.
                </p>

                <div className="bg-[#182E30] border border-[#23393B] p-4 text-xs text-left max-w-md mx-auto mb-8 space-y-2">
                  <div className="flex items-start gap-2 text-[#F4EFE6]/80">
                    <MapPin className="w-4 h-4 text-[#A7834A] shrink-0 mt-0.5" />
                    <span>Agrabad Access Road, Chattogram, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#F4EFE6]/80">
                    <Phone className="w-4 h-4 text-[#A7834A] shrink-0" />
                    <span>Direct Atelier Line: +880 1960-481983</span>
                  </div>
                </div>

                <button
                  id="close-consultation-confirmed"
                  onClick={handleReset}
                  className="bg-[#A7834A] hover:bg-[#B89358] text-[#102021] px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
                >
                  RETURN TO SHOWROOM
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
