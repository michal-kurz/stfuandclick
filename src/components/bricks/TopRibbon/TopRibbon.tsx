import React, { FC } from 'react'
import { ribbonCss } from './styles'

export type Props = {}

const TopRibbon: FC<Props> = () => {
  return <div css={ribbonCss}>STFUANDCLICK.COM</div>
}

export default TopRibbon
export type TopRibbonProps = Props
