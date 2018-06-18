import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'



const Wrapper = Styled.section`
  margin:${props => props.theme.level1Margin};
  background-color:#FFFFFF; 
  width:calc(100% - 84px);
  height:348px;
`

const AreaTitle = Styled.div`
  margin:18px 30px 0px 30px;
  font-family: HelveticaNeue-Bold;
  font-size: 24px;
  color: #000000;
`


const ActiveChartArea = props => (

  <Wrapper>
    <AreaTitle>Activity</AreaTitle>
  </Wrapper>
)


ActiveChartArea.propTypes = {


  }
export default ActiveChartArea