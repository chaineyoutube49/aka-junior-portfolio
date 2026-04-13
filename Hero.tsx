import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { CONFIG } from "./Constant";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isImageChanging, setIsImageChanging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Image animations
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]); // Fast rotation
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const opacitySmiling = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const opacitySerious = useTransform(scrollYProgress, [0.1, 0.4], [1, 0]);

  // Gérer le changement d'image au scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Si l'utilisateur a scrollé vers le bas
      if (scrollPosition > 100 && !hasScrolled) {
        setHasScrolled(true);
      }
      
      // Si l'utilisateur remonte tout en haut après avoir scrollé
      if (scrollPosition < 50 && hasScrolled) {
        // Lancer l'animation de changement d'image
        setIsImageChanging(true);
        
        // Changer d'image après l'animation de sortie
        setTimeout(() => {
          const additionalImages = CONFIG.profile.heroImages.additionalImages || [];
          if (additionalImages.length > 0) {
            const nextIndex = (currentImageIndex + 1) % additionalImages.length;
            setCurrentImageIndex(nextIndex);
          }
          
          // Fin de l'animation après le changement
          setTimeout(() => {
            setIsImageChanging(false);
            setHasScrolled(false);
          }, 300);
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled, currentImageIndex]);

  // Obtenir l'image actuelle
  const getCurrentSeriousImage = () => {
    const additionalImages = CONFIG.profile.heroImages.additionalImages || [];
    if (currentImageIndex === 0 || additionalImages.length === 0) {
      return CONFIG.profile.heroImages.serious;
    }
    return additionalImages[currentImageIndex - 1];
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen w-full bg-dark flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Large Text */}
      <motion.div 
        style={{ x: useTransform(scrollYProgress, [0, 1], [0, -1000]) }}
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap pointer-events-none z-0"
      >
        <span className="text-[40vw] font-display font-black text-white/[0.02] uppercase leading-none italic">
          {CONFIG.profile.name.split(" ")[0]} {CONFIG.profile.name.split(" ")[1]}
        </span>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Title Layer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 mb-12"
          >
            <h1 className="text-5xl md:text-7xl xl:text-[10vw] font-display font-black leading-[0.8] italic tracking-tighter">
              <span className="block text-outline">{CONFIG.hero.titleTop}</span>
              <span className="block text-primary">{CONFIG.hero.titleBottom}</span>
            </h1>
          </motion.div>

          {/* Image Layer - Centered */}
          <motion.div
            style={{ rotate, scale }}
            className="relative w-64 md:w-[35vw] aspect-square z-10 mb-12"
          >
            <div className="relative w-full h-full">
              <motion.img
                src={getCurrentSeriousImage()}
                alt={CONFIG.profile.name}
                style={{ opacity: opacitySerious }}
                animate={{
                  scale: isImageChanging ? 0.8 : 1,
                  rotate: isImageChanging ? 5 : 0,
                  opacity: isImageChanging ? 0 : 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 w-full h-full object-contain filter brightness-90 contrast-110 scale-125"
                referrerPolicy="no-referrer"
              />
              <motion.img
                src={CONFIG.profile.heroImages.smiling}
                alt={CONFIG.profile.name}
                style={{ opacity: opacitySmiling }}
                className="absolute inset-0 w-full h-full object-contain filter brightness-90 contrast-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Decorative Rings */}
              <div className="absolute inset-0 border border-primary/20 rounded-full scale-125 animate-pulse" />
              <div className="absolute inset-0 border border-white/5 rounded-full scale-150" />
            </div>
          </motion.div>

          {/* Description & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-2xl"
          >
            <p className="text-white/40 text-xs uppercase tracking-[0.5em] font-bold mb-8 italic">
              // Based in {CONFIG.profile.location}
            </p>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium mb-12">
              {CONFIG.profile.description}
            </p>
            
            <div className="flex justify-center">
              <a 
                href="#contact"
                className="group relative inline-flex items-center justify-center px-12 py-5 bg-primary text-white font-black uppercase tracking-widest overflow-hidden transition-all duration-500 hover:bg-white hover:text-primary"
              >
                <span className="relative z-10">{CONFIG.hero.cta}</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Side Label */}
      <div className="absolute bottom-12 left-12 hidden lg:block">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-[1px] bg-white/20" />
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/30 italic">
            {CONFIG.hero.scrollLabel}
          </span>
        </div>
      </div>
    </section>
  );
}
