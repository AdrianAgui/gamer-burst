import CartContext from '@/context/cart.context'
import { CartContextType } from '@/context/types'
import { CartGame } from '@/models/cart.model'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import { IconButton, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Fragment, useContext, useState } from 'react'

export default function Drawer() {
  const { cartContext } = useContext(CartContext) as CartContextType
  const [open, setOpen] = useState(false)

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
          <ListItemText primary={'Cart'} primaryTypographyProps={{ fontSize: 24 }} />
          <IconButton onClick={toggleDrawer(false)} aria-label='close drawer'>
            <CloseIcon />
          </IconButton>
        </ListItem>
      </List>

      <Divider />

      {cartContext.games.map((game: CartGame, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <ShoppingCartCheckoutIcon />
          </ListItemIcon>
          <ListItemText primary={game.name} primaryTypographyProps={{ fontSize: 14 }} />
        </ListItem>
      ))}

      <Divider />

      <List>
        <ListItem key={'totalAmount'} sx={{ justifyContent: 'end' }}>
          <Typography variant='h5' component='div'>
            A pagar: {cartContext.totalAmount}€
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
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer anchor='right' open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        {list()}
      </SwipeableDrawer>
    </Fragment>
  )
}
