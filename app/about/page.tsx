import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Book, Users, Zap, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const beliefs = [
    {
      icon: Book,
      title: "The Bible",
      description: "We believe the Bible is God's inspired Word and our ultimate authority for faith and life",
    },
    {
      icon: Heart,
      title: "Salvation",
      description: "We believe in salvation by grace through faith in Jesus Christ alone",
    },
    {
      icon: Users,
      title: "The Trinity",
      description: "We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit",
    },
    {
      icon: Zap,
      title: "Holy Spirit",
      description: "We believe in the baptism in the Holy Spirit with the evidence of speaking in tongues",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Story, Your Future</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the heart behind Royal House Chapel and the vision that drives us forward
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Why We Exist</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Royal House Chapel exists to touch our generation with the power of God. We are a vibrant Pentecostal
              church committed to creating an environment where people can encounter God's presence, discover their
              purpose, and develop into mature disciples of Jesus Christ.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission extends beyond our walls as we seek to impact South London and the nations with the
              transformative message of the Gospel.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Foundation</h2>
            <p className="text-lg text-gray-600">The core beliefs that guide our faith and ministry</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beliefs.map((belief, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <belief.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg text-blue-900 mb-3">{belief.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{belief.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Where We're Headed</h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                We envision a church that serves as a beacon of hope in South London, where lives are transformed,
                families are restored, and communities are impacted by God's love.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                Our goal is to establish a permanent home that will serve as a center for worship, discipleship, and
                outreach for generations to come.
              </p>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Support Our Building Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Church vision"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
