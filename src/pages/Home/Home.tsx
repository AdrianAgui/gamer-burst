import useFetchGames from '@/hooks/useFetchGames'

export default function Home() {
  const { isLoading, error, games } = useFetchGames()

  return (
    <>
      {isLoading ? (
        <p>Fetching games...</p>
      ) : error ? (
        <p>An error occured while fetching users</p>
      ) : (
        games && (
          <ul className='flex flex-wrap justify-center items-center gap-16'>
            {games.map((game) => (
              <li key={game.slug} className='flex flex-col items-center'>
                <p className='text-xl font-semibold ml-1'>{game.name}</p>
                <img className='w-96 h-80 object-cover' src={game.background_image} alt={game.slug} loading='lazy' />
              </li>
            ))}
          </ul>
        )
      )}
    </>
  )
}
