import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import LatestOrdersCard from './LatestOrdersCard'


const Wrapper = Styled.section`
  background-color:#FFFFFF;
  width:calc(50% - 10px);

   @media (max-width:${props => props.theme.mobileOneColumnWidth}){
  width:100%;
  }
  
`


const AreaTitle = Styled.div`
  margin:30px 0px 0px 40px;
  font-family: HelveticaNeue-Bold;
  font-size: 24px;
  text-align:left;
  color: #000000;
`

const CardArea = Styled.div`
 margin:0px 40px 0px 40px;
 
`


const renderLatestOrdersCard = (dataArr) => (

  dataArr.map((d, i) =>  <LatestOrdersCard key={i} {...d} /> )

)


const lastOrderDataArr = [
  {
    imageUrl:'https://picsum.photos/100/100/?random',
    prodName:'fashion sneaker',
    orderTime:'2018-06-12 17:30:31',
    ordererName:'James Brown',
  },
  {
    imageUrl:'https://picsum.photos/100/100/?random',
    prodName:'fashion sneaker',
    orderTime:'2018-06-12 17:30:31',
    ordererName:'James Brown',
  },
  {
    imageUrl:'https://picsum.photos/100/100/?random',
    prodName:'fashion sneaker',
    orderTime:'2018-06-12 17:30:31',
    ordererName:'James Brown',
  },

]


const LatestOrdersArea = props => (

  <Wrapper>
    <AreaTitle>Latest Orders</AreaTitle>
    <CardArea>
      {renderLatestOrdersCard(lastOrderDataArr)}
    </CardArea>
  </Wrapper>

)

LatestOrdersArea.propTypes = {


  }
export default LatestOrdersArea