import { Team } from '../requests/types'

// https://medium.com/javascript-algorithms/javascript-algorithms-insertion-sort-59b6b655373c
export function insertionSort<T>(
  inputArr: T[],
  compareFn: (el1: T, el2: T) => number, // true when el1 > el2 (for ascending order)
) {
  const { length } = inputArr
  for (let i = 1; i < length; i += 1) {
    const key = inputArr[i]
    let j = i - 1
    while (j >= 0 && compareFn(inputArr[j], key) > 0) {
      // eslint-disable-next-line no-param-reassign
      inputArr[j + 1] = inputArr[j]
      j -= 1
    }
    // eslint-disable-next-line no-param-reassign
    inputArr[j + 1] = key
  }
  return inputArr
}

export function compareTeams(a: Team, b: Team) {
  if (a.clicks < b.clicks) return 1
  if (b.clicks < a.clicks) return -1
  return a.order - b.order
}
