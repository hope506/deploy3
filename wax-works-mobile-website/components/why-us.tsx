import { Clock, Home, Leaf, ThumbsUp } from "lucide-react"

const reasons = [
  {
    icon: Home,
    title: "Fully Mobile",
    description: "We arrive fully equipped — no need to drive anywhere or wait in line.",
  },
  {
    icon: Clock,
    title: "Saves You Time",
    description: "Get your car detailed while you work, relax, or run errands.",
  },
  {
    icon: Leaf,
    title: "Care & Quality",
    description: "Premium products and careful methods that are gentle on your paint.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction First",
    description: "We are not done until your car looks exactly the way it should.",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why WaxWorksMobile</p>
          <h2 className="mt-2 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
            The easiest way to keep your car looking new
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col items-center text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-accent/20 text-primary">
                <reason.icon className="size-7" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
