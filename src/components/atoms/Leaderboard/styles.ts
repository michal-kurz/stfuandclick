import { css } from '@emotion/core'
import { ThemedCssCreator } from '../../../theming'

export const rowCss = css`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 24px;

  height: 60px;

  & > div {
    display: flex;
    align-items: center;
  }
`

export const myTeamRowCss: ThemedCssCreator = theme => css`
  color: white;
  height: 85px;
  font-size: 35px;
  background-color: ${theme.colors.primary};
`

export const headerRowCss = css`
  font-size: 17px;
  height: 35px;
`

export const rankCss = css`
  width: 65px;
  justify-content: flex-end;
`

export const teamNameCss = css`
  margin-left: 35px;
  flex-grow: 1;
`

export const clicksCss = css`
  width: fit-content;
  margin-right: 35px;
`
