import Image from "next/image"
import { Phone, Mail, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            <MapPin className="size-3.5 text-primary" />
            Based in Pretoria — we come to you
          </span>

          <h1 className="text-balance font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            A showroom shine, <span className="text-primary">delivered to your driveway</span>
          </h1>

          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            WaxWorksMobile is a fully mobile car waxing and detailing service based in Pretoria. We bring the tools,
            water, and expertise straight to you so your car looks its absolute best — no queues, no hassle.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button nativeButton={false} render={<a href="tel:0742753927" />} size="lg">
              <Phone className="size-4" />
              Book on 0742753927
            </Button>
            <Button nativeButton={false} render={<a href="mailto:WaxWorksMobile@gmail.com" />} size="lg" variant="outline">
              <Mail className="size-4" />
              Email us
            </Button>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="flex text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Trusted by drivers across Pretoria</p>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            <Image
              src="/images/hero-detailing.png"
              alt="A glossy dark blue car being hand-waxed and polished"
              width={720}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-border bg-card px-5 py-4 shadow-lg sm:block">
            <p className="font-display text-2xl font-bold text-primary">100%</p>
            <p className="text-xs text-muted-foreground">Mobile & convenient</p>
          </div>
        </div>
      </div>
    </section>
  )
}
