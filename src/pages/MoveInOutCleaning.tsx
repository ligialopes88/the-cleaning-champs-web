import { motion } from "motion/react";
import { CheckCircle2, Home, Key, Truck, Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  {
    icon: Home,
    title: "Complete Vacancy Clean",
    description: "Designed for empty homes to ensure every inch is sanitized for the next occupant."
  },
  {
    icon: Key,
    title: "Ready for Move-In",
    description: "We make sure your new home is sparkling and safe from day one."
  },
  {
    icon: Truck,
    title: "Stress-Free Moving",
    description: "Focus on your move while we handle the heavy-duty cleaning of your old or new place."
  },
  {
    icon: Sparkles,
    title: "Deep Sanitization",
    description: "High-level disinfection of all surfaces, especially in kitchens and bathrooms."
  }
];

const moveChecklist = [
  "Inside all kitchen cabinets and drawers",
  "Inside the oven and refrigerator (deep clean)",
  "Inside the dishwasher and microwave",
  "Scrubbing all baseboards and door frames",
  "Cleaning inside all closets and shelving",
  "Deep cleaning of all floors (vacuuming and mopping)",
  "Sanitizing all bathrooms from top to bottom",
  "Cleaning all light fixtures and ceiling fans",
  "Wiping down all walls and removing cobwebs",
  "Cleaning window tracks and sills"
];

export default function MoveInOutCleaning() {
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
                Move-In / Move-Out Cleaning
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
                Moving is stressful enough. Let us handle the cleaning. Our Move-In/Out service is a comprehensive deep clean designed for vacant properties, ensuring a fresh start for you or the next resident.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {features.map((feature, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="w-10 h-10 bg-primary-container/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="text-primary" size={20} />
                    </div>
                    <h3 className="font-bold text-primary">{feature.title}</h3>
                    <p className="text-sm text-on-surface-variant">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white p-8 rounded-3xl border border-outline-variant/10 shadow-sm">
                <h3 className="text-2xl font-headline font-bold text-primary mb-6">The Move-In/Out Checklist</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {moveChecklist.map((item, idx) => (
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
                  alt="Realistic move in out cleaning" 
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
                />
              </div>
              <div className="bg-primary text-on-primary p-8 rounded-3xl">
                <h4 className="text-xl font-bold mb-4">Moving soon?</h4>
                <p className="mb-6 opacity-90">Book your move-in or move-out clean today and cross one big task off your list.</p>
                <Link 
                  to="/#quote"
                  className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-lg block text-center"
                >
                  Get a Moving Quote
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
