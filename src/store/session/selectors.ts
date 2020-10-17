import { RootState as RS } from '../types'

export const getSessionSlice = (s: RS) => s.session

export const getSessionString = (s: RS) => getSessionSlice(s).sessionString
export const getSessionClicks = (s: RS) => getSessionSlice(s).sessionClicks
