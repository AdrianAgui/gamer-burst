import { API } from '@/utils/constants'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { GameInfo } from '../models/game-info.model'

const GAME_INFO_URI = (id: string) => `${API.URL}/games/${id}?key=${API.KEY}`

export default function useFetchGameInfo(id: string) {
  const [gameInfo, setGameInfo] = useState<GameInfo>()
  const [error, setError] = useState<boolean>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)

    const fetchGameInfo = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(GAME_INFO_URI(id))
        setGameInfo(response.data)
        setError(false)
      } catch (err) {
        console.error(err)
        setGameInfo({} as GameInfo)
        setError(true)
      }
      setIsLoading(false)
    }

    fetchGameInfo()
  }, [])

  return { isLoading, error, gameInfo }
}
