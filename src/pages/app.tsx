import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyles } from '../assets/globalStyles'
import { Provider } from 'react-redux'
import { store } from '../store/configureStore'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theming'
import Homepage from '../components/pages/Homepage'
import Team from '../components/pages/Team'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Homepage path="/app/" />
            <Team path="/app/team/:teamName" />
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
