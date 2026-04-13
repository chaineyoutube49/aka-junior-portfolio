import { motion } from "motion/react";
import { CONFIG } from "./Constant";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-dark"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-7xl font-display font-black text-primary mb-4 italic tracking-tighter"
        >
          {CONFIG.profile.name.split(" ")[0]}
        </motion.div>
        
        <div className="w-64 h-[4px] bg-white/5 relative overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              repeat: Infinity, 
              duration: 1, 
              ease: "linear" 
            }}
            className="absolute inset-0 bg-primary shadow-[0_0_15px_rgba(255,0,0,0.8)]"
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-white/40 text-xs tracking-[0.3em] uppercase"
        >
          {CONFIG.loader.text}
        </motion.p>
      </div>
    </motion.div>
  );
}
