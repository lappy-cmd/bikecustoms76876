"use client"

import { useCart } from "@/context/cart-context"
import { X, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"
import Link from "next/link"

export function CartSidebar() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-50"
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Your Cart</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground text-lg mb-2">Your cart is empty</p>
              <p className="text-muted-foreground text-sm mb-6">
                Browse our services and add items to get started
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded font-semibold transition-colors"
              >
                Browse Services
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-secondary/50 rounded-lg p-4 border border-border"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <span className="text-xs text-primary font-semibold uppercase tracking-wide">
                        {item.category}
                      </span>
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 hover:bg-destructive/20 rounded transition-colors ml-2"
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-secondary hover:bg-secondary/80 rounded border border-border transition-colors"
                      >
                        <Minus className="w-4 h-4 text-foreground" />
                      </button>
                      <span className="w-8 text-center font-semibold text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-secondary hover:bg-secondary/80 rounded border border-border transition-colors"
                      >
                        <Plus className="w-4 h-4 text-foreground" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-xs text-muted-foreground">
                          {item.priceDisplay} each
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-muted-foreground">
                    Est. Duration: {item.duration}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-4 bg-secondary/30">
            <div className="flex justify-between items-center mb-4">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-2xl font-bold text-foreground">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              * Prices starting from. Final quote may vary based on vehicle inspection.
            </p>
            <div className="space-y-2">
              <Link
                href="/cart"
                onClick={() => setIsOpen(false)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={clearCart}
                className="w-full bg-transparent hover:bg-secondary text-muted-foreground py-2 rounded font-medium transition-colors text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
