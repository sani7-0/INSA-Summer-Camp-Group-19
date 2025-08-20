import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup data:', formData);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="flex flex-col md:flex-row max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 bg-gray-100 p-8 flex flex-col justify-center rounded-l-lg md:rounded-l-none">
          <h2 className="text-2xl font-bold mb-2 text-center">Sign up</h2>
          <p className="mb-6 text-center text-sm text-gray-600">sign up to continue</p>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Sign up
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            Already have an account? <Link to="/sign-in" className="text-blue-500 hover:underline">Log In</Link>
          </div>
          <div className="my-6 border-t border-gray-300"></div>
          <div className="text-center mb-2 text-sm text-gray-600">ACCESS QUICKLY</div>
          <div className="flex justify-center">
            <button 
              type="button"
              className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google Logo"
                className="h-5 w-5 mr-3"
              />
              Sign up with Google
            </button>
          </div>
        </div>
        {/* Right Info Section */}
        <div
          className="w-full md:w-1/2 bg-cover bg-center p-8 flex flex-col justify-center text-black rounded-r-lg md:rounded-r-lg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1662529490362-d62de53988a4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <h2 className="text-2xl md:text-1xl font-extrabold mb-4">👋Welcome to EduConnect</h2>
          <p className="text-sm md:text-base leading-relaxed font-semibold">
            Your journey starts here. Join a vibrant student community to share ideas, celebrate wins,
            discover opportunities, and stay connected throughout your academic journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;