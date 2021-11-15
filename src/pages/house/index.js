import React, { useState, useEffect } from 'react';
import Banner from './components/Banner'
import Info from './components/Info'
import Lists from './components/Lists'
import Footer from './components/Footer'
import './index.less'
import { useStoreHook } from 'think-react-store'

export default function (props) {
  const { house: { detail, comments, getDetailAsync } } = useStoreHook()

  useEffect(() => {
    getDetailAsync({})
    console.log(detail);
  }, [])

  return (
    <div className='house-page '>
      {/* banner */}
      <Banner banner={detail?.banner}></Banner>
      {/* 房屋信息 */}
      <Info detail={detail?.info} ></Info>
      {/* 评论列表 */}
      <Lists></Lists>
      {/* footer */}
      <Footer></Footer>
    </div>
  )
}