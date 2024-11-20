import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Users, Briefcase, BarChart2, Settings } from "lucide-react"

export default function LeftSidebar() {
  return (
    <aside className="w-48 bg-white flex flex-col border-r border-gray-200">
      <div className="h-32 flex items-center justify-center px-4">
        <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-500 text-transparent bg-clip-text">Tracq</span>
      </div>
      <div className="px-3 flex-1 flex flex-col">
        <div className="mb-4 flex flex-col items-center text-center">
          <Avatar className="w-20 h-20 mb-2 ring-4 ring-teal-100">
            <AvatarImage src="https://api.dicebear.com/6.x/avataaars/svg?seed=John" alt="John Doe" />
            <AvatarFallback className="text-2xl font-semibold">JD</AvatarFallback>
          </Avatar>
          <h2 className="text-base font-semibold text-gray-800">John Doe</h2>
          <p className="text-xs text-gray-500">Team Manager</p>
        </div>
        <nav className="flex-1 space-y-1 text-xs">
          <Link href="/dashboard/manager" className="flex items-center py-2 px-3 bg-teal-100 text-teal-600 rounded-md">
            <Home className="mr-3" size={20} />
            Home
          </Link>
          <Link href="/dashboard/manager/team" className="flex items-center py-2 px-3 text-teal-600 hover:bg-teal-100 rounded-md">
            <Users className="mr-3" size={20} />
            Team
          </Link>
          <Link href="/dashboard/manager/projects" className="flex items-center py-2 px-3 text-teal-600 hover:bg-teal-100 rounded-md">
            <Briefcase className="mr-3" size={20} />
            Projects
          </Link>
          <Link href="/dashboard/manager/performance" className="flex items-center py-2 px-3 text-teal-600 hover:bg-teal-100 rounded-md">
            <BarChart2 className="mr-3" size={20} />
            Performance
          </Link>
          <Link href="/dashboard/manager/settings" className="flex items-center py-2 px-3 text-teal-600 hover:bg-teal-100 rounded-md">
            <Settings className="mr-3" size={20} />
            Settings
          </Link>
        </nav>
      </div>
    </aside>
  )
}
