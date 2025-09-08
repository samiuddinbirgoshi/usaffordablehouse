'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  currentPage?: string
}

const Header = ({ currentPage = '' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-heading font-bold text-primary">
              U.S. Affordable Housing
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`font-medium transition-colors ${
                currentPage === 'home' ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`font-medium transition-colors ${
                currentPage === 'about' ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/homes" 
              className={`font-medium transition-colors ${
                currentPage === 'homes' ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Homes
            </Link>
            <Link 
              href="/gallery" 
              className={`font-medium transition-colors ${
                currentPage === 'gallery' ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Gallery
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium transition-colors ${
                currentPage === 'contact' ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2 font-medium transition-colors ${
                  currentPage === 'home' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 font-medium transition-colors ${
                  currentPage === 'about' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/homes"
                className={`block px-3 py-2 font-medium transition-colors ${
                  currentPage === 'homes' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Homes
              </Link>
              <Link
                href="/gallery"
                className={`block px-3 py-2 font-medium transition-colors ${
                  currentPage === 'gallery' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 font-medium transition-colors ${
                  currentPage === 'contact' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
