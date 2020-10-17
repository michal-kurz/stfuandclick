import React, { FC } from 'react'
import { labelCss, valueCss, wrapperCss } from './styles'

export type Props = {
  label: string
  value: number | string
  className?: string
}

const StatBox: FC<Props> = ({ label, value, className }) => (
  <div css={wrapperCss} className={className}>
    <div css={labelCss}>{label}</div>
    <div css={valueCss}>{value}</div>
  </div>
)

export default StatBox
export type ClickButtonProps = Props
