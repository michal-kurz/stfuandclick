import axios from 'axios'
import { LeaderboardRecord } from './types'

type ResponseData = LeaderboardRecord[]

const getUrl = () => `/leaderboard`

export const getLeaderboard = () =>
  axios.request<ResponseData>({
    url: getUrl(),
    method: 'get',
  })
