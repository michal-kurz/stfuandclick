import { AxiosError } from 'axios'

const isDevMode = process.env.NODE_ENV === 'development'

export const handleRequestError = <ResponseType = any>(
  e: string | AxiosError<ResponseType>
) => {
  if (!isDevMode) return

  const errMsg = (e as any)?.response?.data ?? e
  console.error(errMsg)
}
