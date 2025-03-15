import { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const FacilityCard = ({ image, title, description }) => {
  // Use a separate state to track image errors specifically
  const [imgError, setImgError] = useState(false);
  
  return (
    <div className="relative overflow-hidden rounded-xl h-full group card-hover" data-aos="fade-up">
      <div className="relative w-full pb-[56.25%] bg-gray-800">
        {/* Image with error handling */}
        {!imgError ? (
          <img 
            src={image} 
            alt={title}
            className="absolute inset-0 object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          // Fallback when image fails to load
          <div className="absolute inset-0 flex items-center justify-center bg-gray-700 text-center p-2">
            <span className="text-sm text-white">{title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{title}</h3>
        {/* Always visible description on mobile */}
        <p className="text-gray-300 text-xs sm:text-sm block">{description}</p>
      </div>
    </div>
  );
};

const Facilities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1); // Default to 1 for mobile
  
  // Simplified image paths with lower resolution for mobile
  const facilities = [
    {
      image: "/api/placeholder/400/225", // Fallback to placeholder if you have issues with external images
      backupImage: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?w=400&q=60", // Smaller, optimized image
      title: "Main Training Area",
      description: "Our spacious main floor features state-of-the-art equipment arranged in functional zones."
    },
    {
      image: "/api/placeholder/400/225",
      backupImage: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&q=60",
      title: "Cardio Deck",
      description: "The latest treadmills, ellipticals, and bikes with built-in entertainment systems."
    },
    {
      image: "/api/placeholder/400/225",
      backupImage: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&q=60",
      title: "Free Weights Section",
      description: "A comprehensive selection of dumbbells, barbells, and specialty equipment."
    },
    {
      image: "/api/placeholder/400/225",
      backupImage: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&q=60",
      title: "Yoga Studio",
      description: "Tranquil space designed for yoga, mindfulness, and stretching sessions."
    },
    {
      image: "/api/placeholder/400/225",
      backupImage: "https://images.unsplash.com/photo-1561214095-fea147325936?w=400&q=60",
      title: "Recovery Zone",
      description: "Dedicated area for stretching, foam rolling, and recovery equipment."
    },
    {
      image: "/api/placeholder/400/225",
      backupImage: "https://images.unsplash.com/photo-1534405111774-ade5c6e8f02d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvY2tlciUyMHJvb21zfGVufDB8fDB8fHww",
      title: "Luxury Locker Rooms",
      description: "Premium showers, changing areas, and amenities for member comfort."
    }
  ];
  
  // Adjust slides to show based on screen size
  useEffect(() => {
    // Simpler resize function that ensures slidesToShow is set correctly
    const handleResize = () => {
      if (window.innerWidth < 640) {
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
  
  // Auto-rotate slides (reduced time for testing)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(facilities.length / slidesToShow));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [facilities.length, slidesToShow]);
  
  const totalSlides = Math.ceil(facilities.length / slidesToShow);
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };
  
  // Calculate visible facilities with proper bounds checking
  const getVisibleFacilities = () => {
    const start = currentSlide * slidesToShow;
    const end = Math.min(start + slidesToShow, facilities.length);
    
    // Make sure we don't go out of bounds
    if (start >= facilities.length) {
      setCurrentSlide(0);
      return facilities.slice(0, slidesToShow);
    }
    
    return facilities.slice(start, end);
  };
  
  const visibleFacilities = getVisibleFacilities();
  
  return (
    <section id="facilities" className="section py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0"></div>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto relative z-20">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-primary to-secondary rounded"></div>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" data-aos="fade-up">Our Facilities</h2>
          <p className="section-subtitle text-gray-300 max-w-2xl mx-auto text-sm sm:text-base" data-aos="fade-up" data-aos-delay="100">
            Experience premium fitness in an environment designed for success.
          </p>
        </div>
        
      
        
        <div className="relative px-2 sm:px-10" data-aos="fade-up" data-aos-delay="200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {visibleFacilities.map((facility, index) => (
              <div 
                key={`facility-${currentSlide}-${index}`}
                className="h-full"
              >
                <FacilityCard
                  image={facility.backupImage || facility.image}
                  title={facility.title}
                  description={facility.description}
                />
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows - Enhanced for mobile */}
          <button 
            className="absolute -left-1 sm:left-0 top-1/2 transform -translate-y-1/2 bg-primary/90 hover:bg-primary text-white p-2 sm:p-3 rounded-full transition-all z-30"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <FaArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
          
          <button 
            className="absolute -right-1 sm:right-0 top-1/2 transform -translate-y-1/2 bg-primary/90 hover:bg-primary text-white p-2 sm:p-3 rounded-full transition-all z-30"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <FaArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={`indicator-${index}`}
                className={`h-2 rounded-full mx-1 transition-all ${
                  index === currentSlide ? 'bg-primary w-6 sm:w-8' : 'bg-gray-600 w-2'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;