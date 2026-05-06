import { CheckCircle } from "lucide-react"
import Link from "next/link"

const features = [
  "Experienced certified technicians",
  "State-of-the-art diagnostic equipment",
  "Quality parts and accessories",
  "Competitive pricing",
  "Fast turnaround times",
  "Satisfaction guaranteed"
]

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/about-shop.jpg" 
                alt="Bike Customs motorcycle shop"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden md:block">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm uppercase tracking-wide">Years Experience</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Motorcycle Experts in Fremont
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Bike Customs, we&apos;re passionate about motorcycles. Our team of skilled technicians 
              brings years of experience and dedication to every job, ensuring your bike receives 
              the best possible care.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you need routine maintenance, complex repairs, or custom modifications, 
              we have the expertise and equipment to get the job done right. We work on all 
              makes and models, treating each motorcycle as if it were our own.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Link 
              href="#contact" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded font-semibold text-lg transition-colors inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
