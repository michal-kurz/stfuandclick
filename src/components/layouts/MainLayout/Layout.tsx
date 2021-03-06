import React, { FC, ReactNode } from 'react'
import { mainAreaCss, pageContentCss, pageWrapperCss, topSectionCss } from './styles'
import TopStrip from '../../bricks/TopStrip'
import Footer from '../../bricks/Footer'

export type Props = {
  topSectionContent?: ReactNode
}

const Layout: FC<Props> = ({ topSectionContent, children }) => (
  <div css={pageWrapperCss}>
    <TopStrip />
    <div css={pageContentCss}>
      <div css={topSectionCss}>{topSectionContent}</div>
      <div css={mainAreaCss}>
        <div>{children}</div>
      </div>
    </div>
    <Footer />
  </div>
)

export default Layout
export type LayoutProps = Props
