import { useEffect, useState } from "react";
import { motion } from "motion/react";
import smiley1 from "./public/smiley1.svg";
import smiley2 from "./public/smiley2.svg";
import smiley3 from "./public/smiley3.svg";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [smileyIndex, setSmileyIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const smileys = [smiley1, smiley2, smiley3];

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .cursor-pointer, [role='button'], .group, .motion-div, .cursor-services")) {
        setIsHovering(true);
        setSmileyIndex(prev => (prev % 3) + 1);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div 
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      animate={{ 
        x: position.x - 20, 
        y: position.y - 20,
        scale: isHovering ? 1.5 : 1
      }}
      transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <motion.div 
          animate={{ 
            rotate: 360,
            borderColor: isHovering ? "#FF0000" : "rgba(255, 255, 255, 0.2)"
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute w-12 h-12 border-2 border-dashed rounded-full"
        />
        
        {/* Smiley Cursor */}
        <img 
          src={isHovering ? smileys[smileyIndex - 1] : smileys[0]} 
          alt="smiley" 
          className="w-8 h-8 filter drop-shadow-lg"
        />
      </div>
    </motion.div>
  );
}
