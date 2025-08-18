// src/components/GroupPage.jsx
import React, { useState } from 'react';

// Sample group data
const initialGroups = [
  {
    id: 'math-wizards',
    name: 'Math Wizards',
    description: 'Mastering numbers and equations together!',
    features: ['Group chat', 'Share notes', 'Solve problems', 'Weekly quizzes'],
  },
  {
    id: 'science-explorers',
    name: 'Science Explorers',
    description: 'Unraveling the mysteries of the universe through experiments and discussion.',
    features: ['Discussion boards', 'File sharing', 'Collaborative experiments', 'Mentorship'],
  },
  {
    id: 'history-buffs',
    name: 'History Buffs',
    description: 'Exploring the past to understand the present and shape the future.',
    features: ['Resource sharing', 'Q&A threads', 'Event reminders', 'Peer discussions'],
  },
  {
    id: 'coding-club',
    name: 'Coding Club',
    description: 'From algorithms to web development, code with your peers!',
    features: ['Code reviews', 'Projects', 'Challenges', 'Group chat', 'Interactive tutorials'],
  },
  {
    id: 'language-learners',
    name: 'Language Learners',
    description: 'Practice and improve your language skills with native speakers and fellow learners.',
    features: ['Practice sessions', 'Resource uploads', 'Quizzes', 'Group discussions'],
  },
];

const GroupPage = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [groups, setGroups] = useState(initialGroups);

  // Function to handle clicking on a group card
  const handleGroupClick = (groupId) => {
    // In a real application, you would navigate to the group's specific page
    console.log(`Navigating to group: ${groupId}`);
    // Replaced alert with a custom message box for better UX in a real app
    // For this demo, we'll keep the alert for simplicity given the environment
    alert(`You clicked on group: ${groupId}. (Navigation logic goes here)`);
  };

  // Function to handle creating a new group
  const handleCreateGroup = (newGroupData) => {
    const newGroupId = newGroupData.name.toLowerCase().replace(/\s+/g, '-');
    const newGroup = {
      id: newGroupId,
      ...newGroupData,
      features: newGroupData.features.split(',').map(f => f.trim()).filter(f => f !== ''), // Convert comma-separated string to array, filter empty strings
    };
    setGroups([...groups, newGroup]);
    setShowCreateModal(false); // Close the modal after creation
    alert('Group created successfully!'); // Replaced alert with a custom message
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 font-inter">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 sm:mb-12">
          Study Groups – EduConnect 👥
        </h1>

        {/* Create Group Section - Now a compact card at the top */}
        <div className="bg-white shadow-xl rounded-xl p-5 sm:p-6 mb-8 flex items-center justify-between">
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-gray-700">Start Your Own Group!</h2>
            <p className="text-gray-600 text-sm mt-1">
              Click the `+` to create a new study group and invite peers.
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            aria-label="Create New Group"
            className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-full flex items-center justify-center text-3xl font-light shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-75 flex-shrink-0 ml-4"
          >
            +
          </button>
        </div>

        {/* Your Groups Section */}
        <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Your Groups:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <div
                key={group.id}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer border border-blue-200"
                onClick={() => handleGroupClick(group.id)}
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{group.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{group.description}</p>
                <div className="flex flex-wrap gap-2">
                  {group.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-200 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Group Modal */}
      {showCreateModal && (
        <CreateGroupModal
          onClose={() => setShowCreateModal(false)}
          onCreate={handleCreateGroup}
        />
      )}
    </div>
  );
};

// Modal Component for creating a new group
const CreateGroupModal = ({ onClose, onCreate }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      onCreate({ name, description, features });
    } else {
      // In a real application, replace this with a custom alert/toast notification
      alert('Please fill in Group Name and Description.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg p-6 sm:p-8 transform transition-all duration-300 scale-95 opacity-0 animate-scale-in">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">Create New Study Group</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="groupName" className="block text-sm font-medium text-gray-700 mb-1">
              Group Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="groupName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="groupDescription" className="block text-sm font-medium text-gray-700 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="groupDescription"
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="groupFeatures" className="block text-sm font-medium text-gray-700 mb-1">
              Features (comma-separated, e.g., "Group chat, File sharing")
            </label>
            <input
              type="text"
              id="groupFeatures"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              placeholder="e.g., Group chat, share notes, weekly quizzes"
            />
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupPage;
