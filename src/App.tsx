import { CartContextProvider } from '@/context/cart.context'
import Navbar from './components/Navbar/Navbar'
import { ColorModeContext } from './components/ToggleColorMode/ToggleColorMode'
import Home from './pages/Home/Home'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import useTheme from './hooks/useTheme'

export default function App() {
  const { colorMode, theme } = useTheme()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CartContextProvider>
          <Navbar />
          <main className='home-container'>
            <Home />
          </main>
        </CartContextProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
