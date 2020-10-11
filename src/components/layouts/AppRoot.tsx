import React, { FC } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from 'react-redux'

import theme from '../../theming'
import { GlobalStyles } from '../../assets/globalStyles'
import { store } from '../../store/configureStore'

const AppRoot: FC<{}> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </>
  )
}

export default AppRoot
