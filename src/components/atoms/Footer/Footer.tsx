import React, { FC } from 'react'
import { footerCss } from './styles'

export type Props = {}

const Footer: FC<Props> = () => {
  return (
    <div css={footerCss}>
      If you don't like this page, it's{' '}
      <a href="https://www.applifting.cz/" target="_blank">
        Applifting
      </a>
      's fault
    </div>
  )
}

export default Footer
export type TopRibbonProps = Props
