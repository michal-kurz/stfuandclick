import { css } from '@emotion/core'
import { ThemedCssCreator } from '../../../theming'

export const pageWrapperCss: ThemedCssCreator = theme => css`
  background-color: ${theme.colors.background};

  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
export const topRibbonCss = css``
export const pageContentCss = css`
  flex-grow: 1;
`
export const topSectionCss = css`
  height: 200px;
  margin-top: 80px;
`
export const mainAreaCss = css`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const mainFrameCss: ThemedCssCreator = theme => css`
  border-style: solid;
  border-color: ${theme.colors.primary};
  border-width: 5px;
  border-radius: 8px;
  width: 800px;
  height: 800px;
  overflow: hidden;
`