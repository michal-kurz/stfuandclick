// Gets a number + size of radius, returns array of sorted ints within the radius
// ie. (number = 7 & radius = 2) => [5,6,7,8,9]
import { EMPTY_ARRAY } from './constants'

export function getIntRadius(radius: number, int: number) {
  const totalIntervalSize = radius * 2 + 1
  const range = [...Array(totalIntervalSize).keys()] // [0, ..., (2*radius +1)]
  return range.map(n => n + int - radius)
}

type Constraints = { min?: number; max?: number }
// Returns radius around int, but shifts the whole radius to fit into constraints
// If the radius is bigger than the constraint interval, it gets clipped
export function getIntRadiusWithinConstraints(
  radius: number,
  _int: number,
  constraints?: Constraints,
) {
  let int = _int
  const { min = 0, max = Infinity } = constraints || {}

  if (max < min) return EMPTY_ARRAY

  const lowestInRadius = int - radius
  const overflowLeft = min - lowestInRadius
  if (overflowLeft > 0) {
    int += overflowLeft
  }

  const highestInRadius = int + radius
  const overflowRight = highestInRadius - max
  if (overflowRight > 0) {
    int -= overflowRight
  }

  const rangeIntervalSize = radius * 2 + 1
  const constraintIntervalSize = max - min

  const shiftedRange = getIntRadius(radius, int) // Can still be overflowing, if bigger than the constraint interval

  const isRangeTooBigToFit = rangeIntervalSize > constraintIntervalSize

  if (!isRangeTooBigToFit) return shiftedRange
  return shiftedRange.filter(n => n >= min && n <= max)
}

export const applyThousandsSeparator = (num: number | string, separator = ' ') => {
  const stringified = String(num)
  return stringified.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
}
