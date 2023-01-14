export interface Cart {
  totalAmount: number
  games: CartGame[]
}

export interface CartGame {
  name: string
  price: number
  quantity: number
}
