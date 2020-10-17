import React from 'react'
import { css } from '@emotion/core'

import Quote from '../../bricks/Quote'

const quoteWrapperCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 27px;
`

const TopQuote = () => (
  <div css={quoteWrapperCss}>
    <Quote
      quote={'"It\'s really simple, you just have to click as fast as you can."'}
      author="anonymous"
    />
  </div>
)

export default TopQuote
