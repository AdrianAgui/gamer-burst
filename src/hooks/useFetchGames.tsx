import { Game } from '@/models/game.model'
import { API, HOME_PAGE_ITEMS } from '@/utils/constants'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useFetchGames() {
  const INIT_URI = `${API.URL}/games?key=${API.KEY}&page_size=${HOME_PAGE_ITEMS}`

  const [data, setData] = useState<Game[]>()
  const [error, setError] = useState<boolean>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)

    async function fetchData() {
      setIsLoading(true)
      try {
        const response = await axios.get(INIT_URI)
        setData(response.data.results as Game[])
        setError(false)
      } catch (err) {
        console.error(err)
        setData([])
        setError(true)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return { isLoading, error, data }
}
