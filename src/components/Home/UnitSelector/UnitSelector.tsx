import useCart from '@/hooks/useCart'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { Box, IconButton, TextField } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
interface Props {
  id: number
  name: string
  price: number
}

export default function UnitSelector(props: Props) {
  const [value, setValue] = useState<number>(0)
  const { cartContext, get, update } = useCart()

  useEffect(() => {
    const cartItem = get(props.id)
    const quantity = cartItem?.quantity ? cartItem.quantity : 0
    setValue(quantity)
  }, [cartContext])

  const addToCart = () => {
    if (value < 99) {
      setValue(value + 1)
      update(props.id, props.name, props.price, value + 1)
    }
  }

  const removeToCart = () => {
    if (value > 0) {
      setValue(value - 1)
      update(props.id, props.name, props.price, value - 1)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value
    if (newValue !== value && newValue >= 0 && newValue <= 99) {
      setValue(newValue)
      update(props.id, props.name, props.price, newValue)
    } else {
      setValue(value)
    }
  }

  return (
    <Box
      component='div'
      className='units-selector w-full flex justify-center items-center gap-2 m-0'
      onClick={(e) => e.preventDefault()}
    >
      <IconButton color='inherit' onClick={removeToCart}>
        <RemoveCircleIcon />
      </IconButton>

      <TextField
        id='quantity'
        type='number'
        size='small'
        value={value}
        InputProps={{ inputProps: { min: 0, max: 99 } }}
        onChange={handleChange}
      />

      <IconButton color='inherit' onClick={addToCart}>
        <AddCircleIcon />
      </IconButton>
    </Box>
  )
}
