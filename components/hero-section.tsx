"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2 } from "lucide-react"

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/slm-hero.mp4" type="video/mp4" />
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Video Controls */}
      <div className="absolute top-6 right-6 z-20 flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/20"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/20"
          onClick={() => setIsMuted(!isMuted)}
        >
          <Volume2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">
          Royalhouse Chapel SLM
        </h1>
        
        <p className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-12 animate-fade-in-up animation-delay-300">
          Touching Our Generation With The Power Of God
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Join Us This Sunday
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-transparent"
          >
            Watch Online
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
