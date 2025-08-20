import { useState } from "react"

export default function ContestsPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [loadingLinks, setLoadingLinks] = useState({})

  const contests = [
    {
      id: 1,
      title: "Global Coding Challenge 2025",
      description:
        "Join thousands of programmers worldwide in this epic coding competition. Test your algorithms and problem-solving skills!",
      host: "CodeForces",
      date: "Aug 30, 2025",
      type: "Online Contest",
      prize: "$10,000",
      url: "https://codeforces.com/contests",
      category: "external",
    },
    {
      id: 2,
      title: "HackerRank Weekly Challenge",
      description: "Weekly programming challenges to sharpen your coding skills. Perfect for interview preparation.",
      host: "HackerRank",
      date: "Sep 15, 2025",
      type: "Weekly Series",
      level: "All Levels",
      url: "https://hackerrank.com/contests",
      category: "external",
    },
    {
      id: 3,
      title: "AtCoder Beginner Contest",
      description: "Perfect for beginners and intermediate programmers. Weekly contests with educational problems.",
      host: "AtCoder",
      date: "Oct 8, 2025",
      type: "Beginner Contest",
      level: "Beginner-Friendly",
      url: "https://atcoder.jp/contests",
      category: "external",
    },
    {
      id: 4,
      title: "Google Code Jam",
      description: "Google's premier programming competition with multiple rounds and global recognition.",
      host: "Google",
      date: "Oct 20, 2025",
      type: "Multi-Round Contest",
      prize: "$15,000",
      url: "https://codingcompetitions.withgoogle.com",
      category: "external",
    },
    {
      id: 5,
      title: "LeetCode Monthly Contest",
      description: "Monthly algorithmic programming contest with challenging problems and global rankings.",
      host: "LeetCode",
      date: "Sep 28, 2025",
      type: "Algorithm Contest",
      prize: "Premium Subscription",
      url: "https://leetcode.com/contest",
      category: "external",
    },
  ]

  const isExpired = (dateString) => {
    const eventDate = new Date(dateString)
    const currentDate = new Date()
    return eventDate < currentDate
  }

  const filteredContests = contests.filter((contest) => {
    if (activeFilter === "all") return true
    return contest.category === activeFilter
  })

  const handleExternalLink = (contestId, url) => {
    setLoadingLinks((prev) => ({ ...prev, [contestId]: true }))

    setTimeout(() => {
      setLoadingLinks((prev) => ({ ...prev, [contestId]: false }))
      window.open(url, "_blank", "noopener,noreferrer")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white p-6 ">
      {/* Header Section */}
      
      <header className="relative bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)]  rounded-2xl text-white text-center py-6 px-6 overflow-hidden">
        {/* Code pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
             
              backgroundRepeat: "repeat",
            }}
          />
        </div>

        <div className="relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Upcoming Events</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover amazing coding competitions and programming challenges
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-xl">
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === "all"
                  ? "bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] p-6 rounded-2xl text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Platforms
            </button>
            <button
              onClick={() => setActiveFilter("external")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === "external"
                  ? "bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] p-6 rounded-2xl text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              External
            </button>
          </div>
        </div>

        {/* Contests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContests.map((contest, index) => {
            const expired = isExpired(contest.date)
            const isLoading = loadingLinks[contest.id]

            return (
              <div
                key={contest.id}
                className={`bg-white rounded-2xl p-6 shadow-xl hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer border-l-4 border-purple-500 relative overflow-hidden ${
                  expired ? "opacity-70" : ""
                }`}
                style={{
                  animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s both`,
                }}
              >
               
               

                {/* Expired Badge */}
                {expired && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    EXPIRED
                  </div>
                )}

                {/* Contest Banner */}
                <div className="h-32 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] p-6  text-white rounded-xl mb-4 flex items-center justify-center hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                  <div className="text-white text-4xl font-bold opacity-20">{"</>"}</div>
                </div>

               <div
  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
>
  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
    {contest.title}
  </h3>

  <p className="text-gray-600 mb-4 line-clamp-3">{contest.description}</p>

  {/* Contest Meta */}
  <div className="grid grid-cols-2 gap-3 mb-6 p-4 bg-gray-50 rounded-xl">
    <div className="text-sm">
      <span className="font-semibold text-gray-700">Host:</span>
      <div className="text-gray-600">{contest.host}</div>
    </div>
    <div className="text-sm">
      <span className="font-semibold text-gray-700">Date:</span>
      <div className="text-gray-600">{contest.date}</div>
    </div>
    <div className="text-sm">
      <span className="font-semibold text-gray-700">Type:</span>
      <div className="text-gray-600">{contest.type}</div>
    </div>
    <div className="text-sm">
      <span className="font-semibold text-gray-700">
        {contest.prize ? "Prize:" : "Level:"}
      </span>
      <div className="text-gray-600">{contest.prize || contest.level}</div>
    </div>
  </div>

  {/* Action Button */}
  <button
    onClick={() => handleExternalLink(contest.id, contest.url)}
    disabled={isLoading}
    className={`w-full bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] p-6  text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 ${
      isLoading ? "opacity-70 cursor-not-allowed" : ""
    }`}
  >
    {isLoading ? (
      <>
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
        Loading...
      </>
    ) : (
      <>Join Contest</>
    )}
  </button>
</div>

              </div>
            )
          })}
        </div>

        {filteredContests.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No contests found</h3>
            <p className="text-gray-500">Try adjusting your filter selection</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
