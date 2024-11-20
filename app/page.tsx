import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Welcome to Tracq HR Platform</h1>
      <div className="space-y-4">
        <Link href="/dashboard/disabled-user" className="block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Disabled User Dashboard
        </Link>
        <Link href="/dashboard/manager" className="block px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
          Manager Dashboard
        </Link>
        <Link href="/dashboard/hr" className="block px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-600">
          HR Dashboard
        </Link>
      </div>
    </div>
  )
}
