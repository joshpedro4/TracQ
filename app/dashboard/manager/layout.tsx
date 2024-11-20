import LeftSidebar from '@/components/dashboard/manager/LeftSidebar'
import RightSidebar from '@/components/dashboard/manager/RightSidebar'

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode
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
