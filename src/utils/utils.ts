import { CartGame } from '@/models/cart.model'

export const getLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string)
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const decimalHash = (gameName: string) => {
  let sum = 0
  for (let i = 0; i < gameName.length; i++) {
    const num = gameName.codePointAt(i)
    if (num) {
      const op = (i + 1) * num
      sum += op / (1 << 8)
    }
  }
  return (sum % 60).toFixed(2)
}

export const formatPrice = (price: number) => {
  return (Math.round(price * 100) / 100).toFixed(2)
}

export const calculateTotalAmount = (games: CartGame[]) => {
  return games.reduce((total, game) => total + game.price * game.quantity, 0)
}
