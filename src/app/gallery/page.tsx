'use client'

import React, { useState } from 'react'
import { useSmoothLoading } from '@/hooks/useSmoothLoading'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react'

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [headerRef, headerVisible] = useSmoothLoading(0.1)
  const [galleryRef, galleryVisible] = useSmoothLoading(0.1)
  const [ctaRef, ctaVisible] = useSmoothLoading(0.1)
  const [visibleCount, setVisibleCount] = useState(12)

  const galleryImages = [
    {
      id: 1,
      src: "https://s7d9.scene7.com/is/image/championhomes/RH2542B-Exterior-1",
      title: "RH2542B Exterior View",
      category: "Home Exterior"
    },
    {
      id: 2,
      src: "https://s7d9.scene7.com/is/image/championhomes/RH2542B-Exterior-6",
      title: "RH2542B Front View",
      category: "Home Exterior"
    },
    {
      id: 3,
      src: "https://s7d9.scene7.com/is/image/championhomes/Prime%202856H32P01%20Exterior%203%20copy",
      title: "Prime 2856H32P01 Exterior",
      category: "Home Exterior"
    },
    {
      id: 4,
      src: "https://s7d9.scene7.com/is/image/championhomes/2856256-gsm-exterior-2-copy",
      title: "Grand Slam 2856256 Exterior",
      category: "Home Exterior"
    },
    {
      id: 5,
      src: "https://s7d9.scene7.com/is/image/championhomes/Dublin%20kitchen%201",
      title: "Dublin Kitchen Interior",
      category: "Home Interior"
    },
    {
      id: 6,
      src: "https://s7d9.scene7.com/is/image/championhomes/RH2542B-Kitchen-2",
      title: "RH2542B Kitchen Design",
      category: "Home Interior"
    },
    {
      id: 7,
      src: "https://s7d9.scene7.com/is/image/championhomes/RH2542B-Living-Room-2",
      title: "RH2542B Living Room",
      category: "Home Interior"
    },
    {
      id: 8,
      src: "https://s7d9.scene7.com/is/image/championhomes/P2856H32P01-Kitchen-1",
      title: "Prime 2856H32P01 Kitchen",
      category: "Home Interior"
    },
    {
      id: 9,
      src: "https://s7d9.scene7.com/is/image/championhomes/RH2542B-Primary-Bedroom-1",
      title: "RH2542B Master Bedroom",
      category: "Home Interior"
    },
    {
      id: 10,
      src: "https://s7d9.scene7.com/is/image/championhomes/Dublin%20master%20bath",
      title: "Dublin Master Bathroom",
      category: "Home Interior"
    },
    {
      id: 11,
      src: "https://s7d9.scene7.com/is/image/championhomes/RH2542B-Primary-Bath",
      title: "RH2542B Primary Bathroom",
      category: "Home Interior"
    },
    {
      id: 12,
      src: "https://s7d9.scene7.com/is/image/championhomes/Dublin%20kitchen%20dining",
      title: "Dublin Kitchen Dining Area",
      category: "Home Interior"
    }
  ]

  const categories = ["All", "Home Exterior", "Home Interior"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    setVisibleCount(12)
  }

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
    let newIndex

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  const selectedImageData = filteredImages.find(img => img.id === selectedImage)

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="gallery" />

      {/* Page Header */}
      <section ref={headerRef} className="bg-gradient-to-r from-primary to-primary/80 py-24">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in ${headerVisible ? 'visible' : ''}`}>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            See examples of our affordable housing solutions in action.
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

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section ref={galleryRef} className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
            {filteredImages.slice(0, visibleCount).map((image) => (
              <div
                key={image.id}
                className={`cursor-pointer overflow-hidden bg-gray-200 aspect-[4/3] fade-in ${galleryVisible ? 'visible' : ''}`}
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
          {visibleCount < filteredImages.length && (
            <div className="text-center mt-8">
              <Button onClick={() => setVisibleCount((prev) => prev + 12)} size="lg">
                Load more
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image */}
            <img
              src={selectedImageData.src}
              alt={selectedImageData.title}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg font-semibold">{selectedImageData.title}</h3>
              <p className="text-sm text-gray-300">{selectedImageData.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-primary text-white">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in ${ctaVisible ? 'visible' : ''}`}>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you create your own affordable housing success story. From land acquisition
            to final installation, we're here to guide you every step of the way.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Interested? Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default GalleryPage
