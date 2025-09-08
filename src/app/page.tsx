'use client'

import React, { useState, useEffect } from 'react'
import { useSmoothLoading } from '@/hooks/useSmoothLoading'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Home, 
  Users, 
  CheckCircle2, 
  MapPin, 
  DollarSign, 
  Star, 
  ArrowRight, 
  Mail, 
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Smooth loading animations
  const [heroRef, heroVisible] = useSmoothLoading(0.1)
  const [missionRef, missionVisible] = useSmoothLoading(0.1)
  const [aboutRef, aboutVisible] = useSmoothLoading(0.1)
  const [featuresRef, featuresVisible] = useSmoothLoading(0.1)
  const [galleryRef, galleryVisible] = useSmoothLoading(0.1)
  const [servicesRef, servicesVisible] = useSmoothLoading(0.1)
  const [contactRef, contactVisible] = useSmoothLoading(0.1)

  const openLightbox = (imageId: number) => {
    const imageIndex = galleryImages.findIndex(img => img.id === imageId)
    if (imageIndex !== -1) {
      setCurrentImageIndex(imageIndex)
      setIsLightboxOpen(true)
    }
  }

  const heroImages = [
    "https://s7d9.scene7.com/is/image/championhomes/RH2542B-Exterior-1",
    "https://s7d9.scene7.com/is/image/championhomes/RH2542B-Exterior-6",
    "https://s7d9.scene7.com/is/image/championhomes/Prime%202856H32P01%20Exterior%203%20copy",
    "https://s7d9.scene7.com/is/image/championhomes/2856256-gsm-exterior-2-copy"
  ]

  const features = [
    {
      icon: Home,
      title: "Quality Homes",
      description: "Well-built manufactured homes that meet all safety standards and come with quality materials."
    },
    {
      icon: Users,
      title: "Expert Installation",
      description: "Our experienced team handles the complete setup process so your home is ready to move in."
    },
    {
      icon: CheckCircle2,
      title: "Full Service",
      description: "We take care of everything from finding land to final installation - one less thing to worry about."
    },
    {
      icon: MapPin,
      title: "Land Solutions",
      description: "We help you find the right piece of land for your new home or work with land you already own."
    }
  ]


  const services = [
    {
      title: "Full-Cycle Solution",
      description: "Complete service from land acquisition to final installation. We handle permits, utilities, and professional setup.",
      icon: Home
    },
    {
      title: "Landowners Full Service", 
      description: "Already own land? We handle the entire mobile home installation process for you.",
      icon: Users
    },
    {
      title: "Home Purchase Only",
      description: "Choose from our selection of quality mobile homes and handle installation yourself.",
      icon: CheckCircle2
    },
    {
      title: "We Buy Land",
      description: "Selling your property? We purchase land for affordable housing development projects.",
      icon: MapPin
    },
    {
      title: "Financing Options",
      description: "Flexible financing solutions for mobile homes, land purchases, and housing investments.",
      icon: DollarSign
    }
  ]

  const galleryImages = [
    {
      id: 1,
      src: "https://s7d9.scene7.com/is/image/championhomes/RH2542B-Exterior-1",
      alt: "Modern mobile home exterior",
      title: "Modern Mobile Home Exterior"
    },
    {
      id: 2,
      src: "https://s7d9.scene7.com/is/image/championhomes/Prime%202856H32P01%20Exterior%203%20copy", 
      alt: "Mobile home interior living room",
      title: "Mobile Home Interior Living Room"
    },
    {
      id: 3,
      src: "https://s7d9.scene7.com/is/image/championhomes/2856256-gsm-exterior-2-copy",
      alt: "Mobile home kitchen",
      title: "Mobile Home Kitchen"
    },
    {
      id: 4,
      src: "https://s7d9.scene7.com/is/image/championhomes/Dublin%20kitchen%201",
      alt: "Mobile home bedroom",
      title: "Mobile Home Bedroom"
    },
    {
      id: 5,
      src: "https://s7d9.scene7.com/is/image/championhomes/2856256-gsm-exterior-2-copy",
      alt: "Mobile home bathroom",
      title: "Mobile Home Bathroom"
    },
    {
      id: 6,
      src: "https://s7d9.scene7.com/is/image/championhomes/Dublin%20kitchen%201",
      alt: "Mobile home community",
      title: "Mobile Home Community"
    }
  ]



  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(slideInterval)
  }, [heroImages.length])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Champion Homes ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Dark overlay for text visibility */}
          <div className="absolute inset-0 bg-black/30"></div>
            </div>

        {/* Content */}
        <div 
          ref={heroRef}
          className={`relative z-10 w-full px-4 sm:px-6 lg:px-8 text-left fade-in ${heroVisible ? 'visible' : ''}`}
        >
          <div className="max-w-4xl ml-0 md:ml-8">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-white mb-6 md:mb-10">
              Affordable Mobile Homes
              <span className="block text-white/90">& Land Solutions</span>
          </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-normal">
              Buy, Install, and Secure Your Future Home
            </p>

          </div>
            </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-gray-400'
                }`}
              />
            ))}
            </div>
          </div>
      </section>

      {/* Our Mission */}
      <section ref={missionRef} className="py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
            <div className={`fade-in ${missionVisible ? 'visible' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At U.S. Affordable Housing, we are dedicated to making homeownership achievable for everyone in Central Florida's challenging market. We provide accessible housing solutions through affordable mobile homes, expert installation, and land acquisition support for both families and investors.
              </p>
            </div>
            <div className={`aspect-[4/3] bg-gray-200 overflow-hidden shadow-lg fade-in ${missionVisible ? 'visible' : ''}`}>
              <img 
                src={heroImages[0]} 
                alt="Mobile home community"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
                </div>
              </div>
            </div>
      </section>

      {/* About Us */}
      <section ref={aboutRef} className="py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
            <div className={`order-2 lg:order-1 fade-in ${aboutVisible ? 'visible' : ''}`}>
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop" 
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
                With over 10 years of experience in real estate and affordable housing, U.S. Affordable Housing is your one-stop shop for affordable homes. We offer a wide range of homes to fit any budget, along with professional installation, land rental or acquisition assistance, and financing. Our team is committed to simplifying the process for end buyers seeking their dream home and investors looking for opportunities in Central Florida's housing market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-12 fade-in ${featuresVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Quality Homes for
              <span className="block text-primary">Every Family</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide quality mobile homes with professional installation and 
              comprehensive support to make homeownership accessible and affordable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 fade-in ${featuresVisible ? 'visible' : ''}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Our Past Projects Section */}
      <section ref={galleryRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in ${galleryVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Our Past Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See examples of our affordable housing solutions in action
            </p>
                 </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.slice(0, 6).map((image, index) => (
              <div
                key={image.id}
                className={`cursor-pointer overflow-hidden bg-gray-200 aspect-square fade-in ${galleryVisible ? 'visible' : ''}`}
                onClick={() => openLightbox(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
                 </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/gallery">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 fade-in ${servicesVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
              Complete Housing
              <span className="block text-primary">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From finding the perfect home to securing the ideal land, we provide end-to-end real estate services that make your dreams a reality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className={`space-y-4 fade-in ${servicesVisible ? 'visible' : ''}`}>
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`group fade-in ${servicesVisible ? 'visible' : ''}`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary/5 rounded-full flex items-center justify-center">
                        <service.icon className="w-4 h-4 text-primary" />
                      </div>
                </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-heading font-bold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  {index < services.length - 1 && (
                    <div className="mt-3 border-b border-gray-100"></div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="aspect-[3/2] bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden relative group">
                <img 
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentImageIndex((prev) => prev === 0 ? galleryImages.length - 1 : prev - 1)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                
                <button
                  onClick={() => setCurrentImageIndex((prev) => prev === galleryImages.length - 1 ? 0 : prev + 1)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {galleryImages.length}
                </div>
                </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {galleryImages.slice(0, 6).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
          </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                </div>
              </div>
        </div>
      </section>


      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 fade-in ${contactVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Get a Quote for Your
              <span className="block text-white/90">Dream Home Journey?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Let's discuss your affordable housing needs and create a customized solution that fits your budget and timeline.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className={`space-y-8 fade-in ${contactVisible ? 'visible' : ''}`}>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-white/80 mb-2">Get detailed information via email</p>
                  <a href="mailto:info@usaffordablehousing.com" className="text-white font-semibold text-lg hover:text-secondary transition-colors">
                    info@usaffordablehousing.com
                  </a>
                </div>
          </div>

            </div>

            <Card className={`bg-white shadow-xl fade-in ${contactVisible ? 'visible' : ''}`}>
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 text-center">Quick Inquiry</CardTitle>
                <CardDescription className="text-gray-600 text-center">
                  Fill out this form and we'll contact you within 2 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-900 mb-2">Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                        className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                      className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:bg-white"
                  />
                </div>


                <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your housing needs, budget, timeline..."
                    rows={4}
                      className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:bg-white"
                  />
                </div>

                <Button type="submit" className="w-full">
                    Send My Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
