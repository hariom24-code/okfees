import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../Hero.jsx";
import StudentSearch from "./StudentSearch.jsx";
import Features from "./Features.jsx";
import Testimonials from "./Testimonials.jsx";
import Pricing from "./Pricing.jsx";
import CTA from "./CTA.jsx";
import FAQ from "./FAQ.jsx";
import Newsletter from "./Newsletter.jsx";
import Footer from "../components/Footer.jsx";
import "./landing.css";

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <StudentSearch />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
