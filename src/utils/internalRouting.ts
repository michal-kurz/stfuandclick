const BASE_URL = '/app'

// eslint-disable-next-line import/prefer-default-export
export const getTeamPath = (teamName: string) => `${BASE_URL}/team/${teamName}`
