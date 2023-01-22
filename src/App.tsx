import CartContext from '@/context/cart.context'
import { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { CartContextType } from './context/types'
import { LocalStorageType } from './utils/constants'
import { getLocalStorage } from './utils/utils'

export default function App() {
  const { setCartContext } = useContext(CartContext) as CartContextType

  useEffect(() => {
    const initCart = getLocalStorage(LocalStorageType.CART)
      ? getLocalStorage(LocalStorageType.CART)
      : { totalAmount: 0, games: [] }

    setCartContext(initCart)
  }, [])

  return (
    <>
      <Navbar />
      <main className='mt-[64px]'>
        <Outlet />
      </main>
    </>
  )
}
