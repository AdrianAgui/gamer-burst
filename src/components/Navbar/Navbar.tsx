import { AppBar, Toolbar } from '@mui/material'
import Logo from '../Logo/Logo'
import ToggleColorMode from '../ToggleColorMode/ToggleColorMode'

export default function Navbar() {
  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Logo />
        <ToggleColorMode />
      </Toolbar>
    </AppBar>
  )
}
