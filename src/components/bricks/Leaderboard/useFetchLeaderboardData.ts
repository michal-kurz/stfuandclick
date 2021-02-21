import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import * as TC from '../../../store/leaderboard/thunkCreators'

const useFetchData = (myTeamName: string | undefined) => {
  const dispatch = useDispatch()

  const fetchData = () => {
    dispatch(TC.fetchLeaderboard({ myTeamName }))
  }

  useEffect(fetchData, [])

  return fetchData
}

export default useFetchData
