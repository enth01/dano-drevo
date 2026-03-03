"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Film, ShoppingCart, User, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Domov" },
  { href: "/epizody", label: "Epizody" },
  { href: "/kosik", label: "Kosik" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Film className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Dan Drevo
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/kosik"
            className={cn(
              "relative flex h-9 w-9 items-center justify-center rounded-md transition-colors",
              pathname === "/kosik"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
            aria-label="Kosik"
          >
            <ShoppingCart className="h-5 w-5" />
          </Link>
          <Link
            href="/prihlasenie"
            className={cn(
              "flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            )}
          >
            <User className="h-4 w-4" />
            <span>Prihlasenie</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground md:hidden"
          aria-label={mobileMenuOpen ? "Zavriet menu" : "Otvorit menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/prihlasenie"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Prihlasenie
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
