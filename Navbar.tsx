import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X, MessageSquare } from "lucide-react";
import { CONFIG } from "./Constant";
import logo from "./logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = CONFIG.nav.links;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4 bg-dark/80 backdrop-blur-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-display font-black tracking-tighter italic flex items-center space-x-3"
        >
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span>{CONFIG.profile.name.toUpperCase()}</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs font-black uppercase tracking-[0.3em] text-white/50 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}
        </div>

        <motion.a
          href={`https://wa.me/${CONFIG.profile.whatsapp}`}
          target="_blank"
          className="hidden md:block text-xs font-black uppercase tracking-[0.3em] px-8 py-3 border border-white/10 hover:border-primary transition-colors"
        >
          {CONFIG.nav.cta}
        </motion.a>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden glass border-t border-white/10"
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white/80 hover:text-gold"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`https://wa.me/${CONFIG.profile.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full py-4 bg-gradient-gold text-dark font-bold rounded-xl"
          >
            <MessageSquare size={20} />
            <span>WhatsApp</span>
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
