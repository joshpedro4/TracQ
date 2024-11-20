import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Battery, SmilePlus, Clock, PlayCircle, CheckCircle, Circle, Lightbulb, PlusCircle, Award, MessageSquare, Calendar, FileText, Book, MessageCircle, Star, HelpCircle, BarChart2, Users, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export default function ManagerDashboard() {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <div className="h-full flex flex-col p-4 space-y-4">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-teal-600">Hello, Manager John</h1>
          <p className="text-sm text-gray-600">Today is {formattedDate}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-red-100 border border-red-200 rounded-lg py-2 px-4">
            <span className="text-red-700">💡</span>
            <span className="text-red-700 font-medium">Action Required: Team Performance Reviews Due</span>
          </div>
          <Button className="bg-green-400 text-white hover:bg-green-500 whitespace-nowrap">Start Reviews</Button>
        </div>
      </header>
      
      <div className="flex-1 grid grid-rows-[1fr,1fr] gap-4">
        <div className="grid grid-cols-3 gap-4">
          {/* Team Performance Card */}
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-lg shadow-lg flex flex-col">
            <div className="flex-grow">
              <div className="mb-4">
                <h2 className="font-bold text-xl text-white">Team Performance</h2>
                <p className="text-teal-100">Overall Progress</p>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2 text-white">
                    <span>3/5 projects on track</span>
                    <span className="font-medium">60%</span>
                  </div>
                  <div className="bg-teal-400/50 h-2 rounded-full">
                    <div 
                      className="bg-white h-2 rounded-full transition-all duration-300" 
                      style={{ width: '60%' }} 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-white">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Project Alpha: On Schedule</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Project Beta: Ahead of Schedule</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white">
                    <Circle className="h-4 w-4" />
                    <span>Project Gamma: Slight Delay</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white">
                    <Circle className="h-4 w-4" />
                    <span>Project Delta: Resource Allocation Needed</span>
                  </div>
                </div>
              </div>
            </div>
            <Button 
              variant="secondary" 
              className="w-full bg-teal-100 hover:bg-teal-200 text-teal-800 font-medium border-2 border-transparent hover:border-white transition-colors mt-6"
            >
              <BarChart2 className="h-4 w-4 mr-2" />
              View Detailed Report
            </Button>
          </div>

          {/* Team Goals Card */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg shadow-lg flex flex-col">
            <div className="flex-grow">
              <div className="mb-4">
                <h2 className="font-bold text-xl text-white">Team Goals</h2>
                <p className="text-blue-100">Q3 Objectives</p>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2 text-white">
                    <span>2/4 goals achieved</span>
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
                    <span>Increase team productivity by 15%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-100">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Implement new project management tool</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-100">
                    <Circle className="h-4 w-4" />
                    <span>Reduce project turnaround time by 20%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-100">
                    <Circle className="h-4 w-4" />
                    <span>Achieve 95% client satisfaction rate</span>
                  </div>
                </div>
              </div>
            </div>
            <Button 
              variant="secondary" 
              className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium border-2 border-transparent hover:border-white transition-colors mt-6"
            >
              <Clock className="h-4 w-4 mr-2" />
              Update Goals
            </Button>
          </div>

          {/* Team Wellness Check-in Card */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-lg shadow-lg flex flex-col">
            <div className="flex-grow">
              <div className="mb-6">
                <h2 className="font-bold text-xl text-white">Team Wellness</h2>
                <p className="text-purple-100">Weekly Check-in</p>
              </div>

              <div className="space-y-3 mb-6">
                <label className="flex items-center gap-2 text-white font-medium">
                  <Battery className="h-5 w-5" /> 
                  Team Energy Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { level: "Low", gradient: "from-red-400 to-red-500", icon: "⚡", hoverGradient: "hover:from-red-500 hover:to-red-600" },
                    { level: "Medium", gradient: "from-yellow-400 to-yellow-500", icon: "⚡⚡", hoverGradient: "hover:from-yellow-500 hover:to-yellow-600" },
                    { level: "High", gradient: "from-green-400 to-green-500", icon: "⚡⚡⚡", hoverGradient: "hover:from-green-500 hover:to-green-600" }
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
                  Team Morale
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
                        hover:bg-purple-50 
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
              className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium border-2 border-transparent hover:border-white transition-colors mt-6"
            >
              <Lightbulb className="h-4 w-4 mr-2" />
              View Team Insights
            </Button>
          </div>
        </div>

        {/* Second row of cards */}
        <div className="grid grid-cols-3 gap-4">
          {/* Tasks Assigned */}
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex flex-col">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-xl text-gray-800">Tasks Assigned</h2>
                <Button variant="outline" size="sm" className="bg-teal-600 hover:bg-teal-700 text-white border-none text-sm py-1 px-3">
                  View All
                </Button>
              </div>
              <hr className="border-gray-200" />
            </div>
            <div className="space-y-6">
              {[
                { title: "Performance Reviews", description: "Complete team evaluations", color: "bg-teal-400" },
                { title: "Project Allocation", description: "Assign resources for new project", color: "bg-blue-400" },
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
                    Start
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Team Management */}
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex flex-col">
            <div className="mb-6">
              <h2 className="font-bold text-xl text-gray-800 mb-4">Team Management</h2>
              <hr className="border-gray-200" />
            </div>
            <div className="space-y-4 flex-grow">
              {[
                { title: "Schedule Team Meeting", icon: Calendar },
                { title: "Review Team Feedback", icon: MessageSquare },
                { title: "Update Team KPIs", icon: BarChart2 },
                { title: "Manage Team Roster", icon: Users },
              ].map((item) => (
                <Button 
                  key={item.title}
                  size="sm" 
                  className="w-full justify-start bg-teal-100 text-teal-600 hover:bg-teal-200 text-sm py-2 px-3 flex items-center space-x-2"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Button>
              ))}
            </div>
            <Button 
              className="mt-4 bg-teal-600 hover:bg-teal-700 text-white text-sm py-2 flex items-center justify-center"
            >
              <Briefcase className="h-4 w-4 mr-2" />
              Team Dashboard
            </Button>
          </div>

          {/* Resource Allocation */}
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex flex-col">
            <div className="mb-6">
              <h2 className="font-bold text-xl text-gray-800 mb-4">Resource Allocation</h2>
              <hr className="border-gray-200" />
            </div>
            <div className="space-y-4 flex-grow">
              {[
                { name: "Project Alpha", allocation: 40 },
                { name: "Project Beta", allocation: 30 },
                { name: "Project Gamma", allocation: 20 },
                { name: "Other Tasks", allocation: 10 },
              ].map((resource, index) => (
                <div key={resource.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{resource.name}</span>
                    <span className="text-sm font-semibold text-gray-900">{resource.allocation}%</span>
                  </div>
                  <Progress value={resource.allocation} className="h-2" indicatorColor={`bg-teal-${500 - index * 100}`} />
                </div>
              ))}
            </div>
            <Button 
              className="mt-4 bg-teal-100 hover:bg-teal-200 text-teal-700 text-sm py-2 font-medium flex items-center justify-center"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Adjust Allocation
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}