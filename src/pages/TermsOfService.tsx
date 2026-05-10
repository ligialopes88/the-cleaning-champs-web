import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, FileText, Scale, ShieldAlert, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:translate-x-[-4px] transition-transform"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-outline-variant/10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <FileText className="text-primary" size={28} />
              </div>
              <h1 className="text-4xl font-headline font-extrabold text-primary">Terms of Service</h1>
            </div>

            <p className="text-on-surface-variant mb-8">
              Last updated: April 6, 2026
            </p>

            <div className="prose prose-slate max-w-none space-y-8 text-on-surface-variant leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 size={22} /> 1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or using the services provided by The Cleaning Champs, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Scale size={22} /> 2. Services Provided
                </h2>
                <p>
                  The Cleaning Champs provides professional residential and commercial cleaning services. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <ShieldAlert size={22} /> 3. Booking and Cancellation
                </h2>
                <p>
                  Bookings are subject to availability. We require a minimum of 24 hours' notice for cancellations or rescheduling. Cancellations made less than 24 hours before the scheduled service may be subject to a cancellation fee.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText size={22} /> 4. Payment Terms
                </h2>
                <p>
                  Payment is due upon completion of the service unless otherwise agreed upon in writing. We accept major credit cards and other electronic payment methods. Late payments may incur additional fees.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <ShieldAlert size={22} /> 5. Liability and Insurance
                </h2>
                <p>
                  The Cleaning Champs is fully insured. While we take every precaution to ensure the safety of your property, we are not liable for pre-existing damage or damage caused by normal wear and tear. Any claims for damage must be reported within 24 hours of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 size={22} /> 6. Customer Responsibilities
                </h2>
                <p>
                  Customers are responsible for providing access to the property at the scheduled time. Please ensure that pets are secured and that any fragile or valuable items are stored safely before our arrival.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Scale size={22} /> 7. Governing Law
                </h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of the state in which the services are provided.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText size={22} /> 8. Contact Us
                </h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-4 font-bold text-primary">
                  Email: champstheclean@gmail.com<br />
                  Phone: +1 (240) 861-7434
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
