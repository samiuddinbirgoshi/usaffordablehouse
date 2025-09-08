'use client'

import React from 'react'
import { useSmoothLoading } from '@/hooks/useSmoothLoading'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft, Home, Bed, Bath, Ruler } from 'lucide-react'

const HomesPage = () => {
  const [headerRef, headerVisible] = useSmoothLoading(0.1)
  const [homesRef, homesVisible] = useSmoothLoading(0.1)
  const [ctaRef, ctaVisible] = useSmoothLoading(0.1)

  const homes = [
    {
      id: 1,
      name: "Compact Single-Wide",
      model: "RH2542B",
      image: "https://s7d9.scene7.com/is/image/championhomes/RH2542B-Exterior-1",
      sqft: 819,
      bedrooms: 2,
      bathrooms: 1,
      type: "Single-Section",
      description: "2 beds, 1 bath – Ideal for starters",
      features: ["Porch/Outdoor Living Area", "Utility Room", "Walk-in Shower"]
    },
    {
      id: 2,
      name: "Family Prime",
      model: "Prime 2856H32P01",
      image: "https://s7d9.scene7.com/is/image/championhomes/Prime%202856H32P01%20Exterior%203%20copy",
      sqft: 1493,
      bedrooms: 3,
      bathrooms: 2,
      type: "Multi-Section",
      description: "3 beds, 2 baths – Perfect for growing families",
      features: ["Kitchen Island", "Utility Room", "Open Floor Plan"]
    },
    {
      id: 3,
      name: "Grand Slam",
      model: "Grand Slam 2856256",
      image: "https://s7d9.scene7.com/is/image/championhomes/2856256-gsm-exterior-2-copy",
      sqft: 1456,
      bedrooms: 3,
      bathrooms: 2,
      type: "Multi-Section",
      description: "3 beds, 2 baths – Comfortable family living",
      features: ["Fireplace", "Entertainment Center", "Kitchen Island"]
    },
    {
      id: 4,
      name: "Spacious Dublin",
      model: "Dublin",
      image: "https://s7d9.scene7.com/is/image/championhomes/Dublin%20kitchen%201",
      sqft: 2035,
      bedrooms: 4,
      bathrooms: 2,
      type: "Multi-Section",
      description: "4 beds, 2 baths – Luxury for larger families",
      features: ["Family Area", "Garage Ready", "Walk-in Pantry", "Entertainment Center"]
    },
    {
      id: 5,
      name: "Modern Classic",
      model: "Champion Classic 1680",
      image: "https://s7d9.scene7.com/is/image/championhomes/RH2542B-Exterior-6",
      sqft: 1680,
      bedrooms: 3,
      bathrooms: 2,
      type: "Multi-Section",
      description: "3 beds, 2 baths – Modern design with classic appeal",
      features: ["Master Suite", "Open Kitchen", "Energy Efficient"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="homes" />

      {/* Page Header */}
      <section ref={headerRef} className="bg-gradient-to-r from-primary to-primary/80 py-24">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in ${headerVisible ? 'visible' : ''}`}>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Our Affordable Mobile Homes
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Explore a range of options. Contact us for details and pricing.
          </p>
        </div>
      </section>


      {/* Homes Grid */}
      <section ref={homesRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homes.map((home) => (
              <Card key={home.id} className={`overflow-hidden group hover:shadow-lg transition-shadow rounded-none fade-in ${homesVisible ? 'visible' : ''}`}>
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={home.image}
                    alt={home.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-heading text-primary">{home.name}</CardTitle>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1">
                      {home.type}
                    </span>
                  </div>
                  <CardDescription className="text-gray-600">
                    {home.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y border-gray-100">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Ruler className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{home.sqft}</div>
                      <div className="text-xs text-gray-500">Sq Ft</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Bed className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{home.bedrooms}</div>
                      <div className="text-xs text-gray-500">Beds</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Bath className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{home.bathrooms}</div>
                      <div className="text-xs text-gray-500">Baths</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {home.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-secondary mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Model Info */}
                  <div className="text-xs text-gray-500 mb-4">
                    Model: {home.model}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`text-center mt-16 fade-in ${homesVisible ? 'visible' : ''}`}>
            <Card className="max-w-2xl mx-auto bg-gray-50 rounded-none">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  Ready to Find Your Perfect Home?
                </CardTitle>
                <CardDescription>
                  Contact us to view all models, get pricing, and schedule a tour.
                  No prices shown - we provide personalized quotes based on your needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Button asChild size="lg">
                    <Link href="/contact">Reach Out to View All Models and Find Your Perfect Home</Link>
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  All homes are built to federal (HUD) building code for manufactured housing.
                  Pricing varies by region and customization options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Homes */}
      <section ref={ctaRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl md:text-3xl font-heading font-bold text-center text-gray-900 mb-12 fade-in ${ctaVisible ? 'visible' : ''}`}>
            Why Choose Our Manufactured Homes?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className={`text-center rounded-none fade-in ${ctaVisible ? 'visible' : ''}`}>
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading">Quality Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All homes meet federal HUD standards with quality materials and professional craftsmanship
                  you can trust for years to come.
                </p>
              </CardContent>
            </Card>

            <Card className={`text-center rounded-none fade-in ${ctaVisible ? 'visible' : ''}`}>
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">$</span>
                </div>
                <CardTitle className="text-xl text-black font-heading">Affordable Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Competitive prices with flexible financing options make homeownership accessible
                  for low to mid-income families.
                </p>
              </CardContent>
            </Card>

            <Card className={`text-center rounded-none fade-in ${ctaVisible ? 'visible' : ''}`}>
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">✓</span>
                </div>
                <CardTitle className="text-xl font-heading">Full-Service Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From land preparation to final installation, we handle every step of the process
                  to make your dream home a reality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomesPage
