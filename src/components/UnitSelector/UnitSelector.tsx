import { Box, TextField } from '@mui/material'

export default function UnitSelector() {
  return (
    <Box component='form' noValidate autoComplete='off'>
      <TextField
        id='quantity'
        type='number'
        size='small'
        InputProps={{ inputProps: { min: 0, max: 99 } }}
        sx={{
          width: '8ch',
          textAlign: 'center',
        }}
      />
    </Box>
  )
}
