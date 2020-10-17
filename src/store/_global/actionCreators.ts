import { action, payload } from 'ts-action'

export const recordClick = action(`GLOBAL > RECORD A CLICK`, payload<{ teamName: string }>())

// In case click didn't go through on BE
export const undoClick = action(`GLOBAL > UNDO CLICK`, payload<{ teamName: string }>())
