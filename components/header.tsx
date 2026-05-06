"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, MapPin, Clock } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#1a1a2e] border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>(510) 555-0199</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Fremont, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Mon-Sat: 9AM - 6PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">BC</span>
              </div>
              <div>
                <span className="text-2xl font-bold tracking-wider text-foreground">BIKECUSTOMS</span>
                <p className="text-xs text-muted-foreground tracking-wide">MOTORCYCLE SPECIALISTS</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
                Services
              </Link>
              <Link href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </Link>
              <Link href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium">
                Gallery
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </Link>
              <Link 
                href="/#contact" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded font-semibold transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-4 flex flex-col gap-4">
              <Link href="#home" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Home
              </Link>
              <Link href="#services" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Services
              </Link>
              <Link href="#about" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                About
              </Link>
              <Link href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Gallery
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Contact
              </Link>
              <Link 
                href="#contact" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded font-semibold transition-colors text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
