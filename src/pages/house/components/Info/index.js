import React, { useState, useEffect } from 'react';
import { Button } from 'antd-mobile'

export default function (props) {
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div className='info'>
      <div className='info-title'>{''}</div>
      <div className='info-msg'>简介{''}</div>
      <div className='info-msg'>价格{''}</div>
      <div className='info-msg'>发布时间{''}</div>
      <div className='info-msg'>开始出租{''}</div>
      <div className='info-msg'>结束出租{''}</div>
      <div className='info-msg'>结束出租{''}</div>
      <Button className='info-btn' type='warning'> 搜索 </Button>

    </div>
  )
}