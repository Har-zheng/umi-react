import React, { useState, useEffect } from 'react';
import Lists from './components/Lists'

import { Tabs } from 'antd-mobile'
import { useHttpHook, useObserverHook } from '@/hooks'
import { CommonEnum } from '@/enums'
import { Http } from '@/utils'
import './index.less'
import { isEmpty, type } from 'project-libs';

export default function (props) {
  const [page, setPage] = useState(CommonEnum.PAGE)
  const [orders, setOrders] = useState([]);
  const [type, setType] = useState(0)
  const [showLoading, setShowLoading] = useState(true);
  // const [lists] = useHttpHook({
  //   url: '/order/lists',
  //   body: {
  //     ...page
  //   }
  // })

  const invokeHttp = async (pageNum) => {
    const result = await Http({
      url: '/order/lists',
      body: {
        ...page,
        pageNum,
        type
      }
    })
    return result
  }

  const fetchOrder = async (pageNum) => {
    const result = await invokeHttp(pageNum)
    if (!isEmpty(result) && result.length === page.pageSize) {
      setOrders(result)
      setShowLoading(true)
    } else {
      setShowLoading(false)
    }
  }
  const handleChange = (e) => {
    setOrders([])
    setShowLoading(true)
    setType(e.sub)
    setPage(CommonEnum.PAGE)
  }

  useObserverHook('#' + CommonEnum.LOADING_ID, async (entries) => {
    console.log(entries);
    if (entries[0].isIntersecting) {
      const result = await invokeHttp(page.pageNum + 1);
      if (!isEmpty(orders) && !isEmpty(result) && result.length === page.pageSize) {
        setOrders([...orders, ...result]);
        setPage({
          ...page,
          pageNum: page.pageNum + 1
        });
        setShowLoading(true);
      } else {
        setShowLoading(false);
      }
    }
  }, null)

  const tabs = [
    { title: '未支付', sub: 0 },
    { title: '已支付', sub: 1 }
  ]
  useEffect(() => {
    fetchOrder(1)
  }, [type])

  return (
    <div className="order-page">
      <Tabs tabs={tabs} onChange={handleChange}>
        <div className="tab">
          <Lists orders={orders} type={0} showLoading={showLoading} ></Lists>
        </div>
        <div className="tab">
          <Lists orders={orders} type={1} showLoading={showLoading}></Lists>
        </div>
      </Tabs>
    </div>
  )
}