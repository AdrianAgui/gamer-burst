import Loader from '@/components/Loader/Loader'
import useFetchGames from '@/hooks/useFetchGames'
import Grid from '../../components/Home/Grid/Grid'

export default function Home() {
  const { isLoading, error, games } = useFetchGames()

  return (
    <main className='home-container'>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>Ha ocurrido un error al cargar el catálogo</p>
      ) : (
        <section>{games && <Grid games={games}></Grid>}</section>
      )}
    </main>
  )
}
