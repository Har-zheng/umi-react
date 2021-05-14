import React, { useState, useEffect } from 'react';
import { useStoreHook, useStateHook, useDispatchHook } from 'think-react-store'


export default function (props) {
  // const { state, dispatch } = useContext(StoreContext)
  const { user: { id, username, getUserAsync } } = useStoreHook() //  getUserAsync
  const states = useStateHook('user') // state 中的值
  const dispatchs = useDispatchHook('user');
  console.log(dispatchs)
  useEffect(() => {
    getUserAsync({
      id: 10,
      username: 'admin'
    })
  })
  const handleClick = () => {
    getUserAsync({
      id: 20 + Math.ceil(Math.random() * 10) * Math.ceil(Math.random() * 10),
      username: 'test'
    })
    // dispatchs({
    //   // key: 'user',
    //   type: 'getUserAsync',
    //   payload: {
    //     id: 30,
    //     username: 'test2'
    //   }
    // })
  }

  return (
    <div>
      user-id: { id}
      <br />
      user-name: { username}
      <button onClick={handleClick}>修改</button>
    </div>
  )
}