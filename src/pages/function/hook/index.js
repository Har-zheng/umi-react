import React, { useState, useEffect,useLayoutEffect, useMemo, useCallback } from 'react';

export default function(props){
  const [count, setCount] = useState(0)
  const [text, setText] = useState('test-dom')
  // const [text, setText] = useState('')
  // 依赖项的 使用  与改变  可执行多个
  useEffect(() => {
    fetch('/api/getLists')
  }, []) // []可选

  // dom 相关操作 useLayoutEffect
  useLayoutEffect(() => {
    
    return () => {
      
    };
  }, [])

  // const handleCount =() => {
  //   setCount(count+1)
  // }
  const handleCount = useCallback(() => {
    console.log('count change');
    setCount(count+1)
  }, [count])


  const noCacheText = () => {
    console.log('text changed')
    return text
  }
  // useMemo  避免不必要的事件及 函数的重复渲染
  const memoText = useMemo(()=> {
    console.log('text changed')
    return text
  }, [text])

  return (
    <div>
      <h1 onClick={ handleCount }>count:{ count }</h1>
      <h1>text: { memoText }</h1>
    </div>
  )
}