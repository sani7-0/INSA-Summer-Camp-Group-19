import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EduConnectLogin({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    if (onLogin) {
      onLogin();
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="relative w-full max-w-4xl p-4 bg-gray-900 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        {/* Left Side: Sign-in Form */}
        <div className="bg-white rounded-lg p-8 w-full md:w-1/2 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Sign in</h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            {/* Password Input with Eye Icon */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                {/* Eye Icon to toggle password visibility */}
                <button
                  type="button"
                  className="absolute inset-y-0 right-1 flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 focus:outline-none transition-transform hover:scale-105"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    // Open eye icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    // Closed eye icon (eye-off)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      {/* Simplified eye-off icon */}
                      <path d="M1 12s5-7 11-7 11 7 11 7-5 7-11 7S1 12 1 12z"  />
                      <line x1="5" y1="5" x2="21" y2="21" stroke="currentColor" strokeWidth={2} />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/* Forget Password */}
            <Link to="/Forgotpassword" className="text-sm text-blue-600 hover:underline">
              Forget Password
            </Link>
            {/* Sign in Button */}
            <button 
              type="submit"
              className="bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Sign in
            </button>
            {/* Sign in with Google logo */}
            <button 
              type="button"
              className="flex items-center justify-center border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-100 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 533.5 544.3"
                className="w-6 h-6 mr-2"
              >
                <path
                  fill="#4285F4"
                  d="M533.5 278.4c0-17.8-1.6-35-4.7-51.6H272v97.8h146.5c-6.3 34.1-25.8 62.8-55 81.9v67.9h88.8c52-47.8 81.7-118.2 81.7-204.2z"
                />
                <path
                  fill="#34A853"
                  d="M272 544.3c74.2 0 136.4-24.4 181.9-66.3l-88.8-67.9c-24.7 16.6-56.3 26.2-93 26.2-71.3 0-131.6-48.2-153-113.3H55.5v70.8c45.4 89.2 138.3 150.5 216.5 150.5z"
                />
                <path
                  fill="#FBBC05"
                  d="M119 326.3c-10.8-32.3-10.8-66.9 0-99.2V155.3H55.5c-12.3 24.2-19.5 51.3-19.5 80.7s7.2 56.5 19.5 80.7l63.5-9.4z"
                />
                <path
                  fill="#EA4335"
                  d="M272 107.7c38.8 0 73.8 13.4 101.2 36.2l75.8-75.8C414.2 24.4 348.2 0 272 0 193.8 0 101.9 61.3 55.5 150.5l63.5 70.8c21.4-65.1 81.7-113.3 153-113.3z"
                />
              </svg>
              Sign in with Google
            </button>
          </form>
        </div>

        {/* Right Side: Welcome message + community/person image */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Welcome back to</h2>
          <h1 className="text-4xl font-extrabold mb-4">EduConnect</h1>
          
          {/* Community/Person Image */}
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Community Person"
            className="w-64 h-64 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default EduConnectLogin;