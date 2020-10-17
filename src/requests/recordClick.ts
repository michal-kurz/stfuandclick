import axios from 'axios'
import { ClickScore } from './types'

type ResponseData = ClickScore

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
