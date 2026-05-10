import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="about" className="pt-24 pb-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 order-2 lg:order-1"
          >
            <h4 className="text-secondary font-bold tracking-widest text-sm uppercase mb-4">OUR STORY</h4>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-8 leading-tight">
              A Passion for Pristine Spaces
            </h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>
                Founded in the heart of the DMV, The Cleaning Champs started with a simple belief: that a clean home is the foundation of a clear mind. We don't just "clean"—we restore your environment to its highest potential.
              </p>
              <p>
                Our team of professionals is hand-selected and rigorously trained to meet our editorial standards. We use eco-friendly products and meticulous checklists to ensure that every corner reflects our commitment to excellence.
              </p>
              <p>
                To better serve our diverse community in the DMV area, our staff is proudly multilingual, speaking <strong>English, Spanish, and Portuguese</strong>.
              </p>
              <p className="text-sm italic opacity-80">
                We do not discriminate based on race, gender, or origin.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 md:gap-12">
              <div>
                <p className="text-4xl font-headline font-extrabold text-secondary">10+</p>
                <p className="text-sm font-bold text-primary uppercase">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-headline font-extrabold text-secondary">100%</p>
                <p className="text-sm font-bold text-primary uppercase">Licensed & Insured</p>
              </div>
              <div>
                <p className="text-3xl font-headline font-extrabold text-secondary pt-1.5">EN • ES • PT</p>
                <p className="text-sm font-bold text-primary uppercase">Multilingual Team</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 order-1 lg:order-2 relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] rotate-3"></div>
            <img 
              alt="Professional cleaner" 
              className="relative z-10 w-full h-[500px] object-cover rounded-[2.5rem] shadow-2xl" 
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSTSzLu0xB9b4ql-5DH-NeQWBbyTkp3XRoyl8jcNShG16ANfKOL8O20KpZb1UiwERpM-vj6e6X2bR6T6fDB-b6UN2T-Wlo3mh4XvX9v5kGFBe0FDaj6tPmkaZiKG-zZCbMc0NTIldzfvdnbUMsxEedeVTHM8wS91KD8P2ZSoeVHoXdhr8g5Ps9zgpT2U7jtgu7f-oQOopWl0x5Huq2JJVjQdCX7YUwOY189xGWmowEoGxRlgYlS2JcTH60kVQ1PWvY4LkvIAHO4N7O" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
