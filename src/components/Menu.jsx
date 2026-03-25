import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const topImageMap = {
  s1: "/images/cat_non_fasting_lunch_dinner.png", // Dine In
  s2: "/images/andinet_platter.png",               // Agelgel
  s3: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop", // Live Band Events
  s4: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop", // Catering Service
};

const galleryImageMap = {
  1: "/images/cat_non_fasting_lunch_dinner.png",
  2: "/images/cat_fasting_lunch_dinner.png",
  7: "/images/ful.jpg",
  8: "/images/katelo.jpg",
  3: "/images/dulet.jpg",
  4: "/images/andinet_platter.png",
  9: "/images/cat_non_fasting_breakfast.png",
  10: "/images/cat_des9_specials.png",
  5: "/images/header_champagne.png",
  6: "/images/vodka_premium.png",
  11: "/images/header_red_wine.png",
  12: "/images/bar special.jpg",
};

const AutoScrollRow = ({ items }) => {
  // Duplicating items 4 times to ensure no gaps during loop or drag
  const duplicatedItems = [...items, ...items, ...items, ...items];
  const constraintsRef = useRef(null);

  return (
    <div className="relative overflow-hidden w-full py-6 sm:py-10" ref={constraintsRef}>
      <motion.div
        className="flex gap-4 sm:gap-8 w-max px-4 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={constraintsRef}
        animate={{
          x: ["0%", "-25%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        // Removed pause on hover/tap to ensure animation persists on mobile
        dragElastic={0.1}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="w-[260px] sm:w-[450px] md:w-[500px] flex-shrink-0 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden relative"
          >
            <div className="h-36 sm:h-48 md:h-56 overflow-hidden relative">
              <img
                src={galleryImageMap[item.id]}
                alt={item.name}
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
            </div>
            
            <div className="p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-playfair text-white tracking-wider mb-2">
                {item.name}
              </h3>
              <p className="text-secondary/60 text-xs sm:text-sm md:text-base font-light leading-relaxed font-inter line-clamp-2 sm:line-clamp-none">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Menu = ({ t }) => {
  return (
    <section id="services" className="py-20 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-accent/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center mb-12 sm:mb-20">
        <div className="inline-block px-4 py-1.5 border border-accent/20 rounded-full mb-6 sm:mb-8 bg-accent/5 backdrop-blur-sm">
          <p className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-accent text-[10px] sm:text-[11px] font-bold">
            {t.badge}
          </p>
        </div>
        
        <h2 className="text-4xl sm:text-7xl lg:text-8xl font-playfair font-bold text-white mb-4 sm:mb-6 tracking-tight">
          {t.title}
        </h2>
        <div className="h-0.5 sm:h-1 w-[80px] sm:w-[120px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-4 sm:mt-8 rounded-full"></div>
      </div>

      {/* Top Services */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {t.topServices.map((service) => (
            <div
              key={service.id}
              className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden flex flex-col sm:flex-row items-stretch"
            >
              <div className="w-full sm:w-[45%] lg:w-[40%] h-40 sm:h-auto overflow-hidden relative shrink-0">
                <img
                  src={topImageMap[service.id]}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#050505] sm:from-transparent sm:via-transparent sm:to-[#050505] to-transparent opacity-80"></div>
              </div>
              <div className="p-5 sm:p-6 lg:p-6 text-center sm:text-left flex-grow flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-playfair text-white mb-2 sm:mb-3 uppercase tracking-widest gold-gradient-text">
                  {service.name}
                </h3>
                <p className="text-secondary/70 text-xs sm:text-sm lg:text-[15px] font-light leading-relaxed italic">
                  "{service.desc}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Gallery Below */}
      <div className="relative z-10 mt-12 pt-12 border-t border-white/5">
        <div className="container mx-auto max-w-7xl px-6 mb-4 sm:mb-8 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.4em] sm:tracking-[0.6em] text-accent/50 font-bold mb-1 sm:mb-2">{t.signatureTitle || 'Explore More'}</p>
          <h4 className="text-xl sm:text-2xl font-playfair text-white opacity-80 italic">Our Culinary & Beverage Selections</h4>
        </div>
        <AutoScrollRow items={t.items} />
        
        {t.plus && (
          <div className="container mx-auto max-w-7xl px-6 mt-16 text-center">
            <div className="inline-flex items-center gap-6 py-4 px-8 bg-white/5 border border-white/10 rounded-full">
              <span className="text-accent font-bold uppercase tracking-widest text-[10px] sm:text-sm whitespace-nowrap">{t.plus.title}</span>
              <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-3">
                {t.plus.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3">
                    {i > 0 && <div className="hidden sm:block w-1.5 h-1.5 bg-accent/30 rounded-full"></div>}
                    <span className="text-secondary/80 font-medium tracking-wide text-[10px] sm:text-sm underline decoration-accent/30 underline-offset-4 sm:underline-offset-8">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
