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
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, EMAIL_TEMPLATE_PARAMS } from '@/config/emailjs'
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
  const [isLeadPopupOpen, setIsLeadPopupOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [leadFormData, setLeadFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    "https://www.idesignarch.com/wp-content/uploads/Modern-Rustic-Dream-Home-British-Columbia-Canada_1-1024x768.jpg",
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
      description: "Already own land? We handle the entire manufactured home installation process for you.",
      icon: Users
    },
    {
      title: "Home Purchase Only",
      description: "Choose from our selection of quality manufactured homes and handle installation yourself.",
      icon: CheckCircle2
    },
    {
      title: "We Buy Land",
      description: "Selling your property? We purchase land for affordable housing development projects.",
      icon: MapPin
    },
    {
      title: "Financing Options",
      description: "Flexible financing solutions for manufactured homes, land purchases, and housing investments.",
      icon: DollarSign
    }
  ]

  const galleryImages = [
    {
      id: 1,
      src: "https://s7d9.scene7.com/is/image/championhomes/RH2542B-Exterior-1",
      alt: "Modern manufactured home exterior",
      title: "Modern Manufactured Home Exterior"
    },
    {
      id: 2,
      src: "https://s7d9.scene7.com/is/image/championhomes/Prime%202856H32P01%20Exterior%203%20copy", 
      alt: "Manufactured home interior living room",
      title: "Manufactured Home Interior Living Room"
    },
    {
      id: 3,
      src: "https://s7d9.scene7.com/is/image/championhomes/2856256-gsm-exterior-2-copy",
      alt: "Manufactured home kitchen",
      title: "Manufactured Home Kitchen"
    },
    {
      id: 4,
      src: "https://s7d9.scene7.com/is/image/championhomes/Dublin%20kitchen%201",
      alt: "Manufactured home bedroom",
      title: "Manufactured Home Bedroom"
    },
    {
      id: 5,
      src: "https://s7d9.scene7.com/is/image/championhomes/2856256-gsm-exterior-2-copy",
      alt: "Manufactured home bathroom",
      title: "Manufactured Home Bathroom"
    },
    {
      id: 6,
      src: "https://s7d9.scene7.com/is/image/championhomes/Dublin%20kitchen%201",
      alt: "Manufactured home community",
      title: "Manufactured Home Community"
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

  const handleLeadInputChange = (field: string, value: string) => {
    setLeadFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
      
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: EMAIL_TEMPLATE_PARAMS.to_email
        }
      )
      
      console.log('Email sent successfully:', result)
      alert('Thank you for your inquiry! We will contact you within 24 hours.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      
    } catch (error) {
      console.error('Error sending email:', error)
      alert('There was an error sending your message. Please try again or contact us directly at info@usahllc.com')
    }
  }

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
      
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: leadFormData.name,
          from_email: leadFormData.email,
          phone: leadFormData.phone,
          message: leadFormData.message,
          to_email: EMAIL_TEMPLATE_PARAMS.to_email,
          form_type: "Let's Talk Lead Form"
        }
      )
      
      console.log('Lead email sent successfully:', result)
      alert('Thank you for your interest! We will contact you within 24 hours.')
      
      // Reset form and close popup
      setLeadFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setIsLeadPopupOpen(false)
      
    } catch (error) {
      console.error('Error sending lead email:', error)
      alert('There was an error sending your message. Please try again or contact us directly at info@usahllc.com')
    }
  }

  return (
    <div className="min-h-screen w-full bg-white">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
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
          <div className="w-full max-w-full sm:max-w-7xl mx-auto">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-white mb-6 md:mb-10 ml-0 md:ml-8">
              Affordable Manufactured Homes
              <span className="block text-white/90">& Land Solutions</span>
          </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 leading-relaxed font-normal ml-0 md:ml-8">
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
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-full sm:max-w-7xl mx-auto">
            <div className={`fade-in ${missionVisible ? 'visible' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We provide accessible housing solutions through affordable manufactured homes beginning with land acquisition to buildout and installation support for both future homeowners and investors.
              </p>
            </div>
            <div className={`aspect-[4/3] bg-gray-200 overflow-hidden shadow-lg fade-in ${missionVisible ? 'visible' : ''}`}>
              <img 
                src={heroImages[0]} 
                alt="Manufactured home community"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
                </div>
              </div>
            </div>
      </section>

      {/* About Us */}
      <section ref={aboutRef} className="py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-full sm:max-w-7xl mx-auto mb-16">
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
                We offer a wide range of models to fit any budget along with a team to help secure land, permitting, installation and financing.
              </p>
            </div>
          </div>
          
          <div className="max-w-full sm:max-w-7xl mx-auto">
            {/* Team Section - Executive Style */}
            <div className={`fade-in ${aboutVisible ? 'visible' : ''}`}>
              <div className="text-center mb-16">
                <h3 className="text-4xl font-heading font-bold text-gray-900 mb-8">Our Team</h3>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Meet the experienced professionals driving our mission to provide affordable housing solutions
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-full sm:max-w-6xl mx-auto">
            <div className={`text-center mb-12 fade-in ${featuresVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Quality Homes for
              <span className="block text-primary">Every Family</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-full sm:max-w-2xl mx-auto">
              We provide quality manufactured homes with professional installation and 
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
        <div className="max-w-full sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in ${galleryVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Our Past Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-full sm:max-w-3xl mx-auto">
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
        <div className="max-w-full sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-full sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 fade-in ${contactVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Get a Quote for Your
              <span className="block text-white/90">Dream Home Journey?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-full sm:max-w-3xl mx-auto">
              Let's discuss your affordable housing needs and create a customized solution that fits your budget and timeline.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className={`space-y-8 fade-in ${contactVisible ? 'visible' : ''}`}>

              <div className="flex items-start space-x-4 ml-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-white/80 mb-2">Get detailed information via email</p>
                  <a href="mailto:info@usahllc.com" className="text-white font-semibold text-lg hover:text-secondary transition-colors">
                    info@usahllc.com
                  </a>
                </div>
              </div>

              <div 
                className="flex items-start space-x-4 cursor-pointer hover:bg-white/10 p-4 rounded-lg transition-colors"
                onClick={() => setIsLeadPopupOpen(true)}
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Let's Talk</h3>
                  <p className="text-white/80 mb-2">Get personalized assistance with your housing needs</p>
                  <div className="flex justify-start">
                    <Button 
                      variant="outline" 
                      className="mt-2 bg-white/20 border-white/40 text-white hover:bg-white/30 mr-auto"
                    >
                      Contact Us
            </Button>
                  </div>
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
              <form onSubmit={handleSubmit} className="w-full space-y-6">
                <div className="w-full">
                      <label className="block text-sm font-medium text-gray-900 mb-2">Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                    className="w-full max-w-none bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:bg-white"
                    style={{ width: '100%' }}
                    />
                </div>

                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-900 mb-2">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full max-w-none bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:bg-white"
                    style={{ width: '100%' }}
                  />
                </div>


                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your housing needs, budget, timeline..."
                    rows={4}
                    className="w-full max-w-none bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:bg-white"
                    style={{ width: '100%' }}
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

      {/* Lead Capture Popup */}
      {isLeadPopupOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Let's Talk!</h2>
                <button 
                  onClick={() => setIsLeadPopupOpen(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">
                Tell us about your housing needs and we'll get back to you within 24 hours with personalized options.
              </p>

              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input
                    required
                    value={leadFormData.name}
                    onChange={(e) => handleLeadInputChange('name', e.target.value)}
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    required
                    type="email"
                    value={leadFormData.email}
                    onChange={(e) => handleLeadInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={leadFormData.phone}
                    onChange={(e) => handleLeadInputChange('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your needs
                  </label>
                  <Textarea
                    value={leadFormData.message}
                    onChange={(e) => handleLeadInputChange('message', e.target.value)}
                    placeholder="Budget range, timeline, family size, preferred location, etc."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <div className="flex gap-3">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsLeadPopupOpen(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
