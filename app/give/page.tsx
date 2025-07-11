"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Heart, Home, Globe, CreditCard, Smartphone, Building } from "lucide-react"

export default function GivePage() {
  const [givingType, setGivingType] = useState("tithe")
  const [amount, setAmount] = useState("")
  const [buildingProgress] = useState(65)

  const givingOptions = [
    {
      id: "tithe",
      title: "Tithes & Offerings",
      description: "Support our ongoing ministry, pastoral care, and community outreach programs",
      icon: Heart,
      color: "text-blue-600",
    },
    {
      id: "building",
      title: "Building Fund",
      description: "Help us establish a permanent home for our growing church family",
      icon: Home,
      color: "text-green-600",
    },
    {
      id: "missions",
      title: "World Missions",
      description: "Support missionaries and global outreach initiatives",
      icon: Globe,
      color: "text-purple-600",
    },
  ]

  const quickAmounts = [25, 50, 100, 250, 500]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Generosity Changes Everything</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your partnership helps us touch lives and transform communities with God's love
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Giving Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Make Your Gift</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Giving Type Selection */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">Choose Your Giving Type</Label>
                  <RadioGroup value={givingType} onValueChange={setGivingType} className="space-y-3">
                    {givingOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <option.icon className={`h-5 w-5 ${option.color}`} />
                            <Label htmlFor={option.id} className="font-semibold cursor-pointer">
                              {option.title}
                            </Label>
                          </div>
                          <p className="text-sm text-gray-600">{option.description}</p>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Amount Selection */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">Select Amount</Label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                    {quickAmounts.map((quickAmount) => (
                      <Button
                        key={quickAmount}
                        variant={amount === quickAmount.toString() ? "default" : "outline"}
                        onClick={() => setAmount(quickAmount.toString())}
                        className="h-12"
                      >
                        £{quickAmount}
                      </Button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">£</span>
                    <Input
                      type="number"
                      placeholder="Enter custom amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pl-8 h-12 text-lg"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">Payment Method</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="h-16 flex items-center justify-center space-x-2 bg-transparent"
                    >
                      <CreditCard className="h-6 w-6" />
                      <span>Credit/Debit Card</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-16 flex items-center justify-center space-x-2 bg-transparent"
                    >
                      <Smartphone className="h-6 w-6" />
                      <span>Mobile Payment</span>
                    </Button>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  size="lg"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold h-14 text-lg"
                  disabled={!amount}
                >
                  Give £{amount || "0"} Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Building Fund Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-green-600" />
                  <span>Building Fund Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Progress</span>
                    <span className="text-green-600 font-bold">{buildingProgress}%</span>
                  </div>
                  <Progress value={buildingProgress} className="h-3" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>£260,000 raised</span>
                    <span>Goal: £400,000</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Every gift brings us closer to our permanent home where we can expand our ministries.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Impact Story */}
            <Card>
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 italic">
                      "Thanks to your faithful giving, we were able to support the Johnson family during their time of
                      need, providing groceries and assistance while the father recovered from surgery."
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">150+</div>
                      <div className="text-xs text-gray-600">Families Helped</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">12</div>
                      <div className="text-xs text-gray-600">Programs Funded</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Ways to Give */}
            <Card>
              <CardHeader>
                <CardTitle>Other Ways to Give</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <strong>Bank Transfer:</strong>
                  <p className="text-gray-600">Contact office for account details</p>
                </div>
                <div className="text-sm">
                  <strong>In Person:</strong>
                  <p className="text-gray-600">During any service - cash or check</p>
                </div>
                <div className="text-sm">
                  <strong>Questions?</strong>
                  <p className="text-gray-600">Call us at 07432 031 192</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
