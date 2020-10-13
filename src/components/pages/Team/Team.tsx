import React, { FC, useEffect } from 'react'

import SEO from '../../seo'
import { recordClick } from '../../../requests'
import Layout from '../../layouts/MainLayout/Layout'
import TopSection from './TopSection'
import MainFrame from '../../bricks/MainFrame'
import { RouteComponentProps } from '@reach/router'
import { buttonContainerCss } from './styles'
import ClickButton from '../../bricks/ClickButton'
import Counters from '../../bricks/Counters'

type Props = RouteComponentProps<{
  teamName: string
}>

const Team: FC<Props> = ({ teamName }) => {
  useEffect(() => {
    recordClick('Best team ever', `fdsoksrekfkfdk`)
      .then(r => console.log('post: ', r.data))
      .catch(alert)
  }, [])

  return (
    <>
      <SEO title={teamName ?? 'The nameless team q:^)'} />
      <Layout topSectionContent={<TopSection teamName={teamName} />}>
        <MainFrame teamName={teamName}>
          <div css={buttonContainerCss}>
            <ClickButton />
          </div>
          <Counters myClicks={123} teamClicks={456789} />
        </MainFrame>
      </Layout>
    </>
  )
}

export default Team
