import React, { useState } from 'react';

// Main App component to bring everything together
const App = () => {
  // State to manage expanded image for the entire application
  const [expandedImage, setExpandedImage] = useState(null);

  // Dummy video data for the horizontal slider
  const recommendedVideos = [

    { id: 1, title: 'Web Dev Basics: HTML, CSS, JS Fundamentals for Beginners', channel: 'Code Academy', thumbnail: 'https://placehold.co/120x67/FEE2E2/EF4444?text=WebDev', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 2, title: 'React Hooks Mastery: Understanding useState and useEffect', channel: 'JS Masters', thumbnail: 'https://placehold.co/120x67/DBEAFE/3B82F6?text=React', videoUrl: 'https://www.youtube.com/watch?v=Sj8A-Xf5q1E' },
    { id: 3, title: 'Build Your First Online Portfolio: Tips and Tricks', channel: 'Design Hub', thumbnail: 'https://placehold.co/120x67/D1FAE5/10B981?text=Design', videoUrl: 'https://www.youtube.com/watch?v=FqS-E48mX0A' },
    { id: 4, title: 'Internship Guide: Landing Your Dream Tech Internship', channel: 'Career Pros', thumbnail: 'https://placehold.co/120x67/E0E7FF/4F46E5?text=Career', videoUrl: 'https://www.youtube.com/watch?v=q6g4C-pYp0o' },
    { id: 5, title: 'Frontend Development Trends You Need to Know in 2025', channel: 'DevDaily', thumbnail: 'https://placehold.co/120x67/FFFBEB/F59E0B?text=Trends', videoUrl: 'https://www.youtube.com/watch?v=lA47m0W8IKE' },
    { id: 6, title: 'AI for Beginners: A Gentle Introduction to Artificial Intelligence', channel: 'AI Insights', thumbnail: 'https://placehold.co/120x67/ECFDF5/059669?text=AI', videoUrl: 'https://www.youtube.com/watch?v=JmuxqQzFvGg' },
    { id: 7, title: 'Machine Learning Explained: Core Concepts and Applications', channel: 'Data Science', thumbnail: 'https://placehold.co/120x67/F0F9FF/0EA5E9?text=ML', videoUrl: 'https://www.youtube.com/watch?v=Kz1sQyM8G2A' },
    { id: 8, title: 'Bootcamp Prep: What to Expect and How to Succeed', channel: 'Study Zone', thumbnail: 'https://placehold.co/120x67/FDF2F8/EC4899?text=Bootcamp', videoUrl: 'https://www.youtube.com/watch?v=h3S4-A8N6aI' },

  ];

  // Dummy data for posts
  const postsData = [
    {
      id: 'aisha_post',
      userName: 'Aisha Rahman',
      userTitle: 'Final year IT Student',
      timeAgo: '2 hours ago',
      profileAvatarText: 'AR',
      profileAvatarColor: 'from-purple-400 to-pink-500',
      content: `Just finished building my first portfolio site! 🚀
Would love some feedback from anyone who's done this before.
Also open to internship suggestions! 😄`,
      images: [
        'https://placehold.co/600x400/87CEEB/FFFFFF?text=Portfolio+Site',
        'https://placehold.co/600x400/98FB98/FFFFFF?text=Feedback+Welcome',
      ],
      initialComments: ['Nice post!', 'Thanks for sharing!'],
    },
    {
      id: 'daniel_post',
      userName: 'Daniel Kim',
      userTitle: '3rd Year Computer Science',
      timeAgo: '5 hours ago',
      profileAvatarText: 'DK',
      profileAvatarColor: 'from-blue-400 to-green-500',
      content: `Anyone attending the AI Bootcamp next week? 🤖
Let’s connect and maybe form a mini study group.
Can’t wait to meet fellow learners! 🧑‍🎓`,
      images: [
        'https://placehold.co/600x400/FFD700/333333?text=AI+Bootcamp',
        'https://placehold.co/600x400/FFA07A/FFFFFF?text=Study+Group',
      ],
      initialComments: ['Great initiative!', 'Count me in for the study group!'],
    },
    {
      id: 'johnathan_post',
      userName: 'Johnathan Reed',
      userTitle: 'Aspiring UX/UI Designer | Creative Problem Solver',
      timeAgo: '1 hour ago',
      profileAvatarText: 'JR',
      profileAvatarColor: 'from-yellow-400 to-orange-500',
      content: `🌟 Exciting Milestone! 🌟
I’m thrilled to share that I’ve officially started my journey into the world of design! Over the past few months, I’ve been diving deep into UX/UI principles, prototyping, and user-centered design, and it’s been an incredible learning experience.
I can’t wait to apply my skills to real projects, collaborate with talented creatives, and continue growing as a designer. A huge thanks to the amazing online communities and mentors who’ve guided me so far—you know who you are!
If you’re passionate about design or have tips for someone starting out, I’d love to connect and exchange ideas. Let’s create something amazing together! ✨
#UXDesign #UIDesign #DesignThinking #CareerJourney #LearningEveryday`,
      images: [
        'https://placehold.co/600x400/FFC0CB/FFFFFF?text=Design+Journey',
        'https://placehold.co/600x400/DDA0DD/FFFFFF?text=UX/UI+Learning',
      ],
      initialComments: ['Congratulations, Johnathan!', 'That\'s awesome, good luck!'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      {/* Removed mx-auto to align the container to the left */}
      <div className="w-full max-w-5xl py-6 px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Render initial posts */}
        <SinglePost key={postsData[0].id} post={postsData[0]} onImageClick={setExpandedImage} />
        <SinglePost key={postsData[1].id} post={postsData[1]} onImageClick={setExpandedImage} />

        {/* Independent YouTube-like Video Recommendations Section */}
        <RecommendedVideosSection videos={recommendedVideos} />

        {/* New post for Johnathan Reed, placed after recommended videos */}
        <SinglePost key={postsData[2].id} post={postsData[2]} onImageClick={setExpandedImage} />
      </div>

      {/* Expanded Image Viewer */}
      {expandedImage && (
        <ExpandedImageViewer imageUrl={expandedImage} onClose={() => setExpandedImage(null)} />
      )}
    </div>
  );
};

// Reusable SinglePost component
const SinglePost = ({ post, onImageClick }) => {
  const [comments, setComments] = useState(post.initialComments || []);
  const [newComment, setNewComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);


  const emojis = ['😀', '😂', '❤️', '👍', '🔥', '🎉', '🤔', '😢', '😮', '🙏', '💯', '🙌'];


  // Function to handle adding a new comment
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
      setShowEmojiPicker(false);
    }
  };

  // Function to handle deleting a comment by its index
  const handleDeleteComment = (indexToDelete) => {
    setComments(comments.filter((_, index) => index !== indexToDelete));
  };

  const handleEmojiClick = (emoji) => {
    setNewComment(newComment + emoji);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 transform transition-transform duration-300 hover:scale-[1.005] hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-4">
        <a href={`/profile/${post.userName.replace(/\s+/g, '').toLowerCase()}`} className="flex-shrink-0">
          <div className={`w-12 h-12 bg-gradient-to-br ${post.profileAvatarColor} rounded-full overflow-hidden shadow-sm flex items-center justify-center text-white font-bold text-lg`}>
            {post.profileAvatarText}
          </div>
        </a>
        <div>
          <div className="flex items-center space-x-2">
            <a href={`/profile/${post.userName.replace(/\s+/g, '').toLowerCase()}`} className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              {post.userName}
            </a>
            <span className="text-sm text-gray-500">{post.timeAgo}</span>
          </div>
          <p className="text-sm text-gray-600">{post.userTitle}</p>
        </div>
      </div>
      {/* Content Text */}
      <p className="mb-5 leading-relaxed whitespace-pre-line">
        {post.content}
      </p>
      {/* Media Placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {post.images.map((imageUrl, index) => (
          <div
            key={index}
            className="w-full h-48 sm:h-56 md:h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border border-dashed border-gray-300

                         cursor-pointer overflow-hidden group relative hover:shadow-lg transition-shadow duration-200"

            onClick={() => onImageClick(imageUrl)}
          >
            <img
              src={imageUrl}
              alt={`Post image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/CCCCCC/333333?text=Error+Loading+Image`; }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Click to Enlarge</span>
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-around items-center text-gray-500 text-sm border-t border-gray-200 pt-4 mt-4">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`flex items-center space-x-1 p-2 rounded-md transition-colors duration-200 ${isLiked ? 'text-red-500 bg-red-50' : 'hover:bg-gray-100'}`}
        >
          <span>❤️</span>
          <span className="font-medium">Like</span>
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
        >
          <span>💬</span>
          <span className="font-medium">Comment</span>
        </button>
        <button className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
          <span>↪️</span>
          <span className="font-medium">Share</span>
        </button>
      </div>
      {/* Comments Section (conditionally rendered) */}
      {showComments && (
        <div className="border-t border-gray-200 pt-4 mt-4 animate-fade-in">
          <h3 className="font-semibold mb-3 text-gray-700">Comments ({comments.length})</h3>
          <div className="space-y-3 mb-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {comments.map((comment, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg text-gray-700 shadow-sm flex justify-between items-center">
                <span className="whitespace-pre-line break-words">{comment}</span>
                <button
                  onClick={() => handleDeleteComment(index)}
                  className="flex-shrink-0 text-gray-400 hover:text-red-500 p-1 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 ml-2"
                  aria-label="Delete comment"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
            ))}
          </div>
          {/* Emoji Picker */}
          {showEmojiPicker && (
            <div className="bg-white border border-gray-200 rounded-lg p-2 grid grid-cols-6 gap-2 mb-2 shadow-lg">
              {emojis.map(emoji => (
                <button
                  key={emoji}
                  onClick={() => handleEmojiClick(emoji)}
                  className="text-2xl rounded-lg p-1 hover:bg-gray-200 transition-colors"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}
          <form onSubmit={handleCommentSubmit} className="flex items-center space-x-2 relative">
            <input
              type="text"
              placeholder="Add a comment... (emojis too! ✨)"
              className="flex-grow border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="text-gray-500 hover:text-pink-500 p-2 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button>
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-full font-medium hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
            >
              Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
};


// Component for the independent YouTube-like video recommendations section
const RecommendedVideosSection = ({ videos }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
      <h3 className="font-bold text-xl text-gray-800 mb-4">Recommended Videos for You</h3>
      <div className="overflow-x-auto flex space-x-4 pb-2 scrollbar-hide">
        {videos.map(video => (

          <a key={video.id} href={video.videoUrl} target="_blank" rel="noopener noreferrer">
            <MiniVideoCard {...video} />
          </a>

        ))}
      </div>
    </div>
  );
};

// Component for small video cards in the horizontal slider
const MiniVideoCard = ({ thumbnail, title, channel }) => {
  return (
    <div className="flex-shrink-0 w-48 bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer

                         transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-md">

      <img
        src={thumbnail}
        alt={title}
        className="w-full h-28 object-cover rounded-t-lg"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x67/CCCCCC/333333?text=Video"; }}
      />
      <div className="p-3">
        <h5 className="font-medium text-gray-900 text-sm leading-tight line-clamp-2 mb-1">{title}</h5>
        <p className="text-xs text-gray-600 truncate">{channel}</p>
      </div>
    </div>
  );
};

// Expanded Image Viewer Component
const ExpandedImageViewer = ({ imageUrl, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-3xl max-h-full overflow-hidden rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={imageUrl}
          alt="Expanded view"
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/CCCCCC/333333?text=Image+Load+Error"; }}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white bg-opacity-30 text-white rounded-full p-2

                         hover:bg-opacity-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"

        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;

