import Image from "next/image"
import Link from "next/link"
import { Play, Info } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Dan Drevo - Streamovacia platforma"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 lg:px-8">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
          Nova sezona dostupna
        </p>
        <h1 className="max-w-2xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Dan Drevo
        </h1>
        <p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
          Objavte svet epizod Dana Dreva. Sledujte, nakupujte a uzivajte si
          exkluzivny obsah na jednom mieste.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/epizody"
            className="flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Play className="h-4 w-4" />
            Sledovat epizody
          </Link>
          <Link
            href="/prihlasenie"
            className="flex items-center gap-2 rounded-md border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            <Info className="h-4 w-4" />
            Viac informacii
          </Link>
        </div>
      </div>
    </section>
  )
}
