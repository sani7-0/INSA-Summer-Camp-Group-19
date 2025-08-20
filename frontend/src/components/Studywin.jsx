import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import {
  Trophy,
  Target,
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Star,
  Clock,
  CheckCircle,
  Play,
  Calendar,
  Zap,
  Medal,
  Crown,
  Gift,
} from "lucide-react"

// Mock data - in real app this would come from API
const mockUserData = {
  name: "John Michael",
  avatar: "/placeholder.svg?height=40&width=40",
  currentStreak: 12,
  totalPoints: 2450,
  level: 8,
  weeklyGoal: 25,
  weeklyProgress: 18,
  badges: [
    { id: 1, name: "Study Streak", icon: "🔥", earned: true },
    { id: 2, name: "Quiz Master", icon: "🧠", earned: true },
    { id: 3, name: "Early Bird", icon: "🌅", earned: false },
    { id: 4, name: "Night Owl", icon: "🦉", earned: true },
  ],
}

const mockChallenges = [
  {
    id: 1,
    title: "7-Day Math Marathon",
    description: "Complete 5 math exercises daily for a week",
    progress: 65,
    reward: 200,
    timeLeft: "3 days",
    participants: 1247,
    joined: true,
  },
  {
    id: 2,
    title: "Science Explorer",
    description: "Watch 10 science videos and take quizzes",
    progress: 30,
    reward: 150,
    timeLeft: "5 days",
    participants: 892,
    joined: false,
  },
  {
    id: 3,
    title: "Reading Champion",
    description: "Read 3 articles and summarize key points",
    progress: 100,
    reward: 100,
    timeLeft: "Completed",
    participants: 654,
    joined: true,
  },
]

const mockLeaderboard = [
  { rank: 1, name: "Emma Wilson", points: 3200, avatar: "/placeholder.svg?height=32&width=32" },
  { rank: 2, name: "Michael Chen", points: 2890, avatar: "/placeholder.svg?height=32&width=32" },
  { rank: 3, name: "Sarah Davis", points: 2650, avatar: "/placeholder.svg?height=32&width=32" },
  { rank: 4, name: "John Michael", points: 2450, avatar: "/placeholder.svg?height=32&width=32", isCurrentUser: true },
  { rank: 5, name: "David Kim", points: 2380, avatar: "/placeholder.svg?height=32&width=32" },
]

const mockStudyMaterials = [
  {
    id: 1,
    title: "Algebra Fundamentals",
    type: "video",
    duration: "15 min",
    completed: true,
    category: "Mathematics",
  },
  {
    id: 2,
    title: "Chemical Reactions Quiz",
    type: "quiz",
    duration: "10 min",
    completed: false,
    category: "Science",
  },
  {
    id: 3,
    title: "World War II Timeline",
    type: "article",
    duration: "8 min",
    completed: false,
    category: "History",
  },
]

