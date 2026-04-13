/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import WhyUs from "./WhyUs";
import AutoMarquee from "./AutoMarquee";
import Contact from "./Contact";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the premium feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="animate-in fade-in duration-1000">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <WhyUs />
          <AutoMarquee />
          <Contact />
          <Footer />
        </div>
      )}
    </main>
  );
}
