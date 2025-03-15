import { FaDumbbell, FaUsers, FaClock, FaHeart } from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="glassmorphism p-5 sm:p-6 card-hover w-full" data-aos="fade-up">
      <div className="flex flex-col items-center text-center">
        <div className="p-3 rounded-full bg-gradient-to-br from-primary to-secondary mb-4">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

const About = () => {
  const features = [
    {
      icon: FaDumbbell,
      title: "Modern Equipment",
      description: "State-of-the-art fitness equipment designed for both beginners and professionals."
    },
    {
      icon: FaUsers,
      title: "Expert Trainers",
      description: "Our certified trainers create personalized plans to help you reach your goals."
    },
    {
      icon: FaClock,
      title: "Flexible Hours",
      description: "Open 7 days a week with extended hours to fit your busy schedule."
    },
    {
      icon: FaHeart,
      title: "Community Support",
      description: "Join a community that motivates and inspires you on your fitness journey."
    }
  ];

  return (
    <section id="about" className="section bg-dark px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl" data-aos="fade-up">About Elite Fit</h2>
          <p className="section-subtitle mx-auto text-sm sm:text-base max-w-xl" data-aos="fade-up" data-aos-delay="100">
            Where fitness meets passion and determination transforms into results.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-xl blur-xl opacity-30"></div>
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Elite Fit Gym Interior" 
                  className="w-full h-auto rounded-xl object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <span className="px-3 py-1 sm:px-4 sm:py-2 bg-primary/80 text-white text-xs sm:text-sm font-bold rounded-full">
                    SINCE 2010
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0" data-aos="fade-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
              Elevate Your Fitness Journey
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
              At Elite Fit, we believe that fitness is more than just working out—it's a lifestyle. Our premium facility is designed to provide an unparalleled fitness experience that caters to individuals of all fitness levels.
            </p>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
              Whether you're a beginner taking your first steps toward a healthier life or an experienced athlete looking to push your limits, our dedicated team of fitness professionals is here to guide, motivate, and support you every step of the way.
            </p>
            
            <div className="flex items-center space-x-4 mb-6 sm:mb-8">
              <div className="h-1 w-10 sm:w-12 bg-primary rounded"></div>
              <p className="text-primary text-xs sm:text-sm font-semibold">OUR MISSION</p>
            </div>
            
            <blockquote className="border-l-4 border-primary pl-3 sm:pl-4 mb-6 sm:mb-8">
              <p className="text-base sm:text-lg italic text-gray-300">
                "To inspire and empower our members to achieve their personal best through innovative training, supportive community, and exceptional facilities."
              </p>
            </blockquote>
            
            <a href="#memberships" className="btn-primary inline-block text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-3">
              Explore Memberships
            </a>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-20">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;