import { Droplets, Sparkles, Car, ShieldCheck, Sofa, Gauge } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Premium Hand Wax",
    description: "A deep, protective wax finish applied by hand for a long-lasting mirror shine.",
  },
  {
    icon: Droplets,
    title: "Exterior Wash & Detail",
    description: "Foam wash, decontamination, and a thorough clean of every exterior surface.",
  },
  {
    icon: Sofa,
    title: "Interior Deep Clean",
    description: "Vacuum, steam clean, and condition seats, carpets, and dashboards.",
  },
  {
    icon: ShieldCheck,
    title: "Paint Protection",
    description: "Sealants and coatings that shield your paint from UV, dirt, and water spots.",
  },
  {
    icon: Car,
    title: "Full Detail Package",
    description: "The complete treatment — inside and out — for a like-new finish.",
  },
  {
    icon: Gauge,
    title: "Express Shine",
    description: "A quick, quality refresh when you need your car looking sharp in a hurry.",
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">What we offer</p>
          <h2 className="mt-2 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
            Detailing services built around you
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Choose a single treatment or a full package. Whatever you pick, we handle it wherever your car is parked.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold">
              <span className="text-muted-foreground">Standard cars from</span>
              <span className="text-primary">R750</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold">
              <span className="text-muted-foreground">Big cars &amp; SUVs from</span>
              <span className="text-primary">R950</span>
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <service.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
