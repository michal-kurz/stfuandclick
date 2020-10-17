import React, { FC } from 'react'
import { clicksCss, headerRowCss, rankCss, rowCss, teamNameCss } from './styles'

export type Props = {
  className?: string
}

const LeaderboardHeader: FC<Props> = ({ className }) => (
  <div css={[rowCss, headerRowCss]} className={className}>
    <div css={rankCss} />
    <div css={teamNameCss}>TEAM</div>
    <div css={clicksCss}>CLICKS</div>
  </div>
)

export default LeaderboardHeader
export type LeaderboardHeaderProps = Props
