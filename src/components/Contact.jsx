import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you! Your message has been sent successfully.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 5000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-dark-light border border-dark text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-dark-light border border-dark text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Email"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone (Optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-light border border-dark text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Phone Number"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-dark-light border border-dark text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select a Subject</option>
            <option value="membership">Membership Inquiry</option>
            <option value="training">Personal Training</option>
            <option value="classes">Group Classes</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-3 bg-dark-light border border-dark text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your Message"
        ></textarea>
      </div>
      
      <div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
      </div>
      
      {formStatus.submitted && (
        <div className={`p-4 rounded-lg ${formStatus.error ? 'bg-red-900/30 text-red-200' : 'bg-green-900/30 text-green-200'}`}>
          {formStatus.message}
        </div>
      )}
    </form>
  );
};

const ContactInfo = ({ icon: Icon, title, children }) => {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
          <Icon className="text-white text-xl" />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
        <div className="text-gray-300">{children}</div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="bg-dark py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have questions about our gym, membership options, or personal training? Reach out to us and our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-dark-light p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactInfo icon={FaMapMarkerAlt} title="Our Location">
                  <p>123 Fitness Street, Workout City, WC 10101</p>
                </ContactInfo>
                
                <ContactInfo icon={FaPhoneAlt} title="Phone Number">
                  <p>+1 (123) 456-7890</p>
                </ContactInfo>
                
                <ContactInfo icon={FaEnvelope} title="Email Address">
                  <p>info@ultimatefitness.com</p>
                </ContactInfo>
                
                <ContactInfo icon={FaClock} title="Working Hours">
                  <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
                  <p>Saturday & Sunday: 7:00 AM - 9:00 PM</p>
                </ContactInfo>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-primary transition-colors">
                    <FaInstagram className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-primary transition-colors">
                    <FaFacebookF className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-primary transition-colors">
                    <FaTwitter className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-primary transition-colors">
                    <FaYoutube className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-dark-light p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us A Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;