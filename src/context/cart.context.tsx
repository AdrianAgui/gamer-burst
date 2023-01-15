import { createContext, ReactNode, useState } from 'react'
import { Cart, CartGame } from '../models/cart.model'

const CartContext = createContext({})

interface Props {
  children: ReactNode
}

export function CartContextProvider({ children }: Props) {
  const [cartContext, setCartContext] = useState<Cart>({ totalAmount: 0, games: [] as CartGame[] })
  return <CartContext.Provider value={{ cartContext, setCartContext }}>{children}</CartContext.Provider>
}

export default CartContext
