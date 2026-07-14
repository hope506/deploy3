import { Phone, Mail, MessageCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="overflow-hidden rounded-2xl bg-primary px-6 py-12 text-primary-foreground md:px-12 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
              Ready to book your shine?
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
              Based in Pretoria, we come to your home or office. Call or message us to schedule a wax or detail, and
              we&apos;ll confirm a time that works for you.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/90">
              <MapPin className="size-4" />
              Serving Pretoria &amp; surrounds
            </p>

            <ul className="mx-auto mt-6 flex max-w-md flex-col gap-2 text-sm text-primary-foreground/90">
              <li className="flex items-center justify-between gap-4 rounded-lg bg-primary-foreground/10 px-4 py-2">
                <span>Starting price</span>
                <span className="font-semibold">R750</span>
              </li>
              <li className="flex items-center justify-between gap-4 rounded-lg bg-primary-foreground/10 px-4 py-2">
                <span>Big cars &amp; SUVs</span>
                <span className="font-semibold">R950</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button nativeButton={false} render={<a href="tel:0742753927" />} size="lg" variant="secondary">
                <Phone className="size-4" />
                0742753927
              </Button>
              <Button nativeButton={false} render={<a href="tel:0637507343" />} size="lg" variant="secondary">
                <Phone className="size-4" />
                063 750 7343
              </Button>
              <Button
                nativeButton={false}
                render={<a href="https://wa.me/27742753927" target="_blank" rel="noopener noreferrer" />}
                size="lg"
                variant="secondary"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </Button>
              <Button nativeButton={false} render={<a href="mailto:WaxWorksMobile@gmail.com" />} size="lg" variant="secondary">
                <Mail className="size-4" />
                Email
              </Button>
            </div>

            <p className="mt-6 text-sm text-primary-foreground/70">
              WaxWorksMobile@gmail.com &middot; 0742753927 &middot; 063 750 7343
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
