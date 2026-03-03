"use client"

import { Film } from "lucide-react"
import Link from "next/link"

export function LoginForm() {
  return (
    <div className="w-full max-w-sm">
      <div className="mb-8 text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
            <Film className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Vitajte spat
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Prihlaste sa do svojho uctu
        </p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="vas@email.sk"
            className="rounded-md border border-input bg-secondary px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium text-foreground">
            Heslo
          </label>
          <input
            id="password"
            type="password"
            placeholder="Vase heslo"
            className="rounded-md border border-input bg-secondary px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>

        <button
          type="submit"
          className="mt-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Prihlasit sa
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {"Nemate ucet? "}
        <Link href="#" className="font-medium text-primary hover:text-primary/80">
          Registrovat sa
        </Link>
      </p>
    </div>
  )
}
