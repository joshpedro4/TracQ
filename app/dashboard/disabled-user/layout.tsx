import { ReactNode } from 'react'
import LeftSidebar from '@/components/dashboard/disabled-user/LeftSidebar'
import RightSidebar from '@/components/dashboard/disabled-user/RightSidebar'

export default function DisabledUserLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex h-screen">
      <LeftSidebar />
      <main className="flex-1 overflow-y-auto bg-gray-100">
        {children}
      </main>
      <RightSidebar />
    </div>
  )
}
