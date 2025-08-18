import React from 'react';
import communityImage from '../assets/community.png'
import growth from '../assets/growth.png'
import Innovation from '../assets/innovation.png'
import accessible from '../assets/accessibility.png'
const AboutUsPage = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 antialiased">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-purple-600 py-24 sm:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            About us
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-200 font-light max-w-2xl mx-auto">
            Welcome to EduConnect, the all-in-one student learning ecosystem designed to empower students, foster collaboration, and make learning engaging and effective.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:flex lg:items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that learning should be interactive, accessible, and motivating. Our platform is built to transform the way students learn by combining technology, a strong community, and expert guidance.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
            <img 
              src="https://thumbs.dreamstime.com/b/group-happy-diverse-students-sitting-together-shared-table-library-discussing-school-project-together-mixed-race-college-165207265.jpg?w=992" 
              alt="A group of diverse students collaborating on a project, symbolizing community" 
              className="rounded-xl shadow-2xl max-w-full h-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Collaborative Learning Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-3V11a1 1 0 00-1-1H7a1 1 0 00-1 1v9H3V11a1 1 0 00-1-1H2m15 10h2V11a1 1 0 00-1-1h-1m-3 10v-9m0 9h2m-2 0H8m2 0H8m7-9V3h3a1 1 0 011 1v6h-4zm-9 0V3h3a1 1 0 011 1v6H6zm6-6h2v6H6V3h2z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Collaborative Learning</h3>
              <p className="mt-2 text-gray-600 text-sm">Connect with peers, join study groups, and participate in discussions to learn together.</p>
            </div>

            {/* Mentorship Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 100 5.292m0-5.292h0m0 5.292h0m-4 1.346v6.417a2.5 2.5 0 005 0v-6.417" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Mentorship & Guidance</h3>
              <p className="mt-2 text-gray-600 text-sm">Access experienced mentors who can guide you through academic and career decisions.</p>
            </div>

            {/* Contests & Challenges Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.954 12.831a1 1 0 00-.81 1.705L16 17l4-4a1 1 0 000-1.705l-4-3.526a1 1 0 00-1.705 1.09L15 11h-3.046zM2 13h10a1 1 0 000-2H2a1 1 0 000 2zM12 11h-.046a1 1 0 00-.81-1.705L2 6a1 1 0 000 1.705l4 3.526a1 1 0 001.705-1.09L9 8h3.046z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Contests & Challenges</h3>
              <p className="mt-2 text-gray-600 text-sm">Participate in fun competitions and quizzes to sharpen your skills and gain recognition.</p>
            </div>
            
            {/* ... other cards can be added here ... */}

          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            {/* Community Value */}
            <div className="p-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                <img src={communityImage } className="w-12 h-12"/>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Community</h3>
              <p className="mt-2 text-gray-600 text-sm">We believe learning is more meaningful when shared.</p>
            </div>

            {/* Growth Value */}
            <div className="p-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-purple-50 rounded-full flex items-center justify-center">
                <img src={growth} alt="Growth icon" className="w-12 h-12"/>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Growth</h3>
              <p className="mt-2 text-gray-600 text-sm">We are committed to helping students achieve their full potential.</p>
            </div>
            
            {/* Innovation Value */}
            <div className="p-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center">
                <img src={Innovation} alt="Innovation icon" className="w-12 h-12"/>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
              <p className="mt-2 text-gray-600 text-sm">We embrace technology to make learning smarter and more engaging.</p>
            </div>

            {/* Accessibility Value */}
            <div className="p-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                <img src={accessible} alt="Accessibility icon" className="w-12 h-12"/>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Accessibility</h3>
              <p className="mt-2 text-gray-600 text-sm">Every student should have access to tools that help them succeed.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us & CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <img 
              src="https://www.pixlogix.com/wp-content/uploads/2024/12/Quality-Assurance-Satisfaction.webp" 
              alt="A diverse group of happy students studying together, symbolizing community and support" 
              className="rounded-xl shadow-2xl max-w-full h-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are more than just a study platform. We are a community of learners, mentors, and innovators working together to make education exciting, efficient, and effective. Whether you want to improve your skills, compete in contests, or find guidance from mentors, our platform supports your journey every step of the way.
            </p>
            <div className="text-center lg:text-left">
              <a href="/sign-up" className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
                Join Us Today
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;