import React, { Component } from 'react'
import { StoreProvider, useStateHook } from 'think-react-store';
import log from 'think-react-store/middlewares/log'
import * as store from './stores';
import User from './user.js'


export default function (props) {
  console.log(store)

  return (
    <StoreProvider store={store} middleware={[log]}>
      <User />
    </StoreProvider>
  )
}