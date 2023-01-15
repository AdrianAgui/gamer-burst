import { Button, CardActionArea, CardActions } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

interface Props {
  name: string
  slug: string
  image: string
  rating: number
  price: number
}

export default function GameCard(props: Props) {
  return (
    <Card className='w-[380px] h-auto flex flex-col justify-center'>
      <CardActionArea>
        <CardMedia
          component='img'
          image={props.image}
          alt={props.slug}
          sx={{ height: 250, objectFit: 'cover' }}
          loading='lazy'
        />
        <CardContent>
          <Typography variant='h5' component='div'>
            {props.name}
          </Typography>
          <Typography variant='h5' component='div' display='flex' justifyContent='end' fontWeight='bold' mt={1}>
            {props.price}€
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='flex justify-center'>
        <Button size='small' color='primary'>
          Unit Selector Here
        </Button>
      </CardActions>
    </Card>
  )
}
