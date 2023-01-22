import Loader from '@/components/Loader/Loader'
import Platforms from '@/components/Platforms/Platforms'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import { Box, Chip, Container, List, ListItem, Rating, Tooltip } from '@mui/material'
import Typography from '@mui/material/Typography'
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
            <Container>
              <Box component='header' className='flex flex-col lg:flex-row justify-between items-center font-bold'>
                <Box component='div' className='flex flex-col'>
                  <Typography component='h1' fontSize={32} fontWeight='bold'>
                    {gameInfo.name}
                  </Typography>
                  {gameInfo.released && (
                    <Typography component='h2' fontSize={18} fontWeight='bold'>
                      Launched in {new Date(gameInfo.released).toLocaleDateString('es-ES')}
                    </Typography>
                  )}
                </Box>
                <Box component='div' className='flex items-center mt-4 lg:mt-0'>
                  <Typography component='span' fontSize={24} fontWeight='bold'>
                    {gameInfo.rating}
                  </Typography>
                  <Rating className='ml-3 mr-8' value={gameInfo.rating} precision={0.5} size='large' readOnly />
                  <Box component='div' className='flex items-center mr-5 gap-x-1'>
                    <Platforms platforms={gameInfo.parent_platforms.map((p) => p.platform.slug)} />
                  </Box>
                </Box>
              </Box>

              <Box component='main' className='flex flex-col sm:flex-row w-full mt-4 sm:mt-10'>
                <Box component='section' className='w-100 sm:w-7/12'>
                  VIDEO EMBEDED
                </Box>
                <Box component='section' className='w-100 sm:w-5/12'>
                  <Box
                    component='img'
                    sx={{
                      height: 200,
                      width: 550,
                      objectFit: 'cover',
                      // maxHeight: { xs: 233, md: 167 },
                      // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt={gameInfo.slug}
                    src={gameInfo.background_image}
                  />
                  <Box
                    component='img'
                    sx={{
                      height: 200,
                      width: 550,
                      objectFit: 'cover',
                      // maxHeight: { xs: 233, md: 167 },
                      // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt={gameInfo.slug}
                    src={gameInfo.background_image_additional}
                  />
                  <div className='block overflow-auto h-[200px] mt-4 text-justify md:text-start'>
                    <Typography>{gameInfo.description_raw}</Typography>
                  </div>
                </Box>
              </Box>

              <Box component='section' className='mt-10'>
                <List className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
                  {gameInfo.tags &&
                    gameInfo.tags.length > 0 &&
                    gameInfo.tags.map((tag) => {
                      return (
                        <Tooltip key={tag.slug} title={tag.name} arrow>
                          <ListItem disablePadding>
                            <Chip icon={<LocalOfferIcon />} label={tag.name} />
                          </ListItem>
                        </Tooltip>
                      )
                    })}
                </List>
              </Box>
            </Container>
          )}
        </div>
      )}
    </Box>
  )
}
