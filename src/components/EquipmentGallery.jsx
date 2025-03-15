import { useState } from 'react';
import { FaDumbbell, FaTachometerAlt, FaHeartbeat, FaRunning } from 'react-icons/fa';
import React from "react";


const EquipmentCard = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="relative overflow-hidden rounded-xl h-full group card-hover" data-aos="fade-up">
      <div className="bg-black/60 p-6 h-full transition-all group-hover:bg-black/80">
        <div className="flex items-center mb-4">
          <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full mr-4">
            <Icon className="text-white text-xl" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-300 text-sm sm:text-base mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
              <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Equipment = () => {
  const [activeTab, setActiveTab] = useState('strength');
  
  const equipmentCategories = {
    strength: {
      icon: FaDumbbell,
      title: "Strength Training",
      description: "Our strength section features top-of-the-line equipment for every muscle group.",
      equipment: [
        {
          title: "Free Weights Area",
          description: "Premium dumbbells, barbells, and specialized equipment for strength training.",
          features: [
            "Olympic weightlifting platforms",
            "Dumbbells ranging from 2.5-150 lbs",
            "Competition-grade barbells",
            "Safety squat bars and specialty bars"
          ]
        },
        {
          title: "Machine Circuit",
          description: "Latest strength machines designed for efficiency and safety.",
          features: [
            "Plate-loaded machines",
            "Cable systems with adjustable heights",
            "Hammer Strength full line",
            "Isolation machines for targeted training"
          ]
        },
        {
          title: "Functional Training",
          description: "Equipment designed for dynamic and functional movement patterns.",
          features: [
            "Battle ropes and kettlebells",
            "TRX suspension trainers",
            "Medicine balls and plyometric boxes",
            "Resistance bands of various strengths"
          ]
        }
      ]
    },
    cardio: {
      icon: FaTachometerAlt,
      title: "Cardio Equipment",
      description: "State-of-the-art cardio machines with integrated entertainment systems.",
      equipment: [
        {
          title: "Treadmill Zone",
          description: "Premium treadmills with advanced features for all fitness levels.",
          features: [
            "Incline up to 40%",
            "Decline options available",
            "Integrated heart rate monitoring",
            "Entertainment screens with streaming capabilities"
          ]
        },
        {
          title: "Elliptical & Bike Area",
          description: "Low-impact cardio machines for effective workouts.",
          features: [
            "Recumbent and upright bikes",
            "Cross trainers with adjustable stride length",
            "Curved manual treadmills",
            "Stair climbers and steppers"
          ]
        },
        {
          title: "Rowing & Cross Training",
          description: "Full-body cardio equipment for intensive workouts.",
          features: [
            "Concept2 rowers",
            "Assault AirBikes",
            "SkiErg machines",
            "Jacob's Ladder climbers"
          ]
        }
      ]
    },
    recovery: {
      icon: FaHeartbeat,
      title: "Recovery Systems",
      description: "Advanced recovery tools to help you bounce back faster between workouts.",
      equipment: [
        {
          title: "Stretching Area",
          description: "Dedicated space for proper warm-up and cool-down routines.",
          features: [
            "Assisted stretching equipment",
            "Foam rollers in various densities",
            "Massage sticks and balls",
            "Yoga mats and props"
          ]
        },
        {
          title: "Compression Therapy",
          description: "Advanced compression systems for muscle recovery.",
          features: [
            "Pneumatic compression boots",
            "Compression garments available",
            "Targeted compression attachments",
            "Full body recovery systems"
          ]
        },
        {
          title: "Temperature Therapy",
          description: "Hot and cold treatment options for optimal recovery.",
          features: [
            "Ice baths and cold plunge",
            "Infrared sauna access",
            "Contrast therapy systems",
            "Localized cooling/heating devices"
          ]
        }
      ]
    },
    performance: {
      icon: FaRunning,
      title: "Performance Analysis",
      description: "Cutting-edge technology to track and improve your performance metrics.",
      equipment: [
        {
          title: "Body Composition",
          description: "Accurate measurement tools to track your physical progress.",
          features: [
            "3D body scanners",
            "Bioelectrical impedance analyzers",
            "Body fat calipers",
            "Regular assessment services"
          ]
        },
        {
          title: "Movement Analysis",
          description: "Systems to analyze and improve movement patterns.",
          features: [
            "Force plate technology",
            "Video gait analysis",
            "Wireless movement sensors",
            "Digital posture assessment"
          ]
        },
        {
          title: "Fitness Testing",
          description: "Professional equipment to benchmark your fitness level.",
          features: [
            "VO2 max testing",
            "Strength and power measurement",
            "Flexibility assessment tools",
            "Endurance testing protocols"
          ]
        }
      ]
    }
  };
  
  const activeCategory = equipmentCategories[activeTab];
  
  return (
    <section id="equipment" className="section py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background - Matched with Facilities section */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0"></div>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto relative z-20">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-primary to-secondary rounded"></div>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" data-aos="fade-up">Premium Equipment</h2>
          <p className="section-subtitle text-gray-300 max-w-2xl mx-auto text-sm sm:text-base" data-aos="fade-up" data-aos-delay="100">
            Train with the best equipment in the industry, carefully selected to help you achieve your fitness goals.
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-2" data-aos="fade-up" data-aos-delay="150">
          {Object.keys(equipmentCategories).map((category) => {
            const CategoryIcon = equipmentCategories[category].icon;
            return (
              <button
                key={category}
                className={`px-4 sm:px-5 py-2 sm:py-3 rounded-full transition-all text-sm sm:text-base ${
                  activeTab === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'bg-black/40 text-gray-300 hover:text-white hover:bg-black/60'
                }`}
                onClick={() => setActiveTab(category)}
              >
                <div className="flex items-center">
                  <CategoryIcon className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  <span>{equipmentCategories[category].title}</span>
                </div>
              </button>
            );
          })}
        </div>
        
        {/* Category Description */}
        <div className="text-center mb-8 sm:mb-12" data-aos="fade-up" data-aos-delay="200">
          <div className="inline-flex items-center bg-black/40 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-3 sm:mb-4">
            {React.createElement(activeCategory.icon, { className: "text-primary mr-2 h-4 w-4" })}
            <h3 className="text-lg sm:text-xl font-semibold">{activeCategory.title}</h3>
          </div>
          <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base">{activeCategory.description}</p>
        </div>
        
        {/* Equipment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {activeCategory.equipment.map((item, index) => (
            <EquipmentCard
              key={index}
              icon={activeCategory.icon}
              title={item.title}
              description={item.description}
              features={item.features}
              data-aos="fade-up"
              data-aos-delay={250 + (index * 50)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;