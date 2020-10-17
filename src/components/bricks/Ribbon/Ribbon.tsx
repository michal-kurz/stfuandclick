import React, { FC } from 'react'
import Fringe from './Fringe'
import { FringeOrientation } from './types'
import Center from './Center'
import { centerCss, containerCss, leftRibbonCss, rightRibbonCss } from './styles'

const { Left, Right } = FringeOrientation

export type Props = {}

const Ribbon: FC<Props> = ({}) => {
  return (
    <div css={containerCss}>
      <Fringe orientation={Left} css={leftRibbonCss} />
      <Center text="TOP 10 Clickers" css={centerCss} />
      <Fringe orientation={Right} css={rightRibbonCss} />
    </div>
  )
}

export default Ribbon
export type RibbonProps = Props
