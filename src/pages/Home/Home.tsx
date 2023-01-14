import useFetchGames from '@/hooks/useFetchGames'
import { Game } from '@/models/game.model'

export default function Home() {
  const { isLoading, error, games } = useFetchGames()

  const handleClick = (game: Game) => {
    console.log(game)
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
                <li key={game.slug} onClick={() => handleClick(game)} className='flex flex-col items-center'>
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
