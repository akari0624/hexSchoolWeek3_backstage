import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'


const Wrapper = Styled.div`
  clear:both;
  border-bottom:1px solid #EBEBEB;
`

const ProductImageWrapper = Styled.div`
  float:left;
  display:inline-block;
`

const ProductInfoOutterWrap = Styled.div`
  float:left;
  margin-left:23px;
  display:inline-block;
`


const ProductName = Styled.div`
  margin-bottom:8px;
  font-family: HelveticaNeue-Bold;
  font-size: 20px;
  color: #000000;
`

const OrderDateAndTimeWrapper = Styled.div`
  margin-bottom:8px;
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #9B9B9B;
  clear:both;
`
const OrderDateAndTimeIcon = Styled.div`
  float:left;
  margin-right:8px;
  display:inline-block;
`

const OrderDateAndTimeString = Styled.div`
  float:left;
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #9B9B9B;
  display:inline-block;
`

const OrdererNameWrapper = Styled.div`
  margin-bottom:8px;
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #9B9B9B;
  clear:both;
`

const OrdererNameIcon = Styled.div`
  float:left;
  margin-right:8px;
  display:inline-block;
`

const OrdererNameString = Styled.div`
  float:left;
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #9B9B9B;
  display:inline-block;
`

const TotalPriceWrapper = Styled.div`
  float:left;
`

const TotalPriceTextTag = Styled.div`
  font-family: HelveticaNeue;
  font-size: 14px;
  color: #000000;
  text-align: right;
`

const TotalPriceNumber = Styled.div`
  font-family: HelveticaNeue-Bold;
  font-size: 20px;
  color: #000000;
`



const LatestOrdersCard = props => (

  <Wrapper>
    <ProductImageWrapper>
      <img src={props.imageUrl} />
    </ProductImageWrapper>
    <ProductInfoOutterWrap>
      <ProductName>{props.prodName}</ProductName>
      <OrderDateAndTimeWrapper>
        <OrderDateAndTimeIcon><i className="fa-clock fas fa-fw"></i></OrderDateAndTimeIcon>
        <OrderDateAndTimeString>{props.orderTime}</OrderDateAndTimeString>
      </OrderDateAndTimeWrapper>   

      <OrdererNameWrapper>
        <OrdererNameIcon><i className="fa-male fas fa-fw"></i></OrdererNameIcon>
        <OrdererNameString>{props.ordererName}</OrdererNameString>
      </OrdererNameWrapper>  
    </ProductInfoOutterWrap>  

    <TotalPriceWrapper>
      <TotalPriceTextTag>Total</TotalPriceTextTag>
      <TotalPriceNumber>{props.totalPrice}</TotalPriceNumber>
    </TotalPriceWrapper>  
  </Wrapper>

)


LatestOrdersCard.propTypes = {


  }
export default LatestOrdersCard