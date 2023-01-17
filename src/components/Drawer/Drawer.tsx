import CartContext from '@/context/cart.context'
import { CartContextType } from '@/context/types'
import useCart from '@/hooks/useCart'
import { CartGame } from '@/models/cart.model'
import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { IconButton, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Fragment, useContext, useState } from 'react'

export default function Drawer() {
  const { cartContext } = useContext(CartContext) as CartContextType
  const { remove } = useCart()
  const [open, setOpen] = useState(false)

  const cartLineText = (name: string, quantity: number) => (quantity > 1 ? name + ' x' + quantity : name)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setOpen(open)
  }

  const list = () => (
    <Box width={350} role='presentation'>
      <List>
        <ListItem key={'close'} sx={{ justifyContent: 'space-between', pr: 1 }}>
          <ShoppingCartIcon className='mr-2' />
          <ListItemText primary={'Cart'} primaryTypographyProps={{ fontSize: 24 }} />
          <IconButton onClick={toggleDrawer(false)} aria-label='close drawer'>
            <CloseIcon />
          </IconButton>
        </ListItem>
      </List>

      <Divider />

      {cartContext.games.map((game: CartGame, index) => (
        <ListItem key={index} sx={{ justifyContent: 'space-between' }}>
          <ListItemText primary={cartLineText(game.name, game.quantity)} primaryTypographyProps={{ fontSize: 14 }} />
          <IconButton onClick={() => remove(game.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}

      <Divider />

      <List>
        <ListItem key={'totalAmount'} sx={{ justifyContent: 'end' }}>
          <Typography variant='body1' component='div' className='flex items-center text-lg'>
            <span className='mr-2'>Total amount:&nbsp;</span>
            <span className='text-2xl font-bold'>{cartContext.totalAmount}€</span>
          </Typography>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <Fragment key='right'>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        onClick={toggleDrawer(true)}
        edge='start'
        sx={{ ml: 2, display: open ? 'none' : 'block' }}
      >
        <ShoppingCartIcon />
      </IconButton>
      <SwipeableDrawer anchor='right' open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        {list()}
      </SwipeableDrawer>
    </Fragment>
  )
}
