import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
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
                <ShieldCheck className="text-primary" size={28} />
              </div>
              <h1 className="text-4xl font-headline font-extrabold text-primary">Privacy Policy</h1>
            </div>

            <p className="text-on-surface-variant mb-8">
              Last updated: April 6, 2026
            </p>

            <div className="prose prose-slate max-w-none space-y-8 text-on-surface-variant leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Eye size={22} /> 1. Information We Collect
                </h2>
                <p>
                  At The Cleaning Champs, we collect information that you provide directly to us when you request a quote, book a service, or contact us. This may include your name, email address, phone number, and physical address for service delivery.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Lock size={22} /> 2. How We Use Your Information
                </h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Provide, maintain, and improve our cleaning services.</li>
                  <li>Process transactions and send related information, including confirmations and invoices.</li>
                  <li>Send you technical notices, updates, security alerts, and support messages.</li>
                  <li>Respond to your comments, questions, and requests.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <ShieldCheck size={22} /> 3. Cookies and Tracking Technologies
                </h2>
                <p>
                  We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <ShieldCheck size={22} /> 4. Data Security
                </h2>
                <p>
                  The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText size={22} /> 5. Service Providers
                </h2>
                <p>
                  We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <ShieldCheck size={22} /> 6. Children's Privacy
                </h2>
                <p>
                  Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <ShieldCheck size={22} /> 7. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <ShieldCheck size={22} /> 8. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
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
