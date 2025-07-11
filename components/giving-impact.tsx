"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Heart, Home, Users, ArrowRight } from "lucide-react"

export default function GivingImpact() {
  const [buildingProgress] = useState(65)

  const impactStats = [
    {
      icon: Users,
      number: "150+",
      label: "Families Supported",
      color: "text-blue-600",
    },
    {
      icon: Home,
      number: "£250K",
      label: "Building Fund Raised",
      color: "text-green-600",
    },
    {
      icon: Heart,
      number: "12",
      label: "Community Programs",
      color: "text-purple-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Your Generosity Changes Lives</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Every gift makes a difference. Your tithes and offerings support our mission to touch lives with God's power
            and help us build a permanent home for our growing church family.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {impactStats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Building Fund Progress */}
        <Card className="bg-white/10 backdrop-blur-sm border border-white/20 mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Building Our Permanent Home</h3>
              <p className="text-blue-100">Help us establish a lasting foundation for ministry</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">Progress</span>
                <span className="text-yellow-400 font-bold">{buildingProgress}% Complete</span>
              </div>
              <Progress value={buildingProgress} className="h-3 mb-4" />
              <div className="flex justify-between text-sm text-blue-100">
                <span>£0</span>
                <span>Goal: £400,000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold">Ready to Make an Impact?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Give Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-transparent"
            >
              Learn About Building Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
