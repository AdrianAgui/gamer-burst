import { Game } from '@/models/game.model'
import { API, HOME_PAGE_ITEMS } from '@/utils/constants'
import axios from 'axios'
import { useEffect, useState } from 'react'

const HOME_GAMES_URI = `${API.URL}/games?key=${API.KEY}&page_size=${HOME_PAGE_ITEMS}`

export default function useFetchGames() {
  const [games, setGames] = useState<Game[]>()
  const [error, setError] = useState<boolean>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)

    const fetchGames = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(HOME_GAMES_URI)
        setGames(response.data.results as Game[])
        setError(false)
      } catch (err) {
        console.error(err)
        setGames([])
        setError(true)
      }
      setIsLoading(false)
    }

    fetchGames()
  }, [])

  return { isLoading, error, games }
}
