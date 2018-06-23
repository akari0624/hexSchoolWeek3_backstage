import React, { Component } from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { select, line, scaleLinear, scaleTime, timeParse, timeFormat, extent, axisBottom, axisLeft, mouse } from 'd3' 
import _CloneDeep from 'lodash.clonedeep'

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
  position:relative;
  margin:5px 30px 30px 30px;
  width:100%;
  height:100%;
`

const D3ChartSVG = Styled.svg`
  height:100%;
  width:100%;
`

const LineChartToolTipDiv = Styled.div`
  display:none;
  position:absolute;
  transform:translate(200px,250px);
  width:140px;
  height:100px;
  padding:0px 5px 0px 5px;
  background-color:#FFFFFF;
  border:1px solid #000000;

`






const countRevenue = (costArr, incomeArr) => {

  return incomeArr.map((d,i)=> {

    const newValue = d.value - costArr[i].value

    const date = d.date
    return {
      date:date,
      value:newValue,
    }
  })


}


const getSpecifiedLineFunc = (xFunc, yFunc) => {


  const lineFunc = line().x(d => xFunc(d.date)).y(d => yFunc(d.value))

  return lineFunc
}

const changeDateStringToDate = (dataArr, parseTimeFunc) => {

  const clonedDataArr = _CloneDeep(dataArr)
  const newArr = clonedDataArr.map(
    d => {
      const newDate = parseTimeFunc(d.date)
      d.date = newDate
      return d
    }) 

  return newArr
}

const changeDateStringToDate2 = (dataArr, parseTimeFunc) => {

  const newArr = dataArr.map(
    d => {
      return parseTimeFunc(d)
    }) 

  return newArr
}

const concatTheseArr = (..._arrs) => objKey => {

  const result = _arrs.reduce((acc, curr) => (
      
    acc.concat(curr.map(d => d[objKey]))

  ),[])

  return result
}

const getTheCorrespondingValueOfTheDataArrayByThisDateString = (...arrs) => (dateString) => {

  return arrs.map(arr => arr.filter(d => d.date === dateString)[0])

}

const drawInitLineChart = (svgRef, data, tooltipRef) => {

  const svgHeight = 300
  const svgWidth = 400 


  const costArr = data[0].datum;
  const incomeArr = data[1].datum;


  const revenueArr = countRevenue(costArr,incomeArr);

  const parseTime = timeParse('%Y-%m-%d');

  const parseDateToString = timeFormat('%Y-%m-%d')
  // const formatDateToString = timeFormat('%m %d')

 
  const filterDataArrFunc = getTheCorrespondingValueOfTheDataArrayByThisDateString(
    costArr, incomeArr, revenueArr)
  

  const drawLinesByData = (data, lineFunc, color, line_GWrapper) => {

    line_GWrapper.append('path').datum(data).attr('fill','none')
      .attr('stroke',color)
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 1.5)
      .attr('d',lineFunc)
  


  }

  const getXFunc = (dataArr) => {
    const minMaxArr = extent(dataArr,  d => d)
    const xFunc = scaleTime().domain( minMaxArr ).rangeRound([0,svgWidth])
    return xFunc
  }

  const getYFunc = (dataArr) => {
    const minMaxArr = extent(dataArr,  d => d)
    const yFunc = scaleLinear().domain( minMaxArr).rangeRound([svgHeight, 0])
    return yFunc
  }
 
  const concatedValueArr = concatTheseArr(costArr, incomeArr, revenueArr)('value')


  const concatedDateArr = concatTheseArr(costArr, incomeArr, revenueArr)('date')


  const xFunc = getXFunc(changeDateStringToDate2(concatedDateArr, parseTime))

  const yFunc = getYFunc(concatedValueArr)

  
  const tooltipDom = select(tooltipRef)
  
  const SVGRoot = select(svgRef)
  const lineGWrapper = SVGRoot.append('g')

  lineGWrapper.style('transform','translate(50px,0)')
  lineGWrapper.attr('class','wholeGWrapper')

  const tootipLine = lineGWrapper.append('line')
  
  


  const drawTooltip = () => {

    const XandYArr = mouse(lineGWrapper.node())
   
    const currDateThatMousePoint = xFunc.invert(XandYArr[0])
    const currDateString = parseDateToString(currDateThatMousePoint)
    //  console.log(currDateString, currDateString instanceof String)  // why instanceof String return false ????

    const dataArrSizeThree = filterDataArrFunc(currDateString)
     

    tootipLine
      .attr('stroke','black')
      .attr('x1',XandYArr[0])
      .attr('x2',XandYArr[0])
      .attr('y1',0)
      .attr('y2',svgHeight)


    tooltipDom.style(
      'opacity','1'
    ).style(
      'display','block'
    ).style(
      'transform',`translate(${XandYArr[0]+80}px,${XandYArr[1]-20}px)`
    ).html(
      `
      <div>${currDateString}</div>
      <div style="color:green;">income: ${dataArrSizeThree[1].value}</div>
      <div style="color:red;">cost: ${dataArrSizeThree[0].value}</div>
      <div style="color:steelblue;">revenue: ${dataArrSizeThree[2].value}</div>
      `
    )
  }


  const removeTooltip = () => {
 
    tooltipDom.style(
      'opacity','0'
    ).style(
      'display','none'
    )


    tootipLine.attr('stroke','none')

  }



  lineGWrapper.append('g')
    .attr('transform', 'translate(0,250)')
    .call(axisBottom(xFunc).ticks(5,'%m/%d'))
    .select('.domain')
    .remove()

  const axisOnLeft = lineGWrapper.append('g')
    .style('transform', 'translateX(-15px)')
    .call(axisLeft(yFunc).ticks(5))

  axisOnLeft
    .append('text')
    .attr('fill', '#000')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .text('Price ($)');


  const color = ['red', 'green', 'steelblue'];

 


  const lineFunc = getSpecifiedLineFunc(xFunc, yFunc)

    ;[costArr, incomeArr, revenueArr].forEach( (arr, i) => {


    const dateParsedArr = changeDateStringToDate(arr, parseTime)

    
    drawLinesByData(dateParsedArr, lineFunc, color[i], lineGWrapper)

  })


  const tooltipBox = lineGWrapper.append('rect')

  tooltipBox.attr('width',svgWidth)
    .attr('height',svgHeight)
    .attr('opacity',0)
    .on('mousemove',drawTooltip).on('mouseout', removeTooltip)
  
  

}


class ActiveChartArea extends Component{


   lineData = [
    {
      dataName:'cost',
      datum:[
        {
          date:'2018-06-01',
          value:4000,
        },
        {
          date:'2018-06-02',
          value:2000,
        },
        {
          date:'2018-06-03',
          value:1000,
        },
        {
          date:'2018-06-04',
          value:2000,
        },
        {
          date:'2018-06-05',
          value:3500,
        },
        {
          date:'2018-06-06',
          value:1000,
        },
        {
          date:'2018-06-07',
          value:500,
        },
        {
          date:'2018-06-08',
          value:700,
        },
        {
          date:'2018-06-09',
          value:200,
        },
        {
          date:'2018-06-10',
          value:1000,
        },
        {
          date:'2018-06-11',
          value:4000,
        },
        {
          date:'2018-06-12',
          value:3000,
        },
        {
          date:'2018-06-13',
          value:2000,
        },
        {
          date:'2018-06-14',
          value:3000,
        },
        {
          date:'2018-06-15',
          value:1000,
        },
      ],
    },
    {
      dataName:'income',
      datum:[
        {
          date:'2018-06-01',
          value:7000,
        },
        {
          date:'2018-06-02',
          value:5000,
        },
        {
          date:'2018-06-03',
          value:3000,
        },
        {
          date:'2018-06-04',
          value:6000,
        },
        {
          date:'2018-06-05',
          value:1000,
        },
        {
          date:'2018-06-06',
          value:3000,
        },
        {
          date:'2018-06-07',
          value:200,
        },
        {
          date:'2018-06-08',
          value:2000,
        },
        {
          date:'2018-06-09',
          value:1000,
        },
        {
          date:'2018-06-10',
          value:2000,
        },
        {
          date:'2018-06-11',
          value:5000,
        },
        {
          date:'2018-06-12',
          value:2000,
        },
        {
          date:'2018-06-13',
          value:3000,
        },
        {
          date:'2018-06-14',
          value:3500,
        },
        {
          date:'2018-06-15',
          value:3000,
        },
      ],
    }
  
  
  ]



  render(){
    return(
      <Wrapper>
        <AreaTitle>Activity</AreaTitle>
        <D3LineChartAreaWrapper>
          <LineChartToolTipDiv innerRef={(tooltipRef) => this.tooltipRef = tooltipRef}/>
          <D3ChartSVG innerRef={(tRef) => this.svgRef = tRef} />
        </D3LineChartAreaWrapper>
      </Wrapper>
    )
  }


  componentDidMount(){

    
    drawInitLineChart(this.svgRef, this.lineData, this.tooltipRef)

  }


  componentWillUnmount(){
    this.svgRef = null
    this.tooltipRef = null
  }
}


ActiveChartArea.propTypes = {


  }
export default ActiveChartArea