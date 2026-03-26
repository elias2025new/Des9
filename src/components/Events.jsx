import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import liveBandVideo from '../assets/live-band.mp4';

const cardVariants = {
  hiddenLeft:  { opacity: 0, x: -80 },
  hiddenRight: { opacity: 0, x:  80 },
  visible:     { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const contentVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.35 + i * 0.13, duration: 0.65, ease: 'easeOut' },
  }),
};

const Events = ({ t }) => {
  const eventImages = [
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
    "https://loremflickr.com/800/800/ethiopia,jazz/all?lock=302",
    "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section id="events" className="section-padding py-10 sm:py-24 bg-primary relative overflow-hidden">
      {/* Glow effects */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-0 w-64 h-64 bg-accent blur-[100px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-optional-accent blur-[120px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center lg:text-left mb-8 sm:mb-16 px-4 lg:px-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-widest text-accent text-xs sm:text-sm font-bold mb-3 sm:mb-4"
          >
            {t.badge}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-xl sm:text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            {t.title}
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="h-[2px] bg-accent rounded-full hidden lg:block"
          />
        </div>

        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-16">
          {t.items.map((event, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial={isReversed ? 'hiddenRight' : 'hiddenLeft'}
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className={`group relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/5
                  hover:border-accent/30 transition-all duration-700
                  hover:shadow-[0_0_60px_rgba(201,162,39,0.12)]
                  flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* ── Media ── */}
                <div className="w-full md:w-[55%] h-52 sm:h-72 md:h-[450px] overflow-hidden relative">
                  <div className={`absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-${isReversed ? 'l' : 'r'} from-black via-black/20 to-transparent opacity-80`} />

                  {event.title === "Live Band Night" || event.title === "የቀጥታ ባንድ ምሽት" ? (
                    <motion.video
                      autoPlay loop muted playsInline
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0"
                      style={{ transition: 'filter 1s ease' }}
                    >
                      <source src={liveBandVideo} type="video/mp4" />
                    </motion.video>
                  ) : (
                    <motion.img
                      src={eventImages[idx]}
                      alt={event.title}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0"
                      style={{ transition: 'filter 1s ease' }}
                    />
                  )}
                </div>

                {/* ── Content ── */}
                <div className="w-full md:w-[45%] p-5 sm:p-12 lg:p-16 relative z-20 flex flex-col justify-center">
                  {/* Title */}
                  <motion.h3
                    custom={0}
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-lg sm:text-4xl lg:text-5xl font-bold text-white mb-2
                      group-hover:text-accent transition-colors duration-500 leading-tight"
                  >
                    {event.title}
                  </motion.h3>

                  {/* Day & Time */}
                  <motion.div
                    custom={1}
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3 sm:gap-6 mb-6"
                  >
                    <div className="flex items-center text-accent/90 text-sm tracking-widest uppercase gap-2">
                      <FaCalendarAlt className="text-xs" />
                      <span>{event.day}</span>
                    </div>
                    <div className="flex items-center text-secondary/70 text-sm tracking-widest uppercase gap-2">
                      <FaClock className="text-xs text-accent" />
                      <span>{event.time}</span>
                    </div>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    custom={2}
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-secondary/70 text-sm sm:text-lg font-light leading-relaxed mb-6 max-w-md"
                  >
                    {event.desc}
                  </motion.p>

                  {/* CTA */}
                  <motion.a
                    custom={3}
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    href="#reservation"
                    whileHover={{ scale: 1.04, backgroundColor: 'rgba(201,162,39,1)', color: '#0B0B0B' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="inline-block w-fit px-6 py-2.5 bg-transparent border border-accent/40
                      text-accent uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold rounded-sm"
                  >
                    {t.reserve}
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
