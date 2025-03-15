import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Memberships', href: '#memberships' },
    { name: 'Classes', href: '#classes' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-lighter/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-display font-bold text-white flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">ELITE</span>
            <span className="ml-1">FIT</span>
          </a>
          
          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-gray-400 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
          </button>
        </div>
        
        <div className={`md:flex md:items-center ${isOpen ? 'block mt-4' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 md:py-0 px-4 md:px-0 rounded text-base font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 md:mt-0 md:ml-8">
            <a href="#contact" className="btn-primary text-sm">Join Now</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;