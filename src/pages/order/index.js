import React, { useState, useEffect } from 'react';
import Lists from './components/Lists'

import { Tabs } from 'antd-mobile'
import { useHttpHook } from '@/hooks'
import { CommonEnum } from '@/enums'
import './index.less'

export default function (props) {
  const [state, setState] = useState()
  const [page, setPage] = useState(CommonEnum.PAGE);
  const [lists] = useHttpHook({
    url: '/order/lists',
    body: {
      ...page
    }
  })

  const tabs = [
    { title: '未支付', sub: 0 },
    { title: '已支付', sub: 1 }
  ]
  useEffect(() => {
  }, [])

  return (
    <div className="order-page">
      <Tabs tabs={tabs}>
        <div className="tab">
          <Lists orders={lists} type={0}></Lists>
        </div>
        <div className="tab">
          <Lists orders={lists} type={1}></Lists>
        </div>
      </Tabs>
    </div>
  )
}