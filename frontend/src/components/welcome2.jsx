import React from 'react';
import { Link } from "react-router-dom";

// --- Combined Data for the feature sections ---
const featuresData = [
  {
    title: 'Share, Connect, and Collaborate',
    description:
      'Create and engage with posts — whether text, images, or links — and join real conversations through threaded comments. Share articles, tutorials, and study materials to help others while expanding your own knowledge.',
    imageUrl: 'https://images.unsplash.com/photo-1542323228-002ac256e7b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    textColor: 'text-green-800',
    highlightText: 'real conversations',
    promptTopic: 'collaboration and connection in an online community'
  },
  {
    title: 'Stay Organized & Informed 🗓️',
    description:
      'From academic webinars to local study meetups, our event calendar keeps you on schedule.Set reminders so you never miss an important session.Plan your learning journey around upcoming opportunities.Your academic life just got more organized.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1705310031361-01787e099f9d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    textColor: 'text-indigo-800',
    highlightText: 'integrated calendar',
    promptTopic: 'staying organized with academic events and calendars'
  },
  {
    title: 'Join Study Groups & Build Your Network 👥',
    description:
      'Create or join groups focused on specific subjects or goals. Share files, exchange ideas, and solve problems together in real-time. Study groups help you stay motivated and accountable. Because learning is better when you\'re not doing it alone.',
    imageUrl: 'https://olatorera.com/wp-content/uploads/2020/03/network.jpg',
    textColor: 'text-orange-800',
    highlightText: 'motivated and accountable',
    promptTopic: 'building a network and running effective study groups'
  },
  {
    title: 'Get Help Anytime with Our AI Assistant 🤖',
    description:
      'Need quick answers or study suggestions? Our GPT-powered assistant is available 24/7 to support you. Ask about assignments, concepts, or resources and get instant, accurate responses. It’s like having a personal tutor — always ready when you are.',
    imageUrl:
      'https://news.cornell.edu/sites/default/files/styles/story_thumbnail_xlarge/public/2024-07/robot-1280x720_0.jpg?itok=AF6MakCq',
    highlightText: 'personal tutor',
    textColor: 'text-purple-800',
  },
  {
    title: 'Track Your Progress with Student Analytics 📊',
    description:
      'See exactly how you’re improving over time. Our analytics dashboard shows your activity, strengths, and areas for growth. Get personalized recommendations to focus your efforts. Your path to better grades and deeper understanding is crystal clear.',
    imageUrl:
      'https://d1e4pidl3fu268.cloudfront.net/d2e5e8a6-8a68-44ad-999c-d9146ae21f9d/2AE71272CA2A440DB376E9CE8178193E.crop_900x675_0,67.preview.jpeg',
    highlightText: 'crystal clear',
    textColor: 'text-blue-800',
  },
];

// --- Feature Section Component ---
const FeatureSection = ({ feature, imagePosition }) => {
  const renderDescription = () => {
    if (!feature.highlightText || !feature.description.includes(feature.highlightText)) {
      return feature.description;
    }
    const parts = feature.description.split(feature.highlightText);
    return (
      
      <>
        {parts[0]}
        <span className={`px-2 py-1 rounded-md ${feature.textColor} transition-colors duration-300`}>
          {feature.highlightText}
        </span>
        {parts[1]}
      </>
    );
  };

  return (<section id="feature">
    <div className="container mx-auto px-4 py-16">
      <div className={`flex flex-col md:flex-row items-center gap-12 ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}>
        {/* Image Container */}
        <div className={`w-full md:w-1/2 ${feature.title === 'Join Study Groups & Build Your Network 👥' ? 'w-20' : ''} transform transition-transform duration-500 hover:scale-105`}>
          <img
            src={feature.imageUrl}
            alt={feature.title}
            className="rounded-lg shadow-2xl object-cover w-full h-full"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found'; }}
          />
        </div>
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{feature.title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {renderDescription()}
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

// --- Main App Component ---
export default function App() {
  return (
    <div className="bg-gray-50 font-sans">
      <div className="py-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Our Core Features
        </h1>
        {featuresData.map((feature, index) => (
          <FeatureSection
            key={index}
            feature={feature}
            imagePosition={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>

      <div className="text-center py-20 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white">

        <h2 className="text-4xl md:text-5xl font-extrabold animate-pulse">
          Ready to Elevate Your Learning Experience?
        </h2>
        <Link to ="/sign-up">
        <button className="mt-8 px-10 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transform transition-transform duration-300 hover:scale-105">
          Get Started
        </button>
        </Link>
      </div>
    </div>
    
  );
}

