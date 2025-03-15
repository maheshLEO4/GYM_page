import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const MembershipCard = ({ plan, isPopular, features, price, period, onClick }) => {
  return (
    <div 
      className={`card ${isPopular ? 'border-primary/30' : ''} p-8 flex flex-col h-full transition-all duration-500 card-hover`}
      data-aos="fade-up"
    >
      {isPopular && (
        <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-xs font-bold absolute -top-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          MOST POPULAR
        </span>
      )}
      
      <h3 className="text-2xl font-bold mb-4">{plan}</h3>
      
      <div className="mb-6">
        <div className="flex items-end">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-400 ml-2">/{period}</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
              <FaCheck className="h-3 w-3 text-primary" />
            </span>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button 
        onClick={onClick}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
          isPopular 
            ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/50' 
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        {isPopular ? 'Start Now' : 'Choose Plan'}
      </button>
    </div>
  );
};

const MembershipPlans = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
  const plans = [
    {
      plan: "Basic",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "Full gym access",
        "2 group classes per week",
        "Locker access",
        "Standard equipment",
        "Online fitness tracking"
      ],
      isPopular: false
    },
    {
      plan: "Premium",
      monthlyPrice: 49,
      yearlyPrice: 490, 
      features: [
        "Full gym access 24/7",
        "Unlimited group classes",
        "Personal locker",
        "All equipment access",
        "Online fitness tracking",
        "1 personal training session/month"
      ],
      isPopular: true
    },
    {
      plan: "Elite",
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        "Full gym access 24/7",
        "Unlimited group classes",
        "Premium locker with towel service",
        "All equipment access",
        "Advanced fitness tracking",
        "4 personal training sessions/month",
        "Nutrition consultation"
      ],
      isPopular: false
    }
  ];
  
  return (
    <section id="memberships" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title" data-aos="fade-up">Membership Plans</h2>
          <p className="section-subtitle mx-auto" data-aos="fade-up" data-aos-delay="100">
            Choose the perfect plan tailored to your fitness journey.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-10" data-aos="fade-up" data-aos-delay="200">
            <span className={`mr-3 text-sm ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button 
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-dark-lighter rounded-full p-1 transition-all duration-300"
            >
              <span 
                className={`absolute top-1 w-6 h-6 bg-primary rounded-full transition-all duration-300 transform ${
                  billingPeriod === 'yearly' ? 'left-9' : 'left-1'
                }`}
              ></span>
            </button>
            <div className="ml-3 flex items-center">
              <span className={`text-sm ${billingPeriod === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              <span className="ml-2 px-2 py-1 text-xs bg-primary/20 text-primary rounded-full font-semibold">
                Save 17%
              </span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <MembershipCard
              key={index}
              plan={plan.plan}
              price={billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
              period={billingPeriod === 'monthly' ? 'month' : 'year'}
              features={plan.features}
              isPopular={plan.isPopular}
              onClick={() => console.log(`Selected ${plan.plan} plan`)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-gray-400 mb-6">
            All memberships include a free fitness assessment. No hidden fees or long-term contracts.
          </p>
          <a href="#contact" className="btn-outline">
            Have Questions? Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;