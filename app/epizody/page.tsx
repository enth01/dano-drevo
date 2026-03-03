import type { Metadata } from "next"
import { EpisodeGrid } from "@/components/episode-grid"

export const metadata: Metadata = {
  title: "Epizody",
  description: "Prehliadajte vsetky epizody Dana Dreva. Najdite svoju oblubenu epizodu.",
}

export default function EpisodesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 lg:px-8">
      <div className="mb-10">
        <p className="mb-1 text-sm font-medium uppercase tracking-widest text-primary">
          Kniznica
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Vsetky epizody
        </h1>
        <p className="mt-2 max-w-lg text-muted-foreground">
          Prehliadajte kompletnu zbierku epizod Dana Dreva. Vyberte si a zacnite sledovat.
        </p>
      </div>
      <EpisodeGrid />
    </div>
  )
}
