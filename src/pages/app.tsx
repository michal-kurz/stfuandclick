import React from 'react'
import { Router } from '@reach/router'
import { css } from '@emotion/core'

const appCss = css`
  width: 100vw;
  height: 100vh;
  background-color: red;
`

const teamCss = css`
  width: 100vw;
  height: 100vh;
  background-color: green;
`

const App = () => (
  <Router>
    <div path="/app/team/:teamName/" css={appCss} />
    <div path="/app/" default css={teamCss} />
  </Router>
)

export default App
