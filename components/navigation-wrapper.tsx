"use client"

import { usePathname } from "next/navigation"
import Navigation from "./navigation"

export default function NavigationWrapper() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return <Navigation showStamp={isHomePage} />
}