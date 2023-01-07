import Navbar from './components/Navbar/Navbar'
import { ColorModeContext } from './components/ToggleColorMode/ToggleColorMode'
import Home from './pages/Home/Home'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { Provider } from 'react-redux'
import store from './redux/store'

import useTheme from './hooks/useTheme'
import { LayoutContainer } from './styled-components/layout.styled.component'

export default function App() {
  const { colorMode, theme } = useTheme()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Navbar />
          <LayoutContainer>
            <Home />
          </LayoutContainer>
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
