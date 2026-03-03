import { Play, Clock } from "lucide-react"
import Link from "next/link"

const placeholderEpisodes = [
  {
    id: 1,
    title: "Zaciatok cesty",
    season: 1,
    episode: 1,
    duration: "45 min",
    description: "Prvy krok do sveta Dana Dreva. Objavte pribehy, ktore vas pohltia.",
  },
  {
    id: 2,
    title: "Tajomstvo lesa",
    season: 1,
    episode: 2,
    duration: "42 min",
    description: "Hlboko v lese sa skryva nieco, co zmeni vsetko. Druha epizoda serie.",
  },
  {
    id: 3,
    title: "Navrat domov",
    season: 1,
    episode: 3,
    duration: "48 min",
    description: "Ked sa zdalo, ze je vsetko stratene, objavila sa nova nadej.",
  },
  {
    id: 4,
    title: "Posledna sanca",
    season: 1,
    episode: 4,
    duration: "50 min",
    description: "Finalova epizoda prvej sezony prinasa neoakavane zvrat.",
  },
]

export function FeaturedEpisodes() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 lg:px-8">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-1 text-sm font-medium uppercase tracking-widest text-primary">
            Odporucane
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Najnovsie epizody
          </h2>
        </div>
        <Link
          href="/epizody"
          className="hidden text-sm font-medium text-primary transition-colors hover:text-primary/80 md:block"
        >
          Zobrazit vsetky
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {placeholderEpisodes.map((ep) => (
          <article
            key={ep.id}
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/30"
          >
            {/* Placeholder thumbnail */}
            <div className="relative flex aspect-video items-center justify-center bg-secondary">
              <Play className="h-10 w-10 text-muted-foreground transition-colors group-hover:text-primary" />
              <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded bg-background/80 px-2 py-0.5 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {ep.duration}
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-2 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-primary">
                {"S" + ep.season + " E" + ep.episode}
              </p>
              <h3 className="text-sm font-semibold text-foreground">
                {ep.title}
              </h3>
              <p className="flex-1 text-xs leading-relaxed text-muted-foreground">
                {ep.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 text-center md:hidden">
        <Link
          href="/epizody"
          className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Zobrazit vsetky epizody
        </Link>
      </div>
    </section>
  )
}
