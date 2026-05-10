import { motion } from "motion/react";
import { Star, CheckCircle, Send } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function QuoteSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === 'success' && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      instructions: formData.get('instructions'),
    };

    try {
      const response = await fetch('https://hook.us2.make.com/x5p5jhuf4kjrskg2zm5peuew1ahfo513', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section id="quote" className="pt-24 pb-12 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Testimonial Side */}
          <div className="space-y-12">
            <div className="relative">
              <div className="text-secondary/20 text-8xl absolute -top-10 -left-6 font-serif">"</div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <h2 className="text-3xl font-headline font-bold text-primary mb-6">What our neighbors say</h2>
                <p className="text-2xl font-body text-on-surface leading-snug italic mb-8">
                  "The Cleaning Champs transformed our home in Bethesda. Every surface was pristine, and their attention to detail was truly editorial. It felt like walking into a brand new house."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      alt="Sarah Miller" 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEv6J2_T6n4EiyG6BaW4RasFoUbj-y2uk1hJyer-gJ-YJfdl8Kh6cXHn58HZMeci53brHXz3bNSHGfrKMwxk7lb_n9dx3jv6LpUVQolQClnRkvn3hCHwWWc8cfO1Bd_tsaakIADUbI7CaupSqfxwcIiB3pC3UuykqzHmcenhbgKmutDse64MrdrWc8OZA6Prx923zc-NPkG7Itf587T9-j-2SBwy87JlBVialtHIlb83jDJqCt6bz3-YpVgziY4zypWz5ndxpbFZxa" 
                    />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Sarah Miller</p>
                    <p className="text-sm text-on-surface-variant">Bethesda Resident</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-surface-container-low rounded-2xl">
                <div className="flex text-secondary mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-3xl font-headline font-extrabold text-primary">4.9/5</p>
                <p className="text-sm text-on-surface-variant">Google Rating</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-2xl">
                <CheckCircle className="text-secondary mb-2" size={32} />
                <p className="text-3xl font-headline font-extrabold text-primary">100%</p>
                <p className="text-sm text-on-surface-variant">Vetted Pros</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            ref={formRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-primary/5 border border-outline-variant/10"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="text-secondary" size={48} />
                </div>
                <div>
                  <h3 className="text-3xl font-headline font-bold text-primary mb-2">Message sent!</h3>
                  <p className="text-on-surface-variant">Thank you for your interest. We will get in touch soon.</p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-3xl font-headline font-bold text-primary mb-2">Get a Free Quote</h3>
                <p className="text-on-surface-variant mb-4">Tell us about your home and get an estimate in minutes.</p>
                <div className="flex gap-2 mb-8">
                  <span className="px-3 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full border border-primary/10">English</span>
                  <span className="px-3 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full border border-primary/10">Español</span>
                  <span className="px-3 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full border border-primary/10">Português</span>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary">Full Name</label>
                      <input 
                        required
                        name="name"
                        className="w-full bg-surface-container-highest border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none" 
                        placeholder="John Doe" 
                        type="text" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary">Email Address</label>
                      <input 
                        required
                        name="email"
                        className="w-full bg-surface-container-highest border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none" 
                        placeholder="john@example.com" 
                        type="email" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary">Phone Number</label>
                      <input 
                        required
                        name="phone"
                        className="w-full bg-surface-container-highest border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none" 
                        placeholder="(555) 000-0000" 
                        type="tel" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary">Service Type</label>
                      <select 
                        name="service"
                        className="w-full bg-surface-container-highest border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none appearance-none cursor-pointer"
                        defaultValue="Regular Cleaning"
                      >
                        <option>Regular Cleaning</option>
                        <option>Airbnb</option>
                        <option>Deep Cleaning</option>
                        <option>Move In/Out</option>
                        <option>Post Construction</option>
                        <option>Event & Party Cleaning</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Special Instructions</label>
                    <textarea 
                      name="instructions"
                      className="w-full bg-surface-container-highest border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none min-h-[120px] resize-none" 
                      placeholder="Tell us about your space..."
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-error text-sm font-bold">An error occurred while sending. Please try again.</p>
                  )}
                  <button 
                    disabled={status === 'submitting'}
                    className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-lg mt-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send My Estimate
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
