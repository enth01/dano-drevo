import { Film } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 md:flex-row md:justify-between lg:px-8">
        <div className="flex items-center gap-2">
          <Film className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-foreground">Dan Drevo</span>
        </div>

        <nav className="flex gap-6">
          <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Domov
          </Link>
          <Link href="/epizody" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Epizody
          </Link>
          <Link href="/kosik" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Kosik
          </Link>
          <Link href="/prihlasenie" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Prihlasenie
          </Link>
        </nav>

        <p className="text-xs text-muted-foreground">
          {'© 2026 Dan Drevo. Vsetky prava vyhradene.'}
        </p>
      </div>
    </footer>
  )
}
