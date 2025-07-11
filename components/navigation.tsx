"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart } from "lucide-react"

interface NavigationProps {
  showStamp?: boolean
}

export default function Navigation({ showStamp = false }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/connect", label: "Connect" },
    { href: "/give", label: "Give" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-white">Royal House Chapel</div>
              <div className="text-xs text-white/80">SLM</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-yellow-400 font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              Join Us Sunday
            </Button>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">Give</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-yellow-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-yellow-400 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  Join Us Sunday
                </Button>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">Give</Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Stamp Below Header */}
      {showStamp && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-40">
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full px-6 py-2 shadow-lg">
            <p className="text-white text-sm font-medium whitespace-nowrap">
              Touching Our Generation With The Power Of God
            </p>
          </div>
        </div>
      )}
    </nav>
  )
}
