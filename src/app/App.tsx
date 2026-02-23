import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Partners } from "./components/Partners";
import { Services } from "./components/Services";
import { Reviews } from "./components/Reviews";
import { HowItWorks } from "./components/HowItWorks";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <About />
        <Services />
        <Reviews />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
