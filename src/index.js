import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import reducers from './reducers'

import HeaderNav from './headers'
import HomeIndexRouter from './home/homeRouter'
import OrdersIndexRouter from './orders'
import ProductIndexRouter from './product'


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
          <HeaderNav />
          <Switch>
            <Route path="/orders" component={OrdersIndexRouter} />
            <Route path="/product" component={ProductIndexRouter} />
            <Route path="/" component={HomeIndexRouter} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>, document.querySelector('.container'))
