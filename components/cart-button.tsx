"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"

export function CartButton() {
  const { totalItems, setIsOpen } = useCart()

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="relative p-2 hover:bg-secondary rounded-lg transition-colors"
      aria-label="Open cart"
    >
      <ShoppingCart className="w-6 h-6 text-foreground" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </button>
  )
}
