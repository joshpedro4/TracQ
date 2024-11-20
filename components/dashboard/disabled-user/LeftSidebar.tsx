import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, MessageSquare, Briefcase, BarChart2, Settings } from "lucide-react"

export default function LeftSidebar() {
  return (
    <aside className="w-48 bg-white flex flex-col border-r border-gray-200">
      <div className="h-32 flex items-center justify-center px-4">
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Tracq</span>
      </div>
      <div className="px-3 flex-1 flex flex-col">
        <div className="mb-4 flex flex-col items-center text-center">
          <Avatar className="w-20 h-20 mb-2 ring-4 ring-purple-100">
            <AvatarImage src="https://api.dicebear.com/6.x/avataaars/svg?seed=Sarah" alt="Sarah Connor" />
            <AvatarFallback className="text-2xl font-semibold">SC</AvatarFallback>
          </Avatar>
          <h2 className="text-base font-semibold text-gray-800">Sarah Connor</h2>
          <p className="text-xs text-gray-500">Business Analyst</p>
          <div className="mt-1 text-orange-500 text-xs font-medium">28h</div>
        </div>
        <nav className="flex-1 space-y-1 text-xs">
          <Link href="/dashboard/disabled-user" className="flex items-center py-2 px-3 bg-purple-100 text-purple-600 rounded-md">
            <Home className="mr-3" size={20} />
            Home
          </Link>
          <Link href="/dashboard/disabled-user/inbox" className="flex items-center py-2 px-3 text-purple-600 hover:bg-purple-100 rounded-md">
            <MessageSquare className="mr-3" size={20} />
            Inbox
          </Link>
          <Link href="/dashboard/disabled-user/opportunities" className="flex items-center py-2 px-3 text-purple-600 hover:bg-purple-100 rounded-md">
            <Briefcase className="mr-3" size={20} />
            Opportunities
          </Link>
          <Link href="/dashboard/disabled-user/performance-review" className="flex items-center py-2 px-3 text-purple-600 hover:bg-purple-100 rounded-md">
            <BarChart2 className="mr-3" size={20} />
            Performance
          </Link>
          <Link href="/dashboard/disabled-user/settings" className="flex items-center py-2 px-3 text-purple-600 hover:bg-purple-100 rounded-md">
            <Settings className="mr-3" size={20} />
            Settings
          </Link>
        </nav>
      </div>
    </aside>
  )
}
