import React, { FC } from 'react'

import SEO from '../../seo'
import { homepageCss } from './styles'

const Homepage: FC<{}> = () => {
  return (
    <>
      <SEO title="Home" />
      <div css={homepageCss} />
    </>
  )
}

export default Homepage
