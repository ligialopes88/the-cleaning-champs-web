import { motion } from "motion/react";
import { ShieldCheck, Users, Calendar, Heart } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "100% Satisfaction",
    description: "If you're not absolutely thrilled, we'll return and make it right immediately."
  },
  {
    icon: Users,
    title: "Trusted Pros",
    description: "All staff are background-checked, insured, and professionally trained experts."
  },
  {
    icon: Calendar,
    title: "Custom Plans",
    description: "Tailored cleaning schedules that fit your lifestyle and specific home needs."
  },
  {
    icon: Heart,
    title: "Pet Friendly",
    description: "Safe, non-toxic products used for the health of your furry family members."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="pt-24 pb-12 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-extrabold text-primary mb-4">Why Choose Us</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">Elevating the standards of residential maintenance with premium care and professional integrity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-3xl hover:bg-primary transition-colors duration-300 shadow-sm border border-outline-variant/10"
            >
              <div className="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20">
                <reason.icon className="text-secondary group-hover:text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-white">{reason.title}</h3>
              <p className="text-on-surface-variant group-hover:text-white/80">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
