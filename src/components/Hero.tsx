import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[750px] flex items-start pt-28 md:pt-36 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Modern Airbnb bedroom" 
          className="w-full h-full object-cover" 
          referrerPolicy="no-referrer"
          src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1920" 
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 md:bg-gradient-to-r md:from-black/60 md:via-transparent md:to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-sm font-semibold tracking-wide mb-6"
          >
            DMV'S #1 RATED CLEANING SERVICE
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-headline font-extrabold text-white leading-[1.1] mb-6 -tracking-wider"
          >
            Professional Residential Cleaning in the DMV Area
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 leading-relaxed mb-10 max-w-lg"
          >
            Trusted, local, and detail-oriented. Your home sparkling like never before with our premium editorial care.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:row gap-4"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#quote"
                className="bg-secondary text-on-secondary px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                GET STARTED NOW
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
