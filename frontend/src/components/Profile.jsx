import { useState, useEffect } from "react"

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "John Michael",
    email: "john.michael@gmail.com",
    phone: "0928475",
    about: "Computer Science Student\nFull-stack Developer/UI/UX Designer",
  })
  const [formData, setFormData] = useState(profileData)
  const [profileImage, setProfileImage] = useState(null)
  const [profileBackground, setProfileBackground] = useState(null)
  const [tempProfileImage, setTempProfileImage] = useState(null)
  const [tempProfileBackground, setTempProfileBackground] = useState(null)
  const [errors, setErrors] = useState({})

  const originalData = {
    name: "John Michael",
    email: "john.michael@gmail.com",
    phone: "0928475",
    about: "Computer Science Student\nFull-stack Developer/UI/UX Designer",
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("profileData")
      const savedImage = localStorage.getItem("profileImage")
      const savedBackground = localStorage.getItem("profileBackground")

      if (savedData) {
        try {
          const parsed = JSON.parse(savedData)
          setProfileData(parsed)
          setFormData(parsed)
        } catch (e) {
          console.error("Error parsing saved profile data:", e)
        }
      }

      if (savedImage) {
        setProfileImage(savedImage)
      }

      if (savedBackground) {
        setProfileBackground(savedBackground)
      }
    }
  }, [])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    if (!formData.about.trim()) {
      newErrors.about = "About section is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result
        if (typeof result === "string") {
          setTempProfileImage(result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleBackgroundUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result
        if (typeof result === "string") {
          setTempProfileBackground(result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setProfileData(formData)

      if (tempProfileImage) {
        setProfileImage(tempProfileImage)
        if (typeof window !== "undefined") {
          localStorage.setItem("profileImage", tempProfileImage)
        }
      }

      if (tempProfileBackground) {
        setProfileBackground(tempProfileBackground)
        if (typeof window !== "undefined") {
          localStorage.setItem("profileBackground", tempProfileBackground)
        }
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("profileData", JSON.stringify(formData))
      }

      setTempProfileImage(null)
      setTempProfileBackground(null)
      setIsEditing(false)
    }
  }

  const handleBackToProfile = () => {
    setTempProfileImage(null)
    setTempProfileBackground(null)
    setFormData(profileData)
    setErrors({})
    setIsEditing(false)
  }

  const handleReset = () => {
    setFormData(originalData)
    setProfileData(originalData)
    setProfileImage(null)
    setProfileBackground(null)
    setTempProfileImage(null)
    setTempProfileBackground(null)
    setErrors({})

    if (typeof window !== "undefined") {
      localStorage.removeItem("profileData")
      localStorage.removeItem("profileImage")
      localStorage.removeItem("profileBackground")
    }

    const fileInputs = document.querySelectorAll('input[type="file"]')
    fileInputs.forEach((input) => {
      input.value = ""
    })
  }

  return (
    <div className=" p-6 min-h-screen bg-gray-100 relative">
      <div
        className="fixed inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('eduimage.png')",
          zIndex: -2,
        }}
      ></div>
      <div className="fixed inset-0 bg-black bg-opacity-40" style={{ zIndex: -1 }}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {isEditing ? (
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
            <div
              className="relative h-64 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
              style={{
                backgroundImage:
                  tempProfileBackground || profileBackground
                    ? `url(${tempProfileBackground || profileBackground})`
                    : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              <div className="absolute top-4 right-4 z-20">
                <label className="bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors duration-200 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                  </svg>
                  <span>Change Background</span>
                  <input type="file" accept="image/*" onChange={handleBackgroundUpload} className="hidden" />
                </label>
              </div>

              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-200 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
              </div>

              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="relative w-40 h-40">
                  <div className="absolute top-28 w-48 h-48 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] rounded-full flex items-center justify-center shadow-2xl border-4 border-purple-300 cursor-pointer hover:scale-105 transition-transform duration-200 overflow-hidden">
                    {tempProfileImage || profileImage ? (
                      <img
                        src={tempProfileImage || profileImage || "/placeholder.svg"}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <button
                onClick={handleBackToProfile}
                className="mb-6 text-purple-600 hover:text-purple-800 transition-colors duration-200 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                </svg>
                <span>Back to Profile</span>
              </button>

              <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">About</label>
                  <textarea
                    name="about"
                    value={formData.about}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 resize-none ${
                      errors.about ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Write something about yourself"
                  />
                  {errors.about && <p className="text-red-500 text-sm mt-1">{errors.about}</p>}
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                  >
                    Submit Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
            <div
              className="relative h-64 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center"
              style={{
                backgroundImage: profileBackground ? `url(${profileBackground})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-200 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
              </div>

              <div className="relative z-10">
                <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-48 h-48 mx-auto bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] rounded-full flex items-center justify-center shadow-2xl border-4 border-purple-300 overflow-hidden">
                  {profileImage ? (
                    <img
                      src={profileImage || "/placeholder.svg"}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="text-center mb-8 relative">
                <button
                  onClick={() => setIsEditing(true)}
                  className="absolute top-3 right-4 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Edit Profile
                </button>
              </div>

              <div className="space-y-6 max-w-md mx-auto">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Name</p>
                    <p className="text-gray-900 font-semibold">{profileData.name}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-gray-900 font-semibold">{profileData.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phone number</p>
                    <p className="text-gray-900 font-semibold">{profileData.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">About</p>
                    <p className="text-gray-900 font-semibold whitespace-pre-line">{profileData.about}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfilePage
