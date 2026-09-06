import React, { useState, useEffect } from 'react';
import { Menu, ArrowRight } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  onRequestConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');

  const navItems = [
    { label: 'SPACES', href: '#spaces', id: 'spaces' },
    { label: 'BESPOKE', href: '#bespoke', id: 'bespoke' },
    { label: 'CRAFT', href: '#craft', id: 'craft' },
    { label: 'WHY HEAVEN', href: '#why-heaven', id: 'why-heaven' },
    { label: 'STORY', href: '#story', id: 'story' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      // Calculate scroll progress percentage
      const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalDocHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / totalDocHeight) * 100));
        setScrollProgress(progress);
      }

      // Active section detection
      const scrollPosition = scrollY + 160;
      let currentSection = '';
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = item.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#' || href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#102021]/95 backdrop-blur-md border-b border-[#23393B]/70 py-3 sm:py-4 shadow-xl'
            : 'bg-gradient-to-b from-[#102021]/80 to-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Left */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A7834A] rounded-sm p-0.5"
            aria-label="Heaven Furniture Mart Home"
          >
            <span className="font-cinzel text-xl sm:text-2xl tracking-[0.25em] text-[#F4EFE6] font-medium group-hover:text-[#A7834A] transition-colors">
              HEAVEN
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#A7834A] -mt-0.5">
              FURNITURE MART
            </span>
          </a>

          {/* Desktop Center Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-10" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-xs uppercase tracking-[0.2em] transition-all py-1 relative group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A7834A] ${
                    isActive ? 'text-[#A7834A] font-semibold' : 'text-[#F4EFE6]/80 hover:text-[#A7834A]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#A7834A] transition-all duration-300 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              id="nav-request-consultation-btn"
              onClick={onRequestConsultation}
              className="group relative inline-flex items-center gap-2 border border-[#A7834A] px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-[#F4EFE6] hover:bg-[#A7834A] hover:text-[#102021] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A7834A]"
            >
              <span>REQUEST A CONSULTATION</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A7834A] group-hover:text-[#102021] transition-colors" />
            </button>
          </div>

          {/* Mobile Right Menu Trigger */}
          <div className="flex md:hidden items-center">
            <button
              id="open-mobile-menu"
              onClick={() => setMobileOpen(true)}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F4EFE6] hover:text-[#A7834A] p-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A7834A]"
              aria-label="Open navigation menu"
            >
              <span className="text-[11px] font-medium tracking-widest">MENU</span>
              <Menu className="w-5 h-5 text-[#A7834A]" />
            </button>
          </div>
        </div>

        {/* Scroll Progress Hairline Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent pointer-events-none overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#8B6545] via-[#A7834A] to-[#E5DDCF] transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onRequestConsultation={onRequestConsultation}
      />
    </>
  );
};
