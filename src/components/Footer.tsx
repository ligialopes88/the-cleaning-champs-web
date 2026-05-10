import { Mail, Phone, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 mt-8 bg-white text-on-surface-variant font-body text-sm leading-relaxed border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-primary font-headline">The Cleaning Champs</span>
          </div>
          <p className="max-w-xs leading-relaxed">
            The most trusted name in professional cleaning. We take pride in making your environment healthier and happier.
          </p>
        </div>
        
        {/* Quick Links Column */}
        <div>
          <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <a href="/#home" className="hover:text-primary transition-colors">Home</a>
            </li>
            <li>
              <a href="/#services" className="hover:text-primary transition-colors">Services</a>
            </li>
            <li>
              <a href="/#about" className="hover:text-primary transition-colors">About Us</a>
            </li>
            <li>
              <a href="/#quote" className="hover:text-primary transition-colors">Get a Quote</a>
            </li>
          </ul>
        </div>
        
        {/* Contact Column */}
        <div>
          <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-xs">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Phone className="text-secondary" size={18} />
              <a href="tel:+12408617434" className="hover:text-primary transition-colors">+1 (240) 861-7434</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-secondary" size={18} />
              <a href="mailto:champstheclean@gmail.com" className="hover:text-primary transition-colors">champstheclean@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="text-secondary" size={18} />
              <a 
                href="https://www.instagram.com/thecleaningchamps_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                @thecleaningchamps_
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-outline-variant/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant/60 text-xs">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p>© {new Date().getFullYear()} The Cleaning Champs. All rights reserved.</p>
          <p className="opacity-70">We do not discriminate based on race, gender, or origin.</p>
        </div>
        <div className="flex gap-8">
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
