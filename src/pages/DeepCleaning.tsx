import { motion } from "motion/react";
import { CheckCircle2, Sparkles, ShieldCheck, Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  {
    icon: Sparkles,
    title: "Intensive Restoration",
    description: "Designed to tackle built-up grime and dust that regular cleaning might miss."
  },
  {
    icon: ShieldCheck,
    title: "Sanitization Focus",
    description: "High-touch areas are thoroughly sanitized to ensure a healthy living environment."
  },
  {
    icon: Zap,
    title: "Detail Oriented",
    description: "From inside cabinets to behind appliances, we leave no stone unturned."
  },
  {
    icon: CheckCircle2,
    title: "Premium Products",
    description: "We use professional-grade, eco-friendly solutions for the best results."
  }
];

const deepChecklist = [
  "Scrubbing and descaling bathroom tiles and grout",
  "Cleaning inside and behind the oven and refrigerator",
  "Wiping down all doors, frames, and light switches",
  "Detailed cleaning of window tracks and sills",
  "Dusting and wiping down all baseboards and crown molding",
  "Cleaning inside kitchen and bathroom cabinets",
  "Deep vacuuming of upholstery and under furniture",
  "Polishing all wood surfaces and stainless steel"
];

export default function DeepCleaning() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/#services" 
            className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:translate-x-[-4px] transition-transform"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl font-headline font-extrabold text-primary mb-6 leading-tight">
                Deep Cleaning Services
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
                Our Deep Cleaning service is a top-to-bottom restoration of your home. It's the perfect choice for a first-time visit, seasonal refreshes, or when your space needs extra attention to detail.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {features.map((feature, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="w-10 h-10 bg-secondary-container/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="text-secondary" size={20} />
                    </div>
                    <h3 className="font-bold text-primary">{feature.title}</h3>
                    <p className="text-sm text-on-surface-variant">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white p-8 rounded-3xl border border-outline-variant/10 shadow-sm">
                <h3 className="text-2xl font-headline font-bold text-primary mb-6">The Deep Clean Checklist</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {deepChecklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-on-surface-variant">
                      <CheckCircle2 className="text-secondary shrink-0 mt-1" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="sticky top-32"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-8">
                <img 
                  alt="Realistic deep cleaning bathroom" 
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
                />
              </div>
              <div className="bg-secondary text-on-secondary p-8 rounded-3xl">
                <h4 className="text-xl font-bold mb-4">Give your home a fresh start</h4>
                <p className="mb-6 opacity-90">Experience the ultimate level of cleanliness with our signature deep cleaning protocol.</p>
                <Link 
                  to="/#quote"
                  className="w-full bg-white text-secondary py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-lg block text-center"
                >
                  Request a Deep Clean
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
