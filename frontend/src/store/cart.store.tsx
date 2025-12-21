import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = {
  id: string | number
  name: string
  qty: number
  selected: boolean
}

export type CartState = {
  items: CartItem[]
  addToCart: (product: { id: string | number; name: string }) => void
  addToCartMany: (product: { id: string | number; name: string, qty: number }) => void
  increaseQty: (id: string | number) => void
  decreaseQty: (id: string | number) => void
  removeItem: (id: string | number) => void
  toggleSelect: (id: string | number) => void
  selectAll: () => void
  unselectAll: () => void
  getSelectedItems: () => CartItem[]
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product) => {
        const items = get().items
        const existing = items.find(i => i.id === product.id)

        if (existing) {
          set({
            items: items.map(i =>
              i.id === product.id ? { ...i, qty: i.qty + 1 } : i
            )
          })
        } else {
          set({
            items: [...items, { ...product, qty: 1, selected: true }]
          })
        }
      },

      addToCartMany: (product) => {
        const items = get().items
        const existing = items.find(i => i.id === product.id)

        if (existing) {
          set({
            items: items.map(i =>
              i.id === product.id ? { ...i, qty: i.qty + product.qty } : i
            )
          })
        } else {
          set({
            items: [...items, { ...product, qty: product.qty, selected: true }]
          })
        }
      },

      increaseQty: (id) => {
        set({
          items: get().items.map(i =>
            i.id === id ? { ...i, qty: i.qty + 1 } : i
          )
        })
      },

      decreaseQty: (id) => {
        set({
          items: get().items
            .map(i =>
              i.id === id ? { ...i, qty: i.qty - 1 } : i
            )
            .filter(i => i.qty > 0)
        })
      },

      removeItem: (id) => {
        set({
          items: get().items.filter(i => i.id !== id)
        })
      },

      toggleSelect: (id) => {
        set({
          items: get().items.map(i =>
            i.id === id ? { ...i, selected: !i.selected } : i
          )
        })
      },

      selectAll: () => {
        set({
          items: get().items.map(i => ({ ...i, selected: true }))
        })
      },

      unselectAll: () => {
        set({
          items: get().items.map(i => ({ ...i, selected: false }))
        })
      },

      getSelectedItems: () => {
        return get().items.filter(i => i.selected)
      },

      clearCart: () => set({ items: [] })
    }),
    {
      name: 'cart-storage'
    }
  )
)

export default useCartStore
