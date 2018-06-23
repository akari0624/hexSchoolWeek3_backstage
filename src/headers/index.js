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
  padding-left:48px;
`

const RouterTab = Styled.div`
  width:75%; 
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  margin:0px 10px 0px 10px;
`

const RouterTabItem = Styled.div`
  margin-right:10px;
  text-decoration:none;
`

const CurrentLoginAccount = Styled.div`
padding-right:48px;
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