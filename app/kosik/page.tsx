import type { Metadata } from "next"
import { CartContent } from "@/components/cart-content"

export const metadata: Metadata = {
  title: "Kosik",
  description: "Skontrolujte obsah vasho kosika a dokoncite nakup.",
}

export default function CartPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 lg:px-8">
      <div className="mb-10">
        <p className="mb-1 text-sm font-medium uppercase tracking-widest text-primary">
          Nakup
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Vas kosik
        </h1>
      </div>
      <CartContent />
    </div>
  )
}
