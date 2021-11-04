import React, { useState, useEffect } from 'react';
import { SearchBar, ActivityIndicator } from 'antd-mobile'
import './index.less'
import { useHttpHook, useObserverHook, useImgHook} from '@/hooks'
import { useLocation   } from 'umi'
import { ShowLoading } from '@/components'
import { CommonEnum } from '@/enums'
export default function (props) {
  const { query } = useLocation();
  console.log(query);
  const [houseName, setHouseName] = useState('')
  const handleCancel = () => {
    _handleSumit('')
  }
  const [page, setPage] = useState(CommonEnum.PAGE)
  const handleChange = (value) => {
    setHouseName(value)
  }
  const _handleSumit = (value)=> {
    setHouseName(value)
    setPage(CommonEnum.PAGE)
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

  useObserverHook( '#'+ CommonEnum.LOADING_ID, (entries) => {
    console.log(entries);
    if (!housesLoading && entries[0].isIntersecting && showLoading) {
      setPage({
        ...page,
        pageNum: page.pageNum + 1
      })
      console.log(page);
    }
  }, null)
  useImgHook('.item-img', (entries)=> {
    console.log(entries);
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
                <img alt='img' className='item-img' src={require('../../assets/blank.png')} data-src={ item.img } ></img>
                <div className='item-rught'>
                  <div className='title'>{item.title}</div>
                  <div className='price'>{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        }
        <ShowLoading showLoading={showLoading}></ShowLoading>
        </div>
    </div>
  )
}