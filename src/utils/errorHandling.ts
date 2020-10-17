import { AxiosError } from 'axios'

const isDevMode = process.env.NODE_ENV === 'development'

export type ReqErr<ResponseType> = string | AxiosError<ResponseType>

export const handleRequestError = <ResponseType>(e: ReqErr<ResponseType>) => {
  if (!isDevMode) return

  const errMsg = (e as any)?.response?.data ?? e // eslint-disable-line @typescript-eslint/no-explicit-any

  console.error(errMsg) // eslint-disable-line no-console
}
