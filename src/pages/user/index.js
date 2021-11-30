import React, { useState, useEffect } from 'react';
import { List } from 'antd-mobile'
import { history } from 'umi'
import './index.less'
import { useStateHook } from 'think-react-store'

export default function (props) {
  const [state, setState] = useState()
  console.log(useStateHook());
  const { user: { username, avatar, tel, sign, getUserAsync }, house: { getDetailAsync } } = useStateHook()
  const handleClick = () => {
    console.log('handleClick');
    history.push({
      pathname: '/user/edit',
      query: {
        id: 10
      }
    })
  }

  useEffect(() => {
    getDetailAsync({})
    getUserAsync && getUserAsync({
      id: 10
    })
  }, [])

  return (
    <div className='user-page'>
      {/**用户信息 */}
      <div className='info'>
        <div className='set' onClick={handleClick}>设置</div>
        <div className='user'>
          <img alt='user' src={avatar} />
          <div className='tel'>{tel}</div>
          <div className='sign'>{sign}</div>
        </div>
      </div>
      {/**列表 */}
      <div className='lists'>
        <List>
          <List.Item arrow='horizontal'>
            用户协议
          </List.Item>
          <List.Item arrow='horizontal'>
            常见问题
          </List.Item>
          <List.Item arrow='horizontal'>
            联系客服
          </List.Item>
        </List>
      </div>
    </div>
  )
}