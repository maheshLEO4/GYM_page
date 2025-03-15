import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MembershipPlans from './components/MembershipPlans';
import Classes from './components/ClassesOffered';
import Facilities from './components/FacilitiesOverview';
import Equipment from './components/EquipmentGallery';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import MotivationalQuotes from './components/MotivationalQuotes';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="font-sans bg-gradient-to-b from-gray-900 to-black text-white min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/30 via-gray-900/50 to-black pointer-events-none"></div>

      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-gradient-to-tr from-red-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <MembershipPlans />
          <Classes />
          <MotivationalQuotes />
          <Facilities />
          <Equipment />
          <Trainers />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
