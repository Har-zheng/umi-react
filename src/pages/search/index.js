import React, { useState, useEffect } from 'react';
import { SearchBar, ActivityIndicator } from 'antd-mobile'
import './index.less'
import { useHttpHook, useObserverHook } from '@/hooks'
import { useLocation   } from 'umi'
export default function (props) {
  const { query } = useLocation();
  console.log(query);
  const [houseName, setHouseName] = useState('')
  const handleCancel = () => {
    _handleSumit('')
  }
  const [page, setPage] = useState({ pageSize: 8, pageNum: 1 })
  const handleChange = (value) => {
    setHouseName(value)
  }
  const _handleSumit = (value)=> {
    setHouseName(value)
    setPage({
      pageNum:1,
      pageSize: 8,
      houseName: value
    })
    setHousesLIst([])
  } 
  const handleSumit = (value) => {
    _handleSumit(value)
    console.log(value);
  }
  const [showLoading, setShowLoading] = useState(true)
  const [housesLIst, setHousesLIst] = useState([])
  const [houses, housesLoading] = useHttpHook({
    url: '/house/search',
    body: {
      ...page,
      code: query?.code,
      startTime: query?.satrtTime + ' 00:00:00',
      entTime: query?.entTime + ' 12:59:59'
    },
    watch: [page.pageNum, houseName]
  })

  /*
   1 监听Loading是否展示出来
   2 修改分页数据
   3 监听分页数据的修改, 发送接口 , 请求下一页数据
   4 监听loading变化,拼装数据
  */

  useObserverHook('#loading', (entries) => {
    console.log(entries);
    if (!housesLoading && entries[0].isIntersecting && showLoading) {
      setPage({
        ...page,
        pageNum: page.pageNum + 1
      })
      console.log(page);
    }

  }, null)
  useEffect(() => {
    if (!housesLoading && houses) {
      if (houses.length) {
        setHousesLIst([...housesLIst, ...houses])
        if (houses.length < page.pageSize) setShowLoading(false)
      } else {
        setShowLoading(false)
      }
    }
  }, [housesLoading])
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
        {!housesLIst.length ? <ActivityIndicator /> :
          <div className='result' >
            {housesLIst.map((item, index) => (
              <div className='item' key={index}>
                <img alt='img' src={item.img}></img>
                <div className='item-rught'>
                  <div className='title'>{item.title}</div>
                  <div className='price'>{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        }
        {showLoading ? <div id='loading'>Loading...</div> : <div id='loading' >我是有底线的....</div>}
      </div>
    </div>
  )
}