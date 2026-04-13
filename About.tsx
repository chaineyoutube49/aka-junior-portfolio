import { motion } from "motion/react";
import { CONFIG } from "./Constant";

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark overflow-hidden texture-section">
      <div className="container mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image or Video Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1.2 }}
            viewport={{ once: true }}
            transition={{ duration: 4.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-6/6 lg:w-5/6 bg-white/5"
          >
            {CONFIG.about.aboutImage.endsWith('.mp4') ? (
              <video 
                src={CONFIG.about.aboutImage}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover brightness-100 contrast-110"
                referrerPolicy="no-referrer"
              />
            ) : (
              <img 
                src={CONFIG.about.aboutImage} 
                alt="Aka Junior" 
                className="w-full h-full object-cover brightness-100 contrast-110"
                referrerPolicy="no-referrer"
              />
            )}
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            
            {/* Floating Label */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary flex items-center justify-center rounded-full hidden md:flex z-20">
              <div className="text-center">
                <span className="block text-7xl font-display font-black italic">{CONFIG.about.badgeValue}</span>
                <span className="text-[10px] uppercase font-bold tracking-widest">{CONFIG.about.badgeLabel}</span>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-black text-primary tracking-[0.5em] uppercase mb-8 italic"
            >
              {CONFIG.about.subtitle}
            </motion.h2>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl xl:text-8xl font-display font-black italic leading-[0.9] mb-12 relative z-10"
              dangerouslySetInnerHTML={{ __html: CONFIG.about.title }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-lg text-white/60 font-medium leading-relaxed"
            >
              {CONFIG.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </motion.div>

            <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
              {CONFIG.about.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className="block text-3xl font-display font-black italic text-primary mb-2">{stat.value}</span>
                  <span className="text-xs uppercase font-bold tracking-widest text-white/30">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
