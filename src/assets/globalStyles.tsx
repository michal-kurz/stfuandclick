import React from 'react'
import { css, Global } from '@emotion/core'

const globalCss = css`
  body {
    margin: 0;
    width: 100vw;
    height: 100vh;
    font-family: roboto;
  }
`

const GlobalStyles = () => <Global styles={globalCss} />

export default GlobalStyles
