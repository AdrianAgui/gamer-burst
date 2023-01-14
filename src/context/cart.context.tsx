import { Cart } from '@/models/cart.model'
import { createContext, ReactNode, useState } from 'react'

const Context = createContext({})

interface Props {
  children: ReactNode
}

export function CartContextProvider({ children }: Props) {
  const [cartContext, setCartContext] = useState<Cart>({ totalAmount: 0, games: [] })
  return <Context.Provider value={{ cartContext, setCartContext }}>{children}</Context.Provider>
}

export default Context
