import CartContext from '@/context/cart.context'
import { CartContextType } from '@/context/types'
import useFetchGames from '@/hooks/useFetchGames'
import { LocalStorageType } from '@/utils/constants'
import { getLocalStorage } from '@/utils/utils'
import { useContext, useEffect } from 'react'
import Grid from '../../components/Grid/Grid'

export default function Home() {
  const { setCartContext } = useContext(CartContext) as CartContextType
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
        <section>{games && <Grid games={games}></Grid>}</section>
      )}
    </main>
  )
}
