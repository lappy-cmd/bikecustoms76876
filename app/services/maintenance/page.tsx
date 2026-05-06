import { Shield } from "lucide-react"
import { ServicePageLayout, type ServiceItem } from "@/components/service-page-layout"

const services: ServiceItem[] = [
  {
    name: "Basic Service Package",
    description: "Oil change, filter, chain adjustment, and safety inspection. Keep your bike healthy.",
    price: "$129",
    duration: "1-2 hours",
    availability: ["Mon-Sat 9AM-4PM"],
    popular: true
  },
  {
    name: "Full Service Package",
    description: "Complete service including oil, filters, plugs, coolant, brake fluid, and full inspection.",
    price: "$299",
    duration: "3-4 hours",
    availability: ["Mon 9AM", "Wed 9AM", "Fri 9AM", "Sat 10AM"]
  },
  {
    name: "Brake Service",
    description: "Brake pad replacement, fluid flush, rotor inspection, and caliper cleaning.",
    price: "$149+",
    duration: "1-2 hours",
    availability: ["Daily 10AM-4PM"]
  },
  {
    name: "Chain & Sprocket Service",
    description: "Chain and sprocket inspection, cleaning, lubrication, or replacement as needed.",
    price: "$49+",
    duration: "30 min - 2 hours",
    availability: ["Mon-Sat 9AM-5PM"]
  },
  {
    name: "Coolant System Service",
    description: "Complete coolant flush, thermostat check, and hose inspection.",
    price: "$89",
    duration: "1 hour",
    availability: ["Tue 2PM", "Thu 2PM", "Sat 2PM"]
  },
  {
    name: "Winterization Package",
    description: "Prepare your bike for storage: fuel stabilizer, battery tender hookup, and protective treatment.",
    price: "$99",
    duration: "1 hour",
    availability: ["Oct-Dec", "By Appointment"]
  }
]

export default function MaintenancePage() {
  return (
    <ServicePageLayout
      title="Maintenance",
      subtitle="Regular Service"
      description="Regular maintenance is key to a reliable, long-lasting motorcycle. Our service packages are designed to keep your bike running smoothly mile after mile. We follow manufacturer specifications for all makes and models."
      icon={Shield}
      services={services}
      heroImage="/images/gallery-6.jpg"
    />
  )
}
