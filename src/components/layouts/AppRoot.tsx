import React, { FC } from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../theming'
import { GlobalStyles } from '../../assets/globalStyles'

const AppRoot: FC<{}> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}

export default AppRoot
