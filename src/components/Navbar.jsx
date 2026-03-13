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
    { name: t.gallery, href: '#gallery' },
    { name: t.reservation, href: '#reservation' },
    { name: t.location, href: '#location' },
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
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-[150] transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-primary/95 backdrop-blur-md shadow-lg py-4 border-b border-white/5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center max-w-7xl">
          <a href="#home" className="text-xl sm:text-2xl font-playfair font-bold gold-gradient-text tracking-wider whitespace-nowrap">
            {lang === 'am' ? 'ደሥ ፱' : 'DES9'}
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
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
              className="text-2xl text-accent pl-1"
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
            className="fixed inset-0 z-[120] bg-primary lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
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
