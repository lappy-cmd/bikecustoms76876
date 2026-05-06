import { Cog } from "lucide-react"
import { ServicePageLayout, type ServiceItem } from "@/components/service-page-layout"

const services: ServiceItem[] = [
  {
    name: "Custom Paint Consultation",
    description: "Design consultation for custom paint schemes, graphics, and color matching.",
    price: "$99",
    duration: "1 hour",
    availability: ["Mon 2PM", "Thu 2PM", "Sat 11AM"]
  },
  {
    name: "Handlebar Swap",
    description: "New handlebar installation with cable and brake line adjustments as needed.",
    price: "$249+",
    duration: "3-4 hours",
    availability: ["Tue 9AM", "Fri 9AM"]
  },
  {
    name: "Exhaust System Upgrade",
    description: "Full exhaust system installation with proper tuning and fuel mapping.",
    price: "$499+",
    duration: "3-5 hours",
    availability: ["Wed 9AM", "Sat 9AM"],
    popular: true
  },
  {
    name: "Suspension Upgrade",
    description: "Fork and/or rear shock upgrade with proper setup and adjustment for your riding style.",
    price: "$699+",
    duration: "4-6 hours",
    availability: ["By Appointment", "Tue", "Thu"]
  },
  {
    name: "Full Cafe Racer Conversion",
    description: "Complete cafe racer build including seat, bars, controls, and styling modifications.",
    price: "$3,500+",
    duration: "2-4 weeks",
    availability: ["Consultation Required"]
  },
  {
    name: "Bobber/Chopper Build",
    description: "Custom bobber or chopper build with frame modifications, custom tank, and styling.",
    price: "$5,000+",
    duration: "4-8 weeks",
    availability: ["Consultation Required"]
  }
]

export default function CustomBuildsPage() {
  return (
    <ServicePageLayout
      title="Custom Builds"
      subtitle="Customization"
      description="Transform your motorcycle into a one-of-a-kind machine. From subtle modifications to complete custom builds, our craftsmen bring your vision to life with precision and attention to detail."
      icon={Cog}
      services={services}
      heroImage="/images/gallery-1.jpg"
    />
  )
}
