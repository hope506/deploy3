import { Phone, Mail, Sparkles, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="size-4" />
          </span>
          <span className="font-display text-base font-bold tracking-tight">
            WaxWorks<span className="text-primary">Mobile</span>
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6">
          <a href="tel:0742753927" className="flex items-center gap-2 transition-colors hover:text-foreground">
            <Phone className="size-4 text-primary" />
            0742753927
          </a>
          <a href="tel:0637507343" className="flex items-center gap-2 transition-colors hover:text-foreground">
            <Phone className="size-4 text-primary" />
            063 750 7343
          </a>
          <a
            href="mailto:WaxWorksMobile@gmail.com"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Mail className="size-4 text-primary" />
            WaxWorksMobile@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" />
            Pretoria
          </span>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} WaxWorksMobile
        </p>
      </div>
    </footer>
  )
}
