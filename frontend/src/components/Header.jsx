import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import myLogo from '../assets/mylogo.png';

function EduConnectFullScreenHeader({ user }) {
  const [profileMenu, setProfileMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Mock data for notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      senderName: "John Doe",
      senderAvatar: "https://i.pravatar.cc/150?img=1",
      message: "Hi! Let's connect.",
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

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
  };

  const defaultUser = {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  const currentUser = user || defaultUser;

  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white font-sans z-50" style={{ height: '90px' }}>
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
          <Link to="/" className="px-4 py-2 hover:bg-gray-700 rounded h-full flex items-center">Home</Link>

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
              <Link className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600 transition" to='/Studywin'>Study Wins</Link>
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
              <Link className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600 transition" to="/opportunites">Opportunities</Link>
              <Link className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600 transition" to="/Saved">Saved</Link>
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
              <Link className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600 transition" to="/Discussion">Discussion</Link>
              <Link className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600 transition" to="/frends">Friends</Link>
            </div>
          </div>

          {/* Other links */}
          <Link to="/Events" className="px-4 py-2 hover:bg-gray-700 rounded h-full flex items-center">Events</Link>
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
              className="p-2 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] hover:bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
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

          {/* Notifications */}
          <div className="relative">
            <button 
              className="p-2 rounded hover:bg-gray-700 relative" 
              title="Notifications"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.003 6.003 0 00-4-5.659V4a2 2 0 10-4 0v1.341C8.67 6.165 8 7.388 8 8.75V14c0 .538-.214 1.055-.595 1.436L6 17h5" />
              </svg>
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
            
            {/* Notifications dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white text-black rounded shadow-lg z-20 max-h-96 overflow-y-auto">
                <div className="p-4 border-b">
                  <h3 className="font-semibold">Notifications</h3>
                </div>
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${!notification.isRead ? 'bg-blue-50' : ''}`}
                    onClick={() => handleNotificationClick(notification.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <img
                        src={notification.senderAvatar}
                        alt={notification.senderName}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-semibold">{notification.senderName}</span> {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{notification.timestamp}</p>
                      </div>
                      {!notification.isRead && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

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
              <div className="w-8 h-8 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] rounded-full flex items-center justify-center text-white font-semibold">
                {currentUser.name.charAt(0)}
              </div>
            </button>
            {profileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-20">
                <Link to="/Profile" className="block px-4 py-2 hover:bg-gray-200">View profile</Link>
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