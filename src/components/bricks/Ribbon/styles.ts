import { css } from '@emotion/core'
import { FringeOrientation } from './types'
import { ThemedCssCreator } from '../../../theming'

// Fringe.tsx
export const makeFringeCss = (
  orientation: FringeOrientation,
  width = '70px',
  length = '100px',
): ThemedCssCreator => theme => {
  const { Left, Right } = FringeOrientation

  const transparentTriangleBorderSize = `calc(${width} / 2)`
  const visibleTriangleBorderSize = '20px'

  const triangleCss = css`
    width: 0;
    height: 0;
    border-top: ${transparentTriangleBorderSize} solid transparent;
    border-bottom: ${transparentTriangleBorderSize} solid transparent;
    border-top: ${transparentTriangleBorderSize} solid transparent;
    border-bottom: ${transparentTriangleBorderSize} solid transparent;
    border-${orientation}: ${visibleTriangleBorderSize} solid white;
    position: absolute;
    ${orientation}: 0;
  `

  const isHorizontal = orientation === Left || orientation === Right
  const xSize = isHorizontal ? length : width
  const ySize = isHorizontal ? width : length

  return css`
    background-color: ${theme.colors.primaryDark};
    position: relative;
    width: ${xSize};
    height: ${ySize};
    .triangle {
      ${triangleCss}
    }
  `
}

// Center.tsx
export const makeCenterCss = (width = '200px', length = '70px'): ThemedCssCreator => theme => css`
  background-color: ${theme.colors.primary};
  width: ${width};
  height: ${length};

  font-weight: bold;
  color: white;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`

// Ribbon.tsx
export const containerCss = css`
  position: relative;
  height: 90px;
  width: 380px;
`
export const leftRibbonCss = css`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 20px;
  border-radius: 1px;
`
export const rightRibbonCss = css`
  z-index: 1;
  position: absolute;
  left: 280px;
  top: 20px;
  border-radius: 1px;
`
export const centerCss = css`
  z-index: 2;
  width: 220px;
  position: absolute;
  left: 85px;
  top: 0px;
  border-radius: 1px;
`
