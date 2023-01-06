import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Button, useTheme } from '@mui/material'
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
    <div className='flex items-center' onClick={ctxColorMode.toggleColorMode}>
      <Button color='inherit'>
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        <span className='text-lg ml-2'>
          {theme.palette.mode.charAt(0).toUpperCase() + theme.palette.mode.slice(1)} mode
        </span>
      </Button>
    </div>
  )
}
