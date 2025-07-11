"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Send,
  Heart,
  Calendar,
  Users,
  AlertCircle,
} from "lucide-react"

export default function ContactPage() {
  const [formType, setFormType] = useState("general")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    prayerRequest: "",
    visitDate: "",
    interests: [] as string[],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "07432 031 192",
      subtitle: "Monday-Friday, 9:00 AM - 5:00 PM",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@royalhouseslm.org",
      subtitle: "We'll respond within 24 hours",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Kingsdale Foundation School",
      subtitle: "Dulwich, SE21 8SB, London",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday",
      subtitle: "9:00 AM - 5:00 PM",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
  ]

  const ministryInterests = [
    "Men's Ministry",
    "Royal Ladies",
    "Youth Ministry",
    "Children's Ministry",
    "World Missions",
    "Worship Team",
    "Welcome Team",
    "Prayer Team",
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">We'd Love to Hear From You</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Connect with us for questions, prayer requests, or to learn more about our church family
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">Multiple ways to connect with our team</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div
                    className={`${info.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <info.icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <h3 className="font-bold text-blue-900 mb-2">{info.title}</h3>
                  <p className="font-semibold text-gray-800 mb-1">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emergency Contact */}
          <Card className="bg-red-50 border-red-200 mb-12">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-red-900 mb-2">Pastoral Emergency</h3>
                  <p className="text-red-800 mb-2">
                    For urgent pastoral care outside office hours, please call our emergency line:
                  </p>
                  <p className="font-bold text-red-900 text-lg">07939 098 927</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Selection & Main Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Send Us a Message</CardTitle>
                  <p className="text-gray-600">Choose the type of message you'd like to send</p>
                </CardHeader>
                <CardContent>
                  {/* Form Type Selection */}
                  <div className="mb-8">
                    <RadioGroup value={formType} onValueChange={setFormType} className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="general" id="general" />
                        <div>
                          <Label htmlFor="general" className="font-semibold cursor-pointer">
                            General Inquiry
                          </Label>
                          <p className="text-sm text-gray-600">Questions about our church</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="prayer" id="prayer" />
                        <div>
                          <Label htmlFor="prayer" className="font-semibold cursor-pointer">
                            Prayer Request
                          </Label>
                          <p className="text-sm text-gray-600">Submit a prayer request</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="visit" id="visit" />
                        <div>
                          <Label htmlFor="visit" className="font-semibold cursor-pointer">
                            First-Time Visitor
                          </Label>
                          <p className="text-sm text-gray-600">Planning your first visit</p>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      {formType === "general" && (
                        <div>
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          />
                        </div>
                      )}
                      {formType === "visit" && (
                        <div>
                          <Label htmlFor="visitDate">Planning to Visit</Label>
                          <Input
                            id="visitDate"
                            type="date"
                            value={formData.visitDate}
                            onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                          />
                        </div>
                      )}
                    </div>

                    {/* Message/Prayer Request */}
                    <div>
                      {formType === "prayer" ? (
                        <>
                          <Label htmlFor="prayerRequest">Prayer Request *</Label>
                          <Textarea
                            id="prayerRequest"
                            placeholder="Share your prayer request with us. All requests are kept confidential."
                            value={formData.prayerRequest}
                            onChange={(e) => setFormData({ ...formData, prayerRequest: e.target.value })}
                            rows={4}
                            required
                          />
                        </>
                      ) : (
                        <>
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us how we can help you..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={4}
                            required
                          />
                        </>
                      )}
                    </div>

                    {/* Ministry Interests for First-Time Visitors */}
                    {formType === "visit" && (
                      <div>
                        <Label className="text-base font-semibold mb-3 block">
                          Interested in learning more about: (Optional)
                        </Label>
                        <div className="grid md:grid-cols-2 gap-3">
                          {ministryInterests.map((interest) => (
                            <div key={interest} className="flex items-center space-x-2">
                              <Checkbox
                                id={interest}
                                checked={formData.interests.includes(interest)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setFormData({
                                      ...formData,
                                      interests: [...formData.interests, interest],
                                    })
                                  } else {
                                    setFormData({
                                      ...formData,
                                      interests: formData.interests.filter((i) => i !== interest),
                                    })
                                  }
                                }}
                              />
                              <Label htmlFor={interest} className="text-sm cursor-pointer">
                                {interest}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>Find Us</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Interactive Map</p>
                      <p className="text-xs">Kingsdale Foundation School</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="font-semibold">Kingsdale Foundation School</p>
                    <p className="text-gray-600">Dulwich, SE21 8SB, London, UK</p>
                    <div className="flex flex-col gap-2 mt-4">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <MapPin className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Calendar className="h-4 w-4 mr-2" />
                        View Parking Info
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Stay Connected</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Follow us on social media for updates, encouragement, and community highlights
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Facebook, name: "Facebook", color: "hover:bg-blue-600" },
                      { icon: Instagram, name: "Instagram", color: "hover:bg-pink-600" },
                      { icon: Youtube, name: "YouTube", color: "hover:bg-red-600" },
                      { icon: Twitter, name: "Twitter", color: "hover:bg-blue-400" },
                    ].map((social) => (
                      <Button
                        key={social.name}
                        variant="outline"
                        size="sm"
                        className={`${social.color} hover:text-white transition-colors bg-transparent`}
                      >
                        <social.icon className="h-4 w-4 mr-2" />
                        {social.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Heart className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                    <h3 className="font-bold text-lg mb-2">Need Prayer?</h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Our prayer team is here for you. Submit a confidential prayer request.
                    </p>
                    <Button variant="secondary" size="sm" className="bg-white text-blue-600 hover:bg-gray-100">
                      Request Prayer
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <span>Newsletter</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">Subscribe for weekly updates and prayer requests</p>
                  <div className="space-y-3">
                    <Input placeholder="Enter your email" type="email" />
                    <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
