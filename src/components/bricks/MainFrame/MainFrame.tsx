import React, { FC } from 'react'
import { bottomPartCss, frameCss, topPartCss } from './styles'
import Leaderboard from '../Leaderboard'
import MotivationalLine from '../MotivationalLine'

export type Props = {
  teamName?: string
}

const MainFrame: FC<Props> = ({ children, teamName }) => {
  return (
    <div css={frameCss}>
      <div css={topPartCss}>{children} </div>

      <div css={bottomPartCss}>
        <Leaderboard teamName={teamName} />
        <MotivationalLine />
      </div>
    </div>
  )
}

export default MainFrame
export type TopRibbonProps = Props
