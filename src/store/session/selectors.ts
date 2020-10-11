import { RootState as RS } from '../types'

export const getSessionSlice = (s: RS) => s.session

export const getTeamName = (s: RS) => getSessionSlice(s).team
