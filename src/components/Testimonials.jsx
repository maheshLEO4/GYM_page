import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const TestimonialCard = ({ image, name, occupation, rating, content, date }) => {
  const [imgError, setImgError] = useState(false);
  
  return (
    <div className="bg-dark-light rounded-xl p-6 h-full transition-all duration-300 transform hover:-translate-y-1 relative">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary bg-gray-700">
          {!imgError ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover" 
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">{occupation}</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < rating ? "text-primary text-sm" : "text-gray-600 text-sm"} 
              />
            ))}
          </div>
        </div>
      </div>
      
      <FaQuoteLeft className="text-primary/20 absolute top-6 right-6 text-4xl" />
      
      <div className="mb-4">
        <p className="text-gray-300 leading-relaxed italic">{content}</p>
      </div>
      
      <div className="text-gray-500 text-sm mt-4">
        <span>{date}</span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1); // Default to 1 for mobile
  
  // Updated testimonials with optimized images for mobile
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
      name: "Michael Thompson",
      occupation: "Software Engineer",
      rating: 5,
      content: "I've been a member for over a year now, and the transformation in my fitness has been incredible. The trainers are knowledgeable and supportive, and the facilities are always clean and well-maintained.",
      date: "Member since 2023"
    },
    {
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
      name: "Rebecca Chen",
      occupation: "Marketing Director",
      rating: 5,
      content: "As a busy professional, I appreciate how efficiently I can get a great workout in. The equipment is top-notch, and the atmosphere is motivating without being intimidating. Highly recommend!",
      date: "Member since 2022"
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
      name: "Thomas Wilson",
      occupation: "Physical Therapist",
      rating: 4,
      content: "From a professional standpoint, I'm impressed with the range of equipment and the focus on proper form. The trainers are exceptional at adapting workouts for different fitness levels and goals.",
      date: "Member since 2023"
    },
    {
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
      name: "Sophia Martinez",
      occupation: "Teacher",
      rating: 5,
      content: "The community aspect of this gym is what keeps me coming back. The group classes are energizing, and I've made some great friends. The trainers remember your name and your goals.",
      date: "Member since 2022"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
      name: "James Lee",
      occupation: "Entrepreneur",
      rating: 5,
      content: "When I travel for business, I always miss my workouts here. The personalized training plans have helped me achieve fitness goals I never thought possible. Worth every penny!",
      date: "Member since 2021"
    },
    {
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
      name: "Emma Johnson",
      occupation: "Healthcare Professional",
      rating: 5,
      content: "The focus on recovery and injury prevention has been game-changing for me. I appreciate how the trainers emphasize proper technique and offer modifications when needed.",
      date: "Member since 2023"
    }
  ];
  
  // Adjust slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    
    // Initial call
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(testimonials.length / slidesToShow));
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length, slidesToShow]);
  
  const totalSlides = Math.ceil(testimonials.length / slidesToShow);
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };
  
  // Get current visible testimonials with bounds checking
  const getVisibleTestimonials = () => {
    const start = currentSlide * slidesToShow;
    const end = Math.min(start + slidesToShow, testimonials.length);
    
    // Safety check to prevent out-of-bounds issues
    if (start >= testimonials.length) {
      setCurrentSlide(0);
      return testimonials.slice(0, slidesToShow);
    }
    
    return testimonials.slice(start, end);
  };
  
  const currentTestimonials = getVisibleTestimonials();
  
  return (
    <section id="testimonials" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0"></div>
      <div className="absolute inset-0 bg-dark-lighter/95 backdrop-blur-sm z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-primary to-secondary rounded"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Success Stories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Hear from our community members about their experiences and transformations at Elite Fit.
          </p>
        </div>
        
        {/* Mobile Alert - Only show on small screens */}
        <div className="block md:hidden text-center mb-4 text-yellow-400 text-xs p-2 bg-yellow-900/30 rounded-lg">
          Swipe or use arrows to see more testimonials
        </div>
        
        <div className="relative px-2 sm:px-10" data-aos="fade-up" data-aos-delay="200">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {currentTestimonials.map((testimonial, index) => (
              <div 
                key={`testimonial-${currentSlide}-${index}`}
                className="h-full"
              >
                <TestimonialCard
                  image={testimonial.image}
                  name={testimonial.name}
                  occupation={testimonial.occupation}
                  rating={testimonial.rating}
                  content={testimonial.content}
                  date={testimonial.date}
                />
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows - Enhanced for mobile */}
          <button 
            className="absolute -left-1 sm:left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary/90 hover:bg-primary text-white transition-all z-30"
            onClick={prevSlide}
            aria-label="Previous testimonials"
          >
            <FaArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
          
          <button 
            className="absolute -right-1 sm:right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary/90 hover:bg-primary text-white transition-all z-30"
            onClick={nextSlide}
            aria-label="Next testimonials"
          >
            <FaArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={`indicator-${index}`}
                className={`h-1.5 sm:h-2 rounded-full mx-1 transition-all ${
                  index === currentSlide ? 'bg-primary w-6 sm:w-8' : 'bg-gray-600 w-1.5 sm:w-2'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to testimonial group ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;