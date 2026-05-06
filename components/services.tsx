import Link from "next/link"
import { Wrench, Volume2, CircleDot, Cog, Zap, Shield, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Engine Repair",
    description: "Complete engine diagnostics, rebuilds, and repairs. We handle everything from routine maintenance to complex engine overhauls.",
    href: "/services/engine-repair"
  },
  {
    icon: Volume2,
    title: "Audio Systems",
    description: "Premium motorcycle audio installation and upgrades. Enjoy crystal-clear sound on every ride with our professional audio solutions.",
    href: "/services/audio-systems"
  },
  {
    icon: CircleDot,
    title: "Tires & Wheels",
    description: "Wide selection of top-brand motorcycle tires. Professional mounting, balancing, and alignment services.",
    href: "/services/tires-wheels"
  },
  {
    icon: Cog,
    title: "Custom Builds",
    description: "Transform your bike with custom modifications. From performance upgrades to aesthetic customizations.",
    href: "/services/custom-builds"
  },
  {
    icon: Zap,
    title: "Electrical Work",
    description: "Full electrical system diagnostics and repairs. LED upgrades, wiring, and custom lighting solutions.",
    href: "/services/electrical"
  },
  {
    icon: Shield,
    title: "Maintenance",
    description: "Regular maintenance to keep your motorcycle running smoothly. Oil changes, brake service, and tune-ups.",
    href: "/services/maintenance"
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">What We Offer</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h3>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              href={service.href}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group block"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                View Services <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
