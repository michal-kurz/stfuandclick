import { useSelector as _useSelector } from 'react-redux'
import { RootState } from './types'

export type UseSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected,
  _equalityFn?: (left: TSelected, right: TSelected) => boolean
) => TSelected

export const useSelector: UseSelector = _useSelector
