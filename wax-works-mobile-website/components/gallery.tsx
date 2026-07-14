import Image from "next/image"

const images = [
  { src: "/images/gallery-wax.png", alt: "Hand applying wax to a glossy black car panel" },
  { src: "/images/gallery-interior.png", alt: "Spotless clean car interior after detailing" },
  { src: "/images/gallery-mobile.png", alt: "Mobile detailing setup washing an SUV in a driveway" },
]

export function Gallery() {
  return (
    <section id="gallery" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our work</p>
          <h2 className="mt-2 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
            Results that speak for themselves
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, i) => (
            <div
              key={image.src}
              className={`overflow-hidden rounded-xl border border-border ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={450}
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
