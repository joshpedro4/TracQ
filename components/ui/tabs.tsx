"use client"

import { ReactNode } from 'react'
import Link from 'next/link'
import LeftSidebar from '@/components/dashboard/disabled-user/LeftSidebar'
import RightSidebar from '@/components/dashboard/disabled-user/RightSidebar'

export default function DisabledUserLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <LeftSidebar />
      <main className="flex-1 p-8 overflow-auto">
        <nav className="mb-4">
          <Link href="/dashboard/disabled-user" className="mr-4">Home</Link>
          <Link href="/dashboard/disabled-user/opportunities" className="mr-4">Opportunities</Link>
          <Link href="/dashboard/disabled-user/performance-review" className="mr-4">Performance Review</Link>
          <Link href="/dashboard/disabled-user/inbox" className="mr-4">Inbox</Link>
          <Link href="/dashboard/disabled-user/settings">Settings</Link>
        </nav>
        {children}
      </main>
      <RightSidebar />
    </div>
  )
}
