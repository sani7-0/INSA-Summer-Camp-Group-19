import { useState, useMemo } from "react"
import {
  Search,
  Filter,
  Star,
  BookOpen,
  Play,
  FileText,
  Download,
  MessageCircle,
  ThumbsUp,
  Award,
  Bookmark,
  User,
  Clock,
  Tag,
  Send,
} from "lucide-react"

const TutorialsPage = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showComments, setShowComments] = useState(null)
  const [newComment, setNewComment] = useState("")
  const [tutorialData, setTutorialData] = useState([
    {
      id: 1,
      title: "Python Basics for Beginners",
      author: "Sarah Johnson",
      type: "video",
      duration: "2h 30m",
      rating: 4.8,
      reviews: 124,
      difficulty: "Beginner",
      category: "Programming",
      tags: ["Python", "Basics", "Programming"],
      description: "Learn Python fundamentals with hands-on examples and projects.",
      progress: 65,
      isBookmarked: true,
      likes: 89,
      comments: [
        { id: 1, user: "John Doe", text: "Great tutorial! Very clear explanations.", time: "2 hours ago" },
        { id: 2, user: "Jane Smith", text: "Perfect for beginners like me.", time: "1 day ago" },
      ],
      youtubeUrl: "https://www.youtube.com/watch?v=rfscVS0vtbw",
    },
    {
      id: 2,
      title: "Advanced Data Structures",
      author: "Mike Chen",
      type: "text",
      duration: "1h 45m",
      rating: 4.6,
      reviews: 89,
      difficulty: "Advanced",
      category: "Programming",
      tags: ["Data Structures", "Algorithms", "Advanced"],
      description: "Deep dive into complex data structures and their implementations.",
      progress: 0,
      isBookmarked: false,
      likes: 67,
      comments: [{ id: 1, user: "Alex Wilson", text: "Challenging but worth it!", time: "3 hours ago" }],
      youtubeUrl: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
    },
    {
      id: 3,
      title: "React Hooks Complete Guide",
      author: "Emma Davis",
      type: "video",
      duration: "3h 20m",
      rating: 4.9,
      reviews: 203,
      difficulty: "Intermediate",
      category: "Programming",
      tags: ["React", "Hooks", "JavaScript"],
      description: "Master React Hooks with practical examples and best practices.",
      progress: 45,
      isBookmarked: true,
      likes: 156,
      comments: [
        { id: 1, user: "Tom Brown", text: "Best React tutorial I've found!", time: "1 hour ago" },
        { id: 2, user: "Lisa Garcia", text: "The examples are so helpful.", time: "5 hours ago" },
      ],
      youtubeUrl: "https://www.youtube.com/watch?v=O6P86uwfdR0",
    },
    {
      id: 4,
      title: "Calculus Made Simple",
      author: "Dr. Emily Rodriguez",
      type: "pdf",
      duration: "3h 15m",
      rating: 4.9,
      reviews: 156,
      difficulty: "Intermediate",
      category: "Mathematics",
      tags: ["Calculus", "Math", "Theory"],
      description: "Comprehensive guide to calculus with step-by-step explanations.",
      progress: 100,
      isBookmarked: true,
      likes: 134,
      comments: [{ id: 1, user: "Math Student", text: "Finally understand derivatives!", time: "2 days ago" }],
      youtubeUrl: "https://www.youtube.com/watch?v=WUvTyaaNkzM",
    },
    {
      id: 5,
      title: "Linear Algebra Essentials",
      author: "Prof. David Kim",
      type: "video",
      duration: "4h 45m",
      rating: 4.7,
      reviews: 142,
      difficulty: "Advanced",
      category: "Mathematics",
      tags: ["Linear Algebra", "Matrices", "Vectors"],
      description: "Essential linear algebra concepts for data science and engineering.",
      progress: 0,
      isBookmarked: false,
      likes: 98,
      comments: [],
      youtubeUrl: "https://www.youtube.com/watch?v=fNk_zzaMoSs",
    },
    {
      id: 6,
      title: "UI/UX Design Principles",
      author: "Alex Kim",
      type: "video",
      duration: "4h 20m",
      rating: 4.7,
      reviews: 98,
      difficulty: "Intermediate",
      category: "Design",
      tags: ["UI", "UX", "Design"],
      description: "Master the fundamentals of user interface and experience design.",
      progress: 25,
      isBookmarked: false,
      likes: 76,
      comments: [{ id: 1, user: "Designer Pro", text: "Great design principles!", time: "6 hours ago" }],
      youtubeUrl: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU",
    },
    {
      id: 7,
      title: "Figma for Beginners",
      author: "Sophie Chen",
      type: "video",
      duration: "2h 15m",
      rating: 4.8,
      reviews: 187,
      difficulty: "Beginner",
      category: "Design",
      tags: ["Figma", "Design Tools", "Prototyping"],
      description: "Learn Figma from scratch and create stunning designs.",
      progress: 80,
      isBookmarked: true,
      likes: 145,
      comments: [{ id: 1, user: "New Designer", text: "Perfect introduction to Figma!", time: "1 day ago" }],
      youtubeUrl: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
    },
    {
      id: 8,
      title: "Physics for Engineers",
      author: "Dr. Maria Santos",
      type: "pdf",
      duration: "5h 10m",
      rating: 4.5,
      reviews: 73,
      difficulty: "Advanced",
      category: "Science",
      tags: ["Physics", "Engineering", "Science"],
      description: "Comprehensive physics course tailored for engineering students.",
      progress: 0,
      isBookmarked: true,
      likes: 52,
      comments: [],
      youtubeUrl: "https://www.youtube.com/watch?v=ZM8ECpBuQYE",
    },
    {
      id: 9,
      title: "Chemistry Fundamentals",
      author: "Dr. Robert Lee",
      type: "video",
      duration: "3h 30m",
      rating: 4.6,
      reviews: 95,
      difficulty: "Beginner",
      category: "Science",
      tags: ["Chemistry", "Fundamentals", "Lab"],
      description: "Essential chemistry concepts with practical laboratory examples.",
      progress: 30,
      isBookmarked: false,
      likes: 78,
      comments: [{ id: 1, user: "Chem Student", text: "Lab examples are amazing!", time: "3 days ago" }],
      youtubeUrl: "https://www.youtube.com/watch?v=bka20Q2L9C8",
    },
    {
      id: 10,
      title: "Node.js Backend Development",
      author: "James Wilson",
      type: "video",
      duration: "6h 15m",
      rating: 4.8,
      reviews: 234,
      difficulty: "Intermediate",
      category: "Programming",
      tags: ["Node.js", "Backend", "API"],
      description: "Build scalable backend applications with Node.js and Express.",
      progress: 0,
      isBookmarked: false,
      likes: 189,
      comments: [{ id: 1, user: "Backend Dev", text: "Comprehensive backend course!", time: "4 hours ago" }],
      youtubeUrl: "https://www.youtube.com/watch?v=Oe421EPjeBE",
    },
    {
      id: 11,
      title: "Machine Learning Basics",
      author: "Dr. Anna Patel",
      type: "video",
      duration: "5h 45m",
      rating: 4.9,
      reviews: 312,
      difficulty: "Intermediate",
      category: "Programming",
      tags: ["Machine Learning", "AI", "Python"],
      description: "Introduction to machine learning algorithms and applications.",
      progress: 15,
      isBookmarked: true,
      likes: 267,
      comments: [
        { id: 1, user: "ML Enthusiast", text: "Best ML intro course!", time: "2 hours ago" },
        { id: 2, user: "Data Scientist", text: "Clear explanations of complex topics.", time: "1 day ago" },
      ],
      youtubeUrl: "https://www.youtube.com/watch?v=ukzFI9rgwfU",
    },
    {
      id: 12,
      title: "Digital Marketing Strategy",
      author: "Rachel Green",
      type: "text",
      duration: "2h 50m",
      rating: 4.4,
      reviews: 156,
      difficulty: "Beginner",
      category: "Business",
      tags: ["Marketing", "Digital", "Strategy"],
      description: "Learn effective digital marketing strategies for modern businesses.",
      progress: 0,
      isBookmarked: false,
      likes: 89,
      comments: [],
      youtubeUrl: "https://www.youtube.com/watch?v=nU-IIXBWlS4",
    },
  ])

  const categories = [
    { id: "all", name: "All Categories", count: tutorialData.length, color: "bg-gray-100 text-gray-800" },
    {
      id: "Programming",
      name: "Programming",
      count: tutorialData.filter((t) => t.category === "Programming").length,
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: "Mathematics",
      name: "Mathematics",
      count: tutorialData.filter((t) => t.category === "Mathematics").length,
      color: "bg-green-100 text-green-800",
    },
    {
      id: "Science",
      name: "Science",
      count: tutorialData.filter((t) => t.category === "Science").length,
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: "Design",
      name: "Design",
      count: tutorialData.filter((t) => t.category === "Design").length,
      color: "bg-pink-100 text-pink-800",
    },
    {
      id: "Business",
      name: "Business",
      count: tutorialData.filter((t) => t.category === "Business").length,
      color: "bg-orange-100 text-orange-800",
    },
  ]

  const learningPaths = [
    {
      id: 1,
      title: "Programming Fundamentals",
      tutorials: 5,
      duration: "10h",
      completed: 3,
      difficulty: "Beginner",
    },
    {
      id: 2,
      title: "Mathematics for Engineers",
      tutorials: 3,
      duration: "8h",
      completed: 2,
      difficulty: "Intermediate",
    },
    {
      id: 3,
      title: "Design Essentials",
      tutorials: 4,
      duration: "12h",
      completed: 1,
      difficulty: "Advanced",
    },
  ]

  const getTypeIcon = (type) => {
    switch (type) {
      case "video":
        return <Play className="w-4 h-4" />
      case "text":
        return <FileText className="w-4 h-4" />
      case "pdf":
        return <Download className="w-4 h-4" />
      default:
        return <BookOpen className="w-4 h-4" />
    }
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredTutorials = useMemo(() => {
    let filtered = tutorialData

    if (searchQuery) {
      filtered = filtered.filter(
        (tutorial) =>
          tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tutorial.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tutorial.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
          tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((tutorial) => tutorial.category === selectedCategory)
    }

    switch (activeTab) {
      case "bookmarked":
        filtered = filtered.filter((tutorial) => tutorial.isBookmarked)
        break
      case "in-progress":
        filtered = filtered.filter((tutorial) => tutorial.progress > 0 && tutorial.progress < 100)
        break
      case "completed":
        filtered = filtered.filter((tutorial) => tutorial.progress === 100)
        break
      default:
        break
    }

    return filtered
  }, [tutorialData, searchQuery, selectedCategory, activeTab])

  const toggleBookmark = (tutorialId) => {
    setTutorialData((prev) =>
      prev.map((tutorial) =>
        tutorial.id === tutorialId ? { ...tutorial, isBookmarked: !tutorial.isBookmarked } : tutorial,
      ),
    )
  }

  const handleLike = (tutorialId) => {
    setTutorialData((prev) =>
      prev.map((tutorial) => (tutorial.id === tutorialId ? { ...tutorial, likes: tutorial.likes + 1 } : tutorial)),
    )
  }

  const addComment = (tutorialId) => {
    if (!newComment.trim()) return

    setTutorialData((prev) =>
      prev.map((tutorial) =>
        tutorial.id === tutorialId
          ? {
              ...tutorial,
              comments: [{ id: Date.now(), user: "You", text: newComment, time: "Just now" }, ...tutorial.comments],
            }
          : tutorial,
      ),
    )
    setNewComment("")
  }

  const toggleComments = (tutorialId) => {
    setShowComments(showComments === tutorialId ? null : tutorialId)
  }

  const getTabCounts = () => {
    return {
      all: tutorialData.length,
      bookmarked: tutorialData.filter((t) => t.isBookmarked).length,
      "in-progress": tutorialData.filter((t) => t.progress > 0 && t.progress < 100).length,
      completed: tutorialData.filter((t) => t.progress === 100).length,
    }
  }

  const tabCounts = getTabCounts()

  return (
    <div className=" min-h-screen bg-gray-50 p-6">
      <header className="bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] shadow-sm border-b rounded-2xl py-3 px-6">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-5xl font-bold text-white">Tutorial Library</h1>
              <p className="text-white mt-1">Discover, learn, and master new skills</p>
            </div>

            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedCategory === category.id
                        ? "bg-blue-50 border-2 border-blue-200"
                        : "hover:bg-gray-50 border-2 border-transparent"
                    }`}
                  >
                    <span
                      className={`${selectedCategory === category.id ? "text-indigo-700 font-medium" : "text-gray-700"}`}
                    >
                      {category.name}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Learning Paths
              </h3>
              <div className="space-y-4">
                {learningPaths.map((path) => (
                  <div
                    key={path.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 cursor-pointer transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 mb-2">{path.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{path.tutorials} tutorials</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>{path.duration}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className="bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(path.completed / path.tutorials) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {path.completed}/{path.tutorials} completed
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(path.difficulty)}`}
                      >
                        {path.difficulty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: "all", name: "All Tutorials" },
                    { id: "bookmarked", name: "Bookmarked" },
                    { id: "in-progress", name: "In Progress" },
                    { id: "completed", name: "Completed" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? "border-indigo-500 text-indigo-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {tab.name} ({tabCounts[tab.id]})
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredTutorials.length} tutorial{filteredTutorials.length !== 1 ? "s" : ""}
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(tutorial.type)}
                        <span className="text-sm text-gray-500 capitalize">{tutorial.type}</span>
                      </div>
                      <button
                        onClick={() => toggleBookmark(tutorial.id)}
                        className={`p-1 rounded-full transition-colors ${
                          tutorial.isBookmarked
                            ? "text-indigo-600 hover:text-indigo-700"
                            : "text-gray-400 hover:text-gray-600"
                        }`}
                      >
                        <Bookmark className={`w-5 h-5 ${tutorial.isBookmarked ? "fill-current" : ""}`} />
                      </button>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-indigo-600 cursor-pointer">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tutorial.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {tutorial.progress > 0 && tutorial.progress < 100 && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{tutorial.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${tutorial.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{tutorial.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{tutorial.duration}</span>
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}
                      >
                        {tutorial.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{tutorial.rating}</span>
                          <span className="text-sm text-gray-500">({tutorial.reviews})</span>
                        </div>
                        <a
                          href={tutorial.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white text-xs rounded-full hover:bg-red-700 transition-colors"
                        >
                          <Play className="w-3 h-3" />
                          YouTube
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleComments(tutorial.id)}
                          className="flex items-center gap-1 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-xs">{tutorial.comments.length}</span>
                        </button>
                        <button
                          onClick={() => handleLike(tutorial.id)}
                          className="flex items-center gap-1 p-2 text-gray-400 hover:text-indigo-600 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <ThumbsUp className="w-4 h-4" />
                          <span className="text-xs">{tutorial.likes}</span>
                        </button>
                      </div>
                    </div>

                    {showComments === tutorial.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                          {tutorial.comments.map((comment) => (
                            <div key={comment.id} className="flex gap-3">
                              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-gray-600" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-sm font-medium text-gray-900">{comment.user}</span>
                                  <span className="text-xs text-gray-500">{comment.time}</span>
                                </div>
                                <p className="text-sm text-gray-700">{comment.text}</p>
                              </div>
                            </div>
                          ))}
                          {tutorial.comments.length === 0 && (
                            <p className="text-sm text-gray-500 text-center py-4">
                              No comments yet. Be the first to comment!
                            </p>
                          )}
                        </div>

                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && addComment(tutorial.id)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <button
                            onClick={() => addComment(tutorial.id)}
                            className="px-3 py-2 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white rounded-lg hover:bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] transition-colors"
                          >
                            <Send className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {tutorial.progress === 100 && (
                      <div className="mt-3 flex items-center gap-2 text-green-600 text-sm font-medium">
                        <Award className="w-4 h-4" />
                        <span>Completed</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredTutorials.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No tutorials found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                    setActiveTab("all")
                  }}
                  className="px-4 py-2 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {filteredTutorials.length > 0 && (
              <div className="text-center mt-8">
                <button className="px-6 py-3 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Load More Tutorials
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorialsPage