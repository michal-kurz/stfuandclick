import { InterpolationWithTheme } from '@emotion/core'
import originalStyled, { CreateStyled } from '@emotion/styled'
import { useTheme as originalUseTheme } from 'emotion-theming'

const theme = {
  colors: {
    primary: '#4990e2',
    primaryDark: '#417ec1',

    secondary: '#dce9f9',

    tertiary: '#ecf3fd',

    background: '#f2f2f2',
  },
}

export type Theme = typeof theme

export const styled = originalStyled as CreateStyled<Theme>
export const useTheme: () => Theme = originalUseTheme

export type ThemedCssCreator = InterpolationWithTheme<Theme>

export default theme
