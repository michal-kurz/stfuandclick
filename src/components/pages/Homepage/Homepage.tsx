import React, { FC, useEffect } from 'react'

import SEO from '../../seo'
import { recordClick } from '../../../requests'
import Layout from '../../layouts/MainLayout/Layout'
import TopQuote from './TopQuote'
import MainFrame from '../../bricks/MainFrame'
import { RouteComponentProps } from '@reach/router'

type Props = RouteComponentProps

const Homepage: FC<Props> = () => {
  useEffect(() => {
    recordClick('Best team ever', `fdsoksrekfkfdk`)
      .then(r => console.log('post: ', r.data))
      .catch(alert)
  }, [])

  return (
    <>
      <SEO title="Home" />
      <Layout topSectionContent={<TopQuote />}>
        <MainFrame></MainFrame>
      </Layout>
    </>
  )
}

export default Homepage
