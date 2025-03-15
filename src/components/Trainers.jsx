import { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const TrainerCard = ({ image, name, specialty, bio, certifications, socialLinks }) => {
  return (
    <div className="relative overflow-hidden rounded-xl h-full group card-hover" data-aos="fade-up">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        
        {/* Social Links */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} className="bg-primary hover:bg-primary-dark p-2 rounded-full text-white transition-colors">
              <FaInstagram />
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} className="bg-primary hover:bg-primary-dark p-2 rounded-full text-white transition-colors">
              <FaLinkedinIn />
            </a>
          )}
          {socialLinks.youtube && (
            <a href={socialLinks.youtube} className="bg-primary hover:bg-primary-dark p-2 rounded-full text-white transition-colors">
              <FaYoutube />
            </a>
          )}
        </div>
      </div>
      
      <div className="bg-black/60 p-6 h-full transition-all group-hover:bg-black/80">
        <h3 className="text-lg sm:text-xl font-bold mb-1">{name}</h3>
        <div className="text-primary text-xs sm:text-sm mb-3">{specialty}</div>
        <p className="text-gray-300 text-xs sm:text-sm mb-4 line-clamp-3">{bio}</p>
        
        <div className="pt-4 border-t border-gray-700">
          <h4 className="text-xs sm:text-sm font-semibold mb-2 text-gray-300">Certifications</h4>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, index) => (
              <span key={index} className="text-xs bg-black/40 px-2 py-1 rounded text-gray-300">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Trainers = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleTrainers, setVisibleTrainers] = useState([]);
  
  const trainers = [
    {
      image: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80",
      name: "Alex Morgan",
      specialty: "Strength & Conditioning",
      bio: "With over 10 years of experience, Alex specializes in strength training and athletic performance. His approach combines traditional strength principles with modern sports science.",
      certifications: ["NSCA CSCS", "NASM CPT", "Precision Nutrition"],
      socialLinks: {
        instagram: "#",
        linkedin: "#",
        youtube: "#"
      },
      categories: ["strength", "performance"]
    },
     {
      image: "https://images.unsplash.com/photo-1599447292180-45fd84092ef0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYSUyMHBvc2V8ZW58MHx8MHx8fDA%3D",
      name: "Sarah Chen",
      specialty: "Yoga & Mobility",
      bio: "Sarah is dedicated to helping clients improve flexibility, mobility and mindfulness. Her holistic approach addresses both physical and mental wellbeing.",
      certifications: ["RYT 500", "FRC Mobility Specialist", "Corrective Exercise"],
      socialLinks: {
        instagram: "#",
        linkedin: "#"
      },
      categories: ["yoga", "wellness"]
    },
    {
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80",
      name: "Marcus Johnson",
      specialty: "Weight Loss & Nutrition",
      bio: "Marcus combines effective training protocols with nutritional guidance to help clients transform their bodies and health. He specializes in sustainable lifestyle changes.",
      certifications: ["ACE CPT", "Precision Nutrition", "Functional Medicine Coaching"],
      socialLinks: {
        instagram: "#",
        youtube: "#"
      },
      categories: ["nutrition", "transformation"]
    },
    {
      image: "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80",
      name: "Elena Rodriguez",
      specialty: "HIIT & Group Training",
      bio: "Elena's high-energy approach to fitness makes every session engaging and effective. She specializes in creating challenging workouts that boost cardio endurance and strength.",
      certifications: ["ACSM CPT", "TRX Certified", "Kettlebell Specialist"],
      socialLinks: {
        instagram: "#",
        linkedin: "#",
        youtube: "#"
      },
      categories: ["hiit", "group"]
    },
    {
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80",
      name: "David Park",
      specialty: "Sport Performance",
      bio: "David works with athletes at all levels to improve performance through targeted training. His background in sports medicine informs his scientific approach to athletic development.",
      certifications: ["NSCA CSCS", "USA Weightlifting", "FMS Level 2"],
      socialLinks: {
        instagram: "#",
        linkedin: "#"
      },
      categories: ["performance", "strength"]
    },
    {
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      name: "Olivia Bennett",
      specialty: "Pilates & Rehabilitation",
      bio: "Olivia specializes in helping clients recover from injuries and improve their fundamental movement patterns. Her background in physical therapy informs her corrective approach.",
      certifications: ["STOTT Pilates", "Corrective Exercise Specialist", "Pre/Post Natal"],
      socialLinks: {
        instagram: "#",
        linkedin: "#"
      },
      categories: ["yoga", "wellness"]
    }
  ];
  
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Trainers' },
    { id: 'strength', name: 'Strength' },
    { id: 'performance', name: 'Performance' },
    { id: 'yoga', name: 'Yoga & Mobility' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'hiit', name: 'HIIT & Cardio' },
    { id: 'wellness', name: 'Wellness' }
  ];
  
  useEffect(() => {
    // Filter trainers based on active category
    if (activeFilter === 'all') {
      setVisibleTrainers(trainers);
    } else {
      setVisibleTrainers(trainers.filter(trainer => 
        trainer.categories.includes(activeFilter)
      ));
    }
  }, [activeFilter]);
  
  return (
    <section id="trainers" className="section py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background - Matched with other sections */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0"></div>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto relative z-20">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-primary to-secondary rounded"></div>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" data-aos="fade-up">Expert Trainers</h2>
          <p className="section-subtitle text-gray-300 max-w-2xl mx-auto text-sm sm:text-base" data-aos="fade-up" data-aos-delay="100">
            Our certified professionals are dedicated to helping you achieve your fitness goals with personalized attention and expertise.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-2" data-aos="fade-up" data-aos-delay="150">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 sm:px-5 py-2 sm:py-3 rounded-full transition-all text-sm sm:text-base ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-black/40 text-gray-300 hover:text-white hover:bg-black/60'
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Trainer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visibleTrainers.map((trainer, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={200 + (index * 50)}>
              <TrainerCard
                image={trainer.image}
                name={trainer.name}
                specialty={trainer.specialty}
                bio={trainer.bio}
                certifications={trainer.certifications}
                socialLinks={trainer.socialLinks}
              />
            </div>
          ))}
        </div>
        
        {visibleTrainers.length === 0 && (
          <div className="text-center py-8 sm:py-16" data-aos="fade-up">
            <p className="text-gray-300">No trainers found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Trainers;