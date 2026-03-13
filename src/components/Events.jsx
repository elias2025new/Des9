import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const events = [
  {
    title: "Live Band Night",
    day: "Every Friday",
    time: "8:00 PM - 1:00 AM",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
    desc: "Start your weekend with our signature live band performing soulful covers and original hits."
  },
  {
    title: "Ethiopian Jazz Night",
    day: "Every Saturday",
    time: "9:00 PM - 2:00 AM",
    image: "https://images.unsplash.com/photo-1522863602463-afebb88d5916?q=80&w=800&auto=format&fit=crop",
    desc: "Experience the rich sounds of Ethio-Jazz blending traditional melodies with contemporary rhythms."
  },
  {
    title: "Weekend Lounge Party",
    day: "Every Sunday",
    time: "6:00 PM - Midnight",
    image: "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=800&auto=format&fit=crop",
    desc: "Wind down the weekend with signature cocktails, ambient lighting, and our resident DJ."
  }
];

const Events = ({ t }) => {
  const eventImages = [
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
    "https://loremflickr.com/800/800/ethiopia,jazz/all?lock=302",
    "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section id="events" className="section-padding py-16 sm:py-24 bg-primary relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-optional-accent/10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-10 sm:mb-16">
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
            className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold text-white mb-6"
          >
            {t.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.items.map((event, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-black border border-white/5 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,162,39,0.1)]"
            >
              <div className="h-44 sm:h-52 md:h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                <img 
                  src={eventImages[idx]} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 sm:p-8 relative z-20 -mt-12 sm:-mt-20 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-white mb-3 sm:mb-4 group-hover:text-accent transition-colors">{event.title}</h3>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-4 sm:mb-6">
                  <div className="flex items-center justify-center sm:justify-start text-secondary/70 text-xs sm:text-sm gap-2">
                    <FaCalendarAlt className="text-accent" />
                    <span className="font-light">{event.day}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start text-secondary/70 text-xs sm:text-sm gap-2">
                    <FaClock className="text-accent" />
                    <span className="font-light">{event.time}</span>
                  </div>
                </div>
                
                <p className="text-secondary/60 text-xs sm:text-sm font-light leading-relaxed mb-6 sm:mb-8 line-clamp-3 sm:line-clamp-none">
                  {event.desc}
                </p>
                
                <a href="#reservation" className="block w-full py-2.5 sm:py-3 text-center border border-white/20 text-white uppercase tracking-widest text-[10px] sm:text-xs font-bold hover:bg-white hover:text-primary transition-all duration-300">
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
