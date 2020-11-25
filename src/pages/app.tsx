import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import GlobalStyles from '../assets/globalStyles'
import { store } from '../store/configureStore'
import theme from '../theming'
import Homepage from '../components/pages/Homepage'
import Team from '../components/pages/Team'
import { baseUrl } from '../utils'

const App = () => (
  <>
    <GlobalStyles />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Team path={`${baseUrl}/app/team/:teamName/`} />
          <Homepage path={`${baseUrl}/app/`} default />
        </Router>
      </ThemeProvider>
    </Provider>
  </>
)

export default App
