import { motion } from "motion/react";
import { Zap, ShieldCheck, DollarSign, Headphones } from "lucide-react";
import { CONFIG } from "./Constant";

const iconMap = {
  Zap,
  ShieldCheck,
  DollarSign,
  Headphones,
};

export default function WhyUs() {
  return (
    <section id="whyus" className="section-padding bg-dark overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-black text-primary tracking-[0.5em] uppercase mb-8 italic"
          >
            {CONFIG.whyus_section.subtitle}
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl xl:text-8xl font-display font-black italic leading-[0.9] mb-12"
            dangerouslySetInnerHTML={{ __html: CONFIG.whyus_section.title }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONFIG.whyus_section.advantages.map((advantage, idx) => {
            const Icon = iconMap[advantage.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon size={32} className="text-primary" />
                </div>
                
                <h4 className="text-xl font-display font-bold mb-4 text-white">
                  {advantage.title}
                </h4>
                
                <p className="text-white/70 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
