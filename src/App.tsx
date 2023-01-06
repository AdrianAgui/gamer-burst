import Home from './pages/Home/Home'

import Navbar from './components/Navbar/Navbar'
import { ColorModeContext } from './components/ToggleColorMode/ToggleColorMode'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import useTheme from './hooks/useTheme'
import { LayoutContainer } from './styled-components/layout.styled.component'

export default function App() {
  const { colorMode, theme } = useTheme()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <LayoutContainer>
          <Home />
        </LayoutContainer>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
