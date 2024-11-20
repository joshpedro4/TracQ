import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Battery, SmilePlus, Clock, PlayCircle, CheckCircle, Circle, Lightbulb, PlusCircle, Award, MessageSquare, Calendar, FileText, Book, MessageCircle, Star, HelpCircle, BarChart2 } from "lucide-react"
import CurrentAssignment from '@/components/dashboard/disabled-user/CurrentAssignment'
import CareerAspiration from '@/components/dashboard/disabled-user/CareerAspiration'
import MoodTracker from '@/components/dashboard/disabled-user/MoodTracker'
import AIAssistant from '@/components/dashboard/disabled-user/AIAssistant'
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"; // Assuming you have a utility function for class merging

export default function DisabledUserDashboard() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <div className="h-full flex flex-col p-4 space-y-4">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-purple-600">Hello, Sara</h1>
          <p className="text-sm text-gray-600">Today is {formattedDate}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-red-100 border border-red-200 rounded-lg py-2 px-4">
            <span className="text-red-700">💡</span>
            <span className="text-red-700 font-medium">Take Action : The appraisal cycle is around the corner. Let's get started.</span>
          </div>
          <Button className="bg-green-400 text-white hover:bg-green-500 whitespace-nowrap"> Notify Me</Button>
        </div>
      </header>
      
      <div className="flex-1 grid grid-rows-[1fr,1fr] gap-4">
        <div className="grid grid-cols-3 gap-4">
          {/* Current Goal Card */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-lg shadow-lg flex flex-col">
            <div className="flex-grow">
              <div className="mb-4">
                <h2 className="font-bold text-xl text-white">Current Goal</h2>
                <p className="text-purple-100">Active Meeting Contributor</p>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2 text-white">
                    <span>2/4 tasks completed</span>
                    <span className="font-medium">50%</span>
                  </div>
                  <div className="bg-purple-400/50 h-2 rounded-full">
                    <div 
                      className="bg-white h-2 rounded-full transition-all duration-300" 
                      style={{ width: '50%' }} 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-white">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Request meeting materials in advance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Prepare talking points beforehand</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white">
                    <Circle className="h-4 w-4" />
                    <span>Practice summarizing key points</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white">
                    <Circle className="h-4 w-4" />
                    <span>Share insights in team chat</span>
                  </div>
                </div>
              </div>
            </div>
            <Button 
              variant="secondary" 
              className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium border-2 border-transparent hover:border-white transition-colors mt-6"
            >
              <PlayCircle className="h-4 w-4 mr-2" />
              In Progress
            </Button>
          </div>

          {/* Career Goal Card */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg shadow-lg flex flex-col">
            <div className="flex-grow">
              <div className="mb-4">
                <h2 className="font-bold text-xl text-white">Career Goal</h2>
                <p className="text-blue-100">Senior Business Analyst</p>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2 text-white">
                    <span>2/4 milestones reached</span>
                    <span className="font-medium">50%</span>
                  </div>
                  <div className="bg-blue-400/50 h-2 rounded-full">
                    <div 
                      className="bg-white h-2 rounded-full transition-all duration-300" 
                      style={{ width: '50%' }} 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-blue-100">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Accessibility tools certification</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-100">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Team communication workshop</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-100">
                    <Circle className="h-4 w-4" />
                    <span>Project leadership shadowing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-100">
                    <Circle className="h-4 w-4" />
                    <span>BA certification (with accommodations)</span>
                  </div>
                </div>
              </div>
            </div>
            <Button 
              variant="secondary" 
              className="w-full bg-blue-100 hover:bg-white-200 text-white-800 font-medium border-2 border-transparent hover:border-white transition-colors mt-6"
            >
              <Clock className="h-4 w-4 mr-2" />
              12-month plan
            </Button>
          </div>

          {/* Wellness Check-in Card */}
          <div className="bg-gradient-to-br from-slate-600 to-slate-700 p-4 rounded-lg shadow-lg flex flex-col">
            <div className="flex-grow">
              <div className="mb-6">
                <h2 className="font-bold text-xl text-white">Wellness Check-in</h2>
              </div>

              <div className="space-y-3 mb-6">
                <label className="flex items-center gap-2 text-white font-medium">
                  <Battery className="h-5 w-5" /> 
                  Energy Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { 
                      level: "Low", 
                      gradient: "from-red-400 to-red-500", 
                      icon: "⚡",
                      hoverGradient: "hover:from-red-500 hover:to-red-600"
                    },
                    { 
                      level: "Medium", 
                      gradient: "from-yellow-400 to-yellow-500", 
                      icon: "⚡⚡",
                      hoverGradient: "hover:from-yellow-500 hover:to-yellow-600"
                    },
                    { 
                      level: "High", 
                      gradient: "from-green-400 to-green-500", 
                      icon: "⚡⚡⚡",
                      hoverGradient: "hover:from-green-500 hover:to-green-600"
                    }
                  ].map((option) => (
                    <Button
                      key={option.level}
                      variant="secondary"
                      className={`
                        bg-gradient-to-r ${option.gradient} 
                        ${option.hoverGradient}
                        border-2 border-transparent 
                        hover:border-white/30 
                        text-white 
                        relative overflow-hidden 
                        group transition-all 
                        duration-300
                        shadow-sm
                      `}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        {option.icon}
                      </div>
                      <span className="group-hover:opacity-0 transition-opacity">
                        {option.level}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 text-white font-medium">
                  <SmilePlus className="h-5 w-5" /> 
                  Workspace Comfort
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { emoji: "😊", bg: "bg-white" },
                    { emoji: "😐", bg: "bg-white" },
                    { emoji: "😟", bg: "bg-white" }
                  ].map((option) => (
                    <Button
                      key={option.emoji}
                      variant="secondary"
                      className={`
                        ${option.bg} 
                        hover:bg-slate-50 
                        text-xl 
                        border-2 
                        border-transparent 
                        hover:border-white 
                        transition-colors 
                        h-12
                        flex 
                        items-center 
                        justify-center
                      `}
                    >
                      {option.emoji}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <Button 
              variant="secondary" 
              className="w-full bg-orange-100 hover:bg-orange-200 text-orange-600 font-medium border-2 border-transparent hover:border-white transition-colors mt-6"          >
              <Lightbulb className="h-4 w-4 mr-2" />
              I Need Support
            </Button>
          </div>
        </div>

        {/* Second row of cards */}
        <div className="grid grid-cols-3 gap-4">
          {/* Task Assigned */}
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex flex-col">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4"> {/* Changed from mb-2 to mb-4 */}
                <h2 className="font-bold text-xl text-gray-800">Tasks Assigned</h2>
                <Button variant="outline" size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white border-none text-sm py-1 px-3">
                  View All
                </Button>
              </div>
              <hr className="border-gray-200" />
            </div>
            <div className="space-y-6">
              {[
                { title: "Self-identification Form", description: "Let your employer know about your disability", color: "bg-orange-400" },
                { title: "Learning Resources", description: "Personalized recommendations", color: "bg-purple-400" },
              ].map((task) => (
                <div key={task.title} className="flex items-start space-x-4">
                  <div className={`w-1 h-14 ${task.color} rounded-full flex-shrink-0`}></div>
                  <div className="flex-grow">
                    <p className="text-sm font-medium text-gray-800 mb-1">{task.title}</p>
                    <p className="text-xs text-gray-500">{task.description}</p>
                  </div>
                  <Button 
                    size="sm" 
                    className={`${task.color.replace('bg-', 'bg-')} hover:opacity-90 text-white text-xs py-1 px-3 flex-shrink-0`}
                  >
                    Open
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Career Growth Assistant */}
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex flex-col">
            <div className="mb-6">
              <h2 className="font-bold text-xl text-gray-800 mb-4">Career Growth Assistant</h2>
              <hr className="border-gray-200" />
            </div>
            <div className="space-y-4 flex-grow"> {/* Added flex-grow */}
              {[
                { title: "Share a Win", icon: Award },
                { title: "Request Feedback", icon: MessageSquare },
                { title: "Schedule Check-in", icon: Calendar },
                { title: "Update Career Plan", icon: FileText },
              ].map((item) => (
                <Button 
                  key={item.title}
                  size="sm" 
                  className="w-full justify-start bg-green-100 text-green-600 hover:bg-green-200 text-sm py-2 px-3 flex items-center space-x-2"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Button>
              ))}
            </div>
            <Button 
              className="mt-4 bg-green-600 hover:bg-green-700 text-white text-sm py-2 flex items-center justify-center"
            >
              <BarChart2 className="h-4 w-4 mr-2" />
              View Career Dashboard
            </Button>
          </div>

          {/* My Workplace Support */}
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex flex-col">
            <div className="mb-6">
              <h2 className="font-bold text-xl text-gray-800 mb-4">My Workplace Support</h2>
              <hr className="border-gray-200" />
            </div>
            <div className="space-y-4 flex-grow">
              {[
                { title: "Text-to-Speech for Emails", status: "Active", icon: CheckCircle, color: "bg-green-100 text-green-600" },
                { title: "Time Management App Integration", status: "Setting Up", icon: Clock, color: "bg-yellow-100 text-yellow-600" },
                { title: "CRM Color Coding System", status: "Favorite", icon: Star, color: "bg-pink-100 text-pink-600" },
                { title: "Meeting Recording Access", status: "To Request", icon: HelpCircle, color: "bg-blue-300 text-white" },
              ].map((tool) => (
                <div key={tool.title} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <tool.icon className="h-5 w-5 flex-shrink-0 text-gray-400" />
                    <span className="text-sm text-gray-700 truncate">{tool.title}</span>
                  </div>
                  <Button 
                    size="sm" 
                    className={cn(
                      "h-7 rounded-full text-xs px-4 ml-2 flex-shrink-0 w-28 font-medium",
                      tool.color
                    )}
                  >
                    {tool.status}
                  </Button>
                </div>
              ))}
            </div>
            <Button 
              className="mt-4 bg-orange-200 hover:bg-orange-300 text-orange-700 text-sm py-2 font-medium flex items-center justify-center"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Request Additional Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
