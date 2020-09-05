import React, { useEffect } from 'react'
import { css } from '@emotion/core'

import SEO from '../components/seo'
import { getLeaderboard, recordClick } from '../requests'

const IndexPage = () => {
  useEffect(() => {
    getLeaderboard()
      .then(r => console.log('get: ', r.data))
      .catch(alert)

    recordClick('Best team ever', `fdsoksrekfkfdk`)
      .then(r => console.log('post: ', r.data))
      .catch(alert)
  }, [])

  return (
    <>
      <SEO title="Home" />
      <h1
        css={css`
          color: orange;
        `}
      >
        Hi people
      </h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </>
  )
}
export default IndexPage
