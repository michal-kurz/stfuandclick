import React, { FC, ReactNode } from 'react'
import { mainAreaCss, pageContentCss, pageWrapperCss, topSectionCss } from './styles'
import TopRibbon from '../../bricks/TopRibbon'
import Footer from '../../bricks/Footer'

export type Props = {
  topSectionContent?: ReactNode
}

const Layout: FC<Props> = ({ topSectionContent, children }) => {
  return (
    <div css={pageWrapperCss}>
      <TopRibbon />
      <div css={pageContentCss}>
        <div css={topSectionCss}>{topSectionContent}</div>
        <div css={mainAreaCss}>
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
export type LayoutProps = Props
