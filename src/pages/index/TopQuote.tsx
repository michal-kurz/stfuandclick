import React from 'react'
import { css } from '@emotion/core'
import Quote from '../../components/atoms/Quote'

const quoteWrapperCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
`

const TopQuote = () => (
  <div css={quoteWrapperCss}>
    <Quote
      quote={`"It's really simple, you just have to click as fast as you can."`}
      author={'anonymous'}
    />
  </div>
)

export default TopQuote
