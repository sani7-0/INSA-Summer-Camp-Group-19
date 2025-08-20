import { Link } from 'react-router-dom';

function Welcome({ isLoggedIn }) {
  if (isLoggedIn) return null; // Hide Welcome page when logged in

  return (
    <section id="home">
      <div className="bg-black text-white font-sans h-screen flex flex-col relative overflow-hidden">
        
        {/* Star elements */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-100 animate-starCombo"
            style={{
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: `${Math.random() * 3}s, ${Math.random() * 6}s`,
            }}
          />
        ))}

        {/* Main Content Section */}
        <main className="flex-grow flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50"></div>
          <div className="text-center relative z-10 p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Everything you need <br />
              <span className="text-blue-500">Learn, connect, achieve</span> <br />
              Your complete learning hub
            </h1>
            <p className="text-lg mb-8 max-w-xl mx-auto">
              Learn, connect, and achieve in a vibrant community empowering students across Ethiopia.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white rounded-full py-3 px-6 mb-4 md:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
              />
              <Link to="/sign-up">

                <button className="bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">

                  Start
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Welcome;