export default function StudyWinPage() {
  const [joinedChallenges, setJoinedChallenges] = useState(new Set([1, 3]))

  const handleJoinChallenge = (challengeId) => {
    setJoinedChallenges((prev) => new Set([...prev, challengeId]))
  }

  const handleCompleteResource = (resourceId) => {
    // In real app, this would update the backend
    console.log(`Completed resource ${resourceId}`)
  }

  return (
    <div className=" p-6 min-h-screen bg-gray-100 relative font-sans text-gray-800">
      {/* Header */}
      <header className="rounded-2xl py-3 px-6 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] backdrop-blur-md shadow-lg mb-8">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Study Wins</h1>
          <h5 className="text-xl text-indigo-100">Track your progress, earn rewards, and achieve your learning goals!</h5>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 space-y-8">

        {/* User Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Current Streak</p>
                  <p className="text-3xl font-bold">{mockUserData.currentStreak}</p>
                  <p className="text-blue-100 text-sm">days</p>
                </div>
                <Zap className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Total Points</p>
                  <p className="text-3xl font-bold">{mockUserData.totalPoints.toLocaleString()}</p>
                  <p className="text-green-100 text-sm">earned</p>
                </div>
                <Star className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Level</p>
                  <p className="text-3xl font-bold">{mockUserData.level}</p>
                  <p className="text-purple-100 text-sm">advanced</p>
                </div>
                <Medal className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Weekly Goal</p>
                  <p className="text-3xl font-bold">
                    {mockUserData.weeklyProgress}/{mockUserData.weeklyGoal}
                  </p>
                  <p className="text-orange-100 text-sm">hours</p>
                </div>
                <Target className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100">
          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 bg-gray-100 rounded-t-2xl">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Weekly Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Weekly Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Study Hours</span>
                      <span>
                        {mockUserData.weeklyProgress}/{mockUserData.weeklyGoal} hours
                      </span>
                    </div>
                    <Progress value={(mockUserData.weeklyProgress / mockUserData.weeklyGoal) * 100} className="h-3 bg-gray-200 [&>div]:bg-indigo-500" />
                    <p className="text-sm text-muted-foreground ">
                      Great progress! You're {mockUserData.weeklyGoal - mockUserData.weeklyProgress} hours away from
                      your weekly goal.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm">Completed Algebra Quiz</span>
                      <span className="text-xs text-muted-foreground ml-auto">2h ago</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Play className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm">Watched Physics Video</span>
                      <span className="text-xs text-muted-foreground ml-auto">4h ago</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Trophy className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm">Earned Study Streak Badge</span>
                      <span className="text-xs text-muted-foreground ml-auto">1d ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Challenges Tab */}
          <TabsContent value="challenges" className="space-y-6 p-6">
            <div className="grid gap-6">
              {mockChallenges.map((challenge) => (
                <Card key={challenge.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{challenge.title}</CardTitle>
                        <CardDescription>{challenge.description}</CardDescription>
                      </div>
                      <Badge variant={challenge.progress === 100 ? "default" : "secondary"}>
                        {challenge.progress === 100 ? "Completed" : "Active"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{challenge.progress}%</span>
                      </div>
                      <Progress value={challenge.progress} className="h-2 bg-gray-200 [&>div]:bg-indigo-500" />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Gift className="h-4 w-4" />
                            {challenge.reward} points
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {challenge.participants.toLocaleString()} participants
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {challenge.timeLeft}
                          </span>
                        </div>

                        {!joinedChallenges.has(challenge.id) && challenge.progress !== 100 && (
                          <Button size="sm" onClick={() => handleJoinChallenge(challenge.id)} className="gap-2 bg-indigo-500">
                            <Target className="h-4 w-4 bg-indigo-500" />
                            Join Challenge
                          </Button>
                        )}

                        {joinedChallenges.has(challenge.id) && challenge.progress !== 100 && (
                          <Badge variant="outline">Joined</Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Study Materials Tab */}
          <TabsContent value="materials" className="space-y-6 p-6">
            <div className="grid gap-4">
              {mockStudyMaterials.map((material) => (
                <Card key={material.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)]">
                          {material.type === "video" && <Play className="h-5 w-5 text-indigo-600" />}
                          {material.type === "quiz" && <BookOpen className="h-5 w-5 text-indigo-600" />}
                          {material.type === "article" && <BookOpen className="h-5 w-5 text-indigo-600" />}
                        </div>
                        <div>
                          <h3 className="font-semibold">{material.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Badge variant="outline" className="text-xs">
                              {material.category}
                            </Badge>
                            <span>•</span>
                            <span>{material.duration}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 bg-indigo-500">
                        {material.completed ? (
                          <Badge className="gap-1 bg-indigo-500">
                            <CheckCircle className="h-3 w-3  bg-indigo-500" />
                            Completed
                          </Badge>
                        ) : (
                          <Button size="sm" onClick={() => handleCompleteResource(material.id)} className="gap-2 bg-indigo-500">
                            Start
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-6 p-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-indigo-500" />
                  Top Learners This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockLeaderboard.map((user) => (
                    <div
                      key={user.rank}
                      className={`flex items-center gap-4 p-3 rounded-lg ${
                        user.isCurrentUser
                          ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-indigo-800"
                          : "hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 font-bold text-sm">
                        {user.rank <= 3 ? (user.rank === 1 ? "🥇" : user.rank === 2 ? "🥈" : "🥉") : user.rank}
                      </div>

                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.points.toLocaleString()} points</p>
                      </div>

                      {user.isCurrentUser && <Badge variant="secondary">You</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockUserData.badges.map((badge) => (
                <Card
                  key={badge.id}
                  className={`text-center ${badge.earned ? "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20" : "opacity-60"}`}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{badge.icon}</div>
                    <h3 className="font-semibold mb-2">{badge.name}</h3>
                    {badge.earned ? (
                      <Badge className="gap-1 bg-indigo-500">
                        <Award className="h-3 w-3 bg-indigo-500" />
                        Earned
                      </Badge>
                    ) : (
                      <Badge variant="outline">Locked</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
