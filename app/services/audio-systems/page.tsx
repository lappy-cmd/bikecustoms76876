import { Volume2 } from "lucide-react"
import { ServicePageLayout, type ServiceItem } from "@/components/service-page-layout"

const services: ServiceItem[] = [
  {
    name: "Basic Speaker Install",
    description: "Installation of handlebar or fairing-mounted speakers with basic wiring and amp connection.",
    price: "$199",
    duration: "2-3 hours",
    availability: ["Mon 10AM", "Wed 10AM", "Fri 2PM"]
  },
  {
    name: "Premium Audio Package",
    description: "Full Rockford Fosgate or JBL speaker system with amplifier, Bluetooth receiver, and professional tuning.",
    price: "$899",
    duration: "4-5 hours",
    availability: ["Tue 9AM", "Thu 9AM"],
    popular: true
  },
  {
    name: "Saddlebag Speaker Kit",
    description: "High-quality speakers installed in saddlebags with waterproof enclosures and wiring.",
    price: "$449",
    duration: "3-4 hours",
    availability: ["Mon 2PM", "Wed 2PM", "Sat 10AM"]
  },
  {
    name: "Bluetooth Module Install",
    description: "Add Bluetooth connectivity to your existing audio system for wireless streaming.",
    price: "$149",
    duration: "1-2 hours",
    availability: ["Daily 9AM-4PM"]
  },
  {
    name: "Amplifier Upgrade",
    description: "High-powered amplifier installation to drive your speakers with crystal-clear sound at any speed.",
    price: "$299",
    duration: "2-3 hours",
    availability: ["Tue 2PM", "Thu 2PM", "Fri 10AM"]
  },
  {
    name: "Complete Audio Overhaul",
    description: "Full system upgrade including head unit, 4-channel amp, speakers, and custom wiring with sound deadening.",
    price: "$1,499+",
    duration: "Full day",
    availability: ["By Appointment", "Sat"]
  }
]

export default function AudioSystemsPage() {
  return (
    <ServicePageLayout
      title="Audio Systems"
      subtitle="Sound Solutions"
      description="Experience crystal-clear audio on every ride. We specialize in premium motorcycle audio installations featuring top brands like Rockford Fosgate, JBL, and Hertz. Enjoy your music at highway speeds."
      icon={Volume2}
      services={services}
      heroImage="/images/gallery-3.jpg"
    />
  )
}
