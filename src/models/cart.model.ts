export interface Cart {
  totalAmount: number
  games: CartGame[]
}

export interface CartGame {
  id: number
  name: string
  price: number
  quantity: number
}
