import Link from "next/link"
import { ArrowLeft, Clock, Calendar, CheckCircle } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ServiceItem {
  name: string
  description: string
  price: string
  duration: string
  availability: string[]
  popular?: boolean
}

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  services: ServiceItem[]
  heroImage: string
}

export function ServicePageLayout({ 
  title, 
  subtitle, 
  description, 
  icon: Icon,
  services, 
  heroImage 
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-primary text-sm uppercase tracking-widest font-semibold">{subtitle}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">{title}</h1>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>
        </div>
      </section>

      {/* Services/Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Available Services & Pricing</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-card border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 ${
                  service.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                }`}
              >
                {service.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  
                  <div className="text-3xl font-bold text-primary mb-4">{service.price}</div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">Duration: {service.duration}</span>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Available Slots:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.availability.map((slot, slotIndex) => (
                        <span 
                          key={slotIndex}
                          className="bg-secondary text-foreground text-xs px-3 py-1 rounded-full"
                        >
                          {slot}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href="/#contact"
                    className="mt-6 w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Need a Custom Quote?</h2>
          <p className="text-muted-foreground mb-8">
            Every motorcycle is unique. Contact us for a personalized assessment and quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded font-semibold transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link 
              href="tel:+15105550199"
              className="bg-transparent border-2 border-foreground hover:border-primary hover:text-primary text-foreground px-8 py-4 rounded font-semibold transition-colors"
            >
              Call (510) 555-0199
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BIKECUSTOMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
