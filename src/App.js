import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './styled-components/theme'

const NotFound404 = () => (
  <div>
    <h1>404</h1>
    <Link to='/'>Home</Link>
  </div>
)

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* {process.env.NODE_ENV === 'development' &&
        } */}
        <Route component={NotFound404} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
