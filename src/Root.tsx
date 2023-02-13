import { CartContextProvider } from '@/context/cart.context'
import { QueryContextProvider } from '@/context/query.context'
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

        <QueryContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </QueryContextProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
