import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'



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


const LatestOrdersArea = props => (

  <Wrapper>
    <AreaTitle>Latest Orders</AreaTitle>
  </Wrapper>

)

LatestOrdersArea.propTypes = {


  }
export default LatestOrdersArea