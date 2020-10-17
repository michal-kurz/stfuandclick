import React, { FC } from 'react'
import { footerCss } from './styles'

export type Props = {}

const Footer: FC<Props> = () => (
  <div css={footerCss}>
    If you don&apos;t like this page, it&apos;s&#32;
    <a href="https://www.applifting.cz/" target="_blank" rel="noreferrer">
      Applifting
    </a>
    &apos;s fault
  </div>
)

export default Footer
export type TopRibbonProps = Props
