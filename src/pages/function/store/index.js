import React, { Component } from 'react'
import { StoreProvider, useStateHook } from 'think-react-store';
import * as store from './stores';
import User from './user.js'


export default function (props) {
  // const [state, setstate] = useState()
  // useEffect(() => {
  // }, [])
  console.log(store)
  debugger
  return (
    <StoreProvider store={store}>
      <User />
    </StoreProvider>

  )
}