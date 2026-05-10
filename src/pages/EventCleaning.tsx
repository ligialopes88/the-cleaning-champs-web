import { motion } from "motion/react";
import { CheckCircle2, PartyPopper, Clock, Shield, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  {
    icon: PartyPopper,
    title: "Pre-Event Prep",
    description: "We'll have your home or venue looking its absolute best before your guests arrive."
  },
  {
    icon: Clock,
    title: "Fast Post-Party Cleanup",
    description: "Don't worry about the mess. We'll handle the cleanup so you can rest after your event."
  },
  {
    icon: Shield,
    title: "Professional Care",
    description: "Our team handles your space with care, ensuring everything is back in its place."
  },
  {
    icon: Sparkles,
    title: "Spotless Results",
    description: "From sticky floors to overflowing trash, we leave no trace of the party behind."
  }
];

const checklistItems = [
  "Clearing and disposing of all event-related trash",
  "Deep cleaning and sanitizing kitchen and food areas",
  "Vacuuming and mopping all high-traffic areas",
  "Sanitizing and restocking bathrooms",
  "Wiping down tables, chairs, and surfaces",
  "Removing any stains or spills from floors or carpets",
  "Cleaning glass doors and entryways",
  "General tidying and organization of the space"
];

export default function EventCleaning() {
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
                Event & Party Cleaning
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
                Host with confidence and relax afterwards. Our specialized event cleaning service handles the heavy lifting before and after your celebrations, ensuring a pristine environment for your guests and a stress-free recovery for you.
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
                <h3 className="text-2xl font-headline font-bold text-primary mb-6">What's Included?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {checklistItems.map((item, idx) => (
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
                  alt="Event venue cleaning" 
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000" 
                />
              </div>
              <div className="bg-primary text-on-primary p-8 rounded-3xl">
                <h4 className="text-xl font-bold mb-4">Planning an event?</h4>
                <p className="mb-6 opacity-90">Let us handle the mess so you can focus on your guests. Book your event cleaning today.</p>
                <Link 
                  to="/#quote"
                  className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-lg block text-center"
                >
                  Get an Event Quote
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
