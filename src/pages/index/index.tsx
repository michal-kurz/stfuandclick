import React, { useEffect } from 'react'

import SEO from '../../components/seo'
import { getLeaderboard, recordClick } from '../../requests'
import Layout from '../../components/layouts/MainLayout/Layout'
import TopQuote from './TopQuote'

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
      <Layout topSectionContent={<TopQuote />}></Layout>
    </>
  )
}
export default IndexPage