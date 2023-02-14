import { QueryContextType } from '@/context/types'
import { Game } from '@/models/game.model'
import { API, HOME_PAGE_ITEMS } from '@/utils/constants'
import { decimalHash } from '@/utils/utils'
import axios from 'axios'
import { useContext, useMemo, useState } from 'react'
import QueryContext from '../context/query.context'

const HOME_GAMES_URI = `${API.URL}/games?key=${API.KEY}&page_size=${HOME_PAGE_ITEMS}`
const SEARCH_GAMES_URI = (query: string, items: number) =>
  `${API.URL}/games?key=${API.KEY}&search=${query}&page_size=${items}`

const gamesAdapter = (games: Game[]) => {
  return games
    .filter((game) => game.background_image && game.rating)
    .map((game) => ({ ...game, price: +decimalHash(game.name) }))
}

export default function useFetchGames() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { query } = useContext(QueryContext) as QueryContextType

  useMemo(async () => {
    if (query?.length === 0 || query?.length >= 3) {
      try {
        setError(false)
        setIsLoading(true)
        const url = query ? SEARCH_GAMES_URI(query, 10) : HOME_GAMES_URI
        const response = await axios.get(url)
        const games = gamesAdapter(response.data.results) as unknown
        setGames(games as Game[])
      } catch (err) {
        console.error(err)
        setGames([])
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
  }, [query])

  return { isLoading, error, games }
}
