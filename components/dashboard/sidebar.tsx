// components/dashboard/sidebar.tsx
import Link from 'next/link';
import { Home, Briefcase, Mail, Settings } from 'lucide-react';

const Sidebar = () => (
  <aside className="w-64 bg-gray-800 text-white p-4">
    <nav>
      <Link href="/dashboard">
        <a className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700">
          <Home size={20} />
          <span>Dashboard</span>
        </a>
      </Link>
      {/* Add role-based links */}
      <Link href="/dashboard/opportunities">
        <a className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700">
          <Briefcase size={20} />
          <span>Opportunities</span>
        </a>
      </Link>
      <Link href="/dashboard/inbox">
        <a className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700">
          <Mail size={20} />
          <span>Inbox</span>
        </a>
      </Link>
      <Link href="/dashboard/settings">
        <a className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700">
          <Settings size={20} />
          <span>Settings</span>
        </a>
      </Link>
    </nav>
  </aside>
);

export default Sidebar;
