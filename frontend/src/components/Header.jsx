import React, { useState } from "react";
import myLogo from '../assets/mylogo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function App() {
  const [profileMenu, setProfileMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to 'false' to see the pre-login view
  const [menuOpen, setMenuOpen] = useState(false);

  // --- Start of Notification Feature ---

  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Mock data for notifications with a new 'senderProfileUrl' property
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      senderName: "John Doe",
      senderAvatar: "https://i.pravatar.cc/150?img=1",
      message: "Hi! Letâ€™s connect.",
      timestamp: "2h ago",
      isRead: false,
      senderProfileUrl: "/profile/john-doe",
    },
    {
      id: 2,
      senderName: "Sarah Lee",
      senderAvatar: "https://i.pravatar.cc/150?img=2",
      message: "Looking to join your study group.",
      timestamp: "1d ago",
      isRead: false,
      senderProfileUrl: "/profile/sarah-lee",
    },
    {
      id: 3,
      senderName: "Mike Ross",
      senderAvatar: "https://i.pravatar.cc/150?img=4",
      message: "mentioned you in a comment.",
      timestamp: "3d ago",
      isRead: true,
      senderProfileUrl: "/profile/mike-ross",
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleNotificationClick = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  // --- End of Notification Feature ---


  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
  };
  const user = {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=3",
  };


  return (
    <div
      className="w-full bg-black text-white font-sans relative"
      style={{ minHeight: isLoggedIn ? "90px" : "auto", overflow: 'visible' }}
    >
      {/* Background Animations */}
      {!isLoggedIn && (
        <>
          {/* Twinkling Stars */}
          <div className="absolute inset-0 z-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full opacity-0"
                style={{
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite ${Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Shooting Stars */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-0.5 bg-white rounded-full opacity-75"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `shooting-star ${2 + Math.random() * 3}s linear infinite ${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </>
      )}

      {/* Main Header Container */}
      <div
        className={`flex items-center justify-between px-4 py-2 relative z-10 ${isLoggedIn ? "h-full" : ""}`}
        style={{ minHeight: isLoggedIn ? "90px" : "auto" }}
      >
        {/* Left Section: Logo & Text */}
        <div
          className={`flex items-center space-x-3 ${isLoggedIn ? "w-1/4 relative overflow-hidden rounded-lg min-h-[90px]" : ""}`}
        >
          {isLoggedIn ? (
            <>
              {/* Logged-in view: Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
              />
              {/* Overlay for darkening background */}
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
              {/* Content container - keep above overlays */}
              <div className="z-10 flex items-center space-x-3 p-2 min-h-[90px] rounded-lg">
                <img
                  src={myLogo}
                  alt="Logo"
                  className="w-12 h-12 object-contain rounded-full z-10"
                />
                {/* EduConnect Text */}
                <div className="hidden md:block relative z-10 text-xl ">
                  <h1 className="text-xl font-extrabold">EduConnect</h1>
                  <p className="text-sm">Connect. Learn. Grow - together</p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Pre-login view */}
              <div className="relative w-12 h-12 overflow-hidden rounded-full flex items-center justify-center z-10">
                <img
                  src={myLogo}
                  alt="Logo"
                  className="w-12 h-12 object-contain rounded-full"
                />
              </div>
              <span className="font-bold text-xl z-10">EduConnect</span>
            </>
          )}
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-white focus:outline-none text-2xl z-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          &#9776; {/* Hamburger icon */}
        </button>

        {/* Center Navigation (Desktop) */}
        {isLoggedIn ? (
          <div className="hidden md:flex flex-1 justify-center space-x-4 px-4 relative z-10">
            <a href="/" className="px-4 py-2 hover:bg-gray-700 rounded flex items-center">Home</a>
            <div className="relative group">
              <button className="px-4 py-2 hover:bg-gray-700 rounded flex items-center">
                Resources
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded shadow-lg w-48 z-20">
                <a className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400 transition" href="/tutorials">Tutorials</a>
               
                <a className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400 transition" href="/Studywin">Study Wins</a>
              </div>
            </div>
            <div className="relative group">
              <button className="px-4 py-2 hover:bg-gray-700 rounded flex items-center">
                Explore
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded shadow-lg w-48 z-20">
                <a className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400 transition" href="/opportunites">Opportunities</a>
                
                <a className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400 transition" href="/Saved">Saved</a>
              </div>
            </div>
            <div className="relative group">
              <button className="px-4 py-2 hover:bg-gray-700 rounded flex items-center">
                Community
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded shadow-lg w-48 z-20">
                <a className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400 transition" href="/Discussion">Discussion</a>
                <a className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400 transition" href="/frends">Friends</a>
                <a className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400 transition" href="/groups">Groups</a>
              </div>
            </div>
            <a href="/Events" className="px-4 py-2 hover:bg-gray-700 rounded flex items-center">Events</a>
          </div>
        ) : (
          // Pre-login navigation
          <nav className="hidden md:flex p-4 space-x-8">
            <HashLink smooth to="/#home" className="hover:text-gray-300">Home</HashLink>
            <Link to="/contactus" className="hover:text-gray-300">Contact</Link>
            <HashLink smooth to="/#features" className="hover:text-gray-300">Features</HashLink>
            <Link to="/aboutus" className="hover:text-gray-300">About Us</Link>
          </nav>
        )}

        {/* Right Section: Icons & Profile/Auth */}
        <div
          className={`hidden md:flex items-center space-x-3 ${isLoggedIn ? "w-1/4 justify-end min-h-[90px]" : ""}`}
        >
          {isLoggedIn ? (
            <>
              {/* Icons and Search */}
              <div className="flex items-center space-x-2">
                {/* Search Input */}
                <div className="flex items-center space-x-2 w-full md:w-48">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-2 py-1 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                  <button
                    onClick={handleSearch}
                    className="p-2 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] hover:bg-blue-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                    aria-label="Search"
                  >
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

                {/* Notifications Icon and Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setNotificationsOpen(!notificationsOpen)}
                    className="p-2 rounded hover:bg-gray-700 relative"
                    title="Notifications"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.003 6.003 0 00-4-5.659V4a2 2 0 10-4 0v1.341C8.67 6.165 8 7.388 8 8.75V14c0 .538-.214 1.055-.595 1.436L6 17h5" />
                    </svg>
                    {/* Notification Badge */}
                    {unreadCount > 0 && (
                      <span className="absolute top-1 right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-xs items-center justify-center">
                          {unreadCount}
                        </span>
                      </span>
                    )}
                  </button>

                  {/* Notification Dropdown Panel */}
                  {notificationsOpen && (
                    <div className="absolute right-0 mt-2 w-80 bg-gray-800 text-white rounded-lg shadow-lg z-50 border border-gray-700">
                      <div className="p-3 font-bold border-b border-gray-700">Notifications</div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.length > 0 ? (
                          notifications.map((notif) => (
                            <Link
                              key={notif.id}
                              to={notif.senderProfileUrl}
                              className={`flex items-start p-3 hover:bg-gray-700 cursor-pointer border-b border-gray-700/50 ${
                                !notif.isRead ? 'bg-blue-900/20' : ''
                              }`}
                              onClick={() => handleNotificationClick(notif.id)}
                            >
                              <img src={notif.senderAvatar} alt={notif.senderName} className="w-10 h-10 rounded-full mr-3" />
                              <div className="flex-1">
                                <p className="text-sm">
                                  <span className="font-bold">{notif.senderName}</span>
                                  <span className="font-normal text-gray-400"> {notif.message}</span>
                                </p>
                                <p className="text-xs text-blue-400 mt-1">{notif.timestamp}</p>
                              </div>
                              {!notif.isRead && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full ml-auto self-center"></div>
                              )}
                            </Link>
                          ))
                        ) : (
                          <p className="p-4 text-center text-gray-400">No new notifications</p>
                        )}
                      </div>
                      <Link to="/frends" className="block text-center py-2 text-sm text-blue-400 hover:bg-gray-700 rounded-b-lg">
                        View All
                      </Link>
                    </div>
                  )}
                </div>


                {/* Messages */}
                <Link to="/#"  className="p-2 rounded hover:bg-gray-700" title="Messages">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4-4 7-9 7s-9-3-9-7 4-7 9-7 9 3 9 7z" />
                  </svg>
                </Link>

                {/* Profile Menu */}
                <div className="relative">
                  <button
                    className="flex items-center p-2 rounded hover:bg-gray-700"
                    onClick={() => setProfileMenu(!profileMenu)}
                    aria-label="Profile menu"
                  >
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-semibold">
                      <img
                       src={user.avatar}
                       alt={user.name}
                       className="w-8 h-8 rounded-full mb-0"
                      />
                    </div>
                  </button>
                  {profileMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg z-50">
                      <a href="/Profile" className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400">View Profile</a>
                      
                      <a href="/Resource" className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400">My Resources</a>
                      <a href="/Events" className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400">My Events</a>
                      <a href="/Setting" className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400">Settings</a>
                      
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
                        onClick={() => setIsLoggedIn(false)}
                      >
                        Logout
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            // Pre-login buttons
            <>
              <a href="/sign-in" className="hover:text-gray-300">Sign In</a>
              <a
                href="/sign-up"
                className="bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
              >
                Sign Up
              </a>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black p-4 space-y-4 relative z-10">
          {isLoggedIn ? (
            <>
              <a href="#" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Resources</a>
              <a href="#" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Explore</a>
              <a href="#" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Community</a>
              <a href="#" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Events</a>
              <a href="#" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>View Profile</a>
              <a href="#" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Settings</a>
              <a
                href="#"
                className="block hover:text-gray-300"
                onClick={() => {
                  setIsLoggedIn(false);
                  setMenuOpen(false);
                }}
              >
                Logout
              </a>
            </>
          ) : (
            <>
              <a href="#home" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#footer" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</a>
              <a href="#features" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Features</a>
              <a href="#aboutus" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#sign-in" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Sign In</a>
              <a
                href="#sign-up"
                className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </a>
            </>
          )}
        </div>
      )}

      {/* Global styles for animations */}
      <style>
        {`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes shooting-star {
          0% { transform: translate(0, 0) rotate(45deg); opacity: 1; }
          100% { transform: translate(200px, -200px) rotate(45deg); opacity: 0; }
        }
        `}
      </style>
    </div>
  );
}

export default App;
