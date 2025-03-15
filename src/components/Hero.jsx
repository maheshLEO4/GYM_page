import { FaAngleDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-dark z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
          alt="Fitness background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <div className="text-center max-w-5xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6"
            data-aos="fade-up"
          >
            <span className="block">TRANSFORM YOUR BODY.</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              TRANSFORM YOUR LIFE.
            </span>
          </h1>
          
          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Push yourself, because no one else is going to do it for you.
          </p>
          
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a href="#memberships" className="btn-primary w-full sm:w-auto">
              JOIN NOW
            </a>
            <a href="#about" className="btn-outline w-full sm:w-auto">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator - Fixed for mobile */}
      <div className="absolute bottom-10 left-0 right-0 mx-auto flex justify-center z-20">
        <a href="#about" className="text-white flex flex-col items-center animate-bounce">
          <span className="text-sm mb-2">Scroll Down</span>
          <FaAngleDown className="h-6 w-6" />
        </a>
      </div>
      
      {/* SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 sm:h-20"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z"
            className="fill-dark"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;