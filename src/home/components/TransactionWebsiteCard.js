import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'


const Wrapper = Styled.div`
margin:30px 0px 0px 40px;
clear:both;
height:70px;
`

const WebSiteLogoWrapper = Styled.div`
float:left;
line-height:70px;
display:inline-block;
`

const NameDiv = Styled.div`
margin-left:20px;
float:left;
line-height:70px;
display:inline-block;
`


const TransactionWebsiteCard = props => {

  const { name,className} = props.data
  return(
    <Wrapper>
      <WebSiteLogoWrapper><i className={className}></i></WebSiteLogoWrapper>
      <NameDiv>{name}</NameDiv>
    </Wrapper>
  )
}


TransactionWebsiteCard.propTypes = {


  }
export default TransactionWebsiteCard