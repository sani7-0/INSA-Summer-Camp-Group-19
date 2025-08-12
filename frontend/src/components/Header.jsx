import React, { useState } from 'react';
import myLogo from '../assets/mylogo.png';

function EduConnectFullScreenHeader() {
  const [profileMenu, setProfileMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="w-full bg-black text-white font-sans" style={{ height: '90px' }}>
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-2 h-full relative" style={{ height: '90px' }}>
        {/* Left: Logo, text, and background image */}
        <div className="flex items-center space-x-3 w-1/4 relative overflow-hidden rounded-lg h-full">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          {/* Logo & Text */}
          <div className="z-10 flex items-center space-x-3 p-2 h-full">
            <img src={myLogo} alt="Logo" className="w-12 h-12 object-contain rounded-full z-10" />
            <div className="z-10">
              <h1 className="text-xl font-extrabold">EduConnect</h1>
              <p className="text-sm">Connect. Learn. Grow - together</p>
            </div>
          </div>
        </div>

        {/* Center: Navigation */}
        <div className="flex-1 flex justify-center space-x-4 overflow-x-auto px-4 h-full" style={{ height: '90px' }}>
          {/* Home */}
          <a href="#" className="px-4 py-2 hover:bg-gray-700 rounded h-full flex items-center">Home</a>

          {/* Resources with dropdown */}
          <div className="relative group h-full flex items-center">
            <button className="px-4 py-2 hover:bg-gray-700 rounded flex items-center h-full">
              Resources
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Resources dropdown */}
            <div className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 rounded shadow-lg w-48 z-10">
              <a className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600 transition" href="#">Tutorials</a>
              <a className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600 transition" href="#">Articles</a>
              <a className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600 transition">Study Wins</a>
            </div>
          </div>

          {/* Explore with dropdown */}
          <div className="relative group h-full flex items-center">
            <button className="px-4 py-2 hover:bg-gray-700 rounded flex items-center h-full">
              Explore
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Explore dropdown */}
            <div className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 rounded shadow-lg w-48 z-10">
              <a className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600 transition" href="#">Opportunities</a>
              <a className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600 transition" href="#">Events</a>
              <a className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600 transition">Saved</a>
            </div>
          </div>

          {/* Community with dropdown */}
          <div className="relative group h-full flex items-center">
            <button className="px-4 py-2 hover:bg-gray-700 rounded flex items-center h-full">
              Community
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Community dropdown */}
            <div className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 rounded shadow-lg w-48 z-10">
              <a className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600 transition" href="#">Discussion</a>
              <a className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600 transition" href="#">Friends</a>
              <a className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600 transition">Groups</a>
            </div>
          </div>

          {/* Other links */}
          <a href="#" className="px-4 py-2 hover:bg-gray-700 rounded h-full flex items-center">Contests</a>
          <a href="#" className="px-4 py-2 hover:bg-gray-700 rounded h-full flex items-center">Events</a>
        </div>

        {/* Right icons and search */}
        <div className="flex items-center space-x-3 w-1/4 justify-end h-full" style={{ height: '90px' }}>
          {/* Search input and icon button */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-2 py-1 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
            />
            {/* Search icon button */}
            <button
              onClick={handleSearch}
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Search"
            >
              {/* Magnifying glass icon SVG */}
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4-4m0 0A7 7 0 104 4a7 7 0 0013 13z"
                />
              </svg>
            </button>
          </div>

          {/* Notifications */}
          <button className="p-2 rounded hover:bg-gray-700" title="Notifications">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.003 6.003 0 00-4-5.659V4a2 2 0 10-4 0v1.341C8.67 6.165 8 7.388 8 8.75V14c0 .538-.214 1.055-.595 1.436L6 17h5" />
            </svg>
          </button>

          {/* Messages */}
          <button className="p-2 rounded hover:bg-gray-700" title="Messages">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4-4 7-9 7s-9-3-9-7 4-7 9-7 9 3 9 7z" />
            </svg>
          </button>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              className="flex items-center p-2 rounded hover:bg-gray-700"
              onClick={() => setProfileMenu(!profileMenu)}
            >
              {/* Profile icon */}
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-semibold">
                U
              </div>
            </button>
            {profileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-20">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">View Profile</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Edit Profile</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">My Resources</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">My Events</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Settings</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Help & Support</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EduConnectFullScreenHeader;