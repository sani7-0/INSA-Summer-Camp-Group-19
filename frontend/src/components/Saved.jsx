import { createContext, useContext, useState } from "react"
import {
  Bookmark,
  BookmarkCheck,
  MessageSquare,
  FileText,
  Users,
  Eye,
  EyeOff,
  Trash2,
  Calendar,
  Tag,
  Search,
  Filter,
} from "lucide-react" // ✅ FIXED: Added missing imports

// Context for managing saved messages
const SavedMessagesContext = createContext()

export const SavedMessagesProvider = ({ children }) => {
  const [savedMessages, setSavedMessages] = useState([
    {
      id: 1,
      title: "How to implement React hooks effectively",
      description: "A comprehensive guide on using React hooks in modern applications...",
      user: { name: "Sarah Johnson", avatar: "/placeholder.svg?height=32&width=32" },
      timestamp: "2024-01-15T10:30:00Z",
      tags: ["React", "Hooks", "JavaScript"],
      type: "discussion",
      category: "Forum Discussion",
      isReviewed: false,
      originalUrl: "/forum/discussion/1",
    },
    {
      id: 2,
      title: "Database optimization techniques",
      description: "Learn advanced techniques for optimizing database performance...",
      user: { name: "Mike Chen", avatar: "/placeholder.svg?height=32&width=32" },
      timestamp: "2024-01-14T15:45:00Z",
      tags: ["Database", "Performance", "SQL"],
      type: "article",
      category: "Article",
      isReviewed: true,
      originalUrl: "/articles/database-optimization",
    },
    {
      id: 3,
      title: "Weekly team standup notes",
      description: "Important updates from this week's team meeting...",
      user: { name: "Alex Rivera", avatar: "/placeholder.svg?height=32&width=32" },
      timestamp: "2024-01-13T09:00:00Z",
      tags: ["Meeting", "Team", "Updates"],
      type: "message",
      category: "Team Message",
      isReviewed: false,
      originalUrl: "/messages/team-standup",
    },
  ])

  const saveMessage = (message) => {
    const newMessage = {
      ...message,
      id: Date.now(),
      timestamp: new Date().toISOString(),
      isReviewed: false,
    }
    setSavedMessages((prev) => [newMessage, ...prev])
  }

  const unsaveMessage = (messageId) => {
    setSavedMessages((prev) => prev.filter((msg) => msg.id !== messageId))
  }

  const toggleReviewed = (messageId) => {
    setSavedMessages((prev) =>
      prev.map((msg) => (msg.id === messageId ? { ...msg, isReviewed: !msg.isReviewed } : msg)),
    )
  }

  const isMessageSaved = (messageId) => {
    return savedMessages.some((msg) => msg.id === messageId)
  }

  return (
    <SavedMessagesContext.Provider
      value={{
        savedMessages,
        saveMessage,
        unsaveMessage,
        toggleReviewed,
        isMessageSaved,
      }}
    >
      {children}
    </SavedMessagesContext.Provider>
  )
}

export const useSavedMessages = () => {
  const context = useContext(SavedMessagesContext)
  if (!context) {
    throw new Error("useSavedMessages must be used within SavedMessagesProvider")
  }
  return context
}

