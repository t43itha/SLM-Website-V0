import { Button } from "@/components/ui/button"
import { Heart, Users, Globe } from "lucide-react"

export default function WelcomeMessage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-900 leading-tight">A Place to Call Home</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Royal House Chapel, we believe everyone has a purpose and a place in God's family. Whether you're
              taking your first steps of faith or have been walking with God for years, you'll find a warm, welcoming
              community ready to journey alongside you.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our heart is to see lives transformed by the love of Christ and to equip every person to make a difference
              in their world.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-900">15+</div>
                <div className="text-sm text-gray-600">Years of Ministry</div>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-blue-900">500+</div>
                <div className="text-sm text-gray-600">Church Family</div>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-blue-900">3</div>
                <div className="text-sm text-gray-600">Mission Fields</div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Church community gathering"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating element */}
            <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-white p-4 rounded-lg shadow-lg">
              <p className="font-semibold">Welcome Home!</p>
              <p className="text-sm">Every Sunday at 11 AM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
