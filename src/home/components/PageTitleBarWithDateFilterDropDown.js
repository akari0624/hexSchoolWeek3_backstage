import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'



const Wrapper = Styled.div`
  display:flex;
  margin:${props => props.theme.level1Margin};
  justify-content:space-between;
  flex-direction:row;
`

const PageTitle = Styled.div`
  font-family:HelveticaNeue-Bold;
  color:#000000;
  font-size:24px;
`

const DateFilterWrapper = Styled.div`

`


const PageTitleBarWithDateFilterDropDown = props => (

  <Wrapper>
    <PageTitle> OVERVIEW </PageTitle>
    <DateFilterWrapper> 日期過濾區塊 </DateFilterWrapper>
  </Wrapper>



)
PageTitleBarWithDateFilterDropDown.propTypes = {


  }


export default PageTitleBarWithDateFilterDropDown