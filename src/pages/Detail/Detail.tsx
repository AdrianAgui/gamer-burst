import { useParams } from 'react-router-dom'
import useFetchGameInfo from '../../hooks/useFetchGameInfo'

export default function Detail() {
  const { id } = useParams()
  const { isLoading, error, gameInfo } = useFetchGameInfo(id ? id : '0')

  return (
    <div>
      {isLoading ? (
        <p>Cargando catálogo...</p>
      ) : error ? (
        <p>Ha ocurrido un error al cargar el catálogo</p>
      ) : (
        <div>{gameInfo && <div>{gameInfo.name}</div>}</div>
      )}
    </div>
  )
}
