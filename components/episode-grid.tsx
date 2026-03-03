import { Play, Clock, ShoppingCart } from "lucide-react"

const episodes = [
  { id: 1, title: "Zaciatok cesty", season: 1, episode: 1, duration: "45 min", price: "2.99" },
  { id: 2, title: "Tajomstvo lesa", season: 1, episode: 2, duration: "42 min", price: "2.99" },
  { id: 3, title: "Navrat domov", season: 1, episode: 3, duration: "48 min", price: "2.99" },
  { id: 4, title: "Posledna sanca", season: 1, episode: 4, duration: "50 min", price: "2.99" },
  { id: 5, title: "Nove horizonty", season: 2, episode: 1, duration: "44 min", price: "3.49" },
  { id: 6, title: "Stratena mapa", season: 2, episode: 2, duration: "46 min", price: "3.49" },
  { id: 7, title: "Temny les", season: 2, episode: 3, duration: "43 min", price: "3.49" },
  { id: 8, title: "Svetlo na konci", season: 2, episode: 4, duration: "52 min", price: "3.49" },
]

export function EpisodeGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {episodes.map((ep) => (
        <article
          key={ep.id}
          className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/30"
        >
          {/* Thumbnail placeholder */}
          <div className="relative flex aspect-video items-center justify-center bg-secondary">
            <Play className="h-10 w-10 text-muted-foreground transition-colors group-hover:text-primary" />
            <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded bg-background/80 px-2 py-0.5 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {ep.duration}
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-3 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-primary">
              {"Sezona " + ep.season + " · Epizoda " + ep.episode}
            </p>
            <h3 className="text-sm font-semibold text-foreground">
              {ep.title}
            </h3>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm font-bold text-foreground">
                {ep.price + " EUR"}
              </span>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-md bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
              >
                <ShoppingCart className="h-3.5 w-3.5" />
                Do kosika
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
