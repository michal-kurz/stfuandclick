import React, { ButtonHTMLAttributes, FC } from 'react'
import { buttonCss } from './styles'

export type Props = ButtonHTMLAttributes<any>

const ClickButton: FC<Props> = props => {
  return (
    <button type="button" {...props} css={buttonCss}>
      CLICK!
    </button>
  )
}

export default ClickButton
export type ClickButtonProps = Props
