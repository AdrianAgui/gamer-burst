import { AppBar, Toolbar, Typography } from '@mui/material'
import ToggleColorMode from '../ToggleColorMode/ToggleColorMode'

export default function Navbar() {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Gamer Burst
        </Typography>
        <ToggleColorMode />
      </Toolbar>
    </AppBar>
  )
}
