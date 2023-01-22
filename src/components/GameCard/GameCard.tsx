import { formatPrice } from '@/utils/utils'
import { Box, CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Rating from '../Rating/Rating'
import UnitSelector from '../UnitSelector/UnitSelector'

interface Props {
  id: number
  name: string
  slug: string
  image: string
  rating: number
  price: number
}

export default function GameCard(props: Props) {
  return (
    <Card className='w-[380px] min-w-[380px] h-auto flex flex-col justify-center'>
      <Link to={`game/${props.slug}/${props.id}`}>
        <CardActionArea component='div'>
          <CardMedia
            component='img'
            image={props.image}
            alt={props.slug}
            className='min-w-[250px] h-[150px] object-cover object-top'
            loading='lazy'
          />
          <CardContent>
            <Typography
              variant='h5'
              component='div'
              className='w-100 overflow-hidden whitespace-nowrap text-ellipsis hover:underline hover:font-semibold'
            >
              {props.name}
            </Typography>
            <Box component='div' className='flex justify-between items-center mt-3'>
              <Rating rating={props.rating} />
              <UnitSelector id={props.id} name={props.name} price={props.price} />
              <Typography variant='h5' component='div' display='flex' justifyContent='end' fontWeight='bold'>
                {formatPrice(props.price)}€
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}
