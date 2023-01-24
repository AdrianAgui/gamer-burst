import { Tag } from '@/models/game-info.model'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import { Box, Chip, List, ListItem, Tooltip } from '@mui/material'

interface Props {
  tags: Tag[]
}

export default function Tags(props: Props) {
  return (
    <Box component='section' className='mt-10'>
      <List className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
        {props.tags &&
          props.tags.length > 0 &&
          props.tags.map((tag) => {
            return (
              <Tooltip key={tag.slug} title={tag.name} arrow>
                <ListItem disablePadding>
                  <Chip icon={<LocalOfferIcon />} label={tag.name} />
                </ListItem>
              </Tooltip>
            )
          })}
      </List>
    </Box>
  )
}
