import React, { FC } from 'react'

import SEO from '../../seo'
import Layout from '../../layouts/MainLayout/Layout'
import TopSection from './TopSection'
import MainFrame from '../../bricks/MainFrame'
import { buttonContainerCss } from './styles'
import ClickButton from '../../bricks/ClickButton'
import Counters from '../../bricks/Counters'

type Props = {
  recordClick: () => void
  teamName: string
}

const Team: FC<Props> = ({ teamName, recordClick }) => {
  return (
    <>
      <SEO title={teamName ?? 'The nameless team q:^)'} />
      <Layout topSectionContent={<TopSection teamName={teamName} />}>
        <MainFrame teamName={teamName}>
          <div css={buttonContainerCss}>
            <ClickButton onClick={recordClick} />
          </div>
          <Counters teamName={teamName} />
        </MainFrame>
      </Layout>
    </>
  )
}

export default Team
