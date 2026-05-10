import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuoteSection from "./components/QuoteSection";
import AboutSection from "./components/AboutSection";
import WhyChooseUs from "./components/WhyChooseUs";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import RecurringCleaning from "./pages/RecurringCleaning";
import DeepCleaning from "./pages/DeepCleaning";
import MoveInOutCleaning from "./pages/MoveInOutCleaning";
import AirbnbCleaning from "./pages/AirbnbCleaning";
import PostConstructionCleaning from "./pages/PostConstructionCleaning";
import EventCleaning from "./pages/EventCleaning";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <QuoteSection />
        <AboutSection />
        <WhyChooseUs />
        <StatsSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/recurring" element={<RecurringCleaning />} />
        <Route path="/services/deep-cleaning" element={<DeepCleaning />} />
        <Route path="/services/move-in-out" element={<MoveInOutCleaning />} />
        <Route path="/services/airbnb" element={<AirbnbCleaning />} />
        <Route path="/services/post-construction" element={<PostConstructionCleaning />} />
        <Route path="/services/event-cleaning" element={<EventCleaning />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}
