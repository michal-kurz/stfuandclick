import { action, payload } from 'ts-action'

export const changeTeam = action(
  'SESSION > CHANGE TEAM', // To hell with Prettier...
  payload<{ teamName: string | null }>()
)

export const changeSessionString = action(
  'SESSION > CHANGE SESSION STRING',
  payload<{ sessionString: string }>()
)
