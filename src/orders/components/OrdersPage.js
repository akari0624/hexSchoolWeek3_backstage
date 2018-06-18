import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'



const Wrapper = Styled.div`
  display:flex;
  margin:0px 30px 42px 30px;
  justify-content:space-between;
  flex-direction:row;
`

const ConditionsWrapper = Styled.div`
  display:flex;
  flex-direction:row;
`

const CheckAllCB = Styled.div`
  font-family:HelveticaNeue-Bold;
  color:#000000;
  font-size:24px;
  margin-right:10px;
`

const ConditionFilterWrapper = Styled.div`

`




const  ShowWhatColumnsDropDownSelector = Styled.div`

`



const OrdersPage = props => (

  <Wrapper>
    <ConditionsWrapper>
      <CheckAllCB> 全選CB </CheckAllCB>
      <ConditionFilterWrapper> filter下拉選單 </ConditionFilterWrapper>
    </ConditionsWrapper>
    <ShowWhatColumnsDropDownSelector>EDIT SECTION</ShowWhatColumnsDropDownSelector>
  </Wrapper>



)
OrdersPage.propTypes = {


  }


export default OrdersPage