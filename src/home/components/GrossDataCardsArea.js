import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import GrossDataCard from '../components/GrossDataCard'

const Wrapper = Styled.section `
  display:flex;
  flex-direction:row;
  margin:${props => props.theme.level1Margin};
  justify-content:space-around;
  

  @media (max-width:${props => props.theme.mobileOneColumnWidth}){
    flex-direction:column;
  }
`


const data = [{
  kind:'TOTAL REVENUE',
  numStr:'54,540',
  color:'#7ED321',
},
{
  kind:'TOTAL COST',
  numStr:'54,540',
  color:'#7ED321',
},
{
  kind:'NET INCOME',
  numStr:'54,540',
  color:'#7ED321',
}]

const renderGrossDataCard = (dataArr) => {

  return (dataArr.map(d => (<GrossDataCard key={d.kind}
    renderCardTitle={() => (d.kind)}
    renderCardContent={() => (d.numStr)}
    contentTextColor = {d.color} /> ))
  )

}

const GrossDataCardsArea = props => (

  <Wrapper>
    {renderGrossDataCard(data)}
  </Wrapper>

)

GrossDataCardsArea.propTypes = {}
export default GrossDataCardsArea