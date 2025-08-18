import React from 'react';
import { FaShieldAlt, FaInfoCircle, FaLock, FaShareAlt, FaUserCog, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500 font-inter ">
      {/* Header */}
      <header className="bg-black text-white p-6 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide">Privacy Policy</h1>
        <p className="text-lg md:text-xl font-light opacity-80">Last Updated: August 13, 2025</p>
      </header>

      {/* Main Content Container */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Introduction - Updated Styling */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl mb-12">
          <p className="text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed">
            At <span className="font-semibold text-blue-500">EduConnect</span>, your privacy is important to us. We are committed to protecting your personal information and keeping your learning environment safe.
          </p>
        </section>

        {/* Policy Sections Grid */}
        <div className="grid gap-10">
          {/* Information We Collect */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border-l-4 border-blue-500 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4 flex-shrink-0">
                <FaInfoCircle className="text-blue-500 text-3xl" />
              </span>
              Information We Collect
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3 pl-2">
              <li><span className="font-semibold text-gray-800 dark:text-white">Account Details:</span> Name, email, and password (encrypted).</li>
              <li><span className="font-semibold text-gray-800 dark:text-white">Profile Info:</span> Optional photo, bio, and study interests.</li>
              <li><span className="font-semibold text-gray-800 dark:text-white">Usage Data:</span> Pages you visit, features you use, and content you share.</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border-l-4 border-green-500 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="p-3 bg-green-100 dark:bg-green-900 rounded-full mr-4 flex-shrink-0">
                <FaShieldAlt className="text-green-500 text-3xl" />
              </span>
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3 pl-2">
              <li>To create and manage your account.</li>
              <li>To improve our platform and add new features.</li>
              <li>To send important updates, event reminders, and announcements.</li>
              <li>To keep the community safe and prevent misuse.</li>
            </ul>
          </section>

          {/* How We Protect Your Data */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border-l-4 border-purple-500 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full mr-4 flex-shrink-0">
                <FaLock className="text-purple-500 text-3xl" />
              </span>
              How We Protect Your Data
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3 pl-2">
              <li>All passwords are encrypted.</li>
              <li>Two-factor authentication is available for extra security.</li>
              <li>Only authorized team members can access limited account information.</li>
            </ul>
          </section>

          {/* Sharing Your Information */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border-l-4 border-red-500 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="p-3 bg-red-100 dark:bg-red-900 rounded-full mr-4 flex-shrink-0">
                <FaShareAlt className="text-red-500 text-3xl" />
              </span>
              Sharing Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 pl-2">
              We never sell your data.
            </p>
            <p className="text-gray-700 dark:text-gray-300 pl-2">
              We only share information when:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3 mt-2 pl-2">
              <li>You choose to share it (e.g., posts or comments visible to others).</li>
              <li>Required by law.</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border-l-4 border-yellow-500 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full mr-4 flex-shrink-0">
                <FaUserCog className="text-yellow-500 text-3xl" />
              </span>
              Your Rights
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3 pl-2">
              <li>You can update or delete your account anytime.</li>
              <li>You can request a copy of your data or change notification settings.</li>
            </ul>
          </section>

          {/* Contact Us */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl text-center border-l-4 border-teal-500 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center">
              <span className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full mr-4 flex-shrink-0">
                <FaEnvelope className="text-teal-500 text-3xl" />
              </span>
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If you have questions about your privacy, email us at:
            </p>
            <a href="mailto:privacy@educonnect.com" className="text-blue-500 hover:text-blue-600 font-medium text-lg transition-colors duration-200">
              privacy@educonnect.com
            </a>
            <p className="mt-6 text-gray-700 dark:text-gray-300 italic opacity-90">
              EduConnect is built for students — your trust is our priority.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
