import { Cart } from '@/models/cart.model'

export type CartContextType = {
  cartContext: Cart
  setCartContext: (value: Cart) => void
}

export type QueryContextType = {
  query: string
  setQuery: (value: string) => void
}
