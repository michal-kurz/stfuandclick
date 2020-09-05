import axios from 'axios'
import { TeamScore } from './types'

type ResponseData = TeamScore

const getUrl = () => `/klik`

export const recordClick = (team: string, session: string) =>
  axios.request<ResponseData>({
    url: getUrl(),
    method: 'post',
    data: {
      team,
      session,
    },
  })
