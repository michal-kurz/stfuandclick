import { ThemedCssCreator } from '../../../theming'
import { css } from '@emotion/core'

export const frameCss: ThemedCssCreator = theme => css`
  border-style: solid;
  border-color: ${theme.colors.primary};
  border-width: 9px;
  border-radius: 18px;
  width: 900px;
  height: 1000px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: white;
`

export const topPartCss = css`
  flex-grow: 1;
`

export const bottomPartCss = css`
  height: fit-content;
`
