import CartContext from '@/context/cart.context'
import { CartContextType } from '@/context/types'
import { Cart, CartGame } from '@/models/cart.model'
import { LocalStorageType } from '@/utils/constants'
import { calculateTotalAmount, formatPrice, setLocalStorage } from '@/utils/utils'
import { useContext } from 'react'

export default function useCart() {
  const { cartContext, setCartContext } = useContext(CartContext) as CartContextType

  const get = (id: number) => cartContext.games.find((game) => game.id === id)

  const update = (id: number, name: string, price: number, quantity: number) => {
    if (!quantity) withdraw(id)
    else {
      const item = get(id)
      let newCartGames: CartGame[] = []
      let totalAmount = 0

      if (item) {
        item.quantity = quantity
        newCartGames = cartContext.games
        totalAmount = calculateTotalAmount(cartContext.games)
      } else {
        newCartGames = [
          ...cartContext.games,
          {
            id,
            name,
            price,
            quantity,
          } as CartGame,
        ]
        totalAmount = calculateTotalAmount(newCartGames)
      }

      setCart({
        totalAmount: +formatPrice(totalAmount),
        games: newCartGames,
      })
    }
  }

  const withdraw = (id: number) => {
    const item = get(id)
    if (item) {
      setCart({
        totalAmount: +formatPrice(cartContext.totalAmount - item.price * item.quantity),
        games: cartContext.games.filter((game) => game.id !== id),
      })
    }
  }

  const setCart = (cart: Cart) => {
    setCartContext(cart)
    setLocalStorage(LocalStorageType.CART, cart)
  }

  return { cartContext, get, update, withdraw }
}
