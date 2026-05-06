import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0d0d1a] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">BC</span>
              </div>
              <div>
                <span className="text-xl font-bold tracking-wider text-foreground">BIKECUSTOMS</span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your premier destination for motorcycle repairs, customization, and service in Fremont, CA.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/engine-repair" className="text-muted-foreground hover:text-primary transition-colors">
                  Engine Repair
                </Link>
              </li>
              <li>
                <Link href="/services/audio-systems" className="text-muted-foreground hover:text-primary transition-colors">
                  Audio Systems
                </Link>
              </li>
              <li>
                <Link href="/services/tires-wheels" className="text-muted-foreground hover:text-primary transition-colors">
                  Tires & Wheels
                </Link>
              </li>
              <li>
                <Link href="/services/custom-builds" className="text-muted-foreground hover:text-primary transition-colors">
                  Custom Builds
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-muted-foreground hover:text-primary transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Contact Info</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>123 Auto Row Drive</li>
              <li>Fremont, CA 94538</li>
              <li className="pt-2">(510) 555-0199</li>
              <li>info@bikecustoms.com</li>
              <li className="pt-2">
                Mon-Fri: 9AM - 6PM<br />
                Sat: 10AM - 4PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Bike Customs. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
