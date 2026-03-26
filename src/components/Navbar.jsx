import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.menu, href: '#services' },
    { name: t.events, href: '#events' },
    { name: t.reservation, href: '#reservation' },
    { name: t.location, href: '#location' },
    { name: t.aboutUs, href: '#about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          backgroundColor: scrolled || isOpen ? 'rgba(5, 5, 5, 0.95)' : 'rgba(0, 0, 0, 0)',
          paddingTop: scrolled || isOpen ? '16px' : '24px',
          paddingBottom: scrolled || isOpen ? '16px' : '24px',
          backdropFilter: scrolled || isOpen ? 'blur(12px)' : 'blur(0px)',
          borderBottomColor: scrolled || isOpen ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0)',
          boxShadow: scrolled || isOpen ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : 'none'
        }}
        transition={{ 
          duration: 0.4,
          ease: "easeInOut"
        }}
        className="fixed w-full z-[150] border-b transform-gpu"
        style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center max-w-7xl">
          <a href="#home" className="text-xl sm:text-2xl font-playfair font-bold gold-gradient-text tracking-wider whitespace-nowrap">
            {lang === 'am' ? 'ደሥ ፱' : 'DES፱'}
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6 lg:space-x-10 xl:space-x-14 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm uppercase tracking-widest hover:text-accent transition-colors duration-300 font-inter"
              >
                {link.name}
              </a>
            ))}

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
              className="ml-4 px-3 py-1 border border-accent/30 text-[10px] tracking-[0.2em] uppercase hover:bg-accent hover:text-primary transition-all rounded-full font-bold"
            >
              {lang === 'en' ? 'AM' : 'EN'}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
              className="px-2 py-1 border border-accent/30 text-[10px] tracking-widest uppercase rounded-full font-bold whitespace-nowrap"
            >
              {lang === 'en' ? 'AM' : 'EN'}
            </button>
            <button
              className="text-2xl text-accent flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay — rendered as sibling to nav, NOT inside it.
          This avoids z-index stacking context issues. z-[120] puts it above
          all page content but below the nav bar (z-[150]). */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[120] bg-primary lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-full py-20 px-6 space-y-6 sm:space-y-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-playfair uppercase tracking-widest hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(false)}
                className="mt-12 text-sm uppercase tracking-[0.3em] text-accent border border-accent/30 px-8 py-3 rounded-full"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
