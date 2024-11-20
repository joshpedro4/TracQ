export default function HRLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* <LeftSidebar className="w-64 bg-white hidden md:block" /> */}
      <main className="flex-1 overflow-auto p-6 md:p-8">
        {children}
      </main>
      {/* <RightSidebar className="w-80 bg-white hidden lg:block" /> */}
    </div>
  )
}
