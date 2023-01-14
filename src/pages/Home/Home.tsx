import { useContext, useEffect } from 'react'

import CartContext from '@/context/cart.context'
import { CartContextType } from '@/context/types'
import useFetchGames from '@/hooks/useFetchGames'
import { CartGame } from '@/models/cart.model'
import { Game } from '@/models/game.model'
import { LocalStorageType } from '@/utils/constants'
import { getLocalStorage, setLocalStorage } from '@/utils/utils'

export default function Home() {
  const { isLoading, error, games } = useFetchGames()
  const { cartContext, setCartContext } = useContext(CartContext) as CartContextType

  useEffect(() => {
    const initCart = getLocalStorage(LocalStorageType.CART)
      ? getLocalStorage(LocalStorageType.CART)
      : { totalAmount: 0, games: [] }
    setCartContext(initCart)
  }, [])

  const addToCart = (game: Game) => {
    const newGame = {
      name: game.name,
      price: game.price,
      quantity: 1,
    } as CartGame

    const newCart = {
      totalAmount: Number((cartContext.totalAmount + game.price).toFixed(2)),
      games: [...cartContext.games, newGame],
    }

    setCartContext(newCart)
    setLocalStorage(LocalStorageType.CART, newCart)
  }

  return (
    <>
      {isLoading ? (
        <p>Cargando catálogo...</p>
      ) : error ? (
        <p>Ha ocurrido un error al cargar el catálogo</p>
      ) : (
        <div>
          {games && (
            <ul className='flex flex-wrap justify-center items-center gap-16'>
              {games.map((game) => (
                <li key={game.slug} onClick={() => addToCart(game)} className='flex flex-col items-center'>
                  <p className='text-2xl font-semibold ml-1'>{game.name}</p>
                  <p className='text-xl font-bold ml-1'>{game.price}€</p>
                  <img className='w-96 h-80 object-cover' src={game.background_image} alt={game.slug} loading='lazy' />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  )
}
