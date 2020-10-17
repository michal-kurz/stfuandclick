import axios from 'axios'
import { Team } from './types'

type ResponseData = Team[]

const getUrl = () => `/leaderboard`

export const getLeaderboard = () =>
  axios.request<ResponseData>({
    url: getUrl(),
    method: 'get',
  })
