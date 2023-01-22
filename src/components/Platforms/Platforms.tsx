import { Tooltip } from '@mui/material'
import PcIcon from '../PlatformIcon/PC'
import PlaystationIcon from '../PlatformIcon/PlayStation'
import XboxIcon from '../PlatformIcon/Xbox'

enum Platform {
  PC = 'pc',
  PS = 'playstation',
  XBOX = 'xbox',
  MAC = 'mac',
  LINUX = 'linux',
}

interface Props {
  platforms: string[]
}

export default function Platforms(props: Props) {
  return (
    <>
      {props.platforms.map((platform) => {
        if (platform === Platform.PC) {
          return (
            <Tooltip key={Platform.PC} title={Platform.PC} arrow>
              <span>
                <PcIcon />
              </span>
            </Tooltip>
          )
        }
        if (platform === Platform.PS) {
          return (
            <Tooltip key={Platform.PS} title={Platform.PS} arrow>
              <PlaystationIcon />
            </Tooltip>
          )
        }
        if (platform === Platform.XBOX) {
          return (
            <Tooltip key={Platform.XBOX} title={Platform.XBOX} arrow>
              <XboxIcon />
            </Tooltip>
          )
        }
        // TODO: Add more platforms (Apple, linux...)
      })}
    </>
  )
}
