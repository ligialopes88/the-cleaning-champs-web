import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#quote" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-outline-variant/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <a href="/#home" className="flex items-center gap-3 group">
            <span className="text-2xl font-bold tracking-tighter text-primary font-headline">
              The Cleaning Champs
            </span>
          </a>
        </motion.div>
        
        <div className="hidden md:flex gap-8 items-center font-headline font-medium tracking-tight">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="tel:+12408617434" 
            className="hidden sm:flex items-center gap-2 text-primary font-semibold hover:scale-105 transition-transform duration-200"
          >
            <Phone size={18} />
            +1 (240) 861-7434
          </a>
          <a 
            href="/#quote"
            className="hidden md:block bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-bold shadow-md hover:scale-105 active:scale-95 transition-all text-center"
          >
            Free Estimate
          </a>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-outline-variant/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 font-headline font-medium">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-on-surface-variant hover:text-primary transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-outline-variant/10" />
              <div className="flex flex-col gap-4 pt-2">
                <a 
                  href="tel:+12408617434" 
                  className="flex items-center gap-3 text-primary font-bold"
                >
                  <Phone size={20} />
                  +1 (240) 861-7434
                </a>
                <a 
                  href="/#quote"
                  onClick={() => setIsOpen(false)}
                  className="bg-secondary text-on-secondary px-6 py-4 rounded-xl font-bold shadow-md text-center"
                >
                  Free Estimate
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
