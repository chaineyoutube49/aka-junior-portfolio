import { motion } from "motion/react";
import { Phone, Mail, Send } from "lucide-react";
import { CONFIG } from "./Constant";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            <div className="space-y-8 md:space-y-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm md:text-xs font-black text-primary tracking-[0.5em] uppercase mb-4 md:mb-6 italic"
              >
                {CONFIG.contact_section.subtitle}
              </motion.h2>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-display font-black italic leading-[1.1] mb-8 md:mb-12 break-words"
                dangerouslySetInnerHTML={{ __html: CONFIG.contact_section.title }}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-12"
              >
                <div className="flex items-center space-x-8 group">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-widest text-white/30 mb-1">{CONFIG.contact_section.whatsappLabel}</span>
                    <a href={`https://wa.me/${CONFIG.profile.whatsapp}`} className="text-2xl font-display font-black italic hover:text-primary transition-colors">
                      {CONFIG.profile.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-8 group">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-widest text-white/30 mb-1">{CONFIG.contact_section.emailLabel}</span>
                    <a href={`mailto:${CONFIG.profile.email}`} className="text-2xl font-display font-black italic hover:text-primary transition-colors">
                      {CONFIG.profile.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white/[0.02] p-8 md:p-12 border border-white/5 relative"
            >
              <h4 className="text-3xl font-display font-black italic mb-8 uppercase">{CONFIG.contact_section.formTitle}</h4>
              
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder={CONFIG.contact_section.formNamePlaceholder} 
                    className="w-full bg-white/5 border border-white/10 p-3 md:p-4 text-sm md:text-xs font-black tracking-widest focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder={CONFIG.contact_section.formEmailPlaceholder} 
                    className="w-full bg-white/5 border border-white/10 p-3 md:p-4 text-sm md:text-xs font-black tracking-widest focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder={CONFIG.contact_section.formProjectPlaceholder} 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 p-3 md:p-4 text-sm md:text-xs font-black tracking-widest focus:border-primary outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 md:py-6 bg-primary text-white font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-500 text-sm md:text-xs"
                >
                  {CONFIG.contact_section.formSubmit}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{CONFIG.contact_section.whatsappDirectLabel}</span>
                <a 
                  href={`https://wa.me/${CONFIG.profile.whatsapp}`}
                  className="text-[10px] font-black text-primary uppercase tracking-widest hover:text-white transition-colors"
                >
                  {CONFIG.contact_section.whatsappDirectLink}
                </a>
              </div>

              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary flex items-center justify-center">
                <Send size={20} />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
