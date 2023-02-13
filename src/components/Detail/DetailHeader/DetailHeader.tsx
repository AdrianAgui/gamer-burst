import { ParentPlatform } from '@/models/game-info.model'
import { Box, Rating, Typography } from '@mui/material'
import Platforms from '../Platforms/Platforms'

interface Props {
  name: string
  released: string
  rating: number
  platforms: ParentPlatform[]
}

export default function DetailHeader(props: Props) {
  return (
    <Box component='header' className='flex flex-col lg:flex-row justify-between items-center font-bold'>
      <Box component='div' className='flex flex-col'>
        <Typography component='h1' fontSize={32} fontWeight='bold' lineHeight={1} className='text-center lg:text-start'>
          {props.name}
        </Typography>
        {props.released && (
          <Typography component='h2' mt={2} fontSize={18} fontWeight='bold'>
            Launched in {new Date(props.released).toLocaleDateString('es-ES')}
          </Typography>
        )}
      </Box>

      <Box
        component='div'
        className='flex flex-col xs:flex-row justify-between lg:justify-end items-center mt-4 lg:mt-0'
      >
        <Box component='div' className='flex items-center'>
          <Typography component='span' fontSize={24} fontWeight='bold' className='hidden sm:block'>
            {props.rating}
          </Typography>
          <Rating className='ml-3 mr-8' value={props.rating} precision={0.5} size='large' readOnly />
        </Box>
        <Box component='div' className='flex items-center mr-5 gap-x-1 mt-3 xs:mt-0'>
          <Platforms platforms={props.platforms.map((p) => p.platform.slug)} />
        </Box>
      </Box>
    </Box>
  )
}