// Save Button Component
export const SaveButton = ({ message, className = "" }) => {
  const { saveMessage, unsaveMessage, isMessageSaved } = useSavedMessages()
  const isSaved = isMessageSaved(message.id)

  const handleSave = (e) => {
    e.stopPropagation()
    if (isSaved) {
      unsaveMessage(message.id)
    } else {
      saveMessage(message)
    }
  }

  return (
    <button
      onClick={handleSave}
      className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-200 ${
        isSaved ? "text-blue-600 bg-blue-50 hover:bg-blue-100" : "text-gray-500 hover:text-blue-600 hover:bg-gray-50"
      } ${className}`}
      title={isSaved ? "Remove from saved" : "Save message"}
    >
      {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
      <span className="text-sm">{isSaved ? "Saved" : "Save"}</span>
    </button>
  )
}

// Message Card Component
const MessageCard = ({ message, onToggleReviewed, onDelete, onViewOriginal }) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case "discussion":
        return <MessageSquare size={16} className="text-blue-500" />
      case "article":
        return <FileText size={16} className="text-green-500" />
      case "message":
        return <Users size={16} className="text-purple-500" />
      default:
        return <FileText size={16} className="text-gray-500" />
    }
  }

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div
      className={`bg-white rounded-lg border p-4 hover:shadow-md transition-shadow ${
        message.isReviewed ? "border-green-200 bg-green-50" : "border-gray-200"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {getTypeIcon(message.type)}
          <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
            {message.category}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onToggleReviewed(message.id)}
            className={`p-1 rounded transition-colors ${
              message.isReviewed ? "text-green-600 hover:text-green-700" : "text-gray-400 hover:text-green-600"
            }`}
            title={message.isReviewed ? "Mark as unreviewed" : "Mark as reviewed"}
          >
            {message.isReviewed ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
          <button
            onClick={() => onDelete(message.id)}
            className="p-1 text-gray-400 hover:text-red-600 transition-colors"
            title="Delete saved message"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{message.title}</h3>

      <p className="text-gray-600 text-sm mb-3 line-clamp-3">{message.description}</p>

      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center gap-2">
          <img
            src={message.user.avatar || "/placeholder.svg"}
            alt={message.user.name}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm text-gray-700">{message.user.name}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <Calendar size={14} />
          <span className="text-xs">{formatDate(message.timestamp)}</span>
        </div>
      </div>

      {message.tags && message.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {message.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>
      )}

      <button
        onClick={() => onViewOriginal(message.originalUrl)}
        className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
      >
        View Original →
      </button>
    </div>
  )
}

// Main Saved Messages Component
const SavedMessages = () => {
  const { savedMessages, unsaveMessage, toggleReviewed } = useSavedMessages()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showReviewedOnly, setShowReviewedOnly] = useState(false)
  const [selectedMessages, setSelectedMessages] = useState([])

  const categories = ["all", ...new Set(savedMessages.map((msg) => msg.category))]

  const filteredMessages = savedMessages.filter((message) => {
    const matchesSearch =
      message.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.user.name.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "all" || message.category === selectedCategory
    const matchesReviewed = !showReviewedOnly || message.isReviewed

    return matchesSearch && matchesCategory && matchesReviewed
  })

  const handleBulkDelete = () => {
    selectedMessages.forEach((messageId) => {
      unsaveMessage(messageId)
    })
    setSelectedMessages([])
  }

  const handleSelectMessage = (messageId) => {
    setSelectedMessages((prev) =>
      prev.includes(messageId) ? prev.filter((id) => id !== messageId) : [...prev, messageId],
    )
  }

  const handleViewOriginal = (url) => {
    console.log("Navigate to:", url)
  }

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <header className=" rounded-2xl py-3 px-6 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] backdrop-blur-md shadow-lg">
        
         <div className="max-w-6xl mx-auto px-4 py-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Saved Messages</h1>
          <p className="text-xl text-indigo-100">Manage and organize your saved content in one place</p>
        </div>
        </header>
    <div>    
        {/* Search and Filters */}
        <div className="bg-white rounded-lg border p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search saved messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>

              <button
                onClick={() => setShowReviewedOnly(!showReviewedOnly)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  showReviewedOnly
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-gray-100 text-gray-700 border border-gray-300"
                }`}
              >
                <Filter size={16} className="inline mr-1" />
                Reviewed Only
              </button>
            </div>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedMessages.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-blue-700 font-medium">
                {selectedMessages.length} message{selectedMessages.length !== 1 ? "s" : ""} selected
              </span>
              <button
                onClick={handleBulkDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Delete Selected
              </button>
            </div>
          </div>
        )}

        {/* Messages Grid */}
        {filteredMessages.length === 0 ? (
          <div className="text-center py-12">
            <Bookmark size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No saved messages found</h3>
            <p className="text-gray-600">
              {searchTerm || selectedCategory !== "all" || showReviewedOnly
                ? "Try adjusting your search or filters"
                : "Start saving messages to see them here"}
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredMessages.map((message) => (
              <div key={message.id} className="relative">
                <input
                  type="checkbox"
                  checked={selectedMessages.includes(message.id)}
                  onChange={() => handleSelectMessage(message.id)}
                  className="absolute top-4 left-4 z-10"
                />
                <div className="pl-8">
                  <MessageCard
                    message={message}
                    onToggleReviewed={toggleReviewed}
                    onDelete={unsaveMessage}
                    onViewOriginal={handleViewOriginal}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="mt-8 bg-white rounded-lg border p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-indigo-600">{savedMessages.length}</div>
              <div className="text-sm text-gray-600">Total Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600">
                {savedMessages.filter((msg) => msg.isReviewed).length}
              </div>
              <div className="text-sm text-gray-600">Reviewed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600">{categories.length - 1}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SavedMessages
