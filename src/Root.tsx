import { CartContextProvider } from '@/context/cart.context'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { ColorModeContext } from './components/ToggleColorMode/ToggleColorMode'
import useTheme from './hooks/useTheme'

export default function Root() {
  const { colorMode, theme } = useTheme()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CartContextProvider>
          <Navbar />
          <main className='mt-[64px]'>
            <Outlet />
          </main>
        </CartContextProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
