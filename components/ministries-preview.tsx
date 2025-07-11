import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Crown, Globe, Baby } from "lucide-react"

export default function MinistriesPreview() {
  const ministries = [
    {
      icon: Users,
      title: "Men's Ministry",
      description: "Building strong, godly men who lead with integrity and purpose",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      icon: Crown,
      title: "Royal Ladies",
      description: "Empowering women to discover their identity and calling in Christ",
      color: "bg-purple-600",
      hoverColor: "hover:bg-purple-700",
    },
    {
      icon: Globe,
      title: "World Missions",
      description: "Reaching beyond our borders to share God's love globally",
      color: "bg-green-600",
      hoverColor: "hover:bg-green-700",
    },
    {
      icon: Baby,
      title: "Youth & Children",
      description: "Nurturing the next generation in faith, fun, and friendship",
      color: "bg-yellow-600",
      hoverColor: "hover:bg-yellow-700",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Find Your Place to Serve</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover meaningful ways to connect, grow, and make a difference in our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ministries.map((ministry, index) => (
            <Card
              key={index}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-white"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`${ministry.color} ${ministry.hoverColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300`}
                >
                  <ministry.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">{ministry.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{ministry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 bg-transparent"
          >
            Explore All Ministries
          </Button>
        </div>
      </div>
    </section>
  )
}
