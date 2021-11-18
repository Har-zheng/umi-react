import React, { useState, useEffect } from 'react';
import Banner from './components/Banner'
import Info from './components/Info'
import Lists from './components/Lists'
import Footer from './components/Footer'
import './index.less'
import { useStoreHook } from 'think-react-store'
import { useObserverHook } from '@/hooks'
import { CommonEnum } from '@/enums'


export default function (props) {
  const { house: { detail, comments, getDetailAsync, getCommentsAsync, reloadComments, reloadCommentsNum, showLoading } } = useStoreHook()
  /**
   * 1 监听loading是否展示
   * 2 出发reload, 修改分页
   * 3 今天reload变化, 重新监听接口
   * 4  拼装数据
   * */


  useObserverHook('#' + CommonEnum.LOADING_ID, (entries) => {
    console.log(entries);
    if (comments && comments.length && entries[0].isIntersecting && showLoading) {
      reloadComments()
    }
  }, [comments, showLoading])

  useEffect(() => {
    getDetailAsync({})
    console.log(detail);

  }, [])
  useEffect(() => {
    getCommentsAsync({})
  }, [reloadCommentsNum])

  return (
    <div className='house-page '>
      {/* banner */}
      <Banner banner={detail?.banner}></Banner>
      {/* 房屋信息 */}
      <Info detail={detail?.info} ></Info>
      {/* 评论列表 */}
      <Lists lists={comments} showLoading={showLoading}></Lists>
      {/* footer */}
      <Footer></Footer>
    </div>
  )
}