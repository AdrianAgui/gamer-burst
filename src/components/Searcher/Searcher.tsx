import QueryContext from '@/context/query.context'
import { QueryContextType } from '@/context/types'
import { Search } from '@mui/icons-material'
import { Box, TextField } from '@mui/material'
import debounce from 'just-debounce-it'
import { useContext, useRef } from 'react'

export default function Searcher() {
  const { setQuery } = useContext(QueryContext) as QueryContextType

  const searchRef = useRef()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setQuery(event.target.value)
  }

  return (
    <>
      <Box className='flex items-center'>
        <Search className='mr-2' />
        <TextField
          inputRef={searchRef}
          onChange={debounce(handleChange, 500)}
          sx={{ input: { color: 'white' } }}
          placeholder='Minecraft, Terraria...'
          variant='standard'
          size='small'
        />
      </Box>
    </>
  )
}
