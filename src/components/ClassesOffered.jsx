import { useState } from 'react';
import { 
  FaDumbbell, 
  FaBicycle, 
  FaHeartbeat, 
  FaRunning, 
  FaYinYang, 
  FaFire, 
  FaChevronRight,
  FaTimes 
} from 'react-icons/fa';
import { GiBoxingGlove } from 'react-icons/gi';

const ClassCard = ({ icon: Icon, title, description, duration, intensity, trainer, onClick, isActive }) => {
  return (
    <div 
      className={`card p-4 sm:p-6 flex flex-col card-hover cursor-pointer transition-all duration-300 ${isActive ? 'ring-2 ring-primary' : ''}`}
      onClick={onClick}
      data-aos="fade-up"
    >
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mr-3 sm:mr-4">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
      </div>
      
      <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 flex-grow">{description}</p>
      
      <div className="border-t border-gray-700 pt-3 sm:pt-4 mt-1 sm:mt-2">
        <div className="flex flex-wrap gap-y-2 items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center">
            <span className="text-gray-400">Duration:</span>
            <span className="ml-1 sm:ml-2 text-white">{duration}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400">Intensity:</span>
            <span className="ml-1 sm:ml-2 text-white">{intensity}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-400 text-xs sm:text-sm">Trainer: <span className="text-white">{trainer}</span></span>
          <FaChevronRight className="text-primary h-3 w-3 sm:h-4 sm:w-4" />
        </div>
      </div>
    </div>
  );
};

const ClassDetail = ({ classData, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-gray-900 rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        data-aos="zoom-in"
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mr-4">
              <classData.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">{classData.title}</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <FaTimes />
          </button>
        </div>
        
        <p className="text-gray-300 mb-6">{classData.description}</p>
        
        <div className="space-y-4">
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Duration</span>
            <span className="text-white">{classData.duration}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Intensity</span>
            <span className="text-white">{classData.intensity}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Trainer</span>
            <span className="text-white">{classData.trainer}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Equipment Needed</span>
            <span className="text-white">
              {classData.id === 1 ? "Dumbbells, Weights" : 
               classData.id === 2 ? "Indoor Bike" :
               classData.id === 3 ? "None Required" :
               classData.id === 4 ? "None Required" :
               classData.id === 5 ? "Yoga Mat" :
               classData.id === 6 ? "Exercise Mat" :
               "Boxing Gloves, Hand Wraps"}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Suitable For</span>
            <span className="text-white">
              {classData.id === 1 ? "All Levels" : 
               classData.id === 2 ? "Intermediate" :
               classData.id === 3 ? "Advanced" :
               classData.id === 4 ? "All Levels" :
               classData.id === 5 ? "All Levels" :
               classData.id === 6 ? "All Levels" :
               "Beginners Welcome"}
            </span>
          </div>
        </div>
        
        <div className="mt-8">
          <a href="#contact" className="btn-primary w-full text-center block" onClick={onClose}>
            Book This Class
          </a>
        </div>
      </div>
    </div>
  );
};

const Classes = () => {
  const [activeClass, setActiveClass] = useState(null);
  
  const classes = [
    {
      id: 1,
      icon: FaDumbbell,
      title: "Strength Training",
      description: "Build muscle, increase strength, and boost your metabolism with our comprehensive strength training sessions.",
      duration: "45 min",
      intensity: "Medium-High",
      trainer: "Alex Johnson",
    },
    {
      id: 2,
      icon: FaBicycle,
      title: "Spin Class",
      description: "High-energy indoor cycling with pumping music and motivational instruction to push your cardio fitness.",
      duration: "40 min",
      intensity: "High",
      trainer: "Sarah Miller",
    },
    {
      id: 3,
      icon: FaHeartbeat,
      title: "HIIT",
      description: "High-Intensity Interval Training to maximize calorie burn and metabolic rate with alternating intensity exercise.",
      duration: "30 min",
      intensity: "Very High",
      trainer: "Mike Peterson",
    },
    {
      id: 4,
      icon: FaRunning,
      title: "Cardio Blast",
      description: "Improve cardiovascular health with a mix of running, jumping, and movement drills that will leave you energized.",
      duration: "45 min",
      intensity: "Medium",
      trainer: "Jessica Park",
    },
    {
      id: 5,
      icon: FaYinYang,
      title: "Yoga Flow",
      description: "Connect breath with movement in this dynamic yoga class focusing on flexibility, strength, and mindfulness.",
      duration: "60 min",
      intensity: "Low-Medium",
      trainer: "Emma Wilson",
    },
    {
      id: 6,
      icon: FaFire,
      title: "Core Crusher",
      description: "Target your abs, obliques, and lower back with this focused core conditioning class for a stronger center.",
      duration: "30 min",
      intensity: "Medium",
      trainer: "David Thompson",
    },
    {
      id: 7,
      icon: GiBoxingGlove,
      title: "Boxing Fundamentals",
      description: "Learn boxing techniques while getting a full-body workout that improves coordination, strength, and stamina.",
      duration: "50 min",
      intensity: "High",
      trainer: "James Rodriguez",
    }
  ];
  
  const handleClassClick = (classId) => {
    setActiveClass(classId);
  };

  const closeClassDetail = () => {
    setActiveClass(null);
  };

  const selectedClass = classes.find(cls => cls.id === activeClass);
  
  return (
    <section id="classes" className="section py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" data-aos="fade-up">Our Classes</h2>
          <p className="section-subtitle mx-auto text-sm sm:text-base text-gray-300 max-w-lg" data-aos="fade-up" data-aos-delay="100">
            Explore our diverse range of classes designed to challenge, inspire, and transform your fitness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {classes.map((cls) => (
            <ClassCard
              key={cls.id}
              icon={cls.icon}
              title={cls.title}
              description={cls.description}
              duration={cls.duration}
              intensity={cls.intensity}
              trainer={cls.trainer}
              onClick={() => handleClassClick(cls.id)}
              isActive={activeClass === cls.id}
            />
          ))}
        </div>
        
        <div className="text-center mt-10 sm:mt-16" data-aos="fade-up">
          <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
            Want to learn more about our class schedule or interested in a free trial class?
          </p>
          <a href="#contact" className="btn-primary text-sm sm:text-base">
            Get Your Free Class Pass
          </a>
        </div>
      </div>

      {selectedClass && (
        <ClassDetail 
          classData={selectedClass} 
          onClose={closeClassDetail} 
        />
      )}
    </section>
  );
};

export default Classes;