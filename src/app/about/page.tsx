'use client'

import React from 'react'
import { useSmoothLoading } from '@/hooks/useSmoothLoading'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft, Home } from 'lucide-react'

const AboutPage = () => {
  const [headerRef, headerVisible] = useSmoothLoading(0.1)
  const [missionRef, missionVisible] = useSmoothLoading(0.1)
  const [aboutRef, aboutVisible] = useSmoothLoading(0.1)
  const [ctaRef, ctaVisible] = useSmoothLoading(0.1)

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="about" />

      {/* Page Header */}
      <section ref={headerRef} className="bg-gradient-to-r from-primary to-primary/80 py-24">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in ${headerVisible ? 'visible' : ''}`}>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            About U.S. Affordable Housing
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Your trusted partner in affordable housing solutions for over 10 years
          </p>
          
        </div>
      </section>

      {/* Back to Home */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Our Mission */}
      <section ref={missionRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`fade-in ${missionVisible ? 'visible' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We provide accessible housing solutions through affordable manufactured homes beginning with land acquisition to buildout and installation support for both future homeowners and investors.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">10+ Years Experience</div>
                  <div className="text-sm text-gray-600">Serving Central Florida</div>
                </div>
        </div>
          </div>
            <div className={`aspect-video bg-gray-200 overflow-hidden shadow-lg fade-in ${missionVisible ? 'visible' : ''}`}>
              <img 
                src="https://s7d9.scene7.com/is/image/championhomes/RH2542B-Exterior-1" 
                alt="Manufactured home community"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section ref={aboutRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`order-2 lg:order-1 fade-in ${aboutVisible ? 'visible' : ''}`}>
              <div className="aspect-video bg-gray-200 overflow-hidden shadow-lg">
                <img 
                  src="https://s7d9.scene7.com/is/image/championhomes/Prime%202856H32P01%20Exterior%203%20copy" 
                  alt="Professional installation team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className={`order-1 lg:order-2 fade-in ${aboutVisible ? 'visible' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We offer a wide range of models to fit any budget along with a team to help secure land, permitting, installation and financing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section - Separate */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-gray-900 mb-8">Our Team</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals driving our mission to provide affordable housing solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                  {/* CFO */}
                  <div className="group">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6 transform group-hover:scale-105 transition-all duration-500">
                      <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200">
                        <img 
                          src="/cfo.jpeg" 
                          alt="CFO - Chief Financial Officer"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Chief Financial Officer</h4>
                      <p className="text-primary font-semibold text-lg mb-3">CFO</p>
                      <p className="text-gray-600 leading-relaxed">
                        Leading financial strategy and ensuring sustainable growth in affordable housing development
                      </p>
                    </div>
                  </div>

                  {/* Julie H */}
                  <div className="group">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6 transform group-hover:scale-105 transition-all duration-500">
                      <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200">
                        <img 
                          src="/teamlead.jpeg" 
                          alt="Julie H. - Team Lead"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Julie H.</h4>
                      <p className="text-primary font-semibold text-lg mb-3">Team Lead</p>
                      <p className="text-gray-600 leading-relaxed">
                        Coordinating operations and ensuring exceptional service delivery across all housing projects
                      </p>
                    </div>
                  </div>

                  {/* Jordan J */}
                  <div className="group">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6 transform group-hover:scale-105 transition-all duration-500">
                      <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200">
                        <img 
                          src="/produtmanager.jpeg" 
                          alt="Jordan J. - Product Manager & Operations"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Jordan J.</h4>
                      <p className="text-primary font-semibold text-lg mb-3">Product Manager & Operations</p>
                      <p className="text-gray-600 leading-relaxed">
                        Overseeing product development and operational excellence in manufactured home solutions
                      </p>
                    </div>
                  </div>

                  {/* Karim Bhimani */}
                  <div className="group">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6 transform group-hover:scale-105 transition-all duration-500">
                      <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200">
                        <img 
                          src="/acquisitionn.jpeg" 
                          alt="Karim Bhimani - Acquisitions"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Karim Bhimani</h4>
                      <p className="text-primary font-semibold text-lg mb-3">Acquisitions</p>
                      <p className="text-gray-600 leading-relaxed">
                        Identifying and securing strategic land opportunities for affordable housing development
                      </p>
                    </div>
                  </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-gray-600">Homes Installed</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section ref={ctaRef} className="py-20 bg-primary text-white">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in ${ctaVisible ? 'visible' : ''}`}>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Ready to Find Your Affordable Home?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experienced team help you navigate the path to homeownership with confidence and ease.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="/contact">Contact Us to Learn More</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
