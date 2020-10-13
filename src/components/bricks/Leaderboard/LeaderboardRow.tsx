import React, { FC } from 'react'
import { clicksCss, rankCss, rowCss, teamNameCss } from './styles'
import { LeaderboardRecord } from '../../../requests/types'
import { applyThousandsSeparator } from '../../../utils'

export type Props = {
  teamData: LeaderboardRecord
  className?: string
}

const LeaderboardRow: FC<Props> = ({ className, teamData }) => {
  const { team, clicks, order } = teamData

  return (
    <div css={rowCss} className={className}>
      <div css={rankCss}>{order}</div>
      <div css={teamNameCss}>{team}</div>
      <div css={clicksCss}>{applyThousandsSeparator(clicks)}</div>
    </div>
  )
}

export default LeaderboardRow
export type LeaderboardRowProps = Props
