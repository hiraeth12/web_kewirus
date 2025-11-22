"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  label,
  isActive,
  isHovered,
  onHover,
  onClick,
}) => {
  return (
    <motion.a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      onMouseEnter={() => onHover(href)}
      onMouseLeave={() => onHover(null)}
      className="relative px-4 py-2.5 group transition-all duration-300 inline-block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Text dengan gradient dan scale animation */}
      <motion.span
        className={`inline-block ${
          isActive || isHovered
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-cyan-300 to-sky-400'
            : 'text-slate-200'
        }`}
        animate={{
          scale: isActive || isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {label}
      </motion.span>

      {/* Underline gradient untuk active state */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#38BDF8] via-cyan-300 to-sky-400 rounded-full pointer-events-none"
            initial={{ width: 0, opacity: 0, x: -8 }}
            animate={{ width: '100%', opacity: 1, x: 0 }}
            exit={{ width: 0, opacity: 0, x: 8 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          />
        )}
      </AnimatePresence>

      {/* Underline gradient untuk hover state */}
      <AnimatePresence>
        {!isActive && isHovered && (
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#38BDF8] via-cyan-300 to-sky-400 rounded-full opacity-60 pointer-events-none"
            initial={{ width: 0, opacity: 0, x: -8 }}
            animate={{ width: '100%', opacity: 0.6, x: 0 }}
            exit={{ width: 0, opacity: 0, x: 8 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          />
        )}
      </AnimatePresence>
    </motion.a>
  );
};

export default function FuturisticNavbar() {
  const [hoveredNav, setHoveredNav] = React.useState<string | null>(null);
  const [activeNav, setActiveNav] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'portfolio', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNav(`#${sectionId}`);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const sectionId = id.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(id);
    }
  };

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes slideAndFadeIn {
          from {
            width: 0;
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            width: 100%;
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideAndFadeInHover {
          from {
            width: 0;
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            width: 100%;
            opacity: 0.6;
            transform: translateX(0);
          }
        }
      `}</style>

      <nav className="fixed left-0 right-0 top-6 z-40 mx-auto max-w-7xl px-6">
        <div className="backdrop-blur-md bg-white/4 dark:bg-[#0F172A]/60 border border-white/6 dark:border-[#38BDF822] rounded-2xl px-8 py-4 flex items-center justify-between shadow-[0_4px_30px_rgba(56,189,248,0.06)]">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
          >
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveNav(null);
              }}
              className="text-white text-lg font-bold tracking-tight flex items-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white shadow-[0_0_12px_rgba(56,189,248,0.18)] transition-all duration-300">
                <Image 
                  src="/images/heroicon.png" 
                  alt="Logo" 
                  width={40} 
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="hidden sm:inline">WebCare Solutions</span>
            </a>
          </motion.div>

          {/* Navigation dengan underline gradient */}
          <div className="hidden md:flex items-center gap-8 text-base text-slate-200">
            <NavItem
              href="#services"
              label="Layanan"
              isActive={activeNav === '#services'}
              isHovered={hoveredNav === '#services'}
              onHover={setHoveredNav}
              onClick={() => scrollToSection('#services')}
            />
            <NavItem
              href="#portfolio"
              label="Portfolio"
              isActive={activeNav === '#portfolio'}
              isHovered={hoveredNav === '#portfolio'}
              onHover={setHoveredNav}
              onClick={() => scrollToSection('#portfolio')}
            />
            <NavItem
              href="#pricing"
              label="Pricing"
              isActive={activeNav === '#pricing'}
              isHovered={hoveredNav === '#pricing'}
              onHover={setHoveredNav}
              onClick={() => scrollToSection('#pricing')}
            />
            <NavItem
              href="#contact"
              label="Kontak"
              isActive={activeNav === '#contact'}
              isHovered={hoveredNav === '#contact'}
              onHover={setHoveredNav}
              onClick={() => scrollToSection('#contact')}
            />
          </div>

          {/* Mobile Menu */}
          <motion.div 
            className="md:hidden text-slate-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              aria-label="open menu" 
              className="p-2.5 rounded-lg border border-white/6 hover:bg-white/5 transition-colors duration-300 text-lg"
            >
              ☰
            </button>
          </motion.div>
        </div>
      </nav>
    </>
  );
}
