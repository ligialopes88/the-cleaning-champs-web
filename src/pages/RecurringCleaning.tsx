import { motion } from "motion/react";
import { CheckCircle2, Calendar, Clock, Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose from weekly, bi-weekly, or monthly visits that fit your busy lifestyle."
  },
  {
    icon: Clock,
    title: "Consistent Quality",
    description: "The same high standards every single time, ensuring your home stays in peak condition."
  },
  {
    icon: Shield,
    title: "Trusted Professionals",
    description: "Our vetted and trained team members treat your home with the utmost respect."
  },
  {
    icon: CheckCircle2,
    title: "Detailed Checklist",
    description: "We follow a comprehensive 50-point checklist to ensure no corner is overlooked."
  }
];

const checklistItems = [
  "Dusting all surfaces, including baseboards and ceiling fans",
  "Vacuuming and mopping all floors",
  "Sanitizing kitchen countertops and appliances",
  "Deep cleaning bathrooms (toilets, showers, and sinks)",
  "Emptying trash and recycling bins",
  "Making beds and tidying up living areas",
  "Cleaning mirrors and glass surfaces",
  "Wiping down cabinet exteriors"
];

export default function RecurringCleaning() {
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
                Recurring Cleaning Services
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
                Our recurring cleaning service is designed to keep your home in a perpetual state of perfection. Whether you need us weekly, bi-weekly, or monthly, we provide the consistent, high-quality care your home deserves.
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
                  alt="Realistic recurring cleaning" 
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1000" 
                />
              </div>
              <div className="bg-primary text-on-primary p-8 rounded-3xl">
                <h4 className="text-xl font-bold mb-4">Ready for a cleaner home?</h4>
                <p className="mb-6 opacity-90">Join hundreds of DMV residents who trust The Cleaning Champs for their regular maintenance.</p>
                <Link 
                  to="/#quote"
                  className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-lg block text-center"
                >
                  Book Your First Visit
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
