import { motion } from "motion/react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Airbnb",
    description: "Professional turnover cleaning to keep your Superhost status and delight every guest.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000",
    cols: "lg:col-span-8",
    gradient: "from-primary/90 via-primary/20 to-transparent",
    link: "/services/airbnb"
  },
  {
    title: "Recurring Cleaning",
    description: "Weekly or bi-weekly maintenance to keep your home in a perpetual state of perfection.",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1000",
    cols: "lg:col-span-4",
    gradient: "from-primary/90 via-primary/20 to-transparent",
    link: "/services/recurring"
  },
  {
    title: "Deep Cleaning",
    description: "Every nook and cranny addressed with industrial-grade precision.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
    cols: "lg:col-span-4",
    gradient: "from-secondary/90 via-secondary/20 to-transparent",
    link: "/services/deep-cleaning"
  },
  {
    title: "Move-in/out",
    description: "A clean slate for your new beginning or a perfect hand-off.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    cols: "lg:col-span-8",
    gradient: "from-primary/90 via-primary/20 to-transparent",
    link: "/services/move-in-out"
  },
  {
    title: "Post-Construction",
    description: "Eliminating construction dust and debris to reveal the beauty of your renovation.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEpBgVEzL_vN2DEXhHNFHCyviVTrcBUIeab-TLESI4jnIKopbJPeKWxTSot0y2R_Caws6cudAUTnp-0rgIfEGSMfGTm6RmrIOGTtiM2E6YAcCZWV8ac3AwzYjD5fXA50XC0FcjKy27jfCIcOSehmqeWxpXTMAHaCqmV13vlF7aoM8EDdt_VGfkzpUaAFuOaipN6yPylJk3jtHUUavlWXDwndENFMGEBfIvcTSDweJvPSPX8n4amKN3UE114n4E57CCTCKlvN47C3Wq",
    cols: "lg:col-span-12",
    gradient: "from-on-surface-variant/90 via-on-surface-variant/20 to-transparent",
    link: "/services/post-construction"
  },
  {
    title: "Event & Party Cleaning",
    description: "Professional pre and post-event cleaning to ensure your venue is spotless for every celebration.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000",
    cols: "lg:col-span-12",
    gradient: "from-secondary/90 via-secondary/20 to-transparent",
    link: "/services/event-cleaning"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="pt-24 pb-12 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-headline font-extrabold text-primary mb-4">Our Services</h2>
            <p className="text-on-surface-variant">Specialized cleaning solutions for every stage of your home's life.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[300px]">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${service.cols} relative rounded-[2rem] overflow-hidden group cursor-pointer`}
            >
              <Link to={service.link} className="block w-full h-full">
                <img 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                  src={service.image} 
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient}`}></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-on-primary mb-2">{service.title}</h3>
                  <p className="text-on-primary/80 max-w-md">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
