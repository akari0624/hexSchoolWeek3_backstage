import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { Tooltip } from 'antd'
import 'antd/lib/Tooltip/style'

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
  width:50%;
`
const ViewTimesWrapper = Styled.div`
  margin-left:20px;
  line-height:70px;
  display:inline-block;
  float:left;
  font-family: HelveticaNeue-Medium;
  font-size: 20px;
  color: #000000;
  text-align: right;
`


const CountWithLastPeriodRateWrapper = Styled.div`
  margin-left:10px;
  line-height:70px;
  display:inline-block;
  float:left;
`

const CountWithLastPeriodRate = Styled.span`
  font-family: HelveticaNeue-Medium;
  font-size: 16px;
  text-align: center;
`


const IncreaseHowManyInTooltip = Styled.div`
  font-family: HelveticaNeue;
  font-size: 14px;
  color: #FFFFFF;
  text-align: center;
`

const LastTimeViewInTooltip = Styled.div`
  font-family: HelveticaNeue-Italic;
  font-size: 14px;
  color: #9B9B9B;
  text-align: center;
`

const IncreaseThisTimeSpanInTooltip = Styled.span`
  font-family: HelveticaNeue-Italic;
  font-size: 14px;
  color: #7ED321;
`

const DecreaseThisTimeSpanInTooltip = Styled.span`
  font-family: HelveticaNeue-Italic;
  font-size: 14px;
  color: #D0021B;
`

const renderDifferentColorTextDependByIncreaseOrDecrease = (lastPeriodViews) => {

  if(lastPeriodViews > 0){

    return <IncreaseThisTimeSpanInTooltip>{lastPeriodViews}</IncreaseThisTimeSpanInTooltip>
  }else{

    return <DecreaseThisTimeSpanInTooltip>{lastPeriodViews}</DecreaseThisTimeSpanInTooltip>
  }

}


const renderTransactionRate = (currViewTimes, lastPeriodViews) => {

  const compareWithLastimeViewNumber = (currViewTimes - lastPeriodViews)

  const resultNum = compareWithLastimeViewNumber / lastPeriodViews;
  
  const rate = Math.round(resultNum * 100) 

  const text = (
    <section>
      <IncreaseHowManyInTooltip>increase {renderDifferentColorTextDependByIncreaseOrDecrease(compareWithLastimeViewNumber)} views</IncreaseHowManyInTooltip>
      <LastTimeViewInTooltip>last time view:{lastPeriodViews}</LastTimeViewInTooltip>
    </section>
  )

  return <Tooltip placement="top" title={text}><CountWithLastPeriodRate>{rate}%</CountWithLastPeriodRate></Tooltip>
}


const TransactionWebsiteCard = props => {

  const { name,className, viewTimes, lastPeriodViews} = props.data
  return(
    <Wrapper>
      <WebSiteLogoWrapper><i className={className}></i></WebSiteLogoWrapper>
      <NameDiv>{name}</NameDiv>
      <ViewTimesWrapper>{viewTimes}</ViewTimesWrapper>
      <CountWithLastPeriodRateWrapper>{renderTransactionRate(viewTimes, lastPeriodViews)}</CountWithLastPeriodRateWrapper>
    </Wrapper>
  )
}


TransactionWebsiteCard.propTypes = {


  }
export default TransactionWebsiteCard