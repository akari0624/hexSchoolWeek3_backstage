import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'


const CardWrapper = Styled.div`
  background-color:#FFFFFF;
  width:300px;
`

const CardTitle = Styled.div`
  text-align:center;
`

const CardContent = Styled.div`
  margin-top:14px;
  margin-bottom:30px;
  font-family:HelveticaNeue-Bold;
  font-size:36px;
  text-align:center;
  color:${props => props.contentTextColor};
`



const GrossDataCard = props => {
  


  return (

    <CardWrapper>
      <CardTitle>
        {props.renderCardTitle()}
      </CardTitle>
      <CardContent contentTextColor={props.contentTextColor}>
        {props.renderCardContent()}
      </CardContent>
    </CardWrapper>

  )}


GrossDataCard.propTypes = {

  renderCardTitle: PropTypes.func.isRequired,
  renderCardContent: PropTypes.func.isRequired,
  contentTextColor: PropTypes.string.isRequired

}
export default GrossDataCard