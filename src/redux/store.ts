import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './states/cart'

export interface AppStore {
  cart: string[]
}

export default configureStore<AppStore>({
  reducer: {
    cart: cartSlice.reducer,
  },
})
