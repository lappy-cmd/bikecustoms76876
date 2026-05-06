const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Custom motorcycle build" },
  { src: "/images/gallery-2.jpg", alt: "Engine repair work" },
  { src: "/images/gallery-3.jpg", alt: "Audio system installation" },
  { src: "/images/gallery-4.jpg", alt: "Tire replacement service" },
  { src: "/images/gallery-5.jpg", alt: "Custom paint job" },
  { src: "/images/gallery-6.jpg", alt: "Motorcycle detailing" },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Gallery</h3>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-foreground font-semibold text-lg">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
