import { useDispatch } from 'react-redux'
import * as TC from '../../../store/leaderboard/thunkCreators'
import { useEffect } from 'react'

const useFetchData = () => {
  const dispatch = useDispatch()

  const fetchData = () => {
    dispatch(TC.fetchLeaderboard())
  }

  useEffect(fetchData, [])

  return fetchData
}

export default useFetchData
