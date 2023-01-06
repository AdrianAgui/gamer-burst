import { AppBar, Button, Toolbar, Typography } from '@mui/material'

export default function Navbar() {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Gamer Burst
        </Typography>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  )
}
