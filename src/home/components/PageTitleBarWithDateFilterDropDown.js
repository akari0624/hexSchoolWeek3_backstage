import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
import 'antd/lib/date-picker/style'
import { Menu, Dropdown, Icon, message } from 'antd';
import 'antd/lib/dropdown/style'
import 'antd/lib/message/style'
import locale from 'antd/lib/date-picker/locale/zh_TW'



const Wrapper = Styled.div`
  display:flex;
  margin:0px 30px 42px 30px;
  justify-content:space-between;
  flex-direction:row;
`

const PageTitle = Styled.div`
  font-family:HelveticaNeue-Bold;
  color:#000000;
  font-size:24px;
`

const DateAndDropdownWrapper = Styled.div`
  clear:both;
`

const DateFilterWrapper = Styled.div`
  float:left;
  margin-right:30px;

`

const DropdownMenuWrapper = Styled.div`
  float:left;
`

const dateFormat = 'YYYY/MM/DD';


const handleDropdownMenuClick = ({key}) => {

  console.log(`you click ${key}`)
  message.info(`you click ${key}`)

}

const menu = (
  <Menu onClick={handleDropdownMenuClick}>
    <Menu.Item key="day">Daily</Menu.Item>
    <Menu.Item key="week">Weekly</Menu.Item>
    <Menu.Item key="month">Monthly</Menu.Item>
    <Menu.Item key="year">Yearly</Menu.Item>
    <Menu.Item key="custom">custom</Menu.Item>
  </Menu>
);


const PageTitleBarWithDateFilterDropDown = props => (

  <Wrapper>
    <PageTitle> OVERVIEW </PageTitle>
    <DateAndDropdownWrapper>
      <DateFilterWrapper> 
        <RangePicker locale={locale}  defaultValue={[moment('2018/06/01', dateFormat), moment('2018/06/15', dateFormat)]}
          format={dateFormat}/> 
      </DateFilterWrapper>
      <DropdownMenuWrapper>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            產生條件 <Icon type="down" />
          </a>
        </Dropdown>  
      </DropdownMenuWrapper>  
    </DateAndDropdownWrapper>
  </Wrapper>



)
PageTitleBarWithDateFilterDropDown.propTypes = {


  }


export default PageTitleBarWithDateFilterDropDown