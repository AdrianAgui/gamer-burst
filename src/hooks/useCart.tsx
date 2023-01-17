import CartContext from '@/context/cart.context'
import { CartContextType } from '@/context/types'
import { Cart, CartGame } from '@/models/cart.model'
import { LocalStorageType } from '@/utils/constants'
import { formatPrice, setLocalStorage } from '@/utils/utils'
import { useContext } from 'react'

export default function useCart() {
  const { cartContext, setCartContext } = useContext(CartContext) as CartContextType

  const get = (id: number) => cartContext.games.find((game) => game.id === id)

  const add = (id: number, name: string, price: number) => {
    const item = get(id)

    if (item) {
      item.price = item.price + price
      item.quantity = item.quantity + 1
      setCart({
        totalAmount: +formatPrice(cartContext.totalAmount + price),
        games: [...cartContext.games],
      })
    } else {
      setCart({
        totalAmount: +formatPrice(cartContext.totalAmount + price),
        games: [
          ...cartContext.games,
          {
            id,
            name,
            price,
            quantity: 1,
          } as CartGame,
        ],
      })
    }
  }

  const remove = (id: number) => {
    const item = get(id)
    if (item) {
      setCart({
        totalAmount: +formatPrice(cartContext.totalAmount - item.price),
        games: cartContext.games.filter((game) => game.id !== id),
      })
    }
  }

  const setCart = (cart: Cart) => {
    setCartContext(cart)
    setLocalStorage(LocalStorageType.CART, cart)
  }

  return { add, remove }
}
