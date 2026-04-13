import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, Cpu, Palette, Video, X, ArrowRight } from "lucide-react";
import { CONFIG } from "./Constant";

const iconMap: any = {
  Globe: <Globe size={32} />,
  Cpu: <Cpu size={32} />,
  Palette: <Palette size={32} />,
  Video: <Video size={32} />,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className={`section-padding transition-all duration-1000 ${activeService !== null ? 'bg-black' : 'bg-white/[0.01]'}`}>
      <div className="container mx-auto px-6">
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-black text-primary tracking-[0.5em] uppercase mb-8 italic"
          >
            {CONFIG.services_section.subtitle}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl xl:text-8xl font-display font-black italic leading-[0.9]"
            dangerouslySetInnerHTML={{ __html: CONFIG.services_section.title }}
          />
        </div>

        <div className="flex flex-col border-t border-white/10">
          {CONFIG.services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative py-12 md:py-20 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:px-8 transition-all duration-500 ${activeService === i ? 'bg-primary/10' : ''}`}
            >
              {/* Background click handler for service selection */}
              <div 
                className="absolute inset-0 cursor-pointer z-0"
                onClick={() => setActiveService(activeService === i ? null : i)}
              />
              
              {/* Hover Image Reveal */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 opacity-0 group-hover:opacity-20 pointer-events-none transition-all duration-700 scale-90 group-hover:scale-110 z-0">
                <img src={service.image} alt="" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>

              <div className="flex items-center space-x-12 z-10">
                <span className="text-2xl font-display font-black text-white/10 italic">0{i + 1}</span>
                <h4 className="text-3xl md:text-6xl font-display font-black italic uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h4>
              </div>
              
              <div className="max-w-md z-10">
                <p className="text-white/40 text-base mb-8 font-medium leading-relaxed group-hover:text-white/70 transition-colors">
                  {service.description}
                </p>
                <div className="flex space-x-6">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                    className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors cursor-pointer relative z-20 bg-transparent border-none outline-none"
                  >
                    {CONFIG.services_section.moreInfo}
                  </button>
                  <a 
                    href={`https://wa.me/${CONFIG.profile.whatsapp}?text=Commander : ${service.title}`}
                    target="_blank"
                    className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-primary transition-colors relative z-30"
                  >
                    {CONFIG.services_section.launchMission}
                  </a>
                </div>
              </div>

              {/* Background Fill */}
              <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Portfolio Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative w-full max-w-6xl bg-black border border-white/10 p-8 md:p-16 overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 text-white/40 hover:text-primary transition-colors z-[10000] cursor-pointer bg-transparent border-none outline-none"
              >
                <X size={32} />
              </button>

              <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-1">
                  <span className="text-xs font-black text-primary uppercase tracking-[0.5em] mb-4 block italic">{CONFIG.services_section.modalSubtitle}</span>
                  <h5 className="text-4xl md:text-6xl font-display font-black italic uppercase leading-none mb-8 text-white">
                    {selectedService.title}
                  </h5>
                  <p className="text-white/50 text-lg leading-relaxed mb-12">
                    {CONFIG.services_section.modalDescription}
                  </p>
                  <a 
                    href={`https://wa.me/${CONFIG.profile.whatsapp}?text=Je suis intéressé par vos services de ${selectedService.title}`}
                    target="_blank"
                    className="inline-flex items-center space-x-4 py-4 px-8 bg-primary text-white font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-500"
                  >
                    <span>{CONFIG.services_section.modalCta}</span>
                    <ArrowRight size={16} />
                  </a>
                </div>

                <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
                  {selectedService.portfolio?.map((item: any, idx: number) => {
                    const imageUrl = typeof item === 'object' ? item.url : item;
                    const title = typeof item === 'object' ? item.title : `Projet ${idx + 1}`;
                    const isVideo = imageUrl.match(/\.(mp4|webm|ogg)$/) || imageUrl.includes("mixkit.co");
                    return (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                        className="aspect-[3/4] overflow-hidden border border-white/5 group/img bg-white/5 cursor-pointer relative"
                        onClick={() => {
                          setSelectedMedia({
                            url: imageUrl,
                            title: title,
                            isVideo: isVideo
                          });
                        }}
                      >
                        {isVideo ? (
                          <video 
                            src={imageUrl} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <img 
                            src={imageUrl} 
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" 
                            referrerPolicy="no-referrer"
                          />
                        )}
                        {/* Overlay avec le titre en bas */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <div className="text-white">
                            <h4 className="text-sm font-display font-black uppercase leading-tight">{title}</h4>
                            {isVideo && (
                              <span className="text-xs text-white/70 uppercase tracking-wider">Vidéo</span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal pour afficher l'image/vidéo en grand */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-6"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)'
            }}
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative max-w-5xl max-h-[90vh] bg-black border border-white/10 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 text-white/40 hover:text-primary transition-colors z-[10000] cursor-pointer bg-transparent border-none outline-none"
              >
                <X size={24} />
              </button>

              <div className="flex items-center justify-center w-full">
                {selectedMedia.isVideo ? (
                  <video 
                    src={selectedMedia.url} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    controls
                    className="max-w-full max-h-[70vh] object-contain"
                    style={{ transform: 'rotate(0deg)' }}
                  />
                ) : (
                  <img 
                    src={selectedMedia.url} 
                    alt={selectedMedia.title}
                    className="max-w-full max-h-[70vh] object-contain"
                    style={{ transform: 'rotate(0deg)' }}
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              <div className="text-center mt-4">
                <h4 className="text-lg font-display font-black text-white uppercase">{selectedMedia.title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
