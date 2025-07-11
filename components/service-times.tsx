"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Calendar } from "lucide-react"

export default function ServiceTimes() {
  const [nextService, setNextService] = useState("")

  useEffect(() => {
    // Calculate next service time
    const now = new Date()
    const sunday = new Date()
    sunday.setDate(now.getDate() + ((7 - now.getDay()) % 7))
    sunday.setHours(11, 0, 0, 0)

    if (now.getDay() === 0 && now.getHours() < 11) {
      sunday.setDate(now.getDate())
    }

    setNextService(
      sunday.toLocaleDateString("en-GB", {
        weekday: "long",
        month: "long",
        day: "numeric",
      }),
    )
  }, [])

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white relative">
      <div className="container mx-auto px-4">
        {/* Floating Service Times Card */}
        <Card className="max-w-4xl mx-auto -mt-32 relative z-20 bg-white/95 backdrop-blur-lg border border-white/20 shadow-2xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">When We Gather</h2>
              <p className="text-gray-600">Next Service: {nextService} at 11:00 AM</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Sunday Service */}
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white transform hover:scale-105 transition-all duration-300">
                <Clock className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
                <h3 className="font-bold text-lg mb-2">Sunday Celebration</h3>
                <p className="text-blue-100 mb-1">11:00 AM - 2:00 PM</p>
                <p className="text-sm text-blue-200">Worship, Teaching & Fellowship</p>
              </div>

              {/* Tuesday Bible Study */}
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 text-white transform hover:scale-105 transition-all duration-300">
                <Clock className="h-8 w-8 mx-auto mb-3 text-blue-900" />
                <h3 className="font-bold text-lg mb-2">Tuesday Bible Study</h3>
                <p className="text-yellow-100 mb-1">7:30 PM - 9:00 PM</p>
                <p className="text-sm text-yellow-200">Interactive Study & Discussion</p>
              </div>

              {/* Friday Miracle Service */}
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 text-white transform hover:scale-105 transition-all duration-300">
                <Clock className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
                <h3 className="font-bold text-lg mb-2">Friday Miracle Service</h3>
                <p className="text-purple-100 mb-1">7:30 PM - 10:00 PM</p>
                <p className="text-sm text-purple-200">Prayer, Healing & Breakthrough</p>
              </div>
            </div>

            {/* Location */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center">
              <MapPin className="h-6 w-6 mx-auto mb-2 text-blue-600" />
              <p className="font-semibold text-gray-800">Kingsdale Foundation School</p>
              <p className="text-gray-600">Dulwich, SE21 8SB, London</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
                <Button
                  variant="outline"
                  className="border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white bg-transparent"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Add to Calendar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
