import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="relative bg-dark-lighter pt-24 pb-6 overflow-hidden">
      {/* SVG Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-dark"></path>
        </svg>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Logo and Description */}
          <div className="w-full lg:w-4/12 px-4">
            <div className="mb-12">
              <a href="#" className="text-3xl font-display font-bold mb-6 inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">ELITE</span>
                <span className="text-white">FIT</span>
              </a>
              <p className="text-gray-400 leading-relaxed mt-4">
                Transform your body, elevate your mind. Join Elite Fit and experience premium fitness training in a supportive community environment.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaYoutube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="w-full sm:w-6/12 lg:w-2/12 px-4">
            <div className="mb-12">
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="list-none">
                <li className="py-2"><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li className="py-2"><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li className="py-2"><a href="#classes" className="text-gray-400 hover:text-white transition-colors">Classes</a></li>
                <li className="py-2"><a href="#trainers" className="text-gray-400 hover:text-white transition-colors">Trainers</a></li>
                <li className="py-2"><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>
          </div>
          
          {/* Services */}
          <div className="w-full sm:w-6/12 lg:w-2/12 px-4">
            <div className="mb-12">
              <h5 className="text-lg font-semibold mb-4">Services</h5>
              <ul className="list-none">
                <li className="py-2"><a href="#" className="text-gray-400 hover:text-white transition-colors">Personal Training</a></li>
                <li className="py-2"><a href="#" className="text-gray-400 hover:text-white transition-colors">Group Classes</a></li>
                <li className="py-2"><a href="#" className="text-gray-400 hover:text-white transition-colors">Nutrition Plans</a></li>
                <li className="py-2"><a href="#" className="text-gray-400 hover:text-white transition-colors">Online Coaching</a></li>
                <li className="py-2"><a href="#" className="text-gray-400 hover:text-white transition-colors">Fitness Assessment</a></li>
              </ul>
            </div>
          </div>
          
          {/* Contact */}
          <div className="w-full lg:w-4/12 px-4">
            <div className="mb-12">
              <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
              <div className="flex items-start mt-4">
                <MdLocationOn className="h-6 w-6 text-primary mt-1" />
                <p className="ml-3 text-gray-400">123 Fitness Street, Muscle City, MC 12345</p>
              </div>
              <div className="flex items-start mt-4">
                <MdPhone className="h-6 w-6 text-primary mt-1" />
                <p className="ml-3 text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-start mt-4">
                <MdEmail className="h-6 w-6 text-primary mt-1" />
                <p className="ml-3 text-gray-400">info@elitefit.example</p>
              </div>
              <div className="mt-6">
                <h6 className="text-sm font-semibold mb-2 text-gray-300">HOURS OF OPERATION</h6>
                <p className="text-gray-400">Monday - Friday: 5:00 AM - 11:00 PM</p>
                <p className="text-gray-400">Saturday - Sunday: 7:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} Elite Fit. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;