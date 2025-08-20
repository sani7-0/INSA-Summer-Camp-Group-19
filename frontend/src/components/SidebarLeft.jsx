import React from 'react';
import { Home as HomeIcon, MessageCircle as MessageCircleIcon, Users as UsersIcon, Bookmark as BookmarkIcon, Settings as SettingsIcon } from 'lucide-react';

function SidebarLeft() {
  const menuItems = [

    { icon: MessageCircleIcon, name: 'My Posts', link: '/myposts' },
    { icon: UsersIcon, name: 'Friends', link: '/frends' },
    { icon: BookmarkIcon, name: 'Bookmarks', link: '/bookmarks' },
    { icon: SettingsIcon, name: 'Settings', link: '/settings' },

  ];
  const user = {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=3", // placeholder avatar
  };

  return (
    // Hide sidebar on small screens, show on md and above
    <div className={`hidden md:flex h-screen p-4 bg-gray-100 text-gray-800 w-72 flex-col items-center rounded-lg shadow-lg`}>
      
      {/* Profile Section */}
      <div className={`relative w-full mb-6 bg-white rounded-xl shadow-md text-center`}>
        {/* Banner */}
        <div className="relative h-24 w-full rounded-t-xl overflow-hidden">
          <img
            src="https://placehold.co/288x96/4A5568/FFFFFF?text=Banner+Image"
            alt="Profile Banner"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/288x96/D1D5DB/4B5563?text=Banner"; }}
          />
        </div>

        <div className="flex justify-center -mt-12 mb-4 relative z-10">
          <div className={`w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg`}>
            <img
          src={user.avatar}
          alt={user.name}
          className="w-full h-full object-cover"
        />
          </div>
        </div>

        <div className="px-4 pb-4">
          <a href="#" className={`text-xl font-semibold mb-1 text-gray-800 hover:text-blue-600 transition-colors duration-200 block`}>
            John Michael
          </a>
          <p className={`text-sm text-gray-500 mb-2`}>Computer Science Student</p>
          <p className={`text-xs italic text-gray-600 mb-4`}>
            "Not just chasing grades - chasing growth, purpose, and opportunities."
          </p>
        </div>

        <div className="flex justify-around border-t pt-4">
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">3</span>
            <span className={`text-sm text-gray-500`}>Post</span>
          </div>
          <div className="border-l mx-2"></div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">500+</span>
            <span className={`text-sm text-gray-500`}>Followers</span>
          </div>
          <div className="border-l mx-2"></div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">440</span>
            <span className={`text-sm text-gray-500`}>Following</span>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <nav className="w-full flex-grow">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-2">
              <a

                href={item.link}

                className={`flex items-center p-3 rounded-lg hover:bg-gray-200 transition-colors duration-200
                  ${item.name === 'Dashboard' ? 'bg-gray-200 font-bold' : ''}`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="text-md">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SidebarLeft;
