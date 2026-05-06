import { CircleDot } from "lucide-react"
import { ServicePageLayout, type ServiceItem } from "@/components/service-page-layout"

const services: ServiceItem[] = [
  {
    name: "Tire Mount & Balance",
    description: "Professional mounting and computer balancing of your new tires. Price per tire.",
    price: "$45",
    duration: "30-45 min",
    availability: ["Mon-Sat 9AM-5PM"],
    popular: true
  },
  {
    name: "Front Tire Package",
    description: "Quality sport-touring front tire with installation and balancing included.",
    price: "$199+",
    duration: "1 hour",
    availability: ["Daily 9AM-4PM"]
  },
  {
    name: "Rear Tire Package",
    description: "Quality sport-touring rear tire with installation and balancing included.",
    price: "$249+",
    duration: "1 hour",
    availability: ["Daily 9AM-4PM"]
  },
  {
    name: "Full Tire Set (Front & Rear)",
    description: "Complete front and rear tire replacement with premium tires, mounting, and balancing.",
    price: "$399+",
    duration: "2 hours",
    availability: ["Mon 9AM", "Wed 9AM", "Fri 9AM", "Sat 10AM"]
  },
  {
    name: "Wheel Bearing Service",
    description: "Inspection and replacement of wheel bearings for smooth, safe riding.",
    price: "$149",
    duration: "2-3 hours",
    availability: ["Tue 10AM", "Thu 10AM"]
  },
  {
    name: "Spoke Wheel True & Tension",
    description: "Complete spoke wheel truing, tension adjustment, and inspection for vintage and custom bikes.",
    price: "$89",
    duration: "1-2 hours",
    availability: ["Wed 2PM", "Sat 2PM"]
  }
]

export default function TiresWheelsPage() {
  return (
    <ServicePageLayout
      title="Tires & Wheels"
      subtitle="Tire Services"
      description="We stock a wide selection of top-brand motorcycle tires including Michelin, Pirelli, Dunlop, and Bridgestone. Our professional mounting and balancing ensures a smooth, safe ride every time."
      icon={CircleDot}
      services={services}
      heroImage="/images/gallery-4.jpg"
    />
  )
}
