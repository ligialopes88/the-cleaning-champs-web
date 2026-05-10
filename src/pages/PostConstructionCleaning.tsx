import { motion } from "motion/react";
import { CheckCircle2, HardHat, Trash2, Wind, Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  {
    icon: HardHat,
    title: "Safety First",
    description: "Our team is trained to handle construction sites safely, removing hazardous debris and fine dust."
  },
  {
    icon: Trash2,
    title: "Debris Removal",
    description: "We clear away leftover materials, packaging, and construction waste to reveal your new space."
  },
  {
    icon: Wind,
    title: "Air Quality Focus",
    description: "HEPA-filtered vacuuming and air scrubbing to eliminate microscopic silica and drywall dust."
  },
  {
    icon: Sparkles,
    title: "Detail Polishing",
    description: "From windows to fixtures, we polish every surface until it shines like a showroom."
  }
];

const postConstructionChecklist = [
  "HEPA vacuuming of all surfaces (walls, ceilings, floors)",
  "Cleaning inside all cabinets, drawers, and closets",
  "Removing stickers and residue from new windows and appliances",
  "Deep cleaning of baseboards, door frames, and window sills",
  "Scrubbing and sanitizing all bathroom and kitchen fixtures",
  "Polishing mirrors, glass doors, and chrome accents",
  "Cleaning light fixtures and ceiling fans",
  "Wiping down all hardware (knobs, handles, hinges)",
  "Mopping and sealing hard floors",
  "Deep cleaning of carpets and upholstery if needed"
];

export default function PostConstructionCleaning() {
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
                Post-Construction Cleaning
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
                Renovations are exciting, but the mess left behind isn't. Our post-construction cleaning service is a specialized deep clean that removes fine dust and debris, making your new space truly livable.
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
                <h3 className="text-2xl font-headline font-bold text-primary mb-6">The Post-Build Checklist</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {postConstructionChecklist.map((item, idx) => (
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
                  alt="Post-construction cleaning" 
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEpBgVEzL_vN2DEXhHNFHCyviVTrcBUIeab-TLESI4jnIKopbJPeKWxTSot0y2R_Caws6cudAUTnp-0rgIfEGSMfGTm6RmrIOGTtiM2E6YAcCZWV8ac3AwzYjD5fXA50XC0FcjKy27jfCIcOSehmqeWxpXTMAHaCqmV13vlF7aoM8EDdt_VGfkzpUaAFuOaipN6yPylJk3jtHUUavlWXDwndENFMGEBfIvcTSDweJvPSPX8n4amKN3UE114n4E57CCTCKlvN47C3Wq" 
                />
              </div>
              <div className="bg-primary text-on-primary p-8 rounded-3xl">
                <h4 className="text-xl font-bold mb-4">Ready to move in?</h4>
                <p className="mb-6 opacity-90">Don't let construction dust settle in your new home. Get a professional finish today.</p>
                <Link 
                  to="/#quote"
                  className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-lg block text-center"
                >
                  Request a Post-Build Clean
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
