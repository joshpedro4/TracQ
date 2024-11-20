import Link from 'next/link'

export default function DashboardHome() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard Home</h1>
      <nav className="space-y-2">
        <Link href="/dashboard/disabled-user" className="block p-2 bg-blue-100 hover:bg-blue-200 rounded">
          Disabled User Dashboard
        </Link>
        {/* Add more dashboard links here as needed */}
      </nav>
    </div>
  )
}
