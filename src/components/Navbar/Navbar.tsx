import { AppBar, Box, Toolbar } from '@mui/material'
import Drawer from '../Drawer/Drawer'
import Logo from '../Logo/Logo'
import ToggleColorMode from '../ToggleColorMode/ToggleColorMode'

export default function Navbar() {
  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Logo />
        <Box display='flex'>
          <ToggleColorMode />
          <Drawer />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
