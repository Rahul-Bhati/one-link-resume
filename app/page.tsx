import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FileText, RefreshCw, BarChart3, Upload, Users, Star, Link2 } from "lucide-react"
import NextLink from "next/link"
import Image from "next/image"
import ResumeCard from "@/components/ResumeCard"
import TestimonialCard from "@/components/TestimonialCard"
import Footer from "@/components/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <NextLink className="w-5 h-5 text-white" href="/" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LinkDoc
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <NextLink href="/login">
              <Button variant="ghost" className="hover:bg-blue-50">
                Login
              </Button>
            </NextLink>
            <NextLink href="/signup">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Get Started
              </Button>
            </NextLink>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              Share One Link,
              <br />
              Update Anytime
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tired of updating resume links on every platform? Upload once, share a single link, and update anytime
              without changing the URL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <NextLink href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </NextLink>
              <NextLink href="/demo">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 hover:bg-blue-50">
                  View Demo
                </Button>
              </NextLink>
            </div>
          </div>

        </div>
      </section>

      {/* Hero Visual */}
      <ResumeCard />

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Why Choose LinkDoc?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simplify your document sharing with powerful features designed for modern professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Link2,
                title: "Single Link Sharing",
                description: "One permanent link for your resume or portfolio that never changes.",
                color: "blue",
              },
              {
                icon: RefreshCw,
                title: "Auto-Updates",
                description: "Update your document anytime while keeping the same shareable link.",
                color: "green",
              },
              {
                icon: BarChart3,
                title: "View Analytics",
                description: "Track who views your document with detailed analytics and insights.",
                color: "purple",
              },
              {
                icon: Upload,
                title: "Easy Upload",
                description: "Drag-and-drop your PDF files in seconds with our intuitive interface.",
                color: "orange",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-${feature.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className={`w-8 h-8 text-${feature.color}-600`} href={"/"} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Loved by Professionals</h2>
            <p className="text-xl text-gray-600">See what our users are saying about LinkDoc</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Software Engineer",
                content:
                  "LinkDoc saved me hours of updating resume links across different platforms. One link, infinite updates!",
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Michael Chen",
                role: "Product Designer",
                content:
                  "The analytics feature helps me understand which companies are viewing my portfolio. Game changer!",
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Manager",
                content: "Clean interface, reliable service. I recommend LinkDoc to all my job-seeking friends.",
                avatar: "/placeholder.svg?height=60&width=60",
              },
            ].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Simplify Your Document Sharing?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who trust LinkDoc for their document sharing needs.
          </p>
          <NextLink href="/signup">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Free Today
            </Button>
          </NextLink>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
    </div>
  )
}
