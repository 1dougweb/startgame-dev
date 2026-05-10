import './index.css';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Curriculum from './components/Curriculum';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Professor from './components/Professor';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-void text-slate-200 overflow-x-hidden">
      <main>
        <Hero />
        <Benefits />
        <Gallery />
        <Curriculum />
        <Testimonials />
        <Pricing />
        <Professor />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
