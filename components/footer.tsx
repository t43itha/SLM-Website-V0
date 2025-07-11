import Link from "next/link"
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-blue-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-blue-200 mb-6">
              Subscribe for weekly updates, prayer requests, and community highlights
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-yellow-500 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-blue-900" />
              </div>
              <div>
                <div className="font-bold text-lg">Royal House Chapel</div>
                <div className="text-sm text-blue-200">SLM</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm">Touching Our Generation With The Power Of God</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Service Times", "About Us", "Give Online", "Contact Us", "Prayer Request"].map((link) => (
                <Link key={link} href="#" className="block text-blue-200 hover:text-white transition-colors text-sm">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-blue-200 text-sm">
                  <div>Kingsdale Foundation School</div>
                  <div>Dulwich, SE21 8SB, London</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-blue-200 text-sm">07432 031 192</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-blue-200 text-sm">info@royalhouseslm.org</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="bg-white/10 hover:bg-yellow-500 p-2 rounded-lg transition-colors group"
                >
                  <social.icon className="h-5 w-5 text-blue-200 group-hover:text-blue-900" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">© 2025 Royal House Chapel SLM. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
