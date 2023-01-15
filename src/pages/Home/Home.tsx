import GameCard from '@/components/GameCard/GameCard'
import CartContext from '@/context/cart.context'
import { CartContextType } from '@/context/types'
import useFetchGames from '@/hooks/useFetchGames'
import { LocalStorageType } from '@/utils/constants'
import { getLocalStorage } from '@/utils/utils'
import { useContext, useEffect } from 'react'

export default function Home() {
  const { cartContext, setCartContext } = useContext(CartContext) as CartContextType
  const { isLoading, error, games } = useFetchGames()

  useEffect(() => {
    const initCart = getLocalStorage(LocalStorageType.CART)
      ? getLocalStorage(LocalStorageType.CART)
      : { totalAmount: 0, games: [] }
    setCartContext(initCart)
  }, [])

  return (
    <main className='home-container'>
      {isLoading ? (
        <p>Cargando catálogo...</p>
      ) : error ? (
        <p>Ha ocurrido un error al cargar el catálogo</p>
      ) : (
        <div>
          {games && (
            <ul className='flex flex-wrap justify-center items-center gap-16'>
              {games.map((game) => (
                <li key={game.slug} className='flex flex-col items-center'>
                  <GameCard
                    id={game.id}
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
    </main>
  )
}
