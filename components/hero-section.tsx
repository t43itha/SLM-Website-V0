"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/slm-hero.mp4" type="video/mp4" />
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>


      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        {/* Overline */}
        <div className="inline-flex items-center gap-2 mb-6 animate-fade-in-up">
          <div className="w-8 h-px bg-yellow-400"></div>
          <span className="text-yellow-400 font-medium tracking-widest text-sm uppercase">
            Welcome Home
          </span>
          <div className="w-8 h-px bg-yellow-400"></div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-200 leading-tight">
          Royal House
          <span className="block text-5xl md:text-7xl text-yellow-400 mt-2">
            Chapel
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-4 animate-fade-in-up animation-delay-400 max-w-3xl mx-auto leading-relaxed">
          South London Mission
        </p>
        
        <p className="text-lg md:text-xl text-white/80 mb-12 animate-fade-in-up animation-delay-500 max-w-2xl mx-auto font-light">
          Experience God's love, grow in faith, and connect with our community
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-700">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 border-0"
            asChild
          >
            <Link href="#when-we-gather">
              Join Us Sunday
            </Link>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-white hover:text-yellow-400 px-8 py-4 text-lg font-medium transition-all duration-300 group bg-transparent border-0"
            asChild
          >
            <Link href="https://www.youtube.com/@powerlinetv" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-2">
                Watch Online
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
