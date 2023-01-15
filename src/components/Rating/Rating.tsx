import { Box } from '@mui/material'

interface Props {
  rating: number
}

export default function Rating(props: Props) {
  return <Box component='div'>{props.rating}⭐</Box>
}
