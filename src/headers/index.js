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
  margin-right:20px;

    &:hover{
      border-bottom:6px solid #FFFFFF;
    }
`

const CurrentLoginAccount = Styled.div`
padding-right:48px;
`


const linkStyleObj = {

  'textDecoration':'none',
  'color':'#FFFFFF',

}



const generateLink = (toWhere, showText) => {


  return <Link style={linkStyleObj} to={toWhere}> {showText} </Link>
}


const HeaderNav = props => (

  <Wrapper>
    <LeftAppNameBlock>Shoptime</LeftAppNameBlock>
    <RouterTab>
      <RouterTabItem>{generateLink('/', 'HOME')}</RouterTabItem>
      <RouterTabItem>{generateLink('/orders', 'ORDERS')}</RouterTabItem>
      <RouterTabItem> {generateLink('/product', 'PRODUCT')}</RouterTabItem>
    </RouterTab>
    <CurrentLoginAccount>ADMIN</CurrentLoginAccount>
  </Wrapper>
   

)


HeaderNav.propTypes = {


  }
export default HeaderNav