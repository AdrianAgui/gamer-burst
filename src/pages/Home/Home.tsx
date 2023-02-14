import Loader from '@/components/Loader/Loader'
import useFetchGames from '@/hooks/useFetchGames'
import Grid from '../../components/Home/Grid/Grid'

export default function Home() {
  const { isLoading, error, games } = useFetchGames()

  return (
    <main className='py-6'>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p className='grid place-content-center'>An error occurred while loading the catalog</p>
      ) : games && games.length > 0 ? (
        <section>
          <Grid games={games}></Grid>
        </section>
      ) : (
        <p className='grid place-content-center'>No games have been found</p>
      )}
    </main>
  )
}
