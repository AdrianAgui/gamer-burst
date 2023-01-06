import useFetchGames from '@/hooks/useFetchGames'

export default function Home() {
  const { isLoading, error, data: games } = useFetchGames()

  return (
    <>
      {isLoading ? (
        <p>Fetching games...</p>
      ) : error ? (
        <p>An error occured while fetching users</p>
      ) : (
        games && (
          <ul>
            {games.map((game) => (
              <li key={game.slug}>
                <img loading='lazy' width='500' height='300' src={game.background_image} alt={game.slug} />
                <p>{game.name}</p>
              </li>
            ))}
          </ul>
        )
      )}
    </>
  )
}
