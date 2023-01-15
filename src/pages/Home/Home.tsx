import { useContext, useEffect } from 'react'

import GameCard from '@/components/Card/GameCard'
import CartContext from '@/context/cart.context'
import { CartContextType } from '@/context/types'
import useFetchGames from '@/hooks/useFetchGames'
import { CartGame } from '@/models/cart.model'
import { Game } from '@/models/game.model'
import { LocalStorageType } from '@/utils/constants'
import { getLocalStorage, setLocalStorage } from '@/utils/utils'

export default function Home() {
  const { cartContext, setCartContext } = useContext(CartContext) as CartContextType
  const { isLoading, error, games } = useFetchGames()

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
                  <GameCard
                    name={game.name}
                    slug={game.slug}
                    image={game.background_image}
                    rating={game.rating}
                    price={game.price}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  )
}
