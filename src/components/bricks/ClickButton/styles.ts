import { css } from '@emotion/core'
import { ThemedCssCreator } from '../../../theming'

// eslint-disable-next-line import/prefer-default-export
export const buttonCss: ThemedCssCreator = theme => css`
  color: white;
  background-color: ${theme.colors.primary};
  cursor: pointer;
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
