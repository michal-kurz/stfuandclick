import React, { FC } from 'react'
import Leaderboard from './Leaderboard'
import useLeaderboardData from './useLeaderboardData'
import useFetchData from './useFetchLeaderboardData'

type Props = {
  teamName?: string
}

const Container: FC<Props> = ({ teamName }) => {
  const [data, isFetching] = useLeaderboardData(teamName ?? null)

  useFetchData(teamName)

  const isLoading = isFetching && data.length === 0

  return <Leaderboard activeTeamName={teamName ?? null} leaderboardData={data} />
}

export default Container
