import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-motorcycle.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-primary">BIKECUSTOMS</span>
            <br />
            <span className="text-foreground">Motorcycle Repairs & Service</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            At Bike Customs, your premier Fremont motorcycle shop, we offer a variety of services 
            to keep your bike in top shape. Our expertise includes engine repair, installing 
            high-quality motorcycle audio systems, and providing a selection of reliable motorcycle tires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href="/services/engine-repair" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded font-semibold text-lg transition-colors inline-block"
            >
              Our Services
            </Link>
            <Link 
              href="/#contact" 
              className="bg-transparent border-2 border-foreground hover:border-primary hover:text-primary text-foreground px-8 py-4 rounded font-semibold text-lg transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
