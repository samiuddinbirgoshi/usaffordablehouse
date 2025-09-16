'use client'

import React, { useState } from 'react'
import { useSmoothLoading } from '@/hooks/useSmoothLoading'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft, Mail, MapPin, Clock } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, EMAIL_TEMPLATE_PARAMS } from '@/config/emailjs'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  })

  const [headerRef, headerVisible] = useSmoothLoading(0.1)
  const [formRef, formVisible] = useSmoothLoading(0.1)
  const [infoRef, infoVisible] = useSmoothLoading(0.1)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
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
          interest: formData.interest,
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
        interest: '',
        message: ''
      })
      
    } catch (error) {
      console.error('Error sending email:', error)
      alert('There was an error sending your message. Please try again or contact us directly at info@usahllc.com')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="contact" />

      {/* Page Header */}
      <section ref={headerRef} className="bg-gradient-to-r from-primary to-primary/80 py-24">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in ${headerVisible ? 'visible' : ''}`}>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Ready to buy a home, secure land, or invest? Fill out the form below.
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

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div ref={formRef} className={`lg:col-span-2 fade-in ${formVisible ? 'visible' : ''}`}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-primary">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours to discuss your
                    affordable housing needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
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
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>


                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us more about your needs, timeline, budget, or any questions you have..."
                        rows={5}
                        className="w-full"
                      />
                    </div>

                    <Button type="submit" className="w-full md:w-auto px-8">
                      Send Message
                    </Button>

                    <p className="text-sm text-gray-500">
                      * Required fields. By submitting this form, you agree to be contacted by our team
                      regarding your affordable housing inquiry.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div ref={infoRef} className={`space-y-6 fade-in ${infoVisible ? 'visible' : ''}`}>
              {/* Contact Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-primary">Get in Touch</CardTitle>
                  <CardDescription>
                    Reach out to us directly using the information below.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">info@usahllc.com</div>
                      <div className="text-sm text-gray-600">Email us anytime</div>
                    </div>
                  </div>

                </CardContent>
              </Card>

              {/* Services Overview */}
              <Card className="bg-primary text-white">
                <CardHeader>
                  <CardTitle className="text-lg font-heading">How We Can Help</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li>• Home selection and pricing</li>
                    <li>• Land acquisition assistance</li>
                    <li>• Professional installation services</li>
                    <li>• Financing options and guidance</li>
                    <li>• Permit and inspection coordination</li>
                    <li>• Investment opportunity consultation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading text-primary">
                  What's included in your full-service package?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Our full-service package includes land acquisition, site preparation, permit pulling,
                  utility connections (wells/septic), and professional home installation. We handle
                  everything from start to finish.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading text-primary">
                  Do you offer financing options?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Yes! We partner with trusted lenders to offer competitive financing options for
                  home purchases, land acquisition, and investment properties. We'll help you find
                  the best rates for your situation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading text-primary">
                  How long does the installation process take?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  From land preparation to move-in ready, the process typically takes 4-8 weeks
                  depending on site conditions, permits, and home customization. We provide
                  detailed timelines upfront.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading text-primary">
                  What areas do you serve?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  We serve all of Central Florida and surrounding areas. Our team is familiar with
                  local regulations, permitting processes, and the best communities for affordable
                  housing placement.
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

export default ContactPage
