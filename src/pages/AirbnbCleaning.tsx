import { motion } from "motion/react";
import { CheckCircle2, Star, Clock, ShieldCheck, Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  {
    icon: Star,
    title: "Superhost Standards",
    description: "We clean to the highest standards to help you maintain your 5-star rating."
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Reliable cleaning between check-out and check-in times, even on tight schedules."
  },
  {
    icon: ShieldCheck,
    title: "Damage Reporting",
    description: "Our cleaners inspect for damages and report them to you immediately after each stay."
  },
  {
    icon: Sparkles,
    title: "Hotel-Style Staging",
    description: "We don't just clean; we stage your home with fresh linens and amenities for the next guest."
  }
];

const airbnbChecklist = [
  "Changing all bed linens and towels",
  "Sanitizing high-touch surfaces (remotes, door handles, switches)",
  "Restocking essential amenities (toilet paper, soap, coffee)",
  "Cleaning bathroom surfaces",
  "Vacuuming and mopping all floors",
  "Checking for left-behind items and reporting them",
  "Emptying all trash bins and replacing liners",
  "Cleaning inside the microwave and checking the fridge",
  "Wiping down patio furniture and outdoor areas",
  "Ensuring the property is staged exactly as per your listing photos"
];

export default function AirbnbCleaning() {
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
                Airbnb & Short-Term Rental Cleaning
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
                Your reputation as a host depends on cleanliness. Our specialized Airbnb turnover service ensures your property is pristine, staged, and ready for your next guests, every single time.
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
                <h3 className="text-2xl font-headline font-bold text-primary mb-6">The Turnover Checklist</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {airbnbChecklist.map((item, idx) => (
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
                  alt="Realistic airbnb bedroom cleaning" 
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000" 
                />
              </div>
              <div className="bg-primary text-on-primary p-8 rounded-3xl">
                <h4 className="text-xl font-bold mb-4">Host with Confidence</h4>
                <p className="mb-6 opacity-90">Let us handle the turnovers so you can focus on growing your rental business.</p>
                <Link 
                  to="/#quote"
                  className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-lg block text-center"
                >
                  Schedule a Turnover
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
