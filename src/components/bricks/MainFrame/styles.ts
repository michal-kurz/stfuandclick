import { css } from '@emotion/core'
import { ThemedCssCreator } from '../../../theming'

export const frameCss: ThemedCssCreator = theme => css`
  marin-top: 7px;
  border-style: solid;
  border-color: ${theme.colors.primary};
  border-width: 9px;
  border-radius: 18px;
  width: 900px;
  height: 1075px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-sizing: border-box;
`

export const topPartCss = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const bottomPartCss = css`
  height: fit-content;
`
