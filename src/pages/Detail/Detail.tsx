import { useParams } from 'react-router-dom'
import useFetchGameInfo from '../../hooks/useFetchGameInfo'

export default function Detail() {
  const { id } = useParams()
  const { isLoading, error, gameInfo } = useFetchGameInfo(id ? id : '0')

  return (
    <div className='p-10'>
      {isLoading ? (
        <p>Cargando catálogo...</p>
      ) : error ? (
        <p>Ha ocurrido un error al cargar el catálogo</p>
      ) : (
        <div>
          {gameInfo && (
            <div>
              <p className='font-bold'>{gameInfo.name}</p>
              <br />
              <p>{gameInfo.description_raw}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
