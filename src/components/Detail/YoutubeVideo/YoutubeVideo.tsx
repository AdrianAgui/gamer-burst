import { Box } from '@mui/material'
import axios from 'axios'
import { useEffect } from 'react'

interface Props {
  slug: string
  name: string
}

// const SEARCH_URL = (slug: string) => `https://www.youtube.com/results?search_query=${slug}`
// const VIDEO_URL = (id: string) => `https://www.youtube.com/embed/${id}?autoplay=1`

export default function YoutubeVideo(props: Props) {
  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        'https://youtube.googleapis.com/youtube/v3/search?part=witcher&key=AIzaSyApe00DHhCQ3krQOf7Zo_A5AQupsxIBSaU'
      )
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    console.log(props.slug)
    fetchVideos()
  }, [])

  return (
    <Box component='div' className='relative w-full pb-[54%] h-0 overflow-hidden mb-5'>
      <iframe
        className='w-full lg:w-[95%] h-full absolute top-0 left-0'
        // src={VIDEO_URL('gVIAAD5yUqM')}
        title={props.name}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </Box>
  )
}
