import React from 'react'
import Styled from 'styled-components'
import PageTitleBarWithDateFilterDropDown from './components/PageTitleBarWithDateFilterDropDown'
import GrossDataCardsArea from './components/GrossDataCardsArea'
import ActiveChartArea from './components/ActiveChartArea'
import TransactionWebsiteArea from './components/TransactionWebsiteArea';
import LatestOrdersArea from './components/LatestOrdersArea';
const OuttestWrapper = Styled.div`
  display:relative;
  background-color:#F2F2F2;
`

const BottomTwoHorizontalAreaSection = Styled.section`
  display:flex;
  flex-direction:row;
  margin:${props => props.theme.level1Margin};
  justify-content:space-between;
  @media (max-width:${props => props.theme.mobileOneColumnWidth}){
    flex-direction:column;
  }
`


export default(props) => {

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
