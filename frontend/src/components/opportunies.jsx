import React from 'react';
import { Briefcase, Lightbulb, GraduationCap, Trophy, Users, Search, Link as LinkIcon } from 'lucide-react';

const App = () => {
  return (

    <div className="pt-28 min-h-screen bg-gray-50 p-4 sm:p-8 flex flex-col items-center">

      {/* Header Section */}
      <header className="w-full max-w-4xl text-center mb-12 px-4 py-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 mb-4 tracking-tight">
          Explore Opportunities ✨
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Discover internships, workshops, scholarships, competitions, and collaborative projects to boost your skills, grow your network, and explore your passions. Find the opportunity that’s perfect for you!
        </p>
      </header>

      {/* Featured Opportunities Section */}
      <section className="w-full max-w-4xl mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 flex items-center justify-center">
          <Search size={30} className="text-indigo-600 mr-3" /> Featured Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeaturedOpportunityCard
            title="Papaya – Health Start-Up Internship"
            role="Marketing Intern"
            location="Remote"
            description="Join a dynamic team at Papaya, a start-up focused on women's health. Gain hands-on experience in digital marketing and brand development."
            applyLink="#" // Placeholder link
          />
          <FeaturedOpportunityCard
            title="Amazon – Tech Internship"
            role="Software Development Intern"
            location="London, UK"
            description="Work with Amazon's tech team on innovative projects. Ideal for students pursuing computer science or related fields."
            applyLink="#" // Placeholder link
          />
          <FeaturedOpportunityCard
            title="Clarion Housing – Diversity Scholarship"
            role="Award: £2,000" // Using role for award for consistent styling
            location="Eligibility: Open to underrepresented students pursuing higher education." // Using location for eligibility
            description="Clarion Housing offers scholarships to support students from diverse backgrounds."
            applyLink="#" // Placeholder link
          />
        </div>
      </section>

      {/* Career Development Resources Section */}
      <section className="w-full max-w-4xl px-4 pb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 flex items-center justify-center">
          <Briefcase size={30} className="text-teal-600 mr-3" /> Career Development Resources
        </h2>
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="mr-3 text-indigo-500 font-bold">•</span>
              <div>
                <span className="font-semibold">Micro-Internships:</span> Short-term, flexible internships designed to fit around your studies. Perfect for gaining experience without a long-term commitment.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-indigo-500 font-bold">•</span>
              <div>
                <span className="font-semibold">Apprenticeships:</span> Paid positions that combine working and learning, offering a debt-free path into skilled professions.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-indigo-500 font-bold">•</span>
              <div>
                <span className="font-semibold">Scholarships:</span> Financial support to help cover tuition and living expenses. Explore various scholarship opportunities available this year.
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

// Reusable Opportunity Card Component (No longer used directly in App, but kept for reference if needed elsewhere)
const OpportunityCard = ({ icon, title, description, example }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 flex flex-col hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gray-100 rounded-full mr-4 flex-shrink-0">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="bg-blue-50 border-l-4 border-blue-200 text-blue-700 p-4 rounded-md text-sm">
        <p className="font-semibold mb-1">Example:</p>
        <p>{example}</p>
      </div>
    </div>
  );
};

// Featured Opportunity Card Component
const FeaturedOpportunityCard = ({ title, role, location, description, applyLink }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border-2 border-indigo-200 flex flex-col hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Role:</span> {role}
      </p>
      <p className="text-gray-700 mb-3">
        <span className="font-semibold">Location:</span> {location}
      </p>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <a
        href={applyLink}
        target="_blank"
        rel="noopener noreferrer"

        className="inline-flex items-center justify-center bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 self-end"

      >
        Apply <LinkIcon size={18} className="ml-2" />
      </a>
    </div>
  );
};

export default App;
