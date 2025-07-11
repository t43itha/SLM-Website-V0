import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Crown, Baby, Globe, Heart, Calendar, MapPin, Phone, ArrowRight } from "lucide-react"

export default function ConnectPage() {
  const ministries = [
    {
      icon: Users,
      title: "Men's Ministry",
      subtitle: "Building Strong, Godly Men",
      description:
        "A brotherhood focused on building strong, godly men who lead with integrity and purpose in their families, workplaces, and communities.",
      activities: [
        "Monthly Brotherhood Meetings",
        "Men's Retreats",
        "Community Service Projects",
        "Leadership Development",
      ],
      meetingTime: "First Saturday of each month, 9:00 AM",
      contact: "men@royalhouseslm.org",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: Crown,
      title: "Royal Ladies",
      subtitle: "Empowering Women in Christ",
      description:
        "Empowering women to discover their identity and calling in Christ through fellowship, mentorship, and spiritual growth opportunities.",
      activities: ["Weekly Fellowship Meetings", "Women's Conferences", "Mentorship Programs", "Prayer Groups"],
      meetingTime: "Every Wednesday, 7:00 PM",
      contact: "ladies@royalhouseslm.org",
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      icon: Baby,
      title: "Youth & Children",
      subtitle: "Nurturing the Next Generation",
      description:
        "Helping young people navigate life with faith and purpose through age-appropriate programs, mentorship, and fun activities.",
      activities: ["Sunday School", "Youth Services", "Summer Camps", "Leadership Training"],
      meetingTime: "Sundays during main service + Saturdays 4:00 PM (Youth)",
      contact: "youth@royalhouseslm.org",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
    {
      icon: Globe,
      title: "World Missions",
      subtitle: "Reaching Beyond Our Borders",
      description:
        "Reaching beyond our borders to share God's love globally through missions support, outreach programs, and international partnerships.",
      activities: ["Mission Trips", "Missionary Support", "Global Partnerships", "Fundraising Events"],
      meetingTime: "Second Sunday of each month, 2:30 PM",
      contact: "missions@royalhouseslm.org",
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
  ]

  const smallGroups = [
    {
      name: "Young Adults Connect",
      description: "Ages 18-35 | Building friendships and growing in faith together",
      time: "Thursdays 7:30 PM",
      location: "Various homes in South London",
    },
    {
      name: "Family Life Groups",
      description: "For families with children | Practical faith for everyday life",
      time: "Sundays 6:00 PM",
      location: "Church premises",
    },
    {
      name: "Seniors Fellowship",
      description: "Ages 55+ | Wisdom, fellowship, and continued growth",
      time: "Tuesdays 2:00 PM",
      location: "Church hall",
    },
    {
      name: "New Believers Class",
      description: "Foundation course for new Christians",
      time: "Saturdays 10:00 AM",
      location: "Church classroom",
    },
  ]

  const volunteerOpportunities = [
    { role: "Worship Team", description: "Musicians, vocalists, and sound technicians", commitment: "Weekly" },
    { role: "Welcome Team", description: "First impressions and hospitality ministry", commitment: "Monthly" },
    { role: "Children's Ministry", description: "Teaching and caring for our young ones", commitment: "Weekly" },
    { role: "Media Team", description: "Photography, videography, and social media", commitment: "As needed" },
    { role: "Prayer Team", description: "Intercession and prayer ministry", commitment: "Weekly" },
    { role: "Outreach Team", description: "Community service and evangelism", commitment: "Monthly" },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Find Your Community</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover meaningful connections and opportunities to grow in faith together
          </p>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Ways to Get Involved</h2>
            <p className="text-lg text-gray-600">Find your place to serve, grow, and make a difference</p>
          </div>

          <div className="space-y-8">
            {ministries.map((ministry, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-4 gap-0">
                  {/* Ministry Icon & Title */}
                  <div
                    className={`bg-gradient-to-br ${ministry.color} p-8 flex flex-col justify-center items-center text-white text-center`}
                  >
                    <ministry.icon className="h-16 w-16 mb-4 opacity-90" />
                    <h3 className="text-2xl font-bold mb-2">{ministry.title}</h3>
                    <p className="text-sm opacity-80">{ministry.subtitle}</p>
                  </div>

                  {/* Ministry Details */}
                  <div className="lg:col-span-3 p-8">
                    <p className="text-gray-600 leading-relaxed mb-6">{ministry.description}</p>

                    {/* Activities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-blue-900 mb-3">What We Do:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {ministry.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0" />
                            <span className="text-sm text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Meeting Info */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className={`${ministry.bgColor} p-4 rounded-lg`}>
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className={`h-4 w-4 ${ministry.textColor}`} />
                          <span className="font-semibold text-gray-800">When We Meet</span>
                        </div>
                        <p className="text-sm text-gray-600">{ministry.meetingTime}</p>
                      </div>
                      <div className={`${ministry.bgColor} p-4 rounded-lg`}>
                        <div className="flex items-center space-x-2 mb-2">
                          <Phone className={`h-4 w-4 ${ministry.textColor}`} />
                          <span className="font-semibold text-gray-800">Get Connected</span>
                        </div>
                        <p className="text-sm text-gray-600">{ministry.contact}</p>
                      </div>
                    </div>

                    <Button className={`bg-gradient-to-r ${ministry.color} text-white hover:opacity-90`}>
                      Join {ministry.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Small Groups Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Grow Together</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Life change happens in community. Our small groups provide opportunities for deeper relationships, Bible
              study, and mutual support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {smallGroups.map((group, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center justify-between">
                    {group.name}
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                      Open
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">{group.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">{group.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Find a Small Group
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Use Your Gifts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every person has unique gifts and talents that can make a difference. Find your place to serve and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-blue-900 mb-2">{opportunity.role}</h3>
                  <p className="text-gray-600 text-sm mb-4">{opportunity.description}</p>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-600">
                    {opportunity.commitment}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
            >
              Discover Your Place to Serve
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Connected?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the next step in your faith journey. Join a ministry, find a small group, or discover how you can
            serve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Get Connected Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
