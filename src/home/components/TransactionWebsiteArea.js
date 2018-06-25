import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'

import TransactionWebsiteCard from './TransactionWebsiteCard'

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

const transitionWebsiteData = [
  {
    name:'FACEBOOK',
    className:'fa-facebook fab fa-3x',
    viewTimes:50125,
    lastPeriodViews:46908,
  },{
    name:'Google',
    className:'fa-google fab fa-3x',
    viewTimes:74337,
    lastPeriodViews:56908,
  },{
    name:'Wordpress',
    className:'fa-wordpress fab fa-3x',
    viewTimes:30184,
    lastPeriodViews:46908,
  },{
    name:'medium',
    className:'fa-medium fab fa-3x',
    viewTimes:40058,
    lastPeriodViews:46908,
  }

]


const renderTransactionWebsiteCard = (dataArr) => (

  dataArr.map(d =>  <TransactionWebsiteCard key={d.name} data={d}/> )

)

const TransactionWebsiteArea = props => (

  <Wrapper>
    <AreaTitle>Transaction Website</AreaTitle>
    {renderTransactionWebsiteCard(transitionWebsiteData)}
  </Wrapper>

)

TransactionWebsiteArea.propTypes = {


  }
export default TransactionWebsiteArea