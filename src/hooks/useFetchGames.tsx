import { QueryContextType } from '@/context/types'
import { Game } from '@/models/game.model'
import { API, HOME_PAGE_ITEMS } from '@/utils/constants'
import { decimalHash } from '@/utils/utils'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import QueryContext from '../context/query.context'

const HOME_GAMES_URI = `${API.URL}/games?key=${API.KEY}&page_size=${HOME_PAGE_ITEMS}`
const SEARCH_GAMES_URI = (query: string) => `${API.URL}/games?key=${API.KEY}&search=${query}`

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

  useEffect(() => {
    if (games.length === 0) fetchGames()
  }, [])

  useEffect(() => {
    if (query?.length === 0) fetchGames()
    if (query?.length > 2) fetchGames()
  }, [query])

  const fetchGames = async () => {
    try {
      setError(false)
      setIsLoading(true)
      const url = query ? SEARCH_GAMES_URI(query) : HOME_GAMES_URI
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

  return { isLoading, error, games }
}
