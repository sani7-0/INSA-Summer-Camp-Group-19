import React from 'react';
import { Link } from 'react-router-dom';

function PasswordResetModal() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Modal Container */}
      <div className="bg-gray-200 p-8 rounded-xl max-w-md w-full shadow-2xl relative">
        {/* Lock Icon */}
        <div className="flex justify-center mb-6">
          <div >
            {/* Larger Lock SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m0-6a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2m-4 0V9a4 4 0 014-4"
              />
            </svg>
          </div>
        </div>
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">Password Reset</h2>
        {/* Subtitle */}
        <p className="text-center text-gray-600 mb-6 text-sm">
          Enter the email address linked to your <b>EduConnect</b> account, and we’ll send you a link to reset your password.
        </p>
        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        {/* Return to Sign-in Link */}
        <div className="mt-3 flex justify-end">
          <Link to="/sign-in" className="text-blue-600 text-sm hover:underline">
            Return to Sign in
          </Link>
        </div>
        {/* Send Reset Link Button */}
        <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg focus:outline-none transition duration-300">
          Send Reset Link
        </button>
      </div>
    </div>
  );
}

export default PasswordResetModal;