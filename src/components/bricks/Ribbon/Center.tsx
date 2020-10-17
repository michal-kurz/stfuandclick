import React, { FC } from 'react'
import { makeCenterCss } from './styles'

export type Props = {
  text: string
  className?: string
}

const Center: FC<Props> = ({ text, className }) => {
  return (
    <div css={makeCenterCss()} className={className}>
      {text}
    </div>
  )
}

export default Center
export type CenterProps = Props
