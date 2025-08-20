import React from 'react';
import { CalendarDays, Users } from 'lucide-react'; // Using lucide-react for icons

// Right Sidebar Component
export default function RightSidebar() {

  // Function to handle profile clicks
  const handleProfileClick = (userName) => {
    // In a real application, you would use React Router's navigate function
    // e.g., navigate(`/profile/${userName.toLowerCase().replace(' ', '-')}`);
    alert(`Navigating to ${userName}'s profile!`); // Using alert for demonstration
    console.log(`Navigating to ${userName}'s profile!`);
  };

  return (
    <aside className="hidden lg:block  right-0 top-0  bg-white shadow-xl p-6 overflow-y-auto 
         w-56 xl:w-72
         transform translate-x-0 transition-transform duration-300 ease-in-out relative h-full  rounded-t-xl overflow-hidden"> {/* Fixed width for md and larger */}
      <div className="space-y-8">
        {/* Upcoming Events Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <CalendarDays className="w-5 h-5 mr-2 text-blue-500" />
            Upcoming Events..
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 text-blue-500">•</span>
              <div>

                <p className="font-medium">Coding Challenge - Aug 30</p>

              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-500">•</span>
              <div>

                <p className="font-medium">HackerRank Challenge - Sep 15</p>
              </div>
            </li>
          </ul>
          <a href="/Events" className="mt-4 inline-block text-blue-600 hover:underline text-sm flex items-center">

            <Users className="w-4 h-4 mr-1" />
            View all Events
          </a>
        </div>

        {/* People You May Know Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-green-500" />
            People you May Know
          </h2>
          <div className="space-y-4">
            {/* Person 1 */}
            <div
              className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => handleProfileClick('Sara Malik')}
            >
              <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center text-gray-600 font-bold">
                {/* Placeholder for profile picture */}
              </div>
              <div>
                <p className="font-bold text-gray-800">Sara Malik</p>
                <p className="text-sm text-gray-600">UX Design Student</p>
              </div>
            </div>
            {/* Person 2 */}
            <div
              className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => handleProfileClick('Daniel Lee')}
            >
              <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center text-gray-600 font-bold">
                {/* Placeholder for profile picture */}
              </div>
              <div>
                <p className="font-bold text-gray-800">Daniel Lee</p>
                <p className="text-sm text-gray-600">3rd Year, Web Developer</p>
              </div>
            </div>
          </div>

          <a href="/frends" className="mt-4 inline-block text-blue-600 hover:underline text-sm flex items-center">

            <Users className="w-4 h-4 mr-1" />
            See All Connection
          </a>
        </div>
      </div>
    </aside>
  );
}
