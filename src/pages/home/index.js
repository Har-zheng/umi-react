import React, { useState, useEffect } from 'react';
import Header from './components/header'
import Search from './components/search'
import Hot from './components/hot'
import './index.less'
import { useHttpHook } from '@/hooks'


export default function (props) {
  const [state, setState] = useState()
  const [citys, citysLoading] = useHttpHook({
    url: '/commons/citys'
  })
  const [houses, housesLoading] = useHttpHook({
    url: '/house/hot'
  })
  useEffect(() => {

  }, [])

  return (
    <div className='home'>
      {/* header 登录 */}
      <Header />
      {/* Search 搜索 */}
      <Search citys={citys} citysLoading={citysLoading} />
      {/* <Search /> */}
      {/* header 热门民宿 */}
      {/* <Hot /> */}
      <Hot houses={houses} housesLoading={housesLoading} ></Hot>
    </div>
  )
}