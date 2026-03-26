import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUserFriends, FaCheckCircle, FaExclamationCircle, FaSun, FaMoon, FaCloudSun } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Reservation = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 2
  });

  const [activePicker, setActivePicker] = useState(null); // 'date', 'time', 'guests' or null
  const [timePeriod, setTimePeriod] = useState('night'); // 'morning', 'day' or 'night'
  const [phoneError, setPhoneError] = useState('');
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cooldown, setCooldown] = useState(0); // seconds remaining

  // Initialize cooldown from localStorage
  useEffect(() => {
    const lastReservation = localStorage.getItem('lastReservation');
    if (lastReservation) {
      const elapsed = (Date.now() - parseInt(lastReservation)) / 1000;
      const remaining = Math.max(0, 600 - Math.floor(elapsed));
      if (remaining > 0) setCooldown(remaining);
    }
  }, []);

  // Cooldown timer
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  const formatCooldown = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Ethiopian Phone Validation
  const validatePhone = (value) => {
    const cleanValue = value.replace(/\s+/g, '');
    const ethiopiaRegex = /^(\+251|0)(9|7)\d{8}$/;
    
    if (!cleanValue) return '';
    if (!ethiopiaRegex.test(cleanValue)) {
      return 'Please enter a valid Ethiopian phone number';
    }
    return '';
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, phone: value });
    setPhoneError(validatePhone(value));
  };

  const selectDate = (dayOffset) => {
    const date = new Date();
    date.setDate(date.getDate() + dayOffset);
    const dateString = date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
    setFormData({ ...formData, date: dateString });
    setActivePicker(null);
  };

  // Ethiopian Time Slots
  const morningSlots = [
    "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00", "5:30"
  ];

  const daySlots = [
    "6:00", "6:30", "7:00", "7:30", "8:00", "8:30", "9:00", "9:30",
    "10:00", "10:30", "11:00", "11:30"
  ];
  
  const nightSlots = [
    "12:00", "12:30", "1:00", "1:30", "2:00", "2:30", 
    "3:00", "3:30", "4:00", "4:30", "5:00", "5:30",
    "6:00", "6:30", "7:00", "7:30", "8:00", "8:30",
    "9:00", "9:30", "10:00", "10:30", "11:00", "11:30"
  ];

  const getTimeSlots = () => {
    if (timePeriod === 'morning') return morningSlots;
    if (timePeriod === 'day') return daySlots;
    return nightSlots;
  };

  const getPeriodLabel = () => {
    if (timePeriod === 'morning') return t.morning;
    if (timePeriod === 'day') return t.day;
    return t.night;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    
    const isValid = formData.name && formData.phone && formData.date && formData.time && !phoneError;
    
    if (isValid && cooldown === 0) {
      setIsSuccess(true);
      
      // Save reservation time for anti-spam (10 mins)
      localStorage.setItem('lastReservation', Date.now().toString());
      setCooldown(600);
      
      // Construct a consolidated message for the EmailJS "message" field
      const fullMessage = `New Reservation Details:\n` +
                          `------------------------\n` +
                          `Name: ${formData.name}\n` +
                          `Phone: ${formData.phone}\n` +
                          `Date: ${formData.date}\n` +
                          `Time: ${formData.time}\n` +
                          `Guests: ${formData.guests}`;

      // EmailJS Template Parameters (Standard labels for default templates)
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        message: fullMessage,
        reservation_date: formData.date, // Kept in case user uses them
        reservation_time: formData.time,
        guests: formData.guests
      };

      emailjs.send(
        'service_lec1916', 
        'template_dxl5dtn', 
        templateParams, 
        'dTV9hTx_Ag2gzdbPu'
      ).then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      }, (err) => {
        console.error('Failed to send email:', err);
      });
      
      // Keep success message visible for a few seconds
      setTimeout(() => {
        setIsSuccess(false);
        setAttemptedSubmit(false);
        setFormData({ name: '', phone: '', date: '', time: '', guests: 2 });
      }, 5000);
    }
  };

  return (
    <section id="reservation" className="py-10 sm:py-32 px-4 sm:px-6 bg-primary relative">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-20"
          alt="Lounge Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="glass-card p-4 sm:p-12 md:p-16 border border-white/5 relative">
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 h-12 border-t-2 border-l-2 border-accent/20 rounded-tl-2xl sm:rounded-tl-3xl m-2 sm:m-4"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 h-12 border-b-2 border-r-2 border-accent/20 rounded-br-2xl sm:rounded-br-3xl m-2 sm:m-4"></div>
          
          <div className="text-center mb-6 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white mb-2 sm:mb-4 tracking-tight">
                {t.title}
              </h2>
              <p className="text-secondary/60 font-light text-sm sm:text-lg max-w-lg mx-auto leading-relaxed">
                {t.subtitle}
              </p>
              <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-accent mx-auto mt-3 sm:mt-8 rounded-full"></div>
            </motion.div>
          </div>

          <form className="space-y-4 sm:space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3 sm:gap-10">
              {/* Full Name */}
              <div className="space-y-1 sm:space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[10px] sm:text-xs uppercase tracking-widest text-accent font-bold">{t.name}</label>
                  {attemptedSubmit && !formData.name && <span className="text-[8px] sm:text-[10px] text-red-500 italic lowercase">{t.required}</span>}
                </div>
                <div className="relative group">
                  <input 
                    type="text" 
                    className={`w-full bg-white/5 border rounded-lg sm:rounded-xl px-3 py-2.5 sm:px-5 sm:py-4 text-white text-sm sm:text-base focus:outline-none transition-all font-light group-hover:bg-white/10 ${attemptedSubmit && !formData.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-accent'}`}
                    placeholder="Elias Yoseph"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              {/* Phone with Validation */}
              <div className="space-y-1 sm:space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[10px] sm:text-xs uppercase tracking-widest text-accent font-bold">{t.phone}</label>
                  {attemptedSubmit && (!formData.phone || phoneError) && <span className="text-[8px] sm:text-[10px] text-red-500 italic lowercase">{!formData.phone ? t.required : ''}</span>}
                </div>
                <div className="relative group">
                  <input 
                    type="tel" 
                    className={`w-full bg-white/5 border rounded-lg sm:rounded-xl px-3 py-2.5 sm:px-5 sm:py-4 text-white text-sm sm:text-base focus:outline-none transition-all font-light group-hover:bg-white/10 ${attemptedSubmit && (!formData.phone || phoneError) ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-accent'}`}
                    placeholder="0912 345 678"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {formData.phone && !phoneError && <FaCheckCircle className="text-green-500 opacity-60 text-xs sm:text-base" />}
                    {phoneError && <FaExclamationCircle className="text-red-500 opacity-60 text-xs sm:text-base" />}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-8">
              {/* Custom Date Picker */}
              <div className="relative space-y-1 sm:space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[10px] sm:text-xs uppercase tracking-widest text-accent font-bold">{t.date}</label>
                  {attemptedSubmit && !formData.date && <span className="text-[8px] sm:text-[10px] text-red-500 italic lowercase">{t.required}</span>}
                </div>
                <button 
                  type="button"
                  onClick={() => setActivePicker(activePicker === 'date' ? null : 'date')}
                  className={`w-full h-[40px] sm:h-[56px] flex items-center justify-between bg-white/5 border rounded-lg sm:rounded-xl px-3 py-2.5 sm:px-5 sm:py-4 text-white text-sm sm:text-base hover:bg-white/10 transition-all font-light cursor-pointer ${attemptedSubmit && !formData.date ? 'border-red-500/50' : 'border-white/10'}`}
                >
                  <span className={formData.date ? 'text-white' : 'text-white/30 truncate'}>
                    {formData.date || 'Select'}
                  </span>
                  <FaCalendarAlt className="text-accent/60 text-xs sm:text-base flex-shrink-0" />
                </button>
                <AnimatePresence>
                  {activePicker === 'date' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-[140%] sm:w-full mt-2 bg-[#0a0a0a] border border-white/10 rounded-xl p-3 z-[100] grid grid-cols-2 gap-2 shadow-2xl backdrop-blur-xl"
                    >
                      {[0, 1, 2, 3, 4, 5].map(offset => (
                        <button 
                          key={offset}
                          onClick={() => selectDate(offset)}
                          className="py-2 text-[10px] sm:text-xs text-white/70 hover:bg-accent hover:text-primary rounded-lg transition-all"
                        >
                          {offset === 0 ? 'Today' : offset === 1 ? 'Tomorrow' : new Date(Date.now() + offset * 86400000).toLocaleDateString(undefined, { weekday: 'short', day: 'numeric' })}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* NEW CLOCK TIME PICKER */}
              <div className="relative space-y-1 sm:space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <div className="flex gap-2 items-center">
                    <label className="text-[10px] sm:text-xs uppercase tracking-widest text-accent font-bold">{t.time}</label>
                    <span className="text-[8px] sm:text-[10px] text-accent/50 italic">{t.ethiopianTime}</span>
                  </div>
                  {attemptedSubmit && !formData.time && <span className="text-[8px] sm:text-[10px] text-red-500 italic lowercase">{t.required}</span>}
                </div>
                <button 
                  type="button"
                  onClick={() => setActivePicker(activePicker === 'time' ? null : 'time')}
                  className={`w-full h-[40px] sm:h-[56px] flex items-center justify-between bg-white/5 border rounded-lg sm:rounded-xl px-3 py-2.5 sm:px-5 sm:py-4 text-white text-sm sm:text-base hover:bg-white/10 transition-all font-light cursor-pointer ${attemptedSubmit && !formData.time ? 'border-red-500/50' : 'border-white/10'}`}
                >
                  <span className={formData.time ? 'text-white' : 'text-white/30 truncate'}>
                    {formData.time || 'Select'}
                  </span>
                  <FaClock className="text-accent/60 text-xs sm:text-base flex-shrink-0" />
                </button>
                
                <AnimatePresence>
                  {activePicker === 'time' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 w-[160%] sm:w-[320px] mt-2 bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 sm:p-5 z-[100] shadow-2xl backdrop-blur-2xl"
                    >
                      {/* Period Toggle Table */}
                      <div className="flex bg-white/5 rounded-full p-1 mb-6">
                        <button 
                          type="button"
                          onClick={() => setTimePeriod('morning')}
                          className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-[10px] transition-all ${timePeriod === 'morning' ? 'bg-accent text-primary font-bold' : 'text-white/40 hover:text-white'}`}
                        >
                          <FaCloudSun size={11} /> {t.morning}
                        </button>
                        <button 
                          type="button"
                          onClick={() => setTimePeriod('day')}
                          className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-[10px] transition-all ${timePeriod === 'day' ? 'bg-accent text-primary font-bold' : 'text-white/40 hover:text-white'}`}
                        >
                          <FaSun size={11} /> {t.day}
                        </button>
                        <button 
                          type="button"
                          onClick={() => setTimePeriod('night')}
                          className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-[10px] transition-all ${timePeriod === 'night' ? 'bg-accent text-primary font-bold' : 'text-white/40 hover:text-white'}`}
                        >
                          <FaMoon size={11} /> {t.night}
                        </button>
                      </div>

                      {/* Visual Clock Grid */}
                      <div className="grid grid-cols-3 gap-2 h-36 sm:h-44 overflow-y-auto custom-scrollbar pr-1">
                        {getTimeSlots().map(slot => (
                          <button 
                            key={slot}
                            type="button"
                            onClick={() => {
                              setFormData({...formData, time: `${slot} (${getPeriodLabel()})`});
                              setActivePicker(null);
                            }}
                            className={`py-2 text-[10px] sm:text-xs rounded-xl border transition-all ${formData.time.includes(slot) && formData.time.includes(getPeriodLabel()) ? 'bg-accent border-accent text-primary font-bold' : 'bg-white/5 border-white/5 text-white/60 hover:border-accent/40 hover:text-white'}`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-white/5 text-center">
                        <p className="text-[9px] text-accent/50 uppercase tracking-widest leading-tight">
                          Habesha Style Local Time
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Custom guest picker (Counter UI) - Full width on bottom */}
              <div className="col-span-2 space-y-1 sm:space-y-2">
                <label className="text-[10px] sm:text-xs uppercase tracking-widest text-accent font-bold ml-1">{t.guests}</label>
                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-2 py-1.5 sm:py-2">
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, guests: Math.max(1, formData.guests - 1)})}
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg hover:bg-white/10 text-accent transition-all text-lg sm:text-xl font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <FaUserFriends className="text-accent/40 text-xs sm:text-base" />
                    <span className="text-white font-medium text-base sm:text-lg min-w-[25px] sm:min-w-[30px] text-center">
                      {formData.guests}
                    </span>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, guests: formData.guests + 1})}
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg hover:bg-white/10 text-accent transition-all text-lg sm:text-xl font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            
            <div className="pt-4 sm:pt-12">
              <motion.button 
                whileHover={cooldown === 0 ? { scale: 1.02 } : {}}
                whileTap={cooldown === 0 ? { scale: 0.98 } : {}}
                disabled={cooldown > 0}
                className={`w-full py-3 sm:py-6 rounded-lg sm:rounded-xl font-black uppercase tracking-widest sm:tracking-[0.3em] transition-all duration-300 text-xs sm:text-lg cursor-pointer ${
                  isSuccess 
                    ? 'bg-green-600 text-white shadow-none' 
                    : cooldown > 0
                      ? 'bg-white/10 text-white/40 cursor-not-allowed border border-white/10 overflow-hidden'
                      : 'bg-accent text-primary shadow-[0_10px_30px_rgba(201,162,39,0.2)]'
                }`}
              >
                {isSuccess ? (
                  <div className="flex items-center justify-center gap-2">
                    <FaCheckCircle /> Reserved!
                  </div>
                ) : cooldown > 0 ? (
                  <div className="flex items-center justify-center gap-2">
                    <FaClock className="animate-pulse" /> Wait ({formatCooldown(cooldown)})
                  </div>
                ) : (
                  t.cta
                )}
              </motion.button>
            </div>
          </form>

          {/* Premium Success Overlay */}
          <AnimatePresence>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#050505]/95 backdrop-blur-2xl p-6"
              >
                <motion.div
                  initial={{ scale: 0.8, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.8, y: 20 }}
                  className="max-w-md w-full text-center space-y-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
                    className="w-32 h-32 bg-accent rounded-full flex items-center justify-center mx-auto text-primary text-6xl shadow-[0_0_50px_rgba(201,162,39,0.4)]"
                  >
                    <FaCheckCircle />
                  </motion.div>
                  
                  <div className="space-y-4">
                    <motion.h2 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-4xl sm:text-5xl font-bold font-serif text-white uppercase tracking-wider"
                    >
                      {t.cta === "ቦታ ያስይዙ" ? "ተሳክቷል!" : "SUCCESS!"}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-lg text-white/60 leading-relaxed"
                    >
                      {t.cta === "ቦታ ያስይዙ" 
                        ? "የቦታ ማስያዣ ጥያቄዎ በአግባቡ ደርሶናል። በቅርቡ በስልክ እናገኝዎታለን።" 
                        : "Your reservation request has been received. Our team will contact you shortly to confirm."}
                    </motion.p>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="px-12 py-4 bg-accent text-primary hover:brightness-110 rounded-full transition-all font-bold tracking-widest uppercase text-sm"
                    >
                      {t.cta === "ቦታ ያስይዙ" ? "እሺ" : "Great"}
                    </button>
                  </motion.div>
                </motion.div>

                {/* Subtle floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ 
                        x: Math.random() * 100 + "%", 
                        y: "110%", 
                        opacity: 0.2
                      }}
                      animate={{ 
                        y: "-10%",
                        opacity: 0
                      }}
                      transition={{ 
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        delay: Math.random() * 5
                      }}
                      className="absolute w-1 h-1 bg-accent rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
