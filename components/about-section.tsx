import { Tv, ShieldCheck, CreditCard } from "lucide-react"

const features = [
  {
    icon: Tv,
    title: "Streamujte kedykolvek",
    description:
      "Vsetky epizody Dana Dreva dostupne na poziadanie. Sledujte na akomkolvek zariadeni.",
  },
  {
    icon: ShieldCheck,
    title: "Bezpecny ucet",
    description:
      "Vas ucet je chraneny modernym zabezpecenim. Registrujte sa a ziskajte pristup.",
  },
  {
    icon: CreditCard,
    title: "Jednoduchy nakup",
    description:
      "Kupte si pristup k exkluzivnemu obsahu jednoducho cez nas kosik.",
  },
]

export function AboutSection() {
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-1 text-sm font-medium uppercase tracking-widest text-primary">
            Preco Dan Drevo
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Vsetko, co potrebujete
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center gap-4 rounded-lg border border-border bg-background p-8 text-center transition-colors hover:border-primary/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
