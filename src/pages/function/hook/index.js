import React, { useState, useEffect,useLayoutEffect } from 'react';

export default function(props){
  const [count, setCount] = useState(0)

  // 依赖项的 使用  与改变
  useEffect(() => {
    fetch('/api/getLists')
  }, []) // []可选

  // dom 相关操作 useLayoutEffect
  useLayoutEffect(() => {
    
    return () => {
      
    };
  }, [])

  const handleCount =() => {
    setCount(count+1)
  }

  return (
    <div>
      <h1 onClick={ handleCount }>count:{ count }</h1>
    </div>
  )
}