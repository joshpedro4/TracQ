import Link from 'next/link'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <p className="mb-4">Login functionality will be implemented later.</p>
        <div className="space-y-2">
          <Link href="/disabled-user" className="block text-blue-500 hover:underline">
            Go to Disabled User Dashboard
          </Link>
          <Link href="/manager" className="block text-blue-500 hover:underline">
            Go to Manager Dashboard
          </Link>
          <Link href="/hr" className="block text-blue-500 hover:underline">
            Go to HR Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
