import React from 'react'
import Styled from 'styled-components'
import PageTitleBarWithDateFilterDropDown from './components/PageTitleBarWithDateFilterDropDown'
import GrossDataCardsArea from './components/GrossDataCardsArea'
import ActiveChartArea from './components/ActiveChartArea'
import TransactionWebsiteArea from './components/TransactionWebsiteArea';
import LatestOrdersArea from './components/LatestOrdersArea';

const OuttestWrapper = Styled.div`
  position:relative;
  background-color:#F2F2F2;
`

const BottomTwoHorizontalAreaSection = Styled.section`
  display:flex;
  flex-direction:row;
  margin:42px 30px 0px 30px;
  justify-content:space-between;
  @media (max-width:${props => props.theme.mobileOneColumnWidth}){
    flex-direction:column;
  }
`


const HomeIndexRouter = (props) => {

  return (
    <OuttestWrapper>
      <PageTitleBarWithDateFilterDropDown />
      <GrossDataCardsArea />
      <ActiveChartArea />

      <BottomTwoHorizontalAreaSection>
        <TransactionWebsiteArea />
        <LatestOrdersArea />
      </BottomTwoHorizontalAreaSection>
    </OuttestWrapper>
  )

}

export default HomeIndexRouter
