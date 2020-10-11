import { css } from '@emotion/core'
import { ThemedCssCreator } from '../../../theming'

export const ribbonCss: ThemedCssCreator = ({ colors }) => css`
  width: 100%;
  color: white;
  letter-spacing: 1px;
  padding: 7px 0;
  font-size: 25px;
  background-color: ${colors.primary};
  text-align: center;
  font-weight: bold;
`
