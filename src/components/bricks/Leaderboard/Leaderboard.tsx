import React, { FC } from 'react'
import { Team } from '../../../requests/types'
import { useTheme } from '../../../theming'
import LeaderboardRow from './LeaderboardRow'
import LeaderboardHeader from './LeaderboardHeader'
import { myTeamRowCss } from './styles'

const Leaderboard: FC<Props> = ({ leaderboardData, activeTeamName }) => {
  const { colors } = useTheme()

  const entryToRow = (teamData: Team, index: number) => {
    const getCss = () => {
      if (activeTeamName === teamData.team) return myTeamRowCss
      if (index % 2 === 0) return { backgroundColor: colors.secondary }
      return { backgroundColor: colors.tertiary }
    }

    return <LeaderboardRow teamData={teamData} css={getCss()} key={teamData.team} />
  }

  return (
    <div>
      <LeaderboardHeader css={{ color: colors.backgroundDark }} />
      {leaderboardData.map(entryToRow)}
    </div>
  )
}

export type Props = {
  leaderboardData: Team[]
  activeTeamName: string | null
}

export default Leaderboard
export type LeaderboardProps = Props
