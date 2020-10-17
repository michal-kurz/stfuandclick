import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'

import SEO from '../../seo'
import { buttonWrapperCss, inputCss, inputWrapper, ribbonContainerCss, topStripCss } from './styles'
import Layout from '../../layouts/MainLayout/Layout'
import TopQuote from './TopQuote'
import MainFrame from '../../bricks/MainFrame'
import ClickButton from '../../bricks/ClickButton'
import Input from '../../bricks/Input'
import Ribbon from '../../bricks/Ribbon'

type Props = RouteComponentProps & {
  recordClick: () => void
  teamName: string
  setTeamName: (newName: string) => void
}

const Homepage: FC<Props> = ({ recordClick, teamName, setTeamName }) => {
  return (
    <>
      <SEO title="Home" />
      <Layout topSectionContent={<TopQuote />}>
        <MainFrame>
          <div css={topStripCss}>
            <div css={inputWrapper}>
              Enter your team name:
              <Input
                css={inputCss}
                value={teamName}
                onChange={e => setTeamName(e.target.value)}
                placeholder="Your mom"
              />
            </div>
            <div css={buttonWrapperCss}>
              <ClickButton onClick={recordClick} />
            </div>
          </div>
          <div css={ribbonContainerCss}>
            <Ribbon />
          </div>
        </MainFrame>
      </Layout>
    </>
  )
}

export default Homepage
export type HomepageProps = Props
