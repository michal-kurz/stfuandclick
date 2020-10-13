import React, { FC } from 'react'
import { buttonCss } from './styles'

export type Props = {}

const ClickButton: FC<Props> = ({}) => {
  return (
    <button type="button" css={buttonCss}>
      CLICK!
    </button>
  )
}

export default ClickButton
export type ClickButtonProps = Props
