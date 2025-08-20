import { useState, useEffect } from "react"

const EduConnectForum = () => {
  // State management
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false)
  const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const [sortBy, setSortBy] = useState("latest")
  const [selectedFiles, setSelectedFiles] = useState([])
  const [dragActive, setDragActive] = useState(false)
  const [selectedDiscussion, setSelectedDiscussion] = useState(null)
  const [comments, setComments] = useState({}) // Declare comments state

  // Form state
  const [postForm, setPostForm] = useState({
    title: "",
    description: "",
    tags: "",
  })
  const [replyText, setReplyText] = useState("")

  // Sample discussions data
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      isPinned: true,
      user: { name: "Prof. Johnson", avatar: "/placeholder.svg?height=40&width=40" },
      timestamp: "2 hours ago",
      title: "Welcome to EduConnect - Community Guidelines",
      description:
        "Please read our community guidelines before participating in discussions. Let's maintain a respectful and educational environment for everyone.",
      tags: ["Announcement", "Guidelines"],
      stats: { likes: 0, comments: 0, views: 1 },
      isAnswered: false,
      isLiked: false, // Added isLiked property to track like state
      reactions: [],
      dataTags: "announcement,guidelines",
    },
    {
      id: 2,
      isPinned: false,
      user: { name: "Sarah Chen", avatar: "/placeholder.svg?height=40&width=40" },
      timestamp: "4 hours ago",
      title: "Need help with calculus derivatives - chain rule confusion",
      description:
        "I'm struggling with understanding when to apply the chain rule in derivative problems. Can someone explain with examples?",
      tags: ["Mathematics", "Calculus", "Help Needed"],
      stats: { likes: 0, comments: 0, views: 1},
      isAnswered: true,
      isLiked: false,
      attachment: "calculus_problem.jpg",
      reactions: [],
      dataTags: "mathematics,calculus",
    },
    {
      id: 3,
      isPinned: false,
      user: { name: "Alex Rodriguez", avatar: "/placeholder.svg?height=40&width=40" },
      timestamp: "6 hours ago",
      title: "Best practices for learning Python as a beginner",
      description:
        "What are your recommendations for someone just starting with Python? Looking for resources, practice projects, and study strategies.",
      tags: ["Programming", "Python", "Beginner"],
      stats: { likes: 0, comments: 0, views: 1 },
      isAnswered: false,
      isLiked: false, // Set one as liked for demo
      reactions: [
        { emoji: "👍", count: 8 },
        { emoji: "❤️", count: 3 },
        { emoji: "🤔", count: 2 },
      ],
      dataTags: "programming,python",
    },
    {
      id: 4,
      isPinned: false,
      user: { name: "Dr. Martinez", avatar: "/placeholder.svg?height=40&width=40" },
      timestamp: "8 hours ago",
      title: "Understanding quantum mechanics - wave-particle duality",
      description:
        "Let's discuss the fascinating concept of wave-particle duality in quantum mechanics. How do we reconcile the dual nature of light and matter?",
      tags: ["Science", "Physics", "Quantum Mechanics"],
      stats: { likes: 0, comments: 0, views: 1 },
      isAnswered: false,
      isLiked: false,
      reactions: [],
      dataTags: "science,physics",
    },
    {
      id: 5,
      isPinned: false,
      user: { name: "Emma Thompson", avatar: "/placeholder.svg?height=40&width=40" },
      timestamp: "1 day ago",
      title: 'Symbolism in "The Great Gatsby" - Green Light Analysis',
      description:
        "I'm working on an essay about the symbolism of the green light in Fitzgerald's masterpiece. What are your interpretations of this powerful symbol?",
      tags: ["Literature", "Analysis", "Symbolism"],
      stats: { likes: 0, comments: 0, views: 1 },
      isAnswered: false,
      isLiked: false,
      reactions: [],
      dataTags: "literature,analysis",
    },
  ])

  const HeartIcon = ({ filled, className = "" }) => (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )

  const PlusIcon = ({ className = "" }) => (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  )

  const CommentIcon = ({ className = "" }) => (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  )

  const EyeIcon = ({ className = "" }) => (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  )

  const SearchIcon = ({ className = "" }) => (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="M21 21l-4.35-4.35"></path>
    </svg>
  )

  const CloseIcon = ({ className = "" }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )

  const UploadIcon = ({ className = "" }) => (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7,10 12,15 17,10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  )

  // Filter discussions based on search and active filter
  const filteredDiscussions = discussions.filter((discussion) => {
    const matchesSearch =
      searchTerm === "" ||
      discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      discussion.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      discussion.user.name.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter =
      activeFilter === "all" || discussion.dataTags.toLowerCase().includes(activeFilter.toLowerCase())

    return matchesSearch && matchesFilter
  })

  // Sort discussions
  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1
    if (!a.isPinned && b.isPinned) return 1

    switch (sortBy) {
      case "popular":
        return b.stats.likes - a.stats.likes
      case "unanswered":
        return (a.isAnswered ? 1 : 0) - (b.isAnswered ? 1 : 0)
      default:
        return 0
    }
  })

  // Handle form submission
  const handleCreatePost = (e) => {
    e.preventDefault()
    if (!postForm.title.trim() || !postForm.description.trim()) {
      alert("Please fill in all required fields")
      return
    }

    const newDiscussion = {
      id: discussions.length + 1,
      isPinned: false,
      user: { name: "You", avatar: "/placeholder.svg?height=40&width=40" },
      timestamp: "Just now",
      title: postForm.title,
      description: postForm.description,
      tags: postForm.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
      stats: { likes: 0, comments: 0, views: 1 },
      isAnswered: false,
      isLiked: false, // Added isLiked property
      reactions: [],
      dataTags: postForm.tags.toLowerCase(),
    }

    setDiscussions([newDiscussion, ...discussions]) // Add to beginning of array
    setPostForm({ title: "", description: "", tags: "" })
    setSelectedFiles([])
    setIsCreatePostModalOpen(false)
    alert("Discussion posted successfully!")
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    setSelectedFiles((prev) => [...prev, ...files])
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files)
      setSelectedFiles((prev) => [...prev, ...files])
    }
  }

  const removeFile = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  // Handle like toggle
  const handleLike = (discussionId) => {
    setDiscussions(
      discussions.map((discussion) => {
        if (discussion.id === discussionId) {
          return {
            ...discussion,
            stats: {
              ...discussion.stats,
              likes: discussion.stats.likes + (discussion.isLiked ? -1 : 1),
            },
            isLiked: !discussion.isLiked,
          }
        }
        return discussion
      }),
    )
  }

  const handleCommentLike = (commentId) => {
    if (!selectedDiscussion) return

    setComments((prevComments) => ({
      ...prevComments,
      [selectedDiscussion.id]:
        prevComments[selectedDiscussion.id]?.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              likes: comment.likes + (comment.isLiked ? -1 : 1),
              isLiked: !comment.isLiked,
            }
          }
          return comment
        }) || [],
    }))
  }

  const handleCommentSubmit = () => {
    if (!replyText.trim() || !selectedDiscussion) {
      alert("Please enter a comment")
      return
    }

    const newComment = {
      id: Date.now(), // Simple ID generation
      user: { name: "You", avatar: "/placeholder.svg?height=32&width=32" },
      timestamp: "Just now",
      content: replyText,
      likes: 0,
      isLiked: false,
      reactions: [],
      replies: [],
    }

    // Add comment to the selected discussion
    setComments((prevComments) => ({
      ...prevComments,
      [selectedDiscussion.id]: [...(prevComments[selectedDiscussion.id] || []), newComment],
    }))

    // Update discussion comment count
    setDiscussions((prevDiscussions) =>
      prevDiscussions.map((discussion) =>
        discussion.id === selectedDiscussion.id
          ? { ...discussion, stats: { ...discussion.stats, comments: discussion.stats.comments + 1 } }
          : discussion,
      ),
    )

    setReplyText("")
    alert("Comment posted successfully!")
  }

  const openCommentsModal = (discussion) => {
    setSelectedDiscussion(discussion)
    setIsCommentsModalOpen(true)
  }

  const handleModalBackdropClick = (e, closeModal) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  // Close modals on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsCreatePostModalOpen(false)
        setIsCommentsModalOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <div className=" p-6 min-h-screen bg-gray-100 relative font-sans text-gray-800">
      {/* Header */}
      
      <header className=" rounded-2xl py-3 px-6 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] backdrop-blur-md shadow-lg">
        
        <div className="max-w-6xl mx-auto px-4 py-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Discussion</h1>
          <h5 className="text-xl text-indigo-100">discuss your idea with others</h5>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Search and Filter Section */}
          <section className="bg-white/95 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-xl border border-gray-100">
            <div className="relative mb-4">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search discussions, topics, or users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg bg-white text-sm cursor-pointer focus:outline-none focus:border-indigo-500"
              >
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="unanswered">Unanswered</option>
              </select>

              <div className="flex flex-wrap gap-2">
                {["all", "mathematics", "programming", "science", "literature"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeFilter === filter
                        ? "bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] hover:text-white"
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Create Post Section */}
          <section className="mb-8">
            <button
              onClick={() => setIsCreatePostModalOpen(true)}
              className="bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg flex items-center gap-2"
            >
              <PlusIcon />
              Start a Discussion
            </button>
          </section>

          {/* Discussion Feed */}
          <section className="space-y-6">
            {sortedDiscussions.map((discussion, index) => (
              <article
                key={discussion.id}
                className={`bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer border-2 border-transparent hover:border-indigo-200 ${
                  discussion.isPinned ? "border-purple-300 bg-gradient-to-r from-yellow-50 to-white" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openCommentsModal(discussion)}
              >
                {discussion.isPinned && (
                  <div className="inline-block bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                     Pinned
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={discussion.user.avatar || "/placeholder.svg"}
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-800">{discussion.user.name}</div>
                      <div className="text-sm text-gray-500">{discussion.timestamp}</div>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-300">
                    ⋯
                  </button>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">{discussion.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{discussion.description}</p>

                  {discussion.attachment && (
                    <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-2 mb-4 text-gray-600">
                      📎 <span>{discussion.attachment}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {discussion.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {discussion.reactions.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {discussion.reactions.map((reaction, reactionIndex) => (
                      <button
                        key={reactionIndex}
                        className="bg-gray-100 hover:bg-indigo-600 hover:text-white px-3 py-1 rounded-full text-sm transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {reaction.emoji} {reaction.count}
                      </button>
                    ))}
                 
                  </div>
                )}

                <div className="flex flex-wrap gap-6 items-center">
                  <button
                    className={`flex items-center gap-2 transition-all duration-300 ${
                      discussion.isLiked ? "text-red-500 hover:text-red-600" : "text-gray-500 hover:text-red-500"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleLike(discussion.id)
                    }}
                  >
                    <HeartIcon filled={discussion.isLiked} className={discussion.isLiked ? "text-red-500" : ""} />
                    <span>{discussion.stats.likes}</span>
                  </button>
                  <button
                    className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation()
                      openCommentsModal(discussion)
                    }}
                  >
                    <CommentIcon />
                    <span>{discussion.stats.comments}</span>
                  </button>
                  <div className="flex items-center gap-2 text-gray-500">
                    <EyeIcon />
                    <span>{discussion.stats.views}</span>
                  </div>
    
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>

      {/* Create Post Modal */}
      {isCreatePostModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={(e) => handleModalBackdropClick(e, () => setIsCreatePostModalOpen(false))}
        >
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800">Start a Discussion</h2>
              <button
                onClick={() => setIsCreatePostModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                <CloseIcon />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="p-6">
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Title / Topic</label>
                <input
                  type="text"
                  value={postForm.title}
                  onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
                  placeholder="What would you like to discuss?"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              
                <textarea
                  value={postForm.description}
                  onChange={(e) => setPostForm({ ...postForm, description: e.target.value })}
                  placeholder="Provide more details about your question or topic..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base min-h-[120px] resize-y transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tags</label>
                <input
                  type="text"
                  value={postForm.tags}
                  onChange={(e) => setPostForm({ ...postForm, tags: e.target.value })}
                  placeholder="Add tags separated by commas (e.g., Mathematics, Calculus)"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Attachments</label>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ${
                    dragActive
                      ? "border-indigo-400 bg-indigo-50"
                      : "border-gray-300 hover:border-indigo-400 hover:bg-indigo-50/50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("file-input").click()}
                >
                  <UploadIcon className="mx-auto text-indigo-600 mb-2" />
                  <p className="text-gray-600">
                    {selectedFiles.length > 0
                      ? `Selected: ${selectedFiles.map((f) => f.name).join(", ")}`
                      : "Drag and drop files here or click to browse"}
                  </p>
                  <input
                    id="file-input"
                    type="file"
                    multiple
                    accept="image/*,.pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
                {selectedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                        <span className="text-sm text-gray-600">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-4 justify-end">
                <button
                  type="button"
                  className="px-6 py-3 bg-gray-100 text-gray-600 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                  Post Discussion
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Comments Modal */}
      {isCommentsModalOpen && selectedDiscussion && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={(e) => handleModalBackdropClick(e, () => setIsCommentsModalOpen(false))}
        >
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Comments</h2>
                <p className="text-sm text-gray-600 mt-1">{selectedDiscussion.title}</p>
              </div>
              <button
                onClick={() => setIsCommentsModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="p-6">
              {/* Sample Comments */}
              <div className="space-y-6 mb-6">
                {comments[selectedDiscussion.id]?.length > 0 ? (
                  comments[selectedDiscussion.id].map((comment) => (
                    <div key={comment.id} className="border-l-4 border-gray-200 pl-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={comment.user.avatar || "/placeholder.svg"}
                          alt="User Avatar"
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="font-semibold">{comment.user.name}</span>
                        <span className="text-sm text-gray-500">{comment.timestamp}</span>
                        <div className="ml-auto flex gap-2">
                          <button className="p-1 text-gray-400 hover:text-indigo-600 transition-colors">↩️</button>
                          <button
                            className={`p-1 transition-colors flex items-center gap-1 ${
                              comment.isLiked ? "text-red-500 hover:text-red-600" : "text-gray-400 hover:text-red-500"
                            }`}
                            onClick={() => handleCommentLike(comment.id)}
                          >
                            <HeartIcon
                              filled={comment.isLiked}
                              className={`w-4 h-4 ${comment.isLiked ? "text-red-500" : ""}`}
                            />
                            {comment.likes}
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-3">{comment.content}</p>

                      {comment.reactions?.length > 0 && (
                        <div className="flex gap-2 mb-3">
                          {comment.reactions.map((reaction, reactionIndex) => (
                            <button
                              key={reactionIndex}
                              className="bg-gray-100 hover:bg-indigo-600 hover:text-white px-2 py-1 rounded-full text-sm transition-all duration-300"
                            >
                              {reaction.emoji} {reaction.count}
                            </button>
                          ))}
                        </div>
                      )}

                      {comment.isBestAnswer && (
                        <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2 mb-3">
                          ✓ <span>Marked as Best Answer</span>
                        </div>
                      )}

                      {/* Nested Replies */}
                      {comment.replies?.map((reply) => (
                        <div key={reply.id} className="ml-8 mt-4 border-l-4 border-gray-100 pl-4">
                          <div className="flex items-center gap-3 mb-3">
                            <img
                              src={reply.user.avatar || "/placeholder.svg"}
                              alt="User Avatar"
                              className="w-8 h-8 rounded-full"
                            />
                            <span className="font-semibold">{reply.user.name}</span>
                            <span className="text-sm text-gray-500">{reply.timestamp}</span>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{reply.content}</p>
                        </div>
                      ))}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <CommentIcon className="mx-auto mb-4 w-12 h-12" />
                    <p>No comments yet. Be the first to comment!</p>
                  </div>
                )}
              </div>

              {/* Reply Form */}
              <div className="border-t border-gray-200 pt-6">
                <div className="mb-4">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write your comment..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base min-h-[100px] resize-y transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>
                <div className="flex gap-4 justify-end">
                  <button
                    type="button"
                    className="px-6 py-3 bg-gray-100 text-gray-600 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                    onClick={() => setReplyText("")}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCommentSubmit}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EduConnectForum
