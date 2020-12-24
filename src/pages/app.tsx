import React, { FC } from 'react'
import { RouteComponentProps, Router } from '@reach/router'
import { css } from '@emotion/core'
import { sharedCss } from '../styles'

const appCss = css`
  background-color: red;
`
const teamCss = css`
  background-color: green;
`

const AppPage: FC<RouteComponentProps> = () => <div css={[appCss, sharedCss]}>App</div>
const TeamPage: FC<RouteComponentProps> = () => (
  <div>
    <div css={[teamCss, sharedCss]}>Team</div>
  </div>
)

const App = () => (
  <Router>
    <AppPage path="/app/" default />
    <TeamPage path="/app/team/:teamName/" />
  </Router>
)

export default App
