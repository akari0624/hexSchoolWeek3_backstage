import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import reducers from './reducers'

import HomeRouter from './home/homeRouter'

const createStoreWithMiddleware = applyMiddleware()(createStore)

const appStore = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const theme = {
  level1Margin:'42px 30px',
  mobileOneColumnWidth: '570px',
  padWidth: '980px'
}

ReactDOM.render(
  <Provider store={appStore}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={HomeRouter}/>
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>, document.querySelector('.container'))
