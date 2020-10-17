import React, { ButtonHTMLAttributes, FC } from 'react'
import { buttonCss } from './styles'

export type Props = ButtonHTMLAttributes<HTMLButtonElement>

const ClickButton: FC<Props> = props => (
  <button type="button" {...props} css={buttonCss}>
    CLICK!
  </button>
)

export default ClickButton
export type ClickButtonProps = Props
