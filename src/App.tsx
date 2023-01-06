import { useMemo, useState } from 'react'

import Home from './pages/Home/Home'

import Navbar from './components/Navbar/Navbar'
import ToggleColorMode, { ColorModeContext } from './components/ToggleColorMode/ToggleColorMode'

import './App.css'

import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

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
        <div style={{ marginTop: '50px' }}>
          <ToggleColorMode />
        </div>
        <Home />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
