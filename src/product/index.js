import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import ProductPage from './components/ProductPage'

const OuttestWrapper = Styled.div`
  position:relative;
  background-color:#F2F2F2;
`

const ProductIndexRouter = props => (

  <OuttestWrapper>
    <ProductPage />
    <div><h1>this is Products</h1></div>
  </OuttestWrapper>
)

ProductIndexRouter.propTypes = {


  }
export default ProductIndexRouter