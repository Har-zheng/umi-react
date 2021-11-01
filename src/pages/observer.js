import React, { useState, useEffect } from 'react';
import { history } from 'umi'
import { useObserverHook } from '@/hooks';
export default function (props) {
  const [state, setState] = useState()
  const log = (e) => {
    console.log(e);
  }
  useObserverHook('#loading', log)

  const handlehome = () => [
    history.push('/')
  ]
  return (
    <div>
      <div onClick={handlehome}>首页</div>
      <div id='loading' style={{ width: '300px', height: '300px', background: '#666', marginTop: '1000px' }}></div>
      loading
    </div>
  )
}