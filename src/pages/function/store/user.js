import React, { useState, useEffect } from 'react';
import { useStateHook } from 'think-react-store'

export default function (props) {
  // const { state, dispatch } = useContext(StoreContext)
  const { user: { id, username, getUserAsync } } = useStateHook() //  getUserAsync
  console.log(useStateHook())

  useEffect(() => {
    getUserAsync({
      id: 10,
      username: 'admin'
    })
  }, [getUserAsync])

  return (
    <div>
      user-id: { id}
      <br />
      user-name: { username}
    </div>
  )
}