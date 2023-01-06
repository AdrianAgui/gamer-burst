import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { IconButton, useTheme } from '@mui/material'
import { createContext, useContext } from 'react'

export const ColorModeContext = createContext({
  toggleColorMode: () => {
    return
  },
})

export default function ToggleColorMode() {
  const theme = useTheme()
  const ctxColorMode = useContext(ColorModeContext)
  return (
    <>
      <IconButton sx={{ ml: 1 }} onClick={ctxColorMode.toggleColorMode} color='inherit'>
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      {theme.palette.mode} mode
    </>
  )
}
