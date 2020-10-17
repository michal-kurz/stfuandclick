import { css } from '@emotion/core'
import { ThemedCssCreator } from '../../../theming'

export const wrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const labelCss = css`
  font-style: italic;
  font-size: 25px;
  margin-bottom: 10px;
`

export const valueCss: ThemedCssCreator = theme => css`
  color: ${theme.colors.primary};
  font-size: 50px;
  font-weight: bold;
`
