import { LocalStorageType } from '@/utils/constants'
import { getLocalStorage, setLocalStorage } from '@/utils/utils'
import { createTheme } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'

type Theme = 'light' | 'dark'

export default function useTheme() {
  const [mode, setMode] = useState<Theme>('light')

  useEffect(() => {
    const currentTheme = getLocalStorage(LocalStorageType.THEME)
    setMode(currentTheme)
  }, [])

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const theme: Theme = prevMode === 'light' ? 'dark' : 'light'
          setLocalStorage(LocalStorageType.THEME, theme)
          return theme
        })
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
        typography: {
          fontFamily: 'Work Sans, Arial, Helvetica, Verdana, sans-serif',
          button: {
            textTransform: 'none',
          },
        },
      }),
    [mode]
  )

  return { colorMode, theme }
}
