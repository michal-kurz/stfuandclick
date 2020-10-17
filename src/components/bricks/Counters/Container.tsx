import React, { FC } from 'react'
import Counters from './Counters'
import { useSelector } from '../../../store/utils'
import { getSessionClicks } from '../../../store/session/selectors'
import { getTeamClicks } from '../../../store/leaderboard/selectors'

export type ContainerProps = {
  teamName: string
}

const Container: FC<ContainerProps> = ({ teamName }) => {
  const sessionClicks = useSelector(getSessionClicks)
  const teamClicks = useSelector(s => getTeamClicks(s, teamName))

  return <Counters myClicks={sessionClicks} teamClicks={teamClicks ?? 0} />
}

export default Container
