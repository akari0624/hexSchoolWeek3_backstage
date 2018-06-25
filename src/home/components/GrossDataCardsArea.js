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
  className:'fas fa-hand-holding-usd',
  numStr:'72,540',
  color: '#4A90E2',
},
{
  kind:'TOTAL COST',
  className:'fas fa-boxes',
  numStr:'32,540',
  color: '#D0021B',
},
{
  kind:'NET INCOME',
  className:'fas fa-money-bill',
  numStr:'40,000',
  color:'#7ED321',
}]

const renderGrossDataCard = (dataArr) => {

  return (dataArr.map(d => (<GrossDataCard key={d.kind}
    renderCardTitle={() => (<div><i className={`${d.className}`}></i>{d.kind}</div>)}
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