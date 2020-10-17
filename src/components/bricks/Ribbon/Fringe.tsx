import React, { FC } from 'react'
import { FringeOrientation } from './types'
import { makeFringeCss } from './styles'

export type Props = {
  orientation: FringeOrientation
  className?: string
}

const Fringe: FC<Props> = ({ orientation, className }) => {
  return (
    <div css={makeFringeCss(orientation)} className={className}>
      <div className="triangle"></div>
    </div>
  )
}

export default Fringe
export type FringeProps = Props
