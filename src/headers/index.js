import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Wrapper = Styled.nav`
  width:100%;
  height:70px;
  display:flex;
  background-color:#000000;
  flex-direction:row;
  font-family: HelveticaNeue-Bold;
  font-size: 24px;
  color: #FFFFFF;
  line-height:70px;
`

const LeftAppNameBlock = Styled.div`
  width:20%; 
`

const RouterTab = Styled.div`
  width:75%; 
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
`

const RouterTabItem = Styled.div`
  margin-right:10px;
  text-decoration:none;
`

const CurrentLoginAccount = Styled.div`
`


const HeaderNav = props => (

  <Wrapper>
    <LeftAppNameBlock>Shoptime</LeftAppNameBlock>
    <RouterTab>
      <RouterTabItem><Link to="/">HOME</Link></RouterTabItem>
      <RouterTabItem><Link to="/orders">ORDERS</Link></RouterTabItem>
      <RouterTabItem><Link to="/product">PRODUCT</Link></RouterTabItem>
    </RouterTab>
    <CurrentLoginAccount>ADMIN</CurrentLoginAccount>
  </Wrapper>
   

)


HeaderNav.propTypes = {


  }
export default HeaderNav