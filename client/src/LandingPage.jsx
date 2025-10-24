import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import StudentSearch from "./StudentSearch";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import CTA from "./CTA";
import FAQ from "./FAQ";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

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