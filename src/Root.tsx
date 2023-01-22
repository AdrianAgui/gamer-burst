import { CartContextProvider } from '@/context/cart.context'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import App from './App'
import { ColorModeContext } from './components/ToggleColorMode/ToggleColorMode'
import useTheme from './hooks/useTheme'

export default function Root() {
  const { colorMode, theme } = useTheme()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
