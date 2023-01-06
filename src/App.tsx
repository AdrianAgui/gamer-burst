import { useMemo, useState } from 'react'

import Home from './pages/Home/Home'

import Navbar from './components/Navbar/Navbar'
import { ColorModeContext } from './components/ToggleColorMode/ToggleColorMode'

import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { LayoutContainer } from './styled-components/layout.styled.component'

export default function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

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
