import { css } from '@emotion/core'
import { ThemedCssCreator } from '../../../theming'

// eslint-disable-next-line import/prefer-default-export
export const ribbonCss: ThemedCssCreator = ({ colors }) => css`
  width: 100%;
  color: white;
  letter-spacing: 1px;
  padding: 12px 0;
  font-size: 30px;
  background-color: ${colors.primary};
  text-align: center;
  font-weight: bold;
`
