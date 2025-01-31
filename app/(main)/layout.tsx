import NavigationSidebar from "@/features/server/navigation/navigation-sidebar";

const MainLayout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {

  return <div className="h-full">
    <aside className=" md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
      <NavigationSidebar />
    </aside>
    <main className="md:pl-[72px] h-full">
      {children}
    </main>
  </div>
}

export default MainLayout;  