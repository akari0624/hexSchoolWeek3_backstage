import React, { Component } from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { select, line, scaleLinear, scaleTime } from 'd3' 


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

const D3LineChartAreaWrapper = Styled.div`
  margin:5px 30px 30px 30px;

`

const D3ChartSVG = Styled.svg`
  height:100%;
  width:100%;
`


const drawInitLineChart = (svgRef, data) => {

  const lineFunc = line().x(d => d.x).y(d => d.y)

  const lineGWrapper = select(svgRef).append('g')


  lineGWrapper.append('path').datum(data).attr('fill','none')
    .attr('stroke','steelblue')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 1.5)
    .attr('d',lineFunc)
  

}


class ActiveChartArea extends Component{


  render(){
    return(
      <Wrapper>
        <AreaTitle>Activity</AreaTitle>
        <D3LineChartAreaWrapper>
          <D3ChartSVG innerRef={(tRef) => this.svgRef = tRef} />
        </D3LineChartAreaWrapper>
      </Wrapper>
    )
  }


  componentDidMount(){


    const lineData = [{x:5,y:5},{x:8,y:8},{x:10,y:10},{x:15,y:15},{x:20,y:20},]
    drawInitLineChart(this.svgRef, lineData)

  }
}


ActiveChartArea.propTypes = {


  }
export default ActiveChartArea