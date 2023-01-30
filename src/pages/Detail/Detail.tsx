import DetailContent from '@/components/Detail/DetailContent/DetailContent'
import DetailHeader from '@/components/Detail/DetailHeader/DetailHeader'
import Tags from '@/components/Detail/Tags/Tags'
import Loader from '@/components/Loader/Loader'
import { Box, Container } from '@mui/material'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetchGameInfo from '../../hooks/useFetchGameInfo'

export default function Detail() {
  const { id } = useParams()
  const { isLoading, error, gameInfo } = useFetchGameInfo(id ? id : '0')

  useEffect(() => {
    console.log(gameInfo)
  }, [gameInfo])

  return (
    <Box component='article' className='p-2 sm:p-8'>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>Ha ocurrido un error al cargar el catálogo</p>
      ) : (
        <div>
          {gameInfo && (
            <Container maxWidth='xl'>
              <DetailHeader
                name={gameInfo.name}
                released={gameInfo.released}
                rating={gameInfo.rating}
                platforms={gameInfo.parent_platforms}
              />

              <DetailContent
                slug={gameInfo.slug}
                name={gameInfo.name}
                image1={gameInfo.background_image}
                image2={gameInfo.background_image_additional}
                description={gameInfo.description_raw}
              />

              <Tags tags={gameInfo.tags} />
            </Container>
          )}
        </div>
      )}
    </Box>
  )
}
