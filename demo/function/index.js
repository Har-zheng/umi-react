import React, { useState, useEffect } from 'react';
import { WingBlank, WhiteSpace, List } from 'antd-mobile'
import { Link } from 'umi'

export default function (props) {

  const [state, setState] = useState()

  useEffect(() => {

  }, [])
console.log('123')

  return (
    <div>
      <WingBlank>
        <List>
          <List.Item>
            <Link to="/function/hook">
              hook
            </Link>
          </List.Item>

          <WhiteSpace></WhiteSpace>
          <List.Item>
            <Link to="/function/context">
              context
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/function/customize">
              customize
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/function/store">
              store
            </Link>
          </List.Item>
        </List>
      </WingBlank>
    </div>
  )

}