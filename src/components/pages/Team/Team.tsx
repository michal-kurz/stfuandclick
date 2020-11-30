import React, { FC } from 'react'

import SEO from '../../seo'
import { teamCss } from './styles'

const Team: FC<{}> = () => (
  <>
    <SEO title="team" />
    <div css={teamCss} />
  </>
)

export default Team
