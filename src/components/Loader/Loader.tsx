import { Box, CircularProgress } from '@mui/material'

export default function Loader() {
  return (
    <Box sx={{ display: 'grid', placeContent: 'center', marginTop: '64px' }}>
      <CircularProgress />
    </Box>
  )
}
