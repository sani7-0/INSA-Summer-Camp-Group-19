import React from 'react';
import { FaEnvelope, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500 font-inter">
      {/* Header with Star Animation */}
      <header className="bg-black text-white p-6 relative overflow-hidden">
        {/* Star animation elements */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-star-fall"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2}px`,
                height: `${Math.random() * 2}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide">Contact Us</h1>
          <p className="text-lg md:text-xl font-light">We'd love to hear from you!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl mb-12 transform hover:scale-105 transition-transform duration-300">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center max-w-2xl mx-auto">
            Whether you have a question, feedback, or ideas, our team is here to help. EduConnect is all about connecting students, mentors, and resources — and that connection starts with great communication.
          </p>
        </section>
        
        {/* Contact Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* General Inquiries & Support */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-6xl text-blue-500 mb-4">
              <FaEnvelope />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">General Inquiries & Support</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Email us for general questions and support.</p>
            <a href="mailto:support@educonnect.com" className="text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200">
              support@educonnect.com
            </a>
          </div>

          {/* Partnerships & Collaboration */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-6xl text-green-500 mb-4">
              <FaEnvelope />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Partnerships & Collaboration</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">For partnership opportunities and collaborations.</p>
            <a href="mailto:partners@educonnect.com" className="text-green-500 hover:text-green-600 font-medium transition-colors duration-200">
              partners@educonnect.com
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <section className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Connect With Us Online</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Follow us for updates, study tips, and community events.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com/educonnect" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 transform hover:scale-110 transition-transform duration-200">
              <FaInstagram className="text-4xl" />
            </a>
            <a href="https://twitter.com/educonnect" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transform hover:scale-110 transition-transform duration-200">
              <FaTwitter className="text-4xl" />
            </a>
            <a href="https://linkedin.com/company/educonnect" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 transform hover:scale-110 transition-transform duration-200">
              <FaLinkedin className="text-4xl" />
            </a>
          </div>
        </section>

        {/* Response Time */}
        <section className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Response Time</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We aim to reply to all messages within <span className="font-bold text-blue-500">24–48 hours</span> on weekdays.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Contact;