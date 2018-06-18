import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import OrdersPage from './components/OrdersPage'


const OuttestWrapper = Styled.div`
  position:relative;
  background-color:#F2F2F2;
`


const OrdersIndexRouter = props => (

  <OuttestWrapper>
    <OrdersPage />
    <div><h1>this is Orders</h1></div>
  </OuttestWrapper>
)
OrdersIndexRouter.propTypes = {


  }
export default OrdersIndexRouter