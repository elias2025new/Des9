import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["Starters", "Main Dishes", "Drinks", "Desserts"];

const menuItems = [
  { id: 1, category: "Starters", name: "Non-Fasting Lunch & Dinner", desc: "A rich and hearty selection of premium meat and fish dishes.", price: "", img: "/images/cat_non_fasting_lunch_dinner.png" },
  { id: 2, category: "Starters", name: "Fasting Lunch & Dinner", desc: "A vibrant spread of plant-based Ethiopian classics.", price: "", img: "/images/cat_fasting_lunch_dinner.png" },
  { id: 3, category: "Main Dishes", name: "Fikir", desc: "Dulet, Quanta, Enkulal, Gomen & Ayib. Bale 2 / Portion for 2.", price: "700 ETB", img: "/images/cat_non_fasting_breakfast.png" },
  { id: 4, category: "Main Dishes", name: "Andinet", desc: "Tibs, Senber, Quanta, Dulet, Gomen, Ayib, Enkulal & Siga Firfir. Bale 3 / Portion for 3.", price: "950 ETB", img: "/images/cat_non_fasting_lunch_dinner.png" },
  { id: 5, category: "Drinks", name: "Champagne | ሻምፓኝ", desc: "Moët & Chandon, Veuve Clicquot, Martini Asti.", price: "", img: "/images/header_champagne.png" },
  { id: 6, category: "Drinks", name: "Vodka | ቮድካ", desc: "Absolut Vodka, Smirnoff Vodka, Grey Goose Vodka.", price: "", img: "/images/header_whisky.png" }
];

const Menu = ({ t }) => {
  const [activeTab, setActiveTab] = useState(t.categories[0]);

  // Map category names back to EN IDs for filtering if needed, 
  // or just filter by index/translated name. 
  // Given the structure, we'll filter by the translated category name from t.categories.
  const filteredItems = t.items.filter((item, idx) => {
    if (activeTab === t.categories[0]) return idx < 2; // Starters
    if (activeTab === t.categories[1]) return idx >= 2 && idx < 4; // Main
    if (activeTab === t.categories[2]) return idx >= 4; // Drinks
    return false;
  });

  // Re-map images since they aren't in translations
  const itemImages = [
    "/images/cat_non_fasting_lunch_dinner.png",
    "/images/cat_fasting_lunch_dinner.png",
    "/images/cat_non_fasting_breakfast.png",
    "/images/cat_non_fasting_lunch_dinner.png",
    "/images/header_champagne.png",
    "/images/header_whisky.png",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1472555694391-ee53280ce497?q=80&w=600&auto=format&fit=crop"
  ];

  return (
    <section id="menu" className="section-padding py-24 bg-[#080808] relative">
      <div className="container mx-auto max-w-7xl">
        
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
            className="text-4xl lg:text-6xl font-playfair font-bold text-white mb-6"
          >
            {t.title}
          </motion.h2>
        </div>

        {/* Categories Navbar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {t.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full font-inter tracking-wider transition-all duration-300 ${
                activeTab === category 
                  ? 'bg-accent text-primary font-bold shadow-[0_0_15px_rgba(201,162,39,0.5)]' 
                  : 'bg-transparent text-secondary hover:text-accent border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                key={item.id}
                className="group flex flex-col sm:flex-row bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(201,162,39,0.15)] hover:border-accent/50 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-full sm:w-2/5 overflow-hidden">
                  <img 
                    src={itemImages[item.id - 1]} 
                    alt={item.name} 
                    className="w-full h-48 sm:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-xl sm:text-2xl font-playfair text-white">{item.name}</h3>
                    <span className="text-accent font-playfair text-lg sm:text-xl font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-secondary/60 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-16">
          <a href="#reservation" className="inline-flex items-center gap-2 text-accent hover:text-white uppercase tracking-widest text-sm font-bold transition-colors border-b border-accent hover:border-white pb-1">
            {t.fullMenu}
          </a>
        </div>

      </div>
    </section>
  );
};

export default Menu;
