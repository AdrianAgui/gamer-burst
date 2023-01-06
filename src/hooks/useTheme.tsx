import { createTheme } from '@mui/material'
import { useMemo, useState } from 'react'

export default function useTheme() {
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
        typography: {
          button: {
            textTransform: 'none',
          },
        },
      }),
    [mode]
  )

  return { colorMode, theme }
}
