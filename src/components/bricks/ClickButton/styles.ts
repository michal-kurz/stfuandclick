import { ThemedCssCreator } from '../../../theming'
import { css } from '@emotion/core'

export const buttonCss: ThemedCssCreator = theme => css`
  color: white;
  background-color: ${theme.colors.primary};
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-size: 50px;
  font-weight: bold;
  width: 100%;
  height: 100%;
  border: none;
`
