'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isOpen ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <button
            onClick={() => handleNavClick('hero')}
            className={`text-lg font-medium tracking-[0.2em] uppercase transition-colors z-50 ${
              (scrolled || isOpen) ? 'text-black' : 'text-white mix-blend-difference'
            }`}
          >
            madebyantonio
          </button>
          
          {/* Desktop Nav */}
          <nav className={`hidden md:flex gap-10 text-sm uppercase tracking-[0.2em] ${scrolled ? 'text-black' : 'text-white mix-blend-difference'}`}>
            <button onClick={() => handleNavClick('work')} className="hover:opacity-60 transition-opacity cursor-pointer">Archive</button>
            <button onClick={() => handleNavClick('about')} className="hover:opacity-60 transition-opacity cursor-pointer">About</button>
            <button onClick={() => handleNavClick('contact')} className="hover:opacity-60 transition-opacity cursor-pointer">Contact</button>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50 focus:outline-none ${
              (scrolled || isOpen) ? 'text-black' : 'text-white mix-blend-difference'
            }`}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-current transition-all duration-300 ${
                isOpen ? 'transform rotate-45 translate-y-[7.5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-current transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-current transition-all duration-300 ${
                isOpen ? 'transform -rotate-45 -translate-y-[7.5px]' : ''
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8 text-2xl uppercase tracking-[0.2em] text-black">
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                onClick={() => handleNavClick('work')}
                className="hover:opacity-60 transition-opacity cursor-pointer"
              >
                Archive
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                onClick={() => handleNavClick('about')}
                className="hover:opacity-60 transition-opacity cursor-pointer"
              >
                About
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                onClick={() => handleNavClick('contact')}
                className="hover:opacity-60 transition-opacity cursor-pointer"
              >
                Contact
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
