import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const Location = ({ t }) => {
  return (
    <section id="location" className="py-24 bg-[#080808]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-accent text-sm font-bold mb-4"
          >
            {t.badge}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-6"
          >
            {t.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Map Embed */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[250px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden border border-white/10 relative group mb-8 lg:mb-0"
          >
            <div className="absolute inset-0 bg-accent/10 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <iframe 
              src="https://maps.google.com/maps?q=DES9%20Restaurant,%20Addis%20Ababa,%20Ethiopia&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[50%] contrast-125 group-hover:grayscale-0 transition-all duration-700 absolute inset-0"
              title="DES9 Location"
            ></iframe>
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-2xl text-accent">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold text-white mb-2">{t.addressTitle}</h3>
                <p className="text-secondary/60 font-light leading-relaxed mb-4">
                  {t.address}
                </p>
                <a href="https://maps.app.goo.gl/MG9HmUukqSaQ68vJ9?g_st=aw" target="_blank" rel="noreferrer" className="text-accent text-sm uppercase tracking-widest font-bold hover:text-white transition-colors border-b border-accent pb-1">
                  {t.directions}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-2xl text-accent">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold text-white mb-2">{t.contactTitle}</h3>
                <p className="text-secondary/60 font-light leading-relaxed">
                  +251 91 123 4567 <br />
                  reservations@des9lounge.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-2xl text-accent">
                <FaClock />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold text-white mb-2">{t.hoursTitle}</h3>
                <ul className="text-secondary/60 font-light space-y-2">
                  <li className="flex justify-between w-full sm:w-64"><span>{t.days[0]}</span> <span>4:00 PM - 12:00 AM</span></li>
                  <li className="flex justify-between w-full sm:w-64"><span>{t.days[1]}</span> <span>4:00 PM - 3:00 AM</span></li>
                  <li className="flex justify-between w-full sm:w-64 text-accent"><span>{t.days[2]}</span> <span>2:00 PM - 1:00 AM</span></li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Location;
