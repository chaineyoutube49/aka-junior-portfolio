import { CONFIG } from "./Constant";
import logo from "./logo.svg";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center space-x-3 text-xl font-display font-bold tracking-tighter">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span>{CONFIG.profile.name}</span>
        </div>
        
        <div className="text-white/30 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} {CONFIG.profile.name}. {CONFIG.footer?.copyrightText || "Tous droits réservés."}
        </div>
        
        <div className="flex space-x-8">
          {CONFIG.nav.links.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-xs uppercase tracking-widest text-white/40 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
