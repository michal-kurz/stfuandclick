import axios from 'axios'
import { ClickScore } from './types'

type ResponseData = ClickScore

const getUrl = () => '/klik'

// eslint-disable-next-line import/prefer-default-export
export const recordClick = (team: string, session: string) => {
  return axios.request<ResponseData>({
    url: getUrl(),
    method: 'post',
    data: {
      team,
      session,
    },
  })
}
