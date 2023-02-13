import { Box, Typography } from '@mui/material'
import YoutubeVideo from '../YoutubeVideo/YoutubeVideo'

interface Props {
  slug: string
  name: string
  image1: string
  image2: string
  description: string
}

export default function DetailContent(props: Props) {
  return (
    <Box component='main' className='flex flex-col lg:flex-row w-full mt-4 sm:mt-10'>
      <Box component='section' className='w-100 lg:w-7/12'>
        <YoutubeVideo slug={props.slug} name={props.name} />
        {/* generos / metacritic score / esrb rating */}
      </Box>

      <Box component='section' className='flex flex-col items-center w-100 lg:w-5/12'>
        <Box
          component='img'
          sx={{
            height: 200,
            width: 550,
            objectFit: 'cover',
          }}
          alt={props.slug}
          src={props.image1}
        />
        <Box
          component='img'
          sx={{
            height: 200,
            width: 550,
            objectFit: 'cover',
          }}
          alt={props.slug}
          src={props.image2}
        />
        <Box component='div' className='block overflow-auto h-[200px] mt-4 p-1 text-justify md:text-start'>
          <Typography>{props.description}</Typography>
        </Box>
      </Box>
    </Box>
  )
}
