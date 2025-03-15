import { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const MotivationalQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    {
      text: "It's not about being the best. It's about being better than you were yesterday.",
      author: "Elite Fit Mantra"
    },
    {
      text: "Discipline is the bridge between goals and accomplishment.",
      author: "Jim Rohn"
    },
    {
      text: "Train like a beast. Look like a beauty.",
      author: "Elite Fit Mantra"
    },
    {
      text: "Sweat. Smile. Repeat.",
      author: "Anonymous"
    },
    {
      text: "No pain, no gain. Shut up and train.",
      author: "Elite Fit Mantra"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [quotes.length]);
  
  return (
    <section id="quotes" className="section py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background - matching the style from Facilities */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0"></div>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto relative z-20">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-primary to-secondary rounded"></div>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" data-aos="fade-up">Daily Motivation</h2>
          <p className="section-subtitle text-gray-400 max-w-2xl mx-auto text-sm sm:text-base" data-aos="fade-up" data-aos-delay="100">
            Words to inspire your fitness journey and push you toward your goals.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="card p-6 sm:p-10 md:p-12 rounded-xl relative overflow-hidden">
            {/* Card background styling */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-0"></div>
            <div className="absolute top-4 left-4 opacity-20 z-10">
              <FaQuoteLeft className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
            </div>
            
            <div className="relative z-20">
              <div className="relative h-32 sm:h-36 md:h-40">
                {quotes.map((quote, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full text-center transition-all duration-1000 transform ${
                      index === currentQuote 
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <blockquote>
                      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 italic">"{quote.text}"</p>
                      <footer className="text-gray-400 text-sm sm:text-base">— {quote.author}</footer>
                    </blockquote>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-6 sm:mt-8">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    className={`h-1.5 sm:h-2 rounded-full mx-1 transition-all ${
                      index === currentQuote ? 'bg-primary w-6 sm:w-8' : 'bg-gray-600 w-1.5 sm:w-2'
                    }`}
                    onClick={() => setCurrentQuote(index)}
                    aria-label={`View quote ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivationalQuotes;