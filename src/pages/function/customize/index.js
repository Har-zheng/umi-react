import React, { useState, useEffect } from 'react';
import { useTitleHook, useHttpHook } from '@/hooks'

export default function (props) {
  const [state, setState] = useState('customize')
  console.log(state);
  const title = useTitleHook(state)
  useEffect(() => {

  }, [])

  // const [result, loading] = useHttpHook({
  //   url: '/getListsAsync',
  //   method: 'GET'
  // })
  // console.log(result, loading)
  const handleClick = () => {
   
    setState('customize cahnge123')
  }

  return (
    <div>
      <h1 onClick={handleClick}>{title}</h1>
    </div>
  )
}