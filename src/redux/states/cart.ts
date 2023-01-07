import { LocalStorageType } from '@/utils/constants'
import { getLocalStorage, setLocalStorage } from '@/utils/utils'
import { createSlice } from '@reduxjs/toolkit'

const getInitialState = () => {
  const cart = getLocalStorage(LocalStorageType.CART)
  return cart ? JSON.parse(cart) : []
}

export const cartSlice = createSlice({
  name: LocalStorageType.CART,
  initialState: getInitialState(),
  reducers: {
    addToCart: (state, action) => {
      const newCart: string[] = [...state, action.payload]
      setLocalStorage(LocalStorageType.CART, newCart)
      return newCart
    },
    removeFromCart: (state, action) => {
      const newCart: string[] = Array.from(state as string[]).filter((item: string) => item !== action.payload)
      setLocalStorage(LocalStorageType.CART, newCart)
      return newCart
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
