import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { ServiceAreas } from './components/ServiceAreas';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ServiceAreas />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
