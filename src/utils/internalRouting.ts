const getBaseUrl = () => {
  const isProduction = process.env.NODE_ENV === 'production'
  if (isProduction) return '/stfuandclick'
  return ''
}

export const baseUrl = getBaseUrl()

// eslint-disable-next-line import/prefer-default-export
export const getTeamPath = (teamName: string) => `${baseUrl}/app/team/${teamName}`
export const getHomepagePath = () => `${baseUrl}/app/`
