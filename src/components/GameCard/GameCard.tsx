import CartContext from '@/context/cart.context'
import { CartContextType } from '@/context/types'
import { CartGame } from '@/models/cart.model'
import { LocalStorageType } from '@/utils/constants'
import { setLocalStorage } from '@/utils/utils'
import { Box, Button, CardActionArea, CardActions } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Rating from '../Rating/Rating'

interface Props {
  id: number
  name: string
  slug: string
  image: string
  rating: number
  price: number
}

export default function GameCard(props: Props) {
  const { cartContext, setCartContext } = useContext(CartContext) as CartContextType

  const addToCart = (name: string, price: number) => {
    const newGame = {
      name,
      price,
      quantity: 1,
    } as CartGame

    const newCart = {
      totalAmount: Number((cartContext.totalAmount + price).toFixed(2)),
      games: [...cartContext.games, newGame],
    }

    setCartContext(newCart)
    setLocalStorage(LocalStorageType.CART, newCart)
  }

  return (
    <Card className='w-[380px] min-w-[380px] h-auto flex flex-col justify-center'>
      <Link to={`game/${props.slug}/${props.id}`}>
        <CardActionArea>
          <CardMedia
            component='img'
            image={props.image}
            alt={props.slug}
            className='min-w-[250px] h-[250px] object-cover'
            loading='lazy'
          />
          <CardContent>
            <Typography variant='h5' component='div'>
              {props.name}
            </Typography>
            <Box component='div' display='flex' justifyContent='space-between' alignItems='center' mt={1}>
              <Rating rating={props.rating}></Rating>
              <Typography variant='h5' component='div' display='flex' justifyContent='end' fontWeight='bold'>
                {props.price}€
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions className='flex justify-center'>
        <Button size='small' color='primary' onClick={() => addToCart(props.name, props.price)}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  )
}
