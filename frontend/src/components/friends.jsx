import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUserPlus, FaUserMinus, FaSearch, FaCommentDots, 
  FaUsers, FaArrowRight, FaShareAlt, FaBell 
} from 'react-icons/fa';

const initialFriendsData = {
  incoming: [
    { id: 'inc1', name: 'John Doe', message: 'Hi! Let’s connect.', type: 'incoming' },
    { id: 'inc2', name: 'Sarah Lee', message: 'Looking to join your study group.', type: 'incoming' },
  ],
  pending: [
    { id: 'pen1', name: 'Alex Kim', type: 'pending' },
    { id: 'pen2', name: 'Mia Chen', type: 'pending' },
  ],
  friends: [
    { id: 'fr1', name: 'Emily Johnson', status: 'Online', lastActive: '5 mins ago', online: true, type: 'friend' },
    { id: 'fr2', name: 'Michael Brown', status: 'Offline', lastActive: '2 hours ago', online: false, type: 'friend' },
    { id: 'fr3', name: 'Sophia Patel', status: 'Online', lastActive: '10 mins ago', online: true, type: 'friend' },
    { id: 'fr4', name: 'Daniel Lee', status: 'Offline', lastActive: '1 day ago', online: false, type: 'friend' },
    { id: 'fr5', name: 'Olivia Smith', status: 'Online', lastActive: '15 mins ago', online: true, type: 'friend' },
  ],
  suggested: [
    { id: 'sugg1', name: 'Liam Turner', description: 'Studies Physics', type: 'suggested' },
    { id: 'sugg2', name: 'Ava Martinez', description: 'Coding Club member', type: 'suggested' },
    { id: 'sugg3', name: 'Noah Wilson', description: 'History Buffs', type: 'suggested' },
  ],
};

const FriendsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [friendsData, setFriendsData] = useState(initialFriendsData);

  const handleProfileClick = (userName, userId, userType) => {
    console.log(`Navigating to ${userName}'s profile page (ID: ${userId}, Type: ${userType})...`);
  };

  const handleActionClick = (action, userId, userName) => {
    switch (action) {
      case 'accept': {
        const requestToAccept = friendsData.incoming.find(req => req.id === userId);
        if (!requestToAccept) return;
        const newFriend = {
          id: requestToAccept.id,
          name: requestToAccept.name,
          status: 'Online',
          lastActive: 'Just now',
          online: true,
          type: 'friend',
        };
        setFriendsData(currentData => ({
          ...currentData,
          incoming: currentData.incoming.filter(req => req.id !== userId),
          friends: [...currentData.friends, newFriend],
        }));
        break;
      }
      case 'decline': {
        setFriendsData(currentData => ({
          ...currentData,
          incoming: currentData.incoming.filter(req => req.id !== userId),
        }));
        break;
      }
      case 'add friend': {
        const suggestedUser = friendsData.suggested.find(sugg => sugg.id === userId);
        if (!suggestedUser) return;
        const newFriend = {
          id: suggestedUser.id,
          name: suggestedUser.name,
          status: 'Online',
          lastActive: 'Just now',
          online: true,
          type: 'friend',
        };
        setFriendsData(currentData => ({
          ...currentData,
          suggested: currentData.suggested.filter(sugg => sugg.id !== userId),
          friends: [...currentData.friends, newFriend],
        }));
        break;
      }
      default:
        console.log('Unknown action');
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const allSearchableUsers = new Map();
  friendsData.friends.forEach(user => allSearchableUsers.set(user.id, { ...user, source: 'friend' }));
  friendsData.incoming.forEach(user => allSearchableUsers.set(user.id, { ...user, source: 'incoming' }));
  friendsData.suggested.forEach(user => allSearchableUsers.set(user.id, { ...user, source: 'suggested' }));

  const searchResults = searchQuery
    ? Array.from(allSearchableUsers.values()).filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const Card = ({ title, children }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">{title}</h2>
      {children}
    </div>
  );

  return (
    <div className="pt-24 container mx-auto p-4 md:p-8 font-sans">

      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Friends Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Incoming Requests */}
          <Card title={<><FaBell className="mr-2 text-yellow-500" /> Incoming Requests</>}>
            {friendsData.incoming.length > 0 ? (
              friendsData.incoming.map((req) => (
                <div key={req.id} className="flex items-center justify-between p-4 mb-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors -m-2" onClick={() => handleProfileClick(req.name, req.id, req.type)}>
                    <div className="w-10 h-10 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center font-bold mr-4">
                      {req.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{req.name}</p>
                      <p className="text-sm text-gray-500">{req.message}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full" onClick={() => handleActionClick('accept', req.id, req.name)}>
                      <FaUserPlus />
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full" onClick={() => handleActionClick('decline', req.id, req.name)}>
                      <FaUserMinus />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">No new friend requests.</p>
            )}
          </Card>

          {/* Pending Requests */}
          <Card title={<><FaArrowRight className="mr-2 text-purple-500" /> Pending Requests</>}>
            {friendsData.pending.map((req) => (
              <div key={req.id} className="flex items-center justify-between p-4 mb-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors -m-2" onClick={() => handleProfileClick(req.name, req.id, req.type)}>
                  <div className="w-10 h-10 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center font-bold mr-4">
                    {req.name[0]}
                  </div>
                  <p className="font-semibold text-gray-800">{req.name}</p>
                </div>
                <span className="text-sm text-gray-500 italic">Pending</span>
              </div>
            ))}
          </Card>

          {/* Friends List */}
          <Card title={<><FaUsers className="mr-2 text-blue-500" /> Your Friends</>}>
            <div className="space-y-4">
              {friendsData.friends.map((friend) => (
                <div key={friend.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors -m-2" onClick={() => handleProfileClick(friend.name, friend.id, friend.type)}>
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold mr-4">
                      {friend.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{friend.name}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className={`w-2 h-2 rounded-full mr-2 ${friend.online ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        {friend.status} • {friend.lastActive}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-600 hover:text-blue-500" onClick={() => handleActionClick('message', friend.id, friend.name)}>
                      <FaCommentDots size={20} />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-green-500" onClick={() => handleActionClick('invite to group', friend.id, friend.name)}>
                      <FaUsers size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          {/* Discover & Add */}
          <Card title={<><FaSearch className="mr-2 text-teal-500" /> Discover & Add</>}>
            <div className="relative mb-4">
              <input 
                type="text" 
                placeholder="Find classmates or peers..." 
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500" 
                value={searchQuery} 
                onChange={handleSearchChange} 
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {searchQuery ? (
              <>
                <p className="font-semibold text-gray-700 mb-3">Search Results:</p>
                <div className="space-y-3">
                  {searchResults.length > 0 ? (
                    searchResults.map((user) => (
                      <div key={user.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors -m-2" onClick={() => handleProfileClick(user.name, user.id, user.type)}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm ${user.source === 'friend' ? 'bg-blue-300 text-blue-800' : user.source === 'incoming' ? 'bg-yellow-300 text-yellow-800' : 'bg-teal-200 text-teal-800'}`}>
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{user.name}</p>
                            <p className="text-xs text-gray-500">
                              {user.source === 'friend' ? 'Existing Friend' : user.source === 'incoming' ? 'Incoming Request' : user.description || 'Suggested'}
                            </p>
                          </div>
                        </div>
                        {user.source === 'suggested' && (
                          <button className="bg-teal-500 hover:bg-teal-600 text-white p-1.5 rounded-full" onClick={() => handleActionClick('add friend', user.id, user.name)}>
                            <FaUserPlus size={14} />
                          </button>
                        )}
                        {user.source === 'incoming' && (
                          <div className="flex space-x-2">
                            <button className="bg-green-500 hover:bg-green-600 text-white p-1.5 rounded-full" onClick={() => handleActionClick('accept', user.id, user.name)}>
                              <FaUserPlus size={14} />
                            </button>
                            <button className="bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-full" onClick={() => handleActionClick('decline', user.id, user.name)}>
                              <FaUserMinus size={14} />
                            </button>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-4">No matching profiles found.</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <p className="font-semibold text-gray-700 mb-3">Suggested Friends:</p>
                <div className="space-y-3">
                  {friendsData.suggested.map((sugg) => (
                    <div key={sugg.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors -m-2" onClick={() => handleProfileClick(sugg.name, sugg.id, sugg.type)}>
                        <div className="w-8 h-8 bg-teal-200 text-teal-800 rounded-full flex items-center justify-center font-bold mr-3 text-sm">
                          {sugg.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{sugg.name}</p>
                          <p className="text-xs text-gray-500">{sugg.description}</p>
                        </div>
                      </div>
                      <button className="bg-teal-500 hover:bg-teal-600 text-white p-1.5 rounded-full" onClick={() => handleActionClick('add friend', sugg.id, sugg.name)}>
                        <FaUserPlus size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Card>

          {/* Quick Actions with Links */}
          <Card title={<><FaShareAlt className="mr-2 text-pink-500" /> Quick Actions</>}>
            <div className="space-y-4">
              <Link 
                to="/groups"
                className="w-full flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg shadow-md"
              >
                <FaCommentDots className="mr-3" /> Start a group chat
              </Link>
              <Link 
                to="#"
                className="w-full flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-4 rounded-lg shadow-md"
              >
                <FaUsers className="mr-3" /> Invite to a study group
              </Link>
              <Link 
                to="#"
                className="w-full flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white py-3 px-4 rounded-lg shadow-md"
              >
                <FaShareAlt className="mr-3" /> Share notes or resources
              </Link>
            </div>
          </Card>

          {/* Tip Box */}
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 rounded-lg mt-6 shadow-md">
            <p className="font-semibold mb-1">💡 Tip:</p>
            <p className="text-sm">Friends online can instantly collaborate in study groups or send messages for quick help!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;
