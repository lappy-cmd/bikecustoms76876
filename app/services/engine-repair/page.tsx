import { Wrench } from "lucide-react"
import { ServicePageLayout, type ServiceItem } from "@/components/service-page-layout"

const services: ServiceItem[] = [
  {
    name: "Basic Engine Tune-Up",
    description: "Spark plugs, air filter, valve adjustment, and carburetor sync for optimal performance.",
    price: "$149",
    duration: "2-3 hours",
    availability: ["Mon 9AM", "Tue 2PM", "Wed 10AM", "Fri 9AM"]
  },
  {
    name: "Engine Diagnostic",
    description: "Comprehensive computerized diagnostics to identify issues with sensors, fuel, and ignition systems.",
    price: "$89",
    duration: "1 hour",
    availability: ["Daily 9AM-5PM"],
    popular: true
  },
  {
    name: "Oil & Filter Change",
    description: "Premium synthetic oil change with new filter. Includes multi-point inspection.",
    price: "$75",
    duration: "30-45 min",
    availability: ["Mon-Sat 9AM-5PM"]
  },
  {
    name: "Top End Rebuild",
    description: "Complete cylinder head service including valve seals, guides, and gaskets.",
    price: "$800+",
    duration: "2-3 days",
    availability: ["By Appointment", "Wed", "Thu"]
  },
  {
    name: "Complete Engine Rebuild",
    description: "Full engine teardown, inspection, and rebuild with new bearings, seals, and gaskets.",
    price: "$2,500+",
    duration: "5-7 days",
    availability: ["By Appointment Only"]
  },
  {
    name: "Clutch Replacement",
    description: "Complete clutch assembly replacement including plates, springs, and basket inspection.",
    price: "$350+",
    duration: "3-4 hours",
    availability: ["Tue 9AM", "Thu 9AM", "Sat 10AM"]
  }
]

export default function EngineRepairPage() {
  return (
    <ServicePageLayout
      title="Engine Repair"
      subtitle="Performance Services"
      description="From routine maintenance to complete engine overhauls, our certified technicians have the expertise to keep your motorcycle running at peak performance. We work on all makes and models."
      icon={Wrench}
      services={services}
      heroImage="/images/gallery-2.jpg"
    />
  )
}
