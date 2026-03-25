import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import liveBandVideo from '../assets/live-band.mp4';

const Events = ({ t }) => {
  const eventImages = [
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
    "https://loremflickr.com/800/800/ethiopia,jazz/all?lock=302",
    "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section id="events" className="section-padding py-10 sm:py-24 bg-primary relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-optional-accent/10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-accent text-xs sm:text-sm font-bold mb-3 sm:mb-4"
          >
            {t.badge}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-6xl font-playfair font-bold text-white mb-6"
          >
            {t.title}
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-16">
          {t.items.map((event, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              key={idx}
              className={`group relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/5 hover:border-accent/30 transition-all duration-700 hover:shadow-[0_0_50px_rgba(201,162,39,0.1)] flex flex-col ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Media Section */}
              <div className="w-full md:w-[55%] h-56 sm:h-72 md:h-[450px] overflow-hidden relative">
                <div className={`absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-${idx % 2 === 1 ? 'l' : 'r'} from-black via-black/20 to-transparent opacity-80`}></div>
                {event.title === "Live Band Night" || event.title === "የቀጥታ ባንድ ምሽት" ? (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  >
                    <source src={liveBandVideo} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={eventImages[idx]} 
                    alt={event.title} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                )}
              </div>
              
              {/* Content Section */}
              <div className="w-full md:w-[45%] p-6 sm:p-12 lg:p-16 relative z-20 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mb-3 group-hover:text-accent transition-colors duration-500 leading-tight">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 sm:gap-6">
                    <div className="flex items-center text-accent/90 text-sm tracking-widest uppercase gap-2">
                      <FaCalendarAlt className="text-xs" />
                      <span>{event.day}</span>
                    </div>
                    <div className="flex items-center text-secondary/70 text-sm tracking-widest uppercase gap-2">
                      <FaClock className="text-xs text-accent" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-secondary/70 text-sm sm:text-lg font-light leading-relaxed mb-6 max-w-md">
                  {event.desc}
                </p>
                
                <a 
                  href="#reservation" 
                  className="inline-block w-fit px-8 py-3 bg-transparent border border-accent/40 text-accent uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold hover:bg-accent hover:text-primary transition-all duration-500 rounded-sm"
                >
                  {t.reserve}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
