import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import GlobalStyles from '../assets/globalStyles'
import { store } from '../store/configureStore'
import theme from '../theming'
import Homepage from '../components/pages/Homepage'
import Team from '../components/pages/Team'
import { BASE_URL } from '../utils'

const App = () => (
  <>
    <GlobalStyles />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Homepage path={`${BASE_URL}/app/`} />
          <Team path={`${BASE_URL}/app/team/:teamName`} />
        </Router>
      </ThemeProvider>
    </Provider>
  </>
)

export default App
