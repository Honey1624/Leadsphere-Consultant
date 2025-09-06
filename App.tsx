import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}