import React, { useState, useEffect } from 'react';
import { SearchBar, ActivityIndicator } from 'antd-mobile'
import './index.less'
import { useHttpHook } from '@/hooks'
export default function (props) {
  const [houseName, setHouseName] = useState('')
  const handleCancel = () => {

  }
  const handleChange = (value) => {
    setHouseName(value)
  }
  const handleSumit = (value) => {
    console.log(value);
  }
  const [houses, housesLoading] = useHttpHook({
    url: '/house/search'
  })
  useEffect(() => {

  }, [])
  return (
    <div>
      <div className='search-page'>
        {/* 顶部搜索栏 */}
        <SearchBar
          placeholder='搜索民宿'
          value={houseName}
          onCancel={handleCancel}
          onChange={handleChange}
          onSubmit={handleSumit}
        ></SearchBar>

        {/* 搜索结果 */}
        {housesLoading ? <ActivityIndicator/> : houses.map(item => (
          <div className='result' key={item.id}>
            <div className='item'>
              <img alt='img' src={item.img}></img>
              <div className='item-rught'>
                <div className='title'>{item.title}</div>
                <div className='price'>{item.price}</div>
              </div>
            </div>
          </div>
        ))
        }

      </div>
    </div>
  )
}