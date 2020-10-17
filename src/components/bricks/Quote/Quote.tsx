import React, { FC } from 'react'
import { authorCss, quoteCss, wrapperCss } from './styles'

export type Props = {
  quote: string
  author: string
}

const Quote: FC<Props> = ({ quote, author }) => (
  <div css={wrapperCss}>
    <div css={quoteCss}>{quote}</div>
    <div css={authorCss}>-{author}</div>
  </div>
)

export default Quote
export type TopRibbonProps = Props
