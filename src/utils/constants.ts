import produce from 'immer'
import _noop from 'lodash/fp/noop'

// I want to make sure an error gets throws, should the variables ever get mutated
// I had tough luck with Object.freeze, as the result got marked as `readonly` by TS
// and I had no luck making it work in my components. So I came up with this:
const richMansFreeze = <T extends any>(x: T): T => produce(x, _noop)

export const LEADERBOARD_RADIUS = 3
export const TOP_LEADERBOARD_LENGTH = 10

export const EMPTY_ARRAY = richMansFreeze<any[]>([])

type anyObject = { [x: string]: any; [x: number]: any }
export const EMPTY_OBJECT = richMansFreeze<anyObject>({})
