import React, { FC } from 'react'
import { footerCss } from './styles'

export type Props = {}

const MainFrame: FC<Props> = () => {
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

export default MainFrame
export type TopRibbonProps = Props
