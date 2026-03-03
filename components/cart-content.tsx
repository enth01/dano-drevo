import { ShoppingCart } from "lucide-react"
import Link from "next/link"

export function CartContent() {
  return (
    <div className="flex flex-col items-center gap-6 rounded-lg border border-border bg-card px-6 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
        <ShoppingCart className="h-8 w-8 text-muted-foreground" />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-foreground">
          Vas kosik je prazdny
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Pridajte epizody do kosika a nakupte exkluzivny obsah.
        </p>
      </div>
      <Link
        href="/epizody"
        className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Prehliadat epizody
      </Link>
    </div>
  )
}
