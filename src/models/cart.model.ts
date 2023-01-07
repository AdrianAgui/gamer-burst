import { Game } from './game.model'

export interface Cart {
  totalAmount: number
  games: Game[]
}
