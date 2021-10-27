import React, { useState, useEffect } from 'react';
import { Picker, List, Calendar, Button, Toast } from 'antd-mobile'
import dayjs from 'dayjs'
import { history } from 'umi'
export default function (props) {
  // const [citys, setCitys] = useState([[{ label: '杭州', value: '10001' }, { label: '苏州', value: '10002' }]])
  const [selectedCity, setSelectedCity] = useState(['10001'])
  const [times, setTimes] = useState('可选时间')
  const [dataShow, setDateShow] = useState(false)
  useEffect(() => {

  }, [])
  const handleCityChange = (value) => {
    setSelectedCity(value);
  }
  const handleDate = () => {
    setDateShow(!dataShow)
  }
  const handleDateConfirm = (satrtTime, endTime) => {
    console.log(satrtTime, endTime);
    setTimes(dayjs(satrtTime).format('YYYY-MM-DD') + '~' + dayjs(endTime).format('YYYY-MM-DD'))
    setDateShow(!dataShow)
  }
  const handleSeach = ()=> {
    if(times.includes('~')){
      history.push({
        pathname: '/search',
        query: {
          code: selectedCity,
          satrtTime: times.split('~')[0],
          entTime: times.split('~')[1]
        }
      })
    }else{
      Toast.fail('请选择时间')
    }
 
  }

  return (
    <div className='search'>
      {/* 可选城市 */}
      <div className='search-addr'>
        {!props.citysLoading && <Picker title='城市'
          data={props.citys}
          value={selectedCity}
          cascade={false}
          cols={1}
          onChange={handleCityChange}
        >
          <List.Item>可选城市</List.Item>
        </Picker>}
      </div>
      {/* 可选时间 */}
      <div className='search-time' onClick={handleDate}>
        <div className='search-time_left'>出租时间</div>
        <div className='search-time_right'>{times}</div>
      </div>
      {/* 点击按钮 */}
      <Button  onClick={handleSeach} type='warning' size='large'>搜索民宿</Button>
      <Calendar
        visible={dataShow}
        onCancel={handleDate}
        onConfirm={handleDateConfirm}
      ></Calendar>
    </div>
  )
}