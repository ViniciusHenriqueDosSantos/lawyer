import { SideBarProvider } from "@/providers/sidebarprovider"

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <SideBarProvider>
      {children}
      </SideBarProvider>
    </div>
  )
}