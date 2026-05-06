import { Zap } from "lucide-react"
import { ServicePageLayout, type ServiceItem } from "@/components/service-page-layout"

const services: ServiceItem[] = [
  {
    name: "Electrical Diagnostic",
    description: "Complete electrical system testing including battery, charging system, and wiring inspection.",
    price: "$89",
    duration: "1-2 hours",
    availability: ["Mon-Sat 9AM-4PM"],
    popular: true
  },
  {
    name: "LED Headlight Upgrade",
    description: "Bright, efficient LED headlight conversion with proper aiming and wiring.",
    price: "$199+",
    duration: "1-2 hours",
    availability: ["Daily 10AM-4PM"]
  },
  {
    name: "LED Turn Signal Kit",
    description: "Complete LED turn signal upgrade with load resistors and flasher relay.",
    price: "$149",
    duration: "1-2 hours",
    availability: ["Mon 2PM", "Wed 2PM", "Fri 10AM"]
  },
  {
    name: "Accessory Wiring",
    description: "Professional installation of heated grips, USB ports, auxiliary lights, or other accessories.",
    price: "$99+",
    duration: "1-3 hours",
    availability: ["Tue 9AM", "Thu 9AM", "Sat 2PM"]
  },
  {
    name: "Stator/Rectifier Replacement",
    description: "Charging system repair including stator and rectifier replacement.",
    price: "$349+",
    duration: "3-4 hours",
    availability: ["By Appointment", "Wed", "Fri"]
  },
  {
    name: "Full Wiring Harness",
    description: "Complete rewiring or harness replacement for vintage bikes or custom builds.",
    price: "$799+",
    duration: "1-2 days",
    availability: ["By Appointment Only"]
  }
]

export default function ElectricalPage() {
  return (
    <ServicePageLayout
      title="Electrical Work"
      subtitle="Electrical Services"
      description="From simple LED upgrades to complete rewiring projects, our technicians handle all motorcycle electrical work. We diagnose and repair charging issues, lighting problems, and custom electrical installations."
      icon={Zap}
      services={services}
      heroImage="/images/gallery-5.jpg"
    />
  )
}
