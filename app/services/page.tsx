import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Heart, Book, Zap, Car, ShipWheelIcon as Wheelchair, Baby, Coffee } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Sunday Celebration Service",
      time: "11:00 AM - 2:00 PM",
      description:
        "Join us for dynamic worship, practical Bible teaching, and warm fellowship. Our Sunday service includes contemporary music, inspiring messages, and opportunities for prayer and ministry.",
      highlights: ["Contemporary Worship", "Biblical Teaching", "Prayer Ministry", "Children's Programs"],
      color: "from-blue-600 to-blue-700",
      icon: Heart,
    },
    {
      title: "Tuesday Bible Study",
      time: "7:30 PM - 9:00 PM",
      description:
        "Dive deeper into God's Word through interactive study and discussion. Perfect for those wanting to grow in their understanding of Scripture and build meaningful relationships.",
      highlights: ["Interactive Study", "Small Groups", "Q&A Sessions", "Fellowship Time"],
      color: "from-yellow-500 to-yellow-600",
      icon: Book,
    },
    {
      title: "Friday Miracle Service",
      time: "7:30 PM - 10:00 PM",
      description:
        "Come expecting God to move in power. Our Friday service focuses on prayer, healing, and breakthrough. Witness testimonies of God's miraculous power and receive prayer for your needs.",
      highlights: ["Prayer & Healing", "Testimonies", "Breakthrough Ministry", "Prophetic Ministry"],
      color: "from-purple-600 to-purple-700",
      icon: Zap,
    },
  ]

  const facilities = [
    { icon: Car, title: "Free Parking", description: "Ample parking available on school premises" },
    { icon: Wheelchair, title: "Accessible", description: "Wheelchair accessible with designated spaces" },
    { icon: Baby, title: "Children's Area", description: "Safe, engaging programs for all ages" },
    { icon: Coffee, title: "Refreshments", description: "Tea, coffee, and light refreshments available" },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Come As You Are</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Experience authentic worship and life-changing messages in a welcoming environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Plan Your Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* Service Schedule */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">When We Worship Together</h2>
            <p className="text-lg text-gray-600">Join us for life-transforming worship experiences</p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Service Info */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`bg-gradient-to-r ${service.color} p-3 rounded-lg`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">{service.title}</h3>
                        <div className="flex items-center text-gray-600 mb-4">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="font-semibold">{service.time}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className={`bg-gradient-to-br ${service.color} p-8 flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <service.icon className="h-16 w-16 mx-auto mb-4 opacity-80" />
                      <div className="text-3xl font-bold mb-2">{service.time.split(" - ")[0]}</div>
                      <div className="text-sm opacity-80">Every {service.title.split(" ")[0]}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* First-Time Visitor Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Planning Your First Visit?</h2>
            <p className="text-lg text-gray-600">Everything you need to know for a comfortable experience</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visitor Info */}
            <div className="space-y-8">
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-4">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Dress Code</p>
                      <p className="text-gray-600 text-sm">
                        Come as you are! You'll see everything from casual to formal attire.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Arrival Time</p>
                      <p className="text-gray-600 text-sm">
                        We recommend arriving 10-15 minutes early to find parking and get settled.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Service Length</p>
                      <p className="text-gray-600 text-sm">
                        Sunday services typically last 2-3 hours including worship, teaching, and fellowship.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <h3 className="text-xl font-bold mb-4">Location & Directions</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Kingsdale Foundation School</p>
                      <p className="text-blue-100 text-sm">Dulwich, SE21 8SB, London, UK</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Public Transport</p>
                      <p className="text-blue-100 text-sm">
                        Bus routes: 3, 37, 196, 322 | Nearest stations: West Dulwich, Tulse Hill
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    Contact Us
                  </Button>
                </div>
              </Card>
            </div>

            {/* Facilities */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Facilities</h3>
              <div className="grid grid-cols-2 gap-4">
                {facilities.map((facility, index) => (
                  <Card
                    key={index}
                    className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <facility.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-blue-900 mb-2">{facility.title}</h4>
                    <p className="text-gray-600 text-sm">{facility.description}</p>
                  </Card>
                ))}
              </div>

              {/* Welcome Team */}
              <Card className="mt-6 p-6 bg-yellow-50 border-yellow-200">
                <div className="text-center">
                  <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-blue-900 mb-2">Welcome Team</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Our friendly welcome team will be happy to help you find your way and answer any questions.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">I'm Planning to Visit</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
