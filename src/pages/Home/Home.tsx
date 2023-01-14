import CartContext from '@/context/cart.context'
import { CartContextType } from '@/context/types'
import useFetchGames from '@/hooks/useFetchGames'
import { Game } from '@/models/game.model'
import { useContext, useEffect } from 'react'
import { CartGame } from '../../models/cart.model'

export default function Home() {
  const { isLoading, error, games } = useFetchGames()
  const { cartContext, setCartContext } = useContext(CartContext) as CartContextType

  useEffect(() => {
    console.log('cart context update', cartContext)
  }, [cartContext])

  const addToCart = (game: Game) => {
    setCartContext({
      totalAmount: +game.price + cartContext.totalAmount,
      games: [...cartContext.games, { name: game.name, price: game.price } as CartGame],
    })
  }

  return (
    <>
      {isLoading ? (
        <p>Fetching games...</p>
      ) : error ? (
        <p>An error occured while fetching users</p>
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
