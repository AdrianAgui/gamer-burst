import useFetchGames from '@/hooks/useFetchGames'
import { addToCart, removeFromCart } from '@/redux/states/cart'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '../../redux/store'

export default function Home() {
  const { isLoading, error, games } = useFetchGames()
  const dispatch = useDispatch()

  const currentCart: string[] = useSelector((store: AppStore) => store.cart)

  const handleClick = (gameName: string) =>
    currentCart.includes(gameName) ? dispatch(removeFromCart(gameName)) : dispatch(addToCart(gameName))

  return (
    <>
      {isLoading ? (
        <p>Fetching games...</p>
      ) : error ? (
        <p>An error occured while fetching users</p>
      ) : (
        <div>
          {currentCart}
          {games && (
            <ul className='flex flex-wrap justify-center items-center gap-16'>
              {games.map((game) => (
                <li key={game.slug} onClick={() => handleClick(game?.name)} className='flex flex-col items-center'>
                  <p className='text-xl font-semibold ml-1'>{game.name}</p>
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
