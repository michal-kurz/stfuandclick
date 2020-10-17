import axios from 'axios'
import { Team } from './types'

type ResponseData = Team[]

const getUrl = () => '/leaderboard'

// eslint-disable-next-line import/prefer-default-export
export const getLeaderboard = () => {
  return axios.request<ResponseData>({
    url: getUrl(),
    method: 'get',
  })
}
