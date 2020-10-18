import { css } from '@emotion/core'
import { ThemedCssCreator } from '../../../theming'

export const topStripCss = css`
  display: flex;
  justify-content: space-between;
`

export const inputWrapper = css`
  padding: 20px 25px;
  font-size: 27px;
  flex-grow: 1;
  width: 60%;
  display: flex;
  flex-direction: column;
  font-style: italic;
  justify-content: space-between;
`

export const buttonWrapperCss = css`
  width: 46%;
  height: 113px;
  padding: 20px 25px 22px;
`

export const getBtnCss = (disabled: boolean): ThemedCssCreator => css`
  ${disabled && 'opacity: 40%'};
  ${disabled && 'cursor: default'};
  transition: all 0.3s ease-in-out;
`

export const inputCss = css`
  width: 100%;
`

export const ribbonContainerCss = css`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
