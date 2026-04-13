import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Maximize2, X } from "lucide-react";
import { CONFIG } from "./Constant";

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black text-primary tracking-[0.5em] uppercase mb-6 italic">{CONFIG.portfolio_section.subtitle}</h2>
            <h3 
              className="text-4xl md:text-6xl font-display font-black italic"
              dangerouslySetInnerHTML={{ __html: CONFIG.portfolio_section.title }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONFIG.portfolio.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/3] rounded-none overflow-hidden cursor-pointer border-2 border-white/5 hover:border-primary transition-all duration-300"
              onClick={() => setSelectedItem(item)}
            >
              <img 
                src={item.type === 'video' ? item.thumbnail : item.url} 
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center">
                <div className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-2">{item.category}</div>
                <h4 className="text-2xl font-display font-black text-white mb-6 italic">{item.title}</h4>
                
                <div className="w-12 h-12 rounded-none bg-white flex items-center justify-center text-primary">
                  {item.type === 'video' ? <Play size={24} fill="currentColor" /> : <Maximize2 size={24} />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] glass flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-gold transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video bg-dark rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'video' ? (
                <video 
                  src={selectedItem.url} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                />
              ) : (
                <img 
                  src={selectedItem.url} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              )}
              
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-dark to-transparent">
                <div className="text-gold text-sm font-bold uppercase mb-2">{selectedItem.category}</div>
                <h4 className="text-3xl font-display font-bold text-white">{selectedItem.title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
