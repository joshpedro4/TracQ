import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, MessageSquare, Briefcase, FileText, Settings, MoreVertical, Search, Plus, Send } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white p-6 flex flex-col border-r">
        <div className="flex items-center mb-8">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Tracq</span>
        </div>
        <div className="mb-8 text-center">
          <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-purple-100">
            <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Sarah Connor" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold text-gray-800">Sarah Connor</h2>
          <p className="text-sm text-gray-500">Business Analyst</p>
          <div className="mt-2 text-orange-500 text-sm font-medium">28h</div>
        </div>
        <nav className="flex-1 space-y-1">
          <Link href="#" className="flex items-center py-2 px-4 bg-purple-50 text-purple-600 rounded-lg">
            <Home className="mr-3" size={20} />
            Dashboard
          </Link>
          <Link href="#" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-lg">
            <MessageSquare className="mr-3" size={20} />
            Inbox
          </Link>
          <Link href="#" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Briefcase className="mr-3" size={20} />
            Opportunities
          </Link>
          <Link href="#" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-lg">
            <FileText className="mr-3" size={20} />
            Performance Review
          </Link>
          <Link href="#" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Settings className="mr-3" size={20} />
            Setting
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Hello, Sara</h1>
            <p className="text-gray-500">Today is Monday, 20 October 2021</p>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input className="pl-10 pr-4 py-2 rounded-full bg-white" placeholder="Search..." />
            </div>
            <Button className="bg-green-500 text-white hover:bg-green-600">Send Reminders</Button>
          </div>
        </header>

        {/* Project Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <Card className="bg-purple-600 text-white overflow-hidden">
            <CardHeader className="flex justify-between items-start pb-2">
              <CardTitle className="text-lg font-medium">Short Term Goal</CardTitle>
              <div className="flex -space-x-2">
                <Avatar className="w-8 h-8 border-2 border-purple-600">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 border-2 border-purple-600">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">10 tasks | 96%</p>
              <Progress value={96} className="h-1 bg-white/20" indicatorClassName="bg-white" />
            </CardContent>
          </Card>
          <Card className="bg-cyan-400 text-white overflow-hidden">
            <CardHeader className="flex justify-between items-start pb-2">
              <CardTitle className="text-lg font-medium">Understanding My Disability better - Training</CardTitle>
              <div className="flex -space-x-2">
                <Avatar className="w-8 h-8 border-2 border-cyan-400">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 border-2 border-cyan-400">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">12 tasks | 46%</p>
              <Progress value={46} className="h-1 bg-white/20" indicatorClassName="bg-white" />
            </CardContent>
          </Card>
          <Card className="bg-orange-400 text-white overflow-hidden">
            <CardHeader className="flex justify-between items-start pb-2">
              <CardTitle className="text-lg font-medium">I need help with...</CardTitle>
              <div className="flex -space-x-2">
                <Avatar className="w-8 h-8 border-2 border-orange-400">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 border-2 border-orange-400">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">22 tasks | 73%</p>
              <Progress value={73} className="h-1 bg-white/20" indicatorClassName="bg-white" />
            </CardContent>
          </Card>
        </div>

        {/* Tasks and Career Aspiration */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-xl font-semibold">My Current assignment</CardTitle>
              <Button variant="ghost" size="sm">View all</Button>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-1 h-10 bg-orange-400 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">Mobile App</h4>
                    <p className="text-sm text-gray-500">Prepare Figma file</p>
                  </div>
                  <input type="checkbox" className="rounded-full w-5 h-5 border-2 border-gray-300 checked:bg-purple-600 checked:border-transparent focus:ring-purple-500" />
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-10 bg-purple-600 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">UX wireframes</h4>
                    <p className="text-sm text-gray-500">Design UX wireframes</p>
                  </div>
                  <input type="checkbox" className="rounded-full w-5 h-5 border-2 border-gray-300 checked:bg-purple-600 checked:border-transparent focus:ring-purple-500" />
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-10 bg-cyan-400 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">Mobile App</h4>
                    <p className="text-sm text-gray-500">Research</p>
                  </div>
                  <input type="checkbox" className="rounded-full w-5 h-5 border-2 border-gray-300 checked:bg-purple-600 checked:border-transparent focus:ring-purple-500" checked />
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Career Aspiration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-orange-400 text-white p-4 rounded-lg mb-4">
                <h3 className="text-lg font-semibold">High level goal aka my next level 😎</h3>
              </div>
              <div className="flex justify-between items-center bg-purple-100 p-4 rounded-lg">
                <span className="text-purple-600 font-medium">New widget</span>
                <Button variant="outline" size="sm" className="bg-white">
                  <Plus className="mr-2 h-4 w-4" /> Add
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mood Tracker */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">How is your mood today?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around bg-gray-50 p-4 rounded-lg">
              {['😃', '😊', '😐', '😕', '😢'].map((emoji, index) => (
                <button key={index} className="text-3xl hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full p-2">
                  {emoji}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Assistant */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">What's on your mind today?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Drag and Drop a piece of work you're currently working on</p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-start mb-4">
                <Avatar className="w-8 h-8 mr-3">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="bg-white p-3 rounded-lg shadow-sm flex-1">
                  <p className="text-sm text-gray-800">Write a post that explores the history of AI and its evolution over time</p>
                </div>
              </div>
              <div className="flex items-center">
                <Input className="flex-1 mr-2" placeholder="Type your response..." />
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 bg-white p-6 border-l">
        <Tabs defaultValue="opportunities" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>
          <TabsContent value="opportunities">
            <ul className="space-y-4">
              <li className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3 bg-purple-100 p-2 rounded-full">🎨</span>
                  <div>
                    <h4 className="font-medium text-gray-800">Presentation (Soft Skill)</h4>
                    <p className="text-sm text-gray-500">Suggested to add to your...</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Add</Button>
              </li>
              <li className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3 bg-blue-100 p-2 rounded-full">🎮</span>
                  <div>
                    <h4 className="font-medium text-gray-800">Games (Unity / Env.)</h4>
                    <p className="text-sm text-gray-500">Suggested to add to  your...</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Add</Button>
              </li>
              <li className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3 bg-green-100 p-2 rounded-full">📊</span>
                  <div>
                    <h4 className="font-medium text-gray-800">Excel (Working / Hard Skill)</h4>
                    <p className="text-sm text-gray-500">Suggested to add to your...</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Add</Button>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="messages">
            <ul className="space-y-4">
              <li className="flex items-start bg-gray-50 p-3 rounded-lg">
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>DB</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-gray-800">Dorothy Bricks</h4>
                  <p className="text-sm text-gray-500 mb-2">Just finished the project page for t...</p>
                  <div className="flex">
                    <Button variant="outline" size="sm" className="mr-2">View</Button>
                    <Button variant="outline" size="sm">Reply</Button>
                  </div>
                </div>
              </li>
              <li className="flex items-start bg-gray-50 p-3 rounded-lg">
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>EW</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-gray-800">Emery Whitmore</h4>
                  <p className="text-sm text-gray-500 mb-2">Have you made progress?</p>
                  <div className="flex">
                    <Button variant="outline" size="sm" className="mr-2">View</Button>
                    <Button variant="outline" size="sm">Reply</Button>
                  </div>
                </div>
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </aside>
    </div>
  )
}