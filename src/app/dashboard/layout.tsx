"use client"

import React, { FC, PropsWithChildren } from "react"
import Link from "next/link"
import Image from "next/image"
import ai from "../../assets/ai.json"
import { LayoutDashboard, Settings, User, Users } from "lucide-react"
import Lottie from "lottie-react"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"

const managerItems = [
  {
    name: "Engineers",
    href: "/dashboard/engineers",
    icon: Users,
  },
  {
    name: "Settings",
    href: "#settings",
    icon: Settings,
  },
  {
    name: "Profile",
    href: "#profile",
    icon: User,
  },
]

const engineerItems = [
  {
    name: "Dashboard",
    href: `/dashboard/engineers/4`,
    icon: LayoutDashboard,
  },
  {
    name: "Profile",
    href: "#profile",
    icon: User,
  },
]

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname()
  return (
    <div className="flex h-screen bg-[#1F1F1F]">
      <aside className="flex w-64 flex-col bg-[#27272B] p-4 shadow-md">
        <div className="mb-4 flex items-center text-gray-300">
          <Lottie animationData={ai} className="w-24" />
          <h2 className="w-full text-xl font-bold">Timio AI</h2>
        </div>

        <div className="mb-2 flex items-center gap-2 text-gray-400">
          <div className="h-px w-full bg-gray-400" />
          <div className="whitespace-nowrap">Manager&apos;s View</div>
          <div className="h-px w-full bg-gray-400" />
        </div>

        <nav className="flex-1">
          <ul className="gap-1">
            {managerItems.map((item) => {
              const isSelected = item.href === pathname
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={twMerge(
                      "block rounded-lg border-l-2 border-l-transparent px-4 py-2 text-white/50 transition hover:bg-white/5",
                      isSelected &&
                        "rounded-l-none border-l-2 border-l-white text-white",
                    )}
                  >
                    <div className="flex gap-4">
                      <item.icon size={24} />

                      {item.name}
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="mb-2 flex items-center gap-2 text-gray-400">
          <div className="h-px w-full bg-gray-400" />
          <div className="whitespace-nowrap">Engineer&apos;s View</div>
          <div className="h-px w-full bg-gray-400" />
        </div>

        <nav className="flex-1">
          <ul>
            {engineerItems.map((item) => {
              const isSelected = item.href === pathname
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={twMerge(
                      "block rounded rounded-l-none border-l-2 border-l-transparent px-4 py-2 text-white/50 transition hover:bg-white/5",
                      isSelected &&
                        "rounded-l-none border-l-2 border-l-white text-white",
                    )}
                  >
                    <div className="flex gap-4">
                      <item.icon size={24} />

                      {item.name}
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between bg-[#27272B] p-4">
          <div className="flex items-center gap-4">
            <Image
              width={56}
              height={56}
              src="https://media.licdn.com/dms/image/v2/D4E03AQHt-ALFBIqKpA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720446166222?e=1744848000&v=beta&t=IhXyBhFZ59ZJE1ecSC5qmW-8DIdwB5QpxexymdXH9kw"
              alt="User Avatar"
              className="h-10 w-10 rounded-full"
            />

            <span className="text-lg font-medium text-white">
              Mahshid Khanali
            </span>
          </div>

          <Link href="/">
            <button className="rounded bg-red-500/20 px-4 py-1 text-red-500 duration-200 hover:bg-red-600 hover:text-white">
              Logout
            </button>
          </Link>
        </header>

        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
