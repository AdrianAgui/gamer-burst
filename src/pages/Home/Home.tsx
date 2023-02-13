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
        <p>An error occurred while loading the catalog</p>
      ) : (
        <section>{games && <Grid games={games}></Grid>}</section>
      )}
    </main>
  )
}
