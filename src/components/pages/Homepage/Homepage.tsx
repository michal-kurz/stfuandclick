import React, { FC, useEffect, useState } from 'react'
import { RouteComponentProps } from '@reach/router'

import SEO from '../../seo'
import { buttonWrapper, inputCss, inputWrapper, topStripCss } from './styles'
import { recordClick } from '../../../requests'
import Layout from '../../layouts/MainLayout/Layout'
import TopQuote from './TopQuote'
import MainFrame from '../../bricks/MainFrame'
import ClickButton from '../../bricks/ClickButton'
import Input from '../../bricks/Input'

type Props = RouteComponentProps

const Homepage: FC<Props> = () => {
  useEffect(() => {
    recordClick('Best team ever', `fdsoksrekfkfdk`)
      .then(r => console.log('post: ', r.data))
      .catch(alert)
  }, [])

  const [teamName, setTeamName] = useState('')

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
            <div css={buttonWrapper}>
              <ClickButton />
            </div>
          </div>
        </MainFrame>
      </Layout>
    </>
  )
}

export default Homepage
