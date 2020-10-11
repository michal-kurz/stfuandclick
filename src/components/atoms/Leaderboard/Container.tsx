import React, { FC } from 'react'
import Leaderboard from './Leaderboard'
import { useSelector } from 'react-redux'
import { getTeamName } from '../../../store/session/selectors'
import useLeaderboardData from './useLeaderboardData'
import useFetchData from './useFetchLeaderboardData'

const Container: FC<{}> = () => {
  const teamName = useSelector(getTeamName)
  const [data, isFetching] = useLeaderboardData(teamName)

  useFetchData()

  const isLoading = isFetching && data.length === 0

  return <Leaderboard activeTeamName={teamName} leaderboardData={data} />
}

export default Container
