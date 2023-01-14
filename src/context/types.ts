import { Cart } from '@/models/cart.model'

export type CartContextType = {
  cartContext: Cart
  setCartContext: (value: Cart) => void
}
