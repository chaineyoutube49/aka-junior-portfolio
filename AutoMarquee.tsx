import { useState } from "react";
import { motion } from "motion/react";
import { CONFIG } from "./Constant";

export default function AutoMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  
  // Duplicate the items once to create a seamless loop
  const marqueeItems = [...CONFIG.portfolio, ...CONFIG.portfolio];

  return (
    <section className="py-20 bg-dark overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-black text-primary tracking-[0.5em] uppercase mb-4 italic text-center"
        >
          {CONFIG.marquee_section.subtitle}
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl xl:text-7xl font-display font-black italic text-center uppercase leading-none"
          dangerouslySetInnerHTML={{ __html: CONFIG.marquee_section.title }}
        />
      </div>

      {/* Contrôles de défilement */}
      <div className="flex justify-center mb-4 space-x-4">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="px-4 py-2 bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-colors"
        >
          {isPaused ? "▶ PLAY" : "⏸ PAUSE"}
        </button>
      </div>

      <div className="relative overflow-x-auto overflow-y-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <motion.div 
          className="flex space-x-6"
          animate={{ 
            x: [0, "-50%"] 
          }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ width: "max-content" }}
        >
          {marqueeItems.map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`} 
              className="relative w-64 md:w-96 aspect-square flex-shrink-0 group overflow-hidden border border-white/10"
            >
              <img 
                src={item.type === 'video' ? item.thumbnail : item.url} 
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/70 mb-1">{item.category}</span>
                <h4 className="text-xl font-display font-black italic text-white uppercase">{item.title}</h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
